import { useLoaderData } from "react-router-dom"
import './App.css'
import CoffeCard from "./components/CoffeCard"
import { useState } from "react"

function App() {
  const coffeData = useLoaderData()
  const [coffeInfo, setCoffeInfo] = useState(coffeData)
  return (
    <div className="m-20">

      <h1 className='text-6xl  text-purple-600'>Coffe Available : {coffeInfo.length}</h1>
      <div className="grid md:grid-cols-2">
        {
          coffeInfo.map(coffe => <CoffeCard
            key={coffe._id} coffe={coffe} coffeInfo={coffeInfo} setCoffeInfo={setCoffeInfo}
          ></CoffeCard>)
        }
      </div>

    </div>
  )
}

export default App
