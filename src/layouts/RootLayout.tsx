import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <div className="ambient-canvas" aria-hidden="true">
          <div className="landscape-ridge ridge-back" />
          <div className="landscape-ridge ridge-mid" />
          <div className="landscape-ridge ridge-front" />
          <div className="landscape-glow one" />
          <div className="landscape-glow two" />
          <div className="landscape-glow three" />
        </div>
        <div className="content-wrap">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
