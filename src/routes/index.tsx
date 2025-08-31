import App from "@/App";
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
      //     Component: About,
      //     path: "about",
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
]);
