import { tenData } from "../tenData"
export default function Ten(){
    return(
    <div className="mx-2">
        {tenData.map(({day})=><p>{day}</p>)}
    </div>
    )
}