
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center 30%" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto h-full relative z-10 flex items-center">
        <div className="max-w-2xl text-white px-4 md:px-0 animate-fade-in">
          <span className="inline-block bg-muted-gold text-white text-sm font-bold px-3 py-1 rounded-full mb-6">
            Father's Day Collection – Shop Now!
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Made with Love, <br />Engraved for Life
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            Thoughtful gifts that leave lasting impressions. Create something truly personal that they'll cherish forever.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-muted-gold hover:bg-muted-gold/90 text-white px-8">
              Shop Personalised Gifts
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              How It Works <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
