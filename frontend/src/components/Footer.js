import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 text-center">
            <div className="container mx-auto">
                <h2 className="text-xl font-semibold">Quick Links</h2>
                <ul className="mt-4 space-y-2">
                    <li><a href="/about" className="hover:text-red-500">About Us</a></li>
                    <li><a href="/about-eraktkosh" className="hover:text-red-500">About eRaktkosh</a></li>
                    <li><a href="/notifications" className="hover:text-red-500">Notifications</a></li>
                    <li><a href="/faqs" className="hover:text-red-500">Eraktkosh FAQs</a></li>
                    <li><a href="/gallery" className="hover:text-red-500">Gallery</a></li>
                    <li><a href="/video-gallery" className="hover:text-red-500">Video Gallery</a></li>
                    <li><a href="/contact" className="hover:text-red-500">Contact Us</a></li>
                    <li><a href="/mobile-apps" className="hover:text-red-500">Mobile Apps</a></li>
                </ul>
            </div>
        </footer>
    );
}
