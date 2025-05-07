
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Choose Your Gift",
    description: "Browse our collection and select the perfect item to personalise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4 text-muted-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Add Your Message",
    description: "Personalise with names, dates, or a special message in your chosen font.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4 text-muted-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Delivered with Love",
    description: "We carefully craft and package your gift, ready to create a special moment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4 text-muted-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-soft-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-playfair text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Creating your perfect personalised gift is simple. Follow these three easy steps to make something truly special.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              {step.icon}
              <h3 className="font-playfair font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
