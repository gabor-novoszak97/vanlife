import "./ClientVan.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ClientVan() {
  const id = useParams().id;
  const queryString = useLocation().state.queryString;
  const vanType = queryString.includes(useLocation().state.type) ? useLocation().state.type : null

  const [van, setVan] = useState(null | {});
  useEffect(() => {
    async function fetchVan() {
      await fetch(`https://localhost:5001/vans/${id}`)
        .then((res) => res.json())
        .then((res) => setVan({ ...res }));
    }
    fetchVan();
  }, []);

  return (
    <div className="van-detail-container">
      <Link to={`..${queryString}`} relative="path" className="back-button">
        &larr; <span>Back to {vanType ? vanType : "all"} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link--btn">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
