import { useState } from "react";
import axios from "axios";
function Show(){
    const[res, setRes]=useState(null);
    if(res==null){

        axios.get('http://localhost:8081/showall',{

    }).then(res=>{
        console.log(res.data);
        setRes(res.data);

         })
    }

    return(
        <div>
            {JSON.stringify(res)}

        </div>
    );
} 
 export default Show;