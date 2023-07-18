import { IonMenu, IonToolbar, IonButtons, IonBackButton, IonContent, IonToggle, IonTitle } from '@ionic/react'
import React, { useEffect, useState, useContext } from 'react'
import MenuItem from './MenuItem'
import { styled } from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeContext'

const TopBottomContainer = styled.div`  
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

function Menu() {

    // const [isDark, setIsDark] = useState(false);
    const {isDark, setMode} = useContext(ThemeContext);

    const toggleDarkModeHandler = () => {
        setMode( ! isDark );
        // console.log("is dark mode? ", isDark)
    }

    return (
        <IonMenu contentId="main-content">
            <IonToolbar color={'secondary'}>
                <IonTitle>⚙️ 환경 설정</IonTitle>
            </IonToolbar>

            <IonContent class="ion-padding" style={{ background: isDark ? "#333333" : "white" }}>
                <TopBottomContainer> 
                    <div>
                        <MenuItem title="🌕 화면 모드" href=''>
                            <IonToggle checked={ isDark ? true : false } 
                                onIonChange={ toggleDarkModeHandler } 
                                labelPlacement="end" color="primary">Dark Theme</IonToggle>
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