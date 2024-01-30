import { useState } from "react"
import "./location.css"
import Images from "./Images"
import searchIcon from "./search.svg"

export default function Location(props) {
    let [value, setValue] = useState("")
    const HandleChange = (event) => {
        setValue(event.target.value)
        console.log(value,event.target.value);
        //Images.some((value)=>{});
        const newImageArray=Images.filter((item)=>item.name.toLocaleLowerCase().includes(event.target.value))
        //const finalArray=newImageArray.map((location_id)=>location_id.id);
        console.log(newImageArray);
        props.onFinalArrayChange(newImageArray)

    }

    return (
        <>
            <h1 className="head">Locations</h1>
            <div className="search_container">
            <input placeholder="Search" className="search_box" type="search" onChange={HandleChange} id="search" />
            <img className="search_image" src={searchIcon} alt="s"/>
            </div>
        </>
    )

}