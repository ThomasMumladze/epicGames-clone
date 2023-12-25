import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { Pages } from "../pages";
import { Landing } from "../pages/Landing";

const elementRoute = createRoutesFromElements(
    <Route path="/" element={<Landing />}>
        <Route index element={<Pages.Discover />} />
        <Route path="/browse" element={<Pages.Browse />} />
        <Route path="/distribution" element={<Pages.Distribution />} />
        <Route path="/support" element={<Pages.Support />} />
    </Route>
);

const browserRoute = createBrowserRouter(elementRoute);

export const AppRouter = () => {
    const route = <RouterProvider router={browserRoute} />;

    if (!route) return;

    return route;
};
