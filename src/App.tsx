import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title

      teacher{
        name
      }
    }
  }
`
function App() {
  useEffect(() => {
    client.query({
      query:GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })  
  }, [])
  
  return (
    <div>
     <h1 className='text-2xl'>Event React</h1>
    </div>
  )
}

export default App
