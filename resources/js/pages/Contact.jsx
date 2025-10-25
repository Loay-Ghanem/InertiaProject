export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sm:p-12 transition-colors duration-300">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
                    Contact Us
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    If you have any questions or inquiries, please feel free to reach out to us.
                    Our team is here to assist you and provide the information you need.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Email</span>
                        <a
                            href="mailto:info@example.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            info@example.com
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Phone</span>
                        <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                            +1 (234) 567-890
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Address</span>
                        <span className="text-gray-700 dark:text-gray-300">
                            123 Training Street, City, Country
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Working Hours</span>
                        <span className="text-gray-700 dark:text-gray-300">
                            Mon - Fri: 9:00 AM - 6:00 PM
                        </span>
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                    >
                        Send a Message
                    </a>
                </div>
            </div>
        </div>
    );
}
