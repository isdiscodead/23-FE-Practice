// 월별 vs 하나씩 뷰 선택
import { createContext, useState } from "react";

type Main = {
    isMonthly: boolean
    setIsMonthly: (isMain: boolean) => void;
}

// as 연산자로 initial value 없이 사용할 수 있음 
export const MainViewContext = createContext({} as Main); // 인자 = 초기값