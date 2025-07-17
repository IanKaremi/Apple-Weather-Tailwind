import { hourlyData } from "../hourlyData"
export default function Hourly(){
    return(
        <div className="mx-2 flex gap-2 justify-between">
            {hourlyData.map(({time, emoji, rain_chance, tempStatus})=>
            <div className="flex flex-col justify-between gap-1 -mb-12 h-[110px] w-[60px] items-center">
                <div>{time}</div>
                <div>{emoji}</div>
                {rain_chance!=0 && <div className="text-sky-300">{rain_chance}%</div>}
                <div className="h-[25px] w-[25px]">{tempStatus}</div>
            </div>
            
            )}
        </div>
    )
}