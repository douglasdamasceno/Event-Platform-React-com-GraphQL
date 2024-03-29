import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'

type Params = {
  slug:string
}

export default function Event() {
  const {slug } = useParams<Params>(); 
   return (
    <div className='flex flex-col min-h-screen'>
        <Header />
       <main className='flex flex-1'>
         {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
          <Sidebar />
        </main>
    </div>
  )
}
