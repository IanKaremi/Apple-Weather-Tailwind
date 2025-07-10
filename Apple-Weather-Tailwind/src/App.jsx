import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="Head">
              <p>MY LOCATION</p>
              <p className="location">Nairobi</p>
              <p className="temperature">22°</p>
              <p className="condition">Mostly Cloudy</p>
              <p className="high-low">H: 22°C L: 15°C</p>
      </div>
      
            <main className="Applets grid grid-rows-4 grid-cols-6 gap-4 ">

              <div className="H col-span-4 row-span-1 bg-white/20  rounded-xl">
                <div className="H-desc">Cloudy conditions expected for the rest of the day. Wind gusts are upto 22km/h.</div>


              </div>
              <div className="M col-span-2 row-span-2 bg-white/20  rounded-xl">
                <div className="M-desc">☂️ PRECIPITATION</div>


              </div>
              <div className="T col-span-2 row-span-4 bg-white/20  rounded-xl box-border">
                <div className='T-desc'>🗓️ 10-DAY-FORECAST</div>
              </div>
              <div className="U bg-white/20  rounded-xl">
                <div>☀️ UV Index</div>
              </div>
              <div className="S bg-white/20  rounded-xl">
                <div>🌅 SUNSET</div>
                <p>6:38 PM</p>  
                <div>Sunrise: 6:35AM</div>
              </div>
              <div className="W bg-white/20  rounded-xl">
                <div>💨 WIND</div>
              </div>
              <div className="L bg-white/20  rounded-xl">
                <div>🌕 WAXING GIBBOUS</div>
                <div> Next Moonset: 1:09AM</div>
              </div>
              <div className="P bg-white/20  rounded-xl">
                <div>🌧️ PRECIPITATION</div>
                <p>3 mm</p>
                <div>Today</div>
                <p>2mm expected tommorrow.</p>
              </div>
              <div className="F bg-white/20  rounded-xl">
                <div>🌡️ FEELS LIKE</div>
                <p>22°C</p>
                <p>Similar to the actual temperature.</p>
              </div>
              <div className="Y bg-white/20  rounded-xl">
                <div>💧 HUMIDITY</div>
                <p>60%</p>
                <p>The dew point is 11°C right now.</p>
              </div>
              <div className="V bg-white/20  rounded-xl">
                <div>👁️ VISIBILITY</div>
                <p>28 km</p>  
                <p>Perfectly clear view.</p>
              </div>
              <div className="R bg-white/20  rounded-xl">
                🌬️ Pressure
              </div>
              <div className="A bg-white/20  rounded-xl">
                <p>📈 AVERAGES</p>
                <p>+1°</p>
                <div>above average</div><div> daily high</div>
                <div className="A-container">
                  
                    <div>Today</div>
                    <div>H:23°</div>
                  
                  
                    <div>Average</div>
                    <div>H:22°</div>
                  
                </div>
      
                 
      
                </div>
              </main>
      
    </>
  )
}

export default App
