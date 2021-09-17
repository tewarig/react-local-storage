import { useState,useEffect } from "react";

const  FormHook = (key,data)=> {

    const itemName = key;
    const [ value,setValue] = useState(()=>{
    const localValue = localStorage.getItem(itemName);
    if(localValue != null){
        return JSON.parse(localValue);
    }
    if(typeof data === "function"){
        return data();
    }else{
        return data;
    }
    });


    useEffect(
        ()=>{
            localStorage.setItem(itemName,JSON.stringify(value));        
    },[itemName,value])

   return [value,setValue];
}

export default FormHook;