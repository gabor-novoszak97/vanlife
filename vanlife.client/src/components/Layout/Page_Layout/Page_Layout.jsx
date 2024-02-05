import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Page_Layout() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <Outlet />
        </section>
      </main>
      <Footer/>
    </>
  );
}
