import Link from "next/link";
import React from "react";

function Second() {
    return (
        <div>
            <div>This is the second route</div>
            <div>
                <Link
                    className="inline-block p-2 border-2 border-gray-500 rounded"
                    href="/breaking"
                >
                    navigate to Breaking
                </Link>
            </div>
        </div>
    );
}

export default Second;
