import "./Van_Card.css";
import { Link, useLocation } from "react-router-dom";

export default function Van_Card(props) {
  return (
    <Link to={`${props.id}`} state={{'queryString': useLocation().search, 'type': props.type}}>
      <div className="van-tile">
        <img src={props.imageUrl} />
        <div className="van-info">
          <h3>{props.name}</h3>
          <p>
            ${props.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${props.type} selected`}>{props.type}</i>
      </div>
    </Link>
  );
}
