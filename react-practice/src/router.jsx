import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HOME from "./pages/HOME";
import OutTeamPage from "./pages/OutTeamPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import JsonServerPage from "./pages/JsonServerPage";
import SingleJsonServerPage from "./pages/SingleJsonServerPage";
import EditJsonServerPage from "./pages/EditJsonServerPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {path: "/", element: <HOME/>},
        {path: "/our-team", element: <OutTeamPage/>},
        {path: "/pricing", element: <PricingPage/>},
        {path: "/contact", element: <ContactPage/>},
        {path: "/jsonserver", element: <JsonServerPage/>},
        {path: "/jsonserver/:id", element: <SingleJsonServerPage/>},
        {path: "/jsonserver-edit/:id", element: <EditJsonServerPage/>}
        

      ]
    },
  
  ]);

export default router;