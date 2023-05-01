import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import QueryProvider from "./components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="m-8">
                    <div className="bg-blue-500 px-8 py-20 text-3xl font-bold mb-8">
                        <h2>This is from the layout</h2>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <Link
                                className="inline-block p-2 border-2 border-gray-500 rounded"
                                href="/profile/teacher"
                            >
                                navigate to teacher profile
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="inline-block p-2 border-2 border-gray-500 rounded"
                                href="/profile/student"
                            >
                                navigate to student profile
                            </Link>
                        </div>
                    </div>
                </div>
                <QueryProvider>{children}</QueryProvider>
                {/* <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> */}
            </body>
        </html>
    );
}
