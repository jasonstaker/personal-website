import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Experience from "../pages/Experience";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> }, // optional
      { path: "*", element: <NotFound /> },
    ],
  },
]);
