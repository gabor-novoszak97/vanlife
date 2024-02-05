import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Client/Home/Home";
import About from "./pages/Client/About/About";
import ClientVans from "./pages/Client/ClientVans/ClientVans";
import ClientVan from "./pages/Client/ClientVans/ClientVan/ClientVan";
import Page_Layout from "./components/Layout/Page_Layout/Page_Layout";
import "./App.css";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Income/Income";
import Host_Layout from "./components/Layout/Host_Layout/Host_Layout";
import HostVans from "./pages/Host/HostVans/HostVans";
import HostVan from "./pages/Host/HostVans/HostVan/HostVan";
import Reviews from "./pages/Host/Reviews/Reviews";
import VanDetails from "./pages/Host/HostVans/HostVan/VanInfo/VanDetails/VanDetails";
import VanPrice from "./pages/Host/HostVans/HostVan/VanInfo/VanPrice/VanPrice";
import VanPhotos from "./pages/Host/HostVans/HostVan/VanInfo/VanPhotos/VanPhotos";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page_Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<ClientVans />} />
          <Route path="vans/:id" element={<ClientVan />} />

          <Route path="host" element={<Host_Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVan />}>
              <Route index element={<VanDetails />} />
              <Route path="pricing" element={<VanPrice />} />
              <Route path="photos" element={<VanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
