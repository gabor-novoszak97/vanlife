import "./VanPrice.css"
import { useOutletContext } from "react-router-dom"

export default function VanPrice(){
    const context = useOutletContext()
    return <h3 className="host-van-price">${context.price}<span>/day</span></h3>
}