import React,{ useState } from 'react'

const App = () => {
    //useState hook
    const [resource, setResource] = useState('posts')

        return (
           <div>
               <div>
                   <button onClick={() => setResource('posts')}>Post</button>
                   <button onClick={() => setResource('Todos')}>ToDos</button>
               </div>
               {resource}
           </div> 
     )
    
}

export default App;