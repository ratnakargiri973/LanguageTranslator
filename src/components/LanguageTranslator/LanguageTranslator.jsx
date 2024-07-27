import React, { useState,useEffect } from "react";
import LanguageInput from "../LanguageInput/LanguageInput";
import TextInput from "../TextInput/TextInput";
import axios from 'axios'
import './LanguageTranslator.css'

function LanguageTranslator(){
    const [languages, setLanguages] = useState([]);

    const [sourceLanguage, setSourceLanguage] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [inputText, setInputText] = useState('');

    const [translatedText, setTranslatedText] = useState('')

    useEffect(()=>{
      fetchLanguages();
    },[])
    
     
     async function fetchLanguages(){
        const options = {
            method: 'GET',
            url: 'https://text-translator2.p.rapidapi.com/getLanguages',
            headers: {
              'x-rapidapi-key': 'cf9275ee7fmshea5f9ffbf297f74p199e8bjsn95443200e374',
              'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setLanguages(response.data.data.languages)
          } catch (error) {
              console.error(error);
          }
    }


    async function translate(){
        const data = new FormData();
data.append('source_language', sourceLanguage);
data.append('target_language', targetLanguage);
data.append('text', inputText);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'x-rapidapi-key': 'cf9275ee7fmshea5f9ffbf297f74p199e8bjsn95443200e374',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
  },
  data: data
};

try {
	const response = await axios.request(options);
	setTranslatedText(response.data.data.translatedText);
} catch (error) {
	console.error(error);
}
    }
    return(
        <>
        <div className="mainBody">
            <LanguageInput label="Source Language" languages={languages} onInput={(value)=>setSourceLanguage(value)}/>
            <LanguageInput label="Target Language" languages={languages} onInput={(value)=>setTargetLanguage(value)}/>
            <TextInput label="Text Input" onInput={(value)=>setInputText(value)}/>
            <button  style={{
              border:"none", outline:"none",
              padding:"7px 10px",
              borderRadius:"5px",
              backgroundColor:"green",
              fontWeight:"bold",
              color:"white"
            }} onClick={()=>translate()}>Translate</button>
            <div style={{color:"brown" , fontWeight:"bold"}}>{translatedText ? <p>{translatedText}</p>:null}</div>
        </div>
        </>
    )
}
export default LanguageTranslator;