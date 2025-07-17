import React from 'react'
import Hourly from './components/hourly'
import Ten from './components/ten'
import './App.css'

function App() {
  

  return (
    <>
    <div className="basis-1/5"></div>
    <main className= "basis-3/5 min-w-[900px] max-w-[1200px] h-full flex flex-col">
      <div className='basis-2/20'></div>
      
      <div className="Head  basis-4/20 mb-8 mt-8">
              <p className='text-xs'>MY LOCATION</p>
              <p className="location text-3xl">Nairobi</p>
              <p className="temperature text-7xl font-thin inline"> 22</p><div className='inline text-7xl font-thin'>°</div>
              <p className="condition font-bold">Mostly Cloudy</p>
              <p className="high-low text-sm">H: 22°C L: 15°C</p>
      </div>
      <div className=' basis-11/20 max-h-[900px]'>
        <div className="Applets grid grid-rows-4 grid-cols-6 gap-4 mb-4 h-[700px] w-[1000px] text-left">

              <div className="H col-span-4 row-span-1 bg-black/20  rounded-xl">
                <div className="H-desc m-2 text-xs font-bold">Cloudy conditions expected for the rest of the day. Wind gusts are upto 22km/h.</div>
                <hr className='ml-2 bg-white/20'/>
                <Hourly/>


              </div>
              <div className="M col-span-2 row-span-2 bg-black/20  rounded-xl ">
                <div className="M-desc m-2 text-xs text-sky-100 font-extrabold">PRECIPITATION</div>
                <div className='bg-black m-2 rounded-lg h-85/100'></div>
              </div>
              <div className="T col-span-2 row-span-4 bg-black/20  rounded-xl h-[510px]">
                <div className='T-desc m-2 text-xs text-sky-100 font-extrabold'>10-DAY-FORECAST</div>
                <hr className='mx-2 bg-white/20'/>
                <Ten/>
              </div>
              <div className="U col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>UV INDEX</div>
              </div>
              <div className="S col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>SUNSET</div>
                <p>6:38 PM</p>  
                <div>Sunrise: 6:35AM</div>
              </div>
              <div className="W col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>WIND</div>
              </div>
              <div className="L col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col h-full">
                <div className='text-xs  mt-[10px] ml-[10px]'>WAXING GIBBOUS</div>
                <div className='text-xs mt-auto ml-[10px] mb-[10px]'> Next Moonset: 1:09AM</div>
              </div>
              <div className="P col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div className='ml-2'>PRECIPITATION</div>
                <p>3 mm</p>
                <div>Today</div>
                <p>2mm expected tommorrow.</p>
              </div>
              <div className="F col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>FEELS LIKE</div>
                <p>22°C</p>
                <p>Similar to the actual temperature.</p>
              </div>
              <div className="Y col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>HUMIDITY</div>
                <p>60%</p>
                <p>The dew point is 11°C right now.</p>
              </div>
              <div className="V col-span-1 row-span-1 bg-black/20  rounded-xl">
                <div>VISIBILITY</div>
                <p>28 km</p>  
                <p>Perfectly clear view.</p>
              </div>
              <div className="R col-span-1 row-span-1 bg-black/20  rounded-xl">
                Pressure
              </div>
              <div className="A col-span-1 row-span-1 bg-black/20  rounded-xl">
                <p>AVERAGES</p>
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
      </div>
      <div className='basis-3/20'></div>
    </main>
    <div className="basis-1/5"></div>
    </>
  )
}

export default App
