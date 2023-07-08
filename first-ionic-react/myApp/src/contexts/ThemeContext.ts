import React, { createContext, useState } from "react";

type Theme = {
    isDark: boolean
    setMode: (isDark: boolean) => void;
}

// as 연산자로 initial value 없이 사용할 수 있음 
export const ThemeContext = createContext({} as Theme); // 인자 = 초기값


// API 호출 등 data에 대해서 복잡한 로직이 필요할 경우 Provider도 작성해서 export하여 사용하는 것이 좋음 ?? 
/* 
export const ThemeProvider = (children: React.ReactNode ) => {
    // logics & states ... 
    
    return (
        <ThemeContext.Provider value={...}>{ children }</ThemeContext.Provider>
    )
}
*/