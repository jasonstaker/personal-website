import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      root.classList.add("ambient-animated");
    }, 900);

    return () => {
      window.clearTimeout(timer);
      root.classList.remove("ambient-animated");
    };
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <div className="ambient-canvas" aria-hidden="true" />
        <div className="content-wrap">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
