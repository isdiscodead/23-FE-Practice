import React from 'react'
import Dates from './Dates'
import Graph from './Graph'
import Calendar from './Calendar'

export default function Monthly() {
  // api -> 월별 데이터 
  // data fetch해와서 ... 원래 여기서 진행
  // redux toolkit 사용 ... 
  return (
    <>
        <Dates />
        <Calendar />
        <Graph />
    </>
  )
}
