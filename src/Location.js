import { useState } from "react"
import "./location.css"

export default Location=()=>{
    let [value, setValue]=useState("")
    const HandleChange=(vsl)=>{
        setValue(vsl.target.value)
        //console.log(value)
    }

    return(
        <>
            <h1 className="head">Locations</h1>
            <label className="Label" for="search">Search: </label>
            <input type="text" onChange={HandleChange} id="search"/>
        </>
    )

}