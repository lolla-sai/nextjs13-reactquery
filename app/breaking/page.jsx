"use client";

import React from "react";

function Breaking() {
    return (
        <div className="m-8 w-[400px] h-[400px] flex items-center justify-center border-2 flex-col">
            <h1 className="my-6 text-3xl font-bold">
                This is the breaking page
            </h1>
            <button onClick={(e) => console.log(e.b.c)}>Break this</button>
        </div>
    );
}

export default Breaking;
