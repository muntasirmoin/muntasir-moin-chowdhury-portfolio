import App from "@/App";
import AcademyDetails from "@/pages/projects/AcademyDetails";
import EwalletDetails from "@/pages/projects/EwalletDetails";
import ToyDetails from "@/pages/projects/ToyDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",

    children: [
      //   {
      //     Component: Home,
      //     index: true,
      //   },
      //   {
      //     Component: Features,
      //     path: "features",
      //   },
      //   {
      //     Component: Contact,
      //     path: "contact",
      //   },
      //   {
      //     Component: Faq,
      //     path: "faq",
      //   },
      //   {
      //     Component: OurTeam,
      //     path: "our-team",
      //   },
    ],
  },
  {
    Component: EwalletDetails,
    path: "/wallet-details",
  },
  {
    Component: AcademyDetails,
    path: "/academy-details",
  },
  {
    Component: ToyDetails,
    path: "/toy-details",
  },
]);
