import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold text-center mb-6 text-white-500">Contact Us</h1>

            {/* Contact Details */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-red-400">eRaktKosh Related Queries</h2>
                <p>Center For Development of Advanced Computing</p>
                <p>C-56/1, Anusandhan Bhawan, Sector-62, Noida, Uttar Pradesh-201307</p>
                <p>📞 9650816031</p>
                <p>📧 eraktkosh@cdac@in</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-red-400">For Administrative Queries</h2>
                <p>Blood Cell, National Health Mission</p>
                <p>Ministry of Health & Family Welfare, New Delhi-110011</p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-red-400 mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
