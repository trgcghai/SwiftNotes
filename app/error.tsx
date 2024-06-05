'use client'

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter()
    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center text-4xl">Something went wrong!</h2>
            <button
                className="mt-4 rounded-md flex gap-2 items-center bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={
                    () => { router.push('/') }
                }
            >
                <ArrowLeftIcon height={25}></ArrowLeftIcon>
                Back to Home page
            </button>
        </main >
    );
}