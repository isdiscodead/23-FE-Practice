import React from 'react'
import { styled } from 'styled-components'
import { useIonModal } from '@ionic/react';
import { AddModal } from '../Add/AddModal';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

import { dailyData } from "./CalendarList";

import { useDispatch } from 'react-redux';
import { setSelectedDate } from '../../store/selectedDateSlice';

const ItemBox = styled.button`
  border: 1px solid #C4C4C4;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  margin: 15px 0px;
  font-size: 20px;
`

function CalendarItem(props: { data: dailyData, isValidDate: boolean, isToday: boolean }) {

  const dispatch = useDispatch();

  function openModal() {
    const [present, dismiss] = useIonModal(AddModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
    });

    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
      },
    });
  }

  return (
    <div>
        <ItemBox onClick={() => {
          // 해당 날짜로 selectedDate 변경
          dispatch(setSelectedDate({ value : props.data.date }));
          // 모달 열기
          document.getElementById("example-modal")?.showPopover();
        }} 
          style={ props.isValidDate ? ( props.isToday ? { backgroundColor: "#C4C4C480" } : { backgroundColor: "#C4C4C430" }) : { display: "none" }} >
          { props.data ? props.data.emoji : "" }
        </ItemBox>
    </div>
  )
}

export default CalendarItem