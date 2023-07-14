import { useState, useEffect } from 'react'
import { IonContent, IonItem, IonList, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

import '../../pages/Home.css';
import styled from 'styled-components';
import { dailyData } from '../Monthly/CalendarList';
import { MonthDivder } from './MonthDivder';
import { DailyItemCard } from './DailyItemCard';



export const Daily = () => {
  const [items, setItems] = useState<dailyData[]>([]);

  const generateItems = () => {
    const newItems: dailyData[] = [];
    for (let i = 0; i < 50; i++) {
      newItems.push({
        emoji: "🫠",
        content: "으아앙 테스트",
        date: `2023-03-${i}`
      });
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonContent>
      <IonList>
        <MonthDivder month={"07"} year={"2023"} />
        {items.map((item, index) => (
          <DailyItemCard item={ item } key={item.date} />
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 1000);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
