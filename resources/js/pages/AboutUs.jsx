export default function AboutUs() {
    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sm:p-12 transition-colors duration-300">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Welcome to our company! We are dedicated to providing the best services to our customers.
                    Our team is passionate about delivering high-quality solutions tailored to your needs.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Our Mission</span>
                        <p className="text-gray-700 dark:text-gray-300">
                            To deliver top-notch services with integrity, innovation, and dedication to customer satisfaction.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Our Vision</span>
                        <p className="text-gray-700 dark:text-gray-300">
                            To be recognized as a leader in our industry, trusted by clients for quality and professionalism.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Our Values</span>
                        <p className="text-gray-700 dark:text-gray-300">
                            Commitment, innovation, teamwork, and customer-first mindset.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white mb-1">Why Choose Us</span>
                        <p className="text-gray-700 dark:text-gray-300">
                            Experienced team, tailored solutions, and dedication to exceeding client expectations.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href={route('contact')}
                        className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
