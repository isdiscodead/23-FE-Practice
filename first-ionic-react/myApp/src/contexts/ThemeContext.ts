import { createContext, useState } from "react";

type theme = {
    isDark: boolean
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext(null); // 인자 = 초기값