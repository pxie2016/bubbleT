import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect() {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((current)=> --current)
        }, 1000)
        count ===0&&navigate("/loginpage");
        return ()=>clearInterval(interval)
    }, [count, navigate])
  return (
    <h4>Please login first! Redirecting you in {count} seconds!</h4>
  )
}

export default Redirect