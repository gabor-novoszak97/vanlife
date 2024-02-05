import { useOutletContext } from "react-router-dom"
import "./VanPhotos.css"

export default function VanPhotos(){
    const context = useOutletContext()
    return <img src={context.imageUrl} className="host-van-detail-image" />
}