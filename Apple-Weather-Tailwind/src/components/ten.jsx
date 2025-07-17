import { tenData } from "../tenData"
export default function Ten(){
    return(
    <div >
        {tenData.map(({day})=><p>{day}</p>)}
    </div>
    )
}