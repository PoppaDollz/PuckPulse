import { useState, useEffect } from 'react'
import './App.css'
import Matchup from "./Matchup"

function App() {
  
  const [schedule, setSchedule] = useState(null)

  useEffect(()=>{
    const fetchSchedule = async () => {
      const response = await fetch("/api/schedule")
      const data = await response.json()
      let gameComponents = data.gameWeek[0].games.map((game)=>{
        return <Matchup {...game} />
      })
      console.log(data)
      setSchedule(gameComponents)
    }
    fetchSchedule()
  }, [])


  return (
    <>
      {schedule}
    </>
  )
}

export default App
