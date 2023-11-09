import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Reviews from '../components/Reviews'
import Dashboard from '../components/Dashboard'
import AverageRating from '../components/AverageRating'
import SentimentAnalysis from '../components/SentimentAnalysis'
import WebsiteVisitors from '../components/WebsiteVisitors'


function App() {
  const [count, setCount] = useState(0)

  return (
       
    <div className="grid-container">
        <div class="item1">
          <Dashboard/>
        </div>
       <div class="grid-item">
         <Reviews />
       </div>
       <div class="grid-item">
         <AverageRating />
        </div>  
       <div class="grid-item">
        <SentimentAnalysis />

       </div>
        <div class="item9">
          <WebsiteVisitors />
          </div> 
        {/* <div class="item8">6</div>  */}
        {/* <div class="grid-item">7</div>
        <div class="grid-item">8</div> */}
            
</div>
    
  )
}

export default App
