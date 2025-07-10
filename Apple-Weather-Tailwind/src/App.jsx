import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
         <div class="Head">
              <p>MY LOCATION</p>
              <p class="location">Nairobi</p>
              <p class="temperature">22°</p>
              <p class="condition">Mostly Cloudy</p>
              <p class="high-low">H: 22°C L: 15°C</p>
            </div>
      
            <div class="Applets">
      
              <div class="H">
                <div class="H-desc">Cloudy conditions expected for the rest of the day. Wind gusts are upto 22km/h.</div>
                <Hourly />
      
              </div>
              <div class="M">
                <div class="M-desc">☂️ PRECIPITATION</div>
                <Map />
              
              </div>
              <div class="T">
                <div className='T-desc'>🗓️ 10-DAY-FORECAST</div>
                <Ten />
              </div>
              <div class="U">
                <div>☀️ UV Index</div>
              </div>
              <div class="S">
                <div>🌅 SUNSET</div>
                <p>6:38 PM</p>  
                <div>Sunrise: 6:35AM</div>
              </div>
              <div class="W">
                <div>💨 WIND</div>
              </div>
              <div class="L">
                <div>🌕 WAXING GIBBOUS</div>
                <div> Next Moonset: 1:09AM</div>
              </div>
              <div class="P">
                <div>🌧️ PRECIPITATION</div>
                <p>3 mm</p>
                <div>Today</div>
                <p>2mm expected tommorrow.</p>
              </div>
              <div class="F">
                <div>🌡️ FEELS LIKE</div>
                <p>22°C</p>
                <p>Similar to the actual temperature.</p>
              </div>
              <div class="Y">
                <div>💧 HUMIDITY</div>
                <p>60%</p>
                <p>The dew point is 11°C right now.</p>
              </div>
              <div class="V">
                <div>👁️ VISIBILITY</div>
                <p>28 km</p>  
                <p>Perfectly clear view.</p>
              </div>
              <div class="R">
                🌬️ Pressure
              </div>
              <div class="A">
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
              </div>
      
    </>
  )
}

export default App
