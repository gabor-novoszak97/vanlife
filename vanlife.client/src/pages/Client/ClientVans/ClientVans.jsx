import "./ClientVans.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van_Card from "../../../components/Van_Card/Van_Card";
import { generateURLsearchParams } from "../../../helper-functions";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.has("type") && searchParams.get("type"))

  useEffect(() => {
    async function fetchVans() {
      await fetch("https://localhost:5001/vans/client").then((response) =>
        response.json().then((response) => setVans([...response]))
      );
    }
    fetchVans();
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div>
        <button className={`van-type btn-simple ${searchParams.get("type") === "simple" && 'btn-simple-selected'}`} onClick={() => setSearchParams((prevParams) => generateURLsearchParams("type", "simple", prevParams))}>Simple</button>
        <button className={`van-type btn-rugged ${searchParams.get("type") === "rugged" && 'btn-rugged-selected'}`} onClick={() => setSearchParams((prevParams) => generateURLsearchParams("type", "rugged", prevParams))}>Rugged</button>
        <button className={`van-type btn-luxury ${searchParams.get("type") === "luxury" && 'btn-luxury-selected'}`} onClick={() => setSearchParams((prevParams) => generateURLsearchParams("type", "luxury", prevParams))}>Luxury</button>
        {searchParams.size !== 0 && <button className="btn-clear" onClick={() => setSearchParams(prevParams => prevParams.delete("type"))}>Clear</button>}
      </div>
      <div className="van-list">
        {vans.length > 0 ? vans
          .filter((van) =>
            searchParams.size === 0
              ? van
              : searchParams.has("type") &&
                searchParams.get("type") === van.type
          )
          .map((van) => (
            <Van_Card
              key={van.id}
              id={van.id}
              name={van.name}
              price={van.price}
              imageUrl={van.imageUrl}
              type={van.type}
            />
          )) : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
