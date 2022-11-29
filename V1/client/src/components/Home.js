import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'
import "./  home.css"

const Home = () => {
    const [roomCode , setRoomCode] = useState('');
  return (
   <div className='container'>
    <p>Once You Play Pong , It's Hard to Go Back ! </p>
    <div className='homepage-form'>
    <div className='join-room'>
            {/*Homepage code genration for room  */}
        <input type='text' placeholder="Room-Code" onChange={(e)=>setRoomCode(e.target.value)} /> 
        <Link to={`/play?roomCode=${roomCode}`}><button className="join-room-btn">JOIN GAME</button></Link>
    </div>
    <h1>OR</h1>
    <div className='create-room'>
            {/* creating room link comes here  */}
        <Link to={`/play?roomCode=${randomCodeGenerator(4)}`}><button className='create-room-btn'>CREATE GAME</button></Link>
    </div>
    </div>
   </div>
  )
}

export default Home