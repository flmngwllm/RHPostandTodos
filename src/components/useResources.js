import {useState, useEffect} from 'react'
import axios from 'axios'

// function for react hooks useState and useEffect
const useResources = (resource) => {
    //setting th state to an empty array
    const [resources, setResources] = useState([]);
    
    const fetchResource = async () =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
    
    }
    
    useEffect(() => {
        fetchResource(resource)
        },
        [resource]
    )
    
    return resources
    }

    export default useResources