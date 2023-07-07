import { IonMenu, IonToolbar, IonButtons, IonBackButton, IonContent, IonToggle, IonTitle } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { styled } from 'styled-components'

const TopBottomContainer = styled.div`  
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

function Menu() {
    const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <IonMenu contentId="main-content">
        <IonToolbar color={'secondary'}>
            <IonTitle>⚙️ 환경 설정</IonTitle>
        </IonToolbar>

        <IonContent class="ion-padding">
            <TopBottomContainer> 
                <div>
                    <MenuItem title="🌕 화면 모드" href=''>
                        <IonToggle checked={isDarkMode} 
                            onIonChange={() => setIsDarkMode(prev => !prev)} 
                            labelPlacement="end" color="">Dark Theme</IonToggle>
                    </MenuItem>
                    <MenuItem  title="🔐 로그인" href='' />
                    <MenuItem title="✈️ 고객센터 페이지" href='' />
                    <MenuItem title="📝 앱 버전 : 1.0.0" href='' />
                </div>
                
                <p style={{ color: 'gray', textAlign: 'center' }}>
                    isdiscodead@korea.ac.kr
                    <br />
                    @DayMoji 데이모지
                </p>
            </TopBottomContainer>   
        </IonContent>
    </IonMenu>
  )
}

export default Menu