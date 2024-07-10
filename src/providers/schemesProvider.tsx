
"use client";
import { createContext, useState } from "react";
import { schemeAPIResponse } from '../../data'


export const schemContext = createContext({
    schemeAPIData: schemeAPIResponse,
    updateScheme: (e:any) => {}
})

export function SchemeProvider({children}: any) {
    const [ schemeAPIData, setSchemeAPIData ] = useState(schemeAPIResponse);
    const updateScheme = (newScheme: any) => {
        // schemeAPIData.allSchemes.push(newScheme)
        setSchemeAPIData(newScheme);
      };
    return <schemContext.Provider value={{ schemeAPIData, updateScheme}}>
        {children}
    </schemContext.Provider>
}