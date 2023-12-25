import React from "react";

import { Outlet } from "react-router-dom";

import { Layouts } from "../layouts";

export const Landing = () => {
    return (
        <React.Fragment>
            <Layouts.Header />

            <main>
                <Outlet />
                <div className="h-[2500px]"></div>
            </main>

            <Layouts.Footer />
        </React.Fragment>
    );
};
