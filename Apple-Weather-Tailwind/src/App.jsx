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
                <div className='bg-black m-2 rounded-lg h-87/100'></div>
              </div>
              <div className="T col-span-2 row-span-4 bg-black/20  rounded-xl h-[510px]">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>10-DAY-FORECAST</div>
                
                <Ten/>
              </div>
              <div className="U col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>UV INDEX</div>
                <p className='text-4xl text-whit mx-2 mt-2'>6</p>
                <div className='text-xl text-white mx-2'>High</div>
                <p className='text-xs text-white mx-2 mt-auto mb-2 font-bold'>Use sun protection until 5PM.</p>
              </div>
              <div className="S col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>SUNSET</div>
                <p className='T-desc m-2 mb-0 text-4xl text-white font-light'>6:38 PM</p>  
                <div className='text-xs mt-auto ml-2 mb-[10px] font-bold'>Sunrise: 6:35AM</div>
              </div>
              <div className="W col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>WIND</div>
                <p className='text-4xl text-whit mx-2 mt-2'>3 km\h</p>
                <div className='text-xl text-white mx-2'>ESE</div>
                <p className='text-xs text-white mx-2 mt-auto mb-2 font-bold'>Gusts 19km\h ESE.</p>
              </div>
              <div className="L col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col h-full">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>WAXING GIBBOUS</div>
                <div className='bg-white/40 rounded-full my-2 mx-auto h-[100px] w-[100px]'></div>
                <div className='text-xs mt-auto ml-2 mb-[10px] font-bold'> Next Moonset: 1:09AM</div>
              </div>
              <div className="P col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>PRECIPITATION</div>
                <p className='text-4xl text-whit mx-2 mt-2'>3 mm</p>
                <div className='text-xl text-white mx-2'>Today</div>
                <p className='text-xs text-white mx-2 mt-auto mb-2 font-bold'>2mm expected tommorrow.</p>
              </div>
             
              <div className="F col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>FEELS LIKE</div>
                <p className='T-desc m-2 mb-0 text-4xl text-white font-light'>22°C</p>
                <p className='T-desc m-2 mb-2 text-xs font-bold text-white mt-auto'>Similar to the actual temperature.</p>
              </div>
              <div className="Y col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>HUMIDITY</div>
                <p className='T-desc m-2 mb-0 text-4xl text-white font-light'>60%</p>
                <p className='T-desc m-2 mb-2 text-xs font-bold text-white mt-auto'>The dew point is 11°C right now.</p>
              </div>
              <div className="V col-span-1 row-span-1 bg-black/20  rounded-xl flex flex-col">
                <div className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>VISIBILITY</div>
                <p className='T-desc m-2 mb-0 text-4xl text-white font-light'>28 km</p>  
                <p className='T-desc m-2 mb-2 text-xs font-bold text-white mt-auto'>Perfectly clear view.</p>
              </div>
              <div className="R col-span-1 row-span-1 bg-black/20  rounded-xl flex-col flex">
                <p className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>PRESSURE</p>
                <p className='T-desc m-2 mb-0 text-4xl text-white font-light'>1019 hPa</p>  
                <p className='T-desc m-2 mb-2 text-xs font-bold text-white text-nowrap mt-auto'>Average</p>
              </div>
              <div className="A col-span-1 row-span-1 bg-black/20  rounded-xl">
                <p className='T-desc m-2 mb-0 text-xs text-sky-100 font-extrabold'>AVERAGES</p>
                <p className='text-white text-4xl m-2 mb-0'>+1°</p>
                <div className='text-white text-xs font-bold mx-2'>above average</div><div className='text-white text-xs font-bold mx-2'> daily high</div>
                <div className="A-container mx-2 text-xs grid grid-cols-3 mt-4">
                  
                    <div className='text-sky-100 col-span-2'>Today</div>
                    <div className='text-white font-bold col-span-1 text-right'>H:23°</div>
                  
                  
                    <div className='text-sky-100 col-span-2'>Average</div>
                    <div className='text-white font-bold col-span-1 text-right'>H:22°</div>
                  
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
