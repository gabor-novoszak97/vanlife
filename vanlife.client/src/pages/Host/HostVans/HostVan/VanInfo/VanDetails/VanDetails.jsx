import { useOutletContext } from "react-router-dom";
import "./VanDetails.css"

export default function VanDetails() {
  const context = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{context.name}</span>
      </h4>
      <h4>
        Category: <span>{context.type}</span>
      </h4>
      <h4>
        Description: <span>{context.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
