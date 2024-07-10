"use client"

import { useContext } from "react"
import { schemContext } from "../../providers/schemesProvider"



export default function TestScheme() {
    const { schemeAPIData, updateScheme } = useContext(schemContext)
    return <><div>{schemeAPIData.allSchemes[0].fields.schemeName}</div>
    </>
}