import React,{ useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
    //useState hook
    const [resource, setResource] = useState('posts')

        return (
           <div>
               <UserList />
               <div>
                   <button onClick={() => setResource('posts')}>Post</button>
                   <button onClick={() => setResource('Todos')}>ToDos</button>
               </div>
               <ResourceList resource={resource} />
           </div> 
     )
    
}

export default App;