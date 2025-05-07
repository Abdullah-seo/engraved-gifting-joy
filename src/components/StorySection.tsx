
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-playfair mb-4">Why Personalised Gifts Matter</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In a world of mass production, giving a personalised gift shows thoughtfulness, care, and attention to detail. 
              It tells your loved ones you've gone the extra mile to create something unique just for them.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each of our handcrafted items is made with precision and love in our UK workshop, ensuring 
              exceptional quality that transforms everyday objects into cherished keepsakes.
            </p>
            <div className="flex items-center">
              <Button variant="link" className="font-medium text-primary p-0 story-link">
                Explore Our Mission <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565665681743-6cc01845213e?auto=format&fit=crop&w=1000&q=80" 
                alt="Artisan engraving a gift" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-blush rounded-lg p-4 shadow-lg hidden md:block">
                <p className="font-playfair italic text-gray-800">
                  "The perfect gift isn't about the price tag, but the personal touch that makes it priceless."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
