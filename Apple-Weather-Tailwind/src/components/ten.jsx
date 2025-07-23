import { tenData } from "../tenData"
export default function Ten(){
    const emoji ={
        Cloudy: '☁️',
        Rainy:'🌧️',
        Stormy:'⛈️',
        Sunny:'☀️',
        Snowy:'❄️',

    }
    return(
    <div className="mx-2 h-[470px] flex flex-col">
        {tenData.map(({day,state,min,max,rain_chance})=>
        <>
        <hr className='bg-white/20 m-0 p-0'/>
        <div className="flex justify-between items-center-safe">
            <div className="basis-3/10">{day}</div>
            <div className="basis-2/10 grid grid-rows-[1fr_auto] h-12">
                <div className="self-center">{emoji[state]}</div>
                {rain_chance!=null ? <div className="text-sky-300">{rain_chance}%</div> : ""}
            </div>
            
            <div className="basis-3/10">{min}</div>
            <div className="basis-2/10 text-right">{max}</div>
        </div>
        </>
        )}
    </div>
    )
}