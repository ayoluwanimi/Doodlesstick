import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About/About";
import Bookings from "./pages/Bookings/Bookings";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Domiciliary_Care from "./pages/Services/domiciliary_care/domiciliary_care";
import Healthcare_Business_Consultation from "./pages/Services/healthcare_business_consultation/healthcare_business_consultation";
import Healthcare_Recruitment from "./pages/Services/healthcare_recruitment/healthcare_recruitment";
import Healthcare_Training from "./pages/Services/healthcare_training/healthcare_training";
import Live_In_Care from "./pages/Services/live_in_care/live_in_care";
import Services from "./pages/Services/Services";
import Supported_Living from "./pages/Services/supported_living/supported_living";
import { Vacancies } from "./pages/Vacancies/Vacancies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/vacancies",
    element: <Vacancies />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/supported_living",
    element: <Supported_Living />,
  },
  {
    path: "/domiciliary_care",
    element: <Domiciliary_Care />,
  },
  {
    path: "/live_in_care",
    element: <Live_In_Care />,
  },
  {
    path: "/healthcare_recruitment",
    element: <Healthcare_Recruitment />,
  },
  {
    path: "/healthcare_business_consultation",
    element: <Healthcare_Business_Consultation />,
  },
  {
    path: "/healthcare_training",
    element: <Healthcare_Training />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
