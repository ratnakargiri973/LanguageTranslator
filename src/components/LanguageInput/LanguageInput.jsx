import React from "react";

function LanguageInput({label,languages,onInput}){
    return(
        <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
            <label htmlFor="">{label}:</label>
            <select name="" id="" onChange={(e)=>{onInput(e.target.value)}}
                     style={{border:"none", 
                        width:"10rem",
                        padding:"5px", 
                        backgroundColor:"lightGray", 
                        height:"3rem" , 
                        borderRadius:"10px", 
                        color:"brown", 
                        outline:"none"}}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
             ) )}
            </select>
        </div>
        </>
    )
}
export default LanguageInput;