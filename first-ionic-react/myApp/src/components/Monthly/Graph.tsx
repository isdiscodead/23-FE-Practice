import { useEffect } from 'react';
import GraphItem from './GraphItem'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';


function Graph() {
  const dispatch = useDispatch();

  const { today, month, year } = useSelector((state: RootState) => {
      return state.date;
  });

  const nowMonthNum = new Date().getMonth()+1;
  const nowMonth = nowMonthNum > 9 ? nowMonthNum.toString() : "0" + nowMonthNum;

  const dataList = useSelector((state: RootState) => {
      return state.monthlyDataList;
  });

  useEffect(() => {
  
    
  }, []);
  

  return (
    <>
      <GraphItem />
      <GraphItem />
      <GraphItem />
      <GraphItem />
      <GraphItem />
    </>
  )
}

export default Graph
