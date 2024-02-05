import HostVanNavigation from "../../../../components/Layout/Host_Layout/HostVanNavigation/HostVanNavigation";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HostVan.css";
import { Link } from "react-router-dom";

export default function HostVan() {
  const id = useParams().id;
  const [van, setVan] = useState({});
  useEffect(() => {
    async function fetchUserVan() {
      await fetch(`https://localhost:5001/vans/${id}`).then((response) =>
        response.json().then((response) => setVan(response))
      );
    }
    fetchUserVan();
  }, []);
  return (
    <section className="hostvan--section">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <HostVanNavigation 
        van={van}/>
      </div>
    </section>
  );
}
