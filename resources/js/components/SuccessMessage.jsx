import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SuccessMessage() {
    const [successMessage, setSuccessMessage] = useState(usePage().props.success || null);
    console.log(successMessage);
    
    return (
        <>
            {successMessage && (
                <div className="mb-6">
                    <div className="flex items-center justify-between rounded-lg bg-green-100 px-4 py-3 text-green-800 shadow-sm dark:bg-green-900 dark:text-green-100">
                        <div className="flex items-center gap-2">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2l4 -4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="font-medium">{successMessage}</span>
                        </div>

                        <button
                            onClick={() => setSuccessMessage(null)}
                            className="rounded p-1 hover:bg-green-200 dark:hover:bg-green-800"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}