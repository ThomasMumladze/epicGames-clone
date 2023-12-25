import React from "react";

import { Outlet } from "react-router-dom";

import { Layouts } from "../layouts";

export const Landing = () => {
    return (
        <React.Fragment>
            <Layouts.Header />

            <main>
                <Outlet />
            </main>

            <Layouts.Footer />
        </React.Fragment>
    );
};
