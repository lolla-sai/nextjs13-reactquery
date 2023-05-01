import Image from "next/image";
import { Londrina_Solid, Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <main>
            <h1
                className={
                    "text-6xl font-bold text-center my-8 " +
                    montserrat.className
                }
            >
                Hi, from NextJS 13
            </h1>

            <Link
                href={"/second"}
                className="p-2 mx-8 border-2 border-gray-500 rounded"
            >
                Go to Second Page
            </Link>
        </main>
    );
}
