import React, { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Layouts } from "../layouts";

import { Components } from "../components";

export const Landing = () => {
    const location = useLocation();
    const [] = useState();

    return (
        <React.Fragment>
            <Layouts.Header />

            <Components.Filter location={location} />

            <main>
                <Outlet />
                <div className="h-[2500px]"></div>
            </main>

            <Layouts.Footer />
        </React.Fragment>
    );
};
