import React from "react";

const FAQ = () => {
    const faqs = [
        { question: "Whom should I contact in case of any problem?", answer: "Kindly email your queries on eraktkosh@cdac.in" },
        { question: "What is eRaktKosh?", answer: "Details about eRaktKosh are available at about eRaktKosh page." },
        { question: "Where can I find the latest blood stock from various blood banks?", answer: "The blood stock can be searched at the Stock Availability page." },
        { question: "Where can I find details of camps being conducted by various blood banks?", answer: "The details of camps can be found at the Camp Schedule page. Many camps also accept online pre-registration." },
        { question: "How can I onboard my blood bank to eRaktKosh?", answer: "Kindly fill the form. Click here to fill the form." },
        { question: "How to add your blood bank to eRaktKosh?", answer: "Kindly Register your blood bank at the Add Your Blood Bank page." },
        { question: "How to check Platelet unit in eRaktKosh app?", answer: "The blood stock can be searched by default as Whole Blood at the Stock Availability page. You can change component type to Platelet and then search again." },
        { question: "How can I check the nearest blood bank from my current location?", answer: "Use the eRaktKosh mobile App, enable the location, and then search the nearest blood bank. You will see a distance-wise list of blood banks." },
        { question: "How to verify if a blood unit is available or not on the current date?", answer: "You can see the last updated date or LIVE status in the Blood Availability option." },
        { question: "How does age affect my ability to donate blood?", answer: "The minimum age for whole blood donation is 18 years in India. The maximum age for blood donation depends on the kind of donation." },
        { question: "Need Blood Immediately. Which app finds patients' blood requirements as soon as possible?", answer: "At Google Play Store, you can search for eRaktKosh. Once installed, using GPS technology, the app locates the nearest blood bank along with blood availability." },
        { question: "I had alcohol before going to donate blood. Is it okay?", answer: "No. We do not take blood from anyone under the influence of alcohol. This is because being intoxicated can affect your ability to understand and answer the donor questionnaire and declaration." },
        { question: "I am taking antibiotics. Can I donate blood?", answer: "It depends on why you are taking the antibiotics, and it may also depend on doctor counseling." },
        { question: "Are there any side effects of blood donation?", answer: "There are no side effects of blood donation. The blood bank staff ensures that your blood donation is a good experience so as to make you a regular blood donor. Many people have donated more than 25-100 times in their lifetime." },
        { question: "How often can I donate Blood?", answer: "After every three to four months, you can donate blood." },
        { question: "What should I eat before blood donation?", answer: "Anything that you normally eat at home. Eating a light snack and having a soft drink before blood donation is sufficient." },
    ];

    return (
        <div className="container mx-auto p-6 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-red-400">{faq.question}</h2>
                        <p className="mt-2 text-gray-300">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
