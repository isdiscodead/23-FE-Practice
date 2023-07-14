import { useEffect } from 'react';
import GraphItem from './GraphItem'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setMonthlyDataStat } from '../../store/monthlyDataStatSlice';


function Graph() {
  const dispatch = useDispatch();

  const { today, month, year } = useSelector((state: RootState) => {
      return state.date;
  });

  useEffect(() => {
    fetch('../src/data.json')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // 카운트 세기 
      let statArr = new Array(json.length);
      for ( let i=0 ; i < json.length ; i++ ) {
        let cnt = Array(json)[0].filter((value: any, index: number, array: any[]) => {
          return json[i].emoji === value.emoji
        }).length;
        statArr[i] = { emoji: json[i].emoji, cnt: cnt };
      }

      // 정렬
      statArr = statArr.sort((a, b) => (b.cnt - a.cnt)); 

      // 중복 제거
      statArr = statArr.filter((v, i, a) => {
        return ( i < statArr.length-1 ) ? a[i+1].emoji !== v.emoji : false;
      }) 
      
      dispatch(setMonthlyDataStat(statArr));
    });
  }, [month]);
  

  return (
    <>
      <GraphItem idx={0} />
      <GraphItem idx={1} />
      <GraphItem idx={2} />
      <GraphItem idx={3} />
      <GraphItem idx={4} />
    </>
  )
}

export default Graph
