import React from "react";

// import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            {/* <style jsx>
                {`
                    .innerLayout {
                        width: 50%;
                        height: auto;
                        background-color: tomato;
                        padding: 1rem;
                    }

                    .children {
                        padding: 1rem;
                    }
                `}
            </style> */}
            <div className="innerLayout w-1/2 h-auto bg-red-500 p-4">
                <div>Announcements: Tomorrow is a holiday!</div>
                <div className="children p-4">{children}</div>
            </div>
        </>
    );
}
