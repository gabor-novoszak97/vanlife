import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HostVans.css"

export default function HostVans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    async function fetchUserVans() {
      await fetch("https://localhost:5001/vans/host/123").then((response) =>
        response.json().then((response) => setVans([...response]))
      );
    }
    fetchUserVans();
  }, []);

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>
            {vans.map((van) => 
              <Link
                to={`${van.id}`}
                key={van.id}
                className="host-van-link-wrapper"
              >
                <div className="host-van-single" key={van.id}>
                  <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                  <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                  </div>
                </div>
              </Link>
            )}
          </section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
