import React from "react";
import { ArrowRight } from "lucide-react";


export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gray-800 text-white">
            {/* Top Banner */}
            <div className="mb-4 flex items-center space-x-2 rounded-full border border-gray-600 bg-red-700 px-7 py-2 shadow-md transition-all hover:border-red-500 hover:bg-red-600">
                <p className="text-sm font-semibold text-white">Donate Blood, Save Lives</p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                Your Blood Can <span className="text-red-500">Save a Life</span> Today
            </h1>
            <p className="mt-5 max-w-prose text-gray-300 sm:text-lg">
                Every drop counts! Join us in the mission to provide safe and life-saving blood to those in need.
                Be a hero today by donating blood.
            </p>

            <div className="flex gap-x-4 mt-5">
                <a
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-red-700"
                    href="/register"
                >
                    Looking For Blood <ArrowRight className="h-5 w-5" />
                </a>

                <a
                    className="flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-red-700"
                    href="/register"
                >
                    Become a Donor <ArrowRight className="h-5 w-5" />
                </a>
            </div>


            {/* Hero Section with Image */}
            <div className="relative mt-12 w-full flex justify-center">
                <img
                    src="blood-test-5906819_1280.jpg"
                    alt="Blood Donation"
                    className="rounded-lg shadow-lg w-full max-w-6xl"
                />
            </div>

            {/* Why Donate Blood? */}
            <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
                <div className="mb-12 px-6 text-center">
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">Why Donate Blood?</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Donating blood helps save millions of lives every year. It is a simple and selfless act that can make a huge difference.
                    </p>
                </div>

                {/* Benefits of Blood Donation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    {[
                        { title: "Save Lives", desc: "Your blood can save accident victims, cancer patients, and people undergoing surgeries." },
                        { title: "Free Health Checkup", desc: "Donors receive a free health screening to ensure they are fit to donate." },
                        { title: "Community Impact", desc: "A single donation can save up to 3 lives. Be a part of this noble cause." },
                    ].map((benefit, index) => (
                        <div key={index} className="p-6 bg-gray-700 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400">{benefit.title}</h3>
                            <p className="mt-2 text-gray-300">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blood Bank Services Section */}
            <div className="bg-gray-900 py-12 w-full text-center">
                <h2 className="text-4xl font-bold text-white sm:text-5xl">Our Blood Bank Services</h2>
                <p className="mt-4 text-lg text-gray-300">
                    We provide safe, quick, and reliable blood donation services across multiple locations.
                </p>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mt-8">
                    {[
                        { title: "Blood Donation Camps", desc: "Join our camps for easy and safe blood donation." },
                        { title: "Emergency Blood Supply", desc: "We provide blood in critical emergencies and surgeries." },
                        { title: "Plasma & Platelet Donation", desc: "Donors can contribute plasma and platelets for specific treatments." },
                    ].map((service, index) => (
                        <div key={index} className="p-6 bg-gray-700 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-red-400">{service.title}</h3>
                            <p className="mt-2 text-gray-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-gray-900  py-12 w-full text-center">
                <h3 className="text-3xl font-semibold text-white">Need Blood Urgently? Contact Us Now!</h3>
                <p className="mt-2 text-gray-200">📞 Call us at (123) 456-7890 for immediate blood supply.</p>
                <a
                    className="mt-4 inline-block bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow-md transition hover:bg-red-700"
                    href="/contact"
                >
                    Emergency Help
                </a>
            </div>




        </div>
    );
}
