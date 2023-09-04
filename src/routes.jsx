import { createBrowserRouter } from "react-router-dom";
import ContactList from "./pages/ContactList";
import ContactDetails from "./pages/ContactDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactList/>,
    },
    {
      path: '/:id',
      element: <ContactDetails/>
    }
  ]);