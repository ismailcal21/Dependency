import React, { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [posts, setPosts] = useState([])
  const [changePage,setChangePage]=useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(response => {
        setPosts(response)
        console.log(response)
        console.log(posts.data.length)
      })
      
      .catch(err => {
      console.log("err" , err)
    })
  }, [changePage])
  
   if (posts === null) {
     return (
       <div>Loading...</div>
     )
   }

  return (
    <div >
      {posts && JSON.stringify(posts)}
      {
        changePage <= 1 ? (
          <>
      <button style={{display:"none"}} onClick={()=>setChangePage(changePage=>changePage-1)}>Onceki</button>
          
          </>
        ) : (
            <>
      <button onClick={()=>setChangePage(changePage=>changePage-1)}>Onceki</button>
            
            </>
        )
      }
      {
        changePage >= posts.length ? (
          <>
      <button style={{display:"none"}} onClick={()=>setChangePage(changePage=>changePage+1)}>Sonraki</button>
          
          </>
        ) : (
            <>
      <button onClick={()=>setChangePage(changePage=>changePage+1)}>Sonraki</button>
            
            </>
        )
      }
      
      App
    </div>
  );
}

export default App;
