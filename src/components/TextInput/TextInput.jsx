import React from "react";
function TextInput({label,onInput}){
    return(
        <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
            <label htmlFor="">{label}:</label>
            <textarea  style={{border:"none", 
                                width:"30rem",
                                padding:"5px", 
                                backgroundColor:"lightGray", 
                                height:"5rem" , 
                                borderRadius:"10px", 
                                color:"brown", 
                                outline:"none"}} 
            onChange={(e)=>{onInput(e.target.value)}}/>
        </div>
        </>
    )
}
 export default TextInput;