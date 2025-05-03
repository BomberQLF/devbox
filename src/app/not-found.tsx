"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <div className="flex h-full w-full items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="mt-4 text-lg">Page not found</p>
                <p className="mt-2 text-sm">
                    The requested URL{" "}
                    <code className="font-mono">{pathname}</code> was not found on this server.
                </p>
            </div>
        </div>
    );
}