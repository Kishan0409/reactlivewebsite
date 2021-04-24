import  React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const Datafetching = () => {

     const[data,setData] = useState([])
     const[id,setId] = useState(1)
     const[buttonId,setbuttonId] = useState(1)
    

     useEffect(()=> {

        async function api() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
            console.log(res.data)
            setData(res.data)
            
        }
        api();



     },[buttonId])


      const dataHandler = () => {
        setbuttonId(id)
      }
        
    return (
        <>
         <div>
            <input type="text" value={id} onChange={(e)=> {
                setId(e.target.value)
            }} />
            <button type="button"  onClick={dataHandler}>Fetch Data</button>
          
         </div>
         <div>{data.title}</div>
             </>
    )
}
                

export default Datafetching;