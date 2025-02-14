import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

            {/* Contact Details */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold">eRaktKosh Related Queries</h2>
                <p>Center For Development of Advanced Computing</p>
                <p>C-56/1, Anusandhan Bhawan, Sector-62, Noida, Uttar Pradesh-201307</p>
                <p>Phone: 9650816031</p>
                <p>Email: eraktkosh[at]cdac[dot]in</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold">For Administrative Queries</h2>
                <p>Blood Cell, National Health Mission</p>
                <p>Ministry of Health & Family Welfare, New Delhi-110011</p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 border rounded-md h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
