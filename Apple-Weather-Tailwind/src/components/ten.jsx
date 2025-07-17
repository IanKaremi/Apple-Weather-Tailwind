import { tenData } from "../tenData"
export default function Ten(){
    return(
    <div className="mx-2 h-[470px] flex justify-evenly flex-col">
        {tenData.map(({day,state,min,max,rain_chance})=>
        <>
        <hr className='bg-white/20 m-0 p-0'/>
        <div className="flex justify-between">
            <div className="basis-3/10">{day}</div>
            <div className="basis-2/10 flex flex-col items-center-safe">
                <div>{state}</div>
                {rain_chance!=null ? <div className="text-sky-300">{rain_chance}%</div> : "ㅤ"}
            </div>
            
            <div className="basis-3/10">{min}</div>
            <div className="basis-2/10 text-right">{max}</div>
        </div>
        </>
        )}
    </div>
    )
}