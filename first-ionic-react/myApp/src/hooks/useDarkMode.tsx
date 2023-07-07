import React from 'react'
import { useState, useEffect } from 'react';


export default function useDarkMode(initValue: boolean) {
    const [isDark, setIsDark] = useState<boolean>(initValue);
  
    const setMode = (mode: boolean) => {
      // local storage 접근 시 다른 로직을 추가적으로 이용하려면 따로 빼서 사용하는 게 좋음 
      mode ? window.localStorage.setItem("isDark", true.toString()) : window.localStorage.setItem("isDark", false.toString()) 
      setIsDark(mode);
      document.body.classList.toggle("dark");
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('isDark');

        if (localTheme !== null) {
          if (localTheme === 'true') { // to Dark Mode 
            document.body.classList.contains("dark") ? "" : document.body.classList.toggle("dark");
            setIsDark(true);

          } else {
            setIsDark(false);
            document.body.classList.contains("dark") ? document.body.classList.toggle("dark") : "";
          }
        }
      }, []);

    return  { isDark, setMode }
}
