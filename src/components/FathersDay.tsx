
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FathersDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set Father's Day date (third Sunday in June)
  useEffect(() => {
    const getNextFathersDay = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      
      // Find third Sunday in June
      let fathersDay = new Date(currentYear, 5, 1); // June 1st
      const dayOfWeek = fathersDay.getDay();
      const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
      
      // First Sunday in June
      fathersDay.setDate(fathersDay.getDate() + daysUntilSunday);
      // Third Sunday (add 14 days)
      fathersDay.setDate(fathersDay.getDate() + 14);
      
      // If Father's Day has already passed this year, use next year's date
      if (currentDate > fathersDay) {
        fathersDay = new Date(currentYear + 1, 5, 1);
        const nextYearDayOfWeek = fathersDay.getDay();
        const nextYearDaysUntilSunday = nextYearDayOfWeek === 0 ? 0 : 7 - nextYearDayOfWeek;
        fathersDay.setDate(fathersDay.getDate() + nextYearDaysUntilSunday + 14);
      }
      
      return fathersDay;
    };

    const fathersDay = getNextFathersDay();
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = fathersDay.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const fathersDayGifts = [
    {
      id: 1,
      name: "Personalised Whiskey Glass",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 2,
      name: "Engraved Watch Box",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1556374724-92acda145e69?auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 3,
      name: "Custom Leather Wallet",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?auto=format&fit=crop&w=600&q=60"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-soft-blue to-blush relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-peach rounded-full opacity-40 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-blue rounded-full opacity-30 -ml-40 -mb-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-4">Father's Day Gifts</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Show dad how much he means to you with a thoughtful personalised gift.</p>
          
          {/* Countdown timer */}
          <div className="mt-8 mb-12">
            <p className="text-sm uppercase font-bold mb-3">Father's Day is Coming:</p>
            <div className="flex justify-center gap-4">
              <div className="bg-white rounded-lg py-3 px-6 shadow-lg">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-xs uppercase">Days</div>
              </div>
              <div className="bg-white rounded-lg py-3 px-6 shadow-lg">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs uppercase">Hours</div>
              </div>
              <div className="bg-white rounded-lg py-3 px-6 shadow-lg">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs uppercase">Minutes</div>
              </div>
              <div className="bg-white rounded-lg py-3 px-6 shadow-lg">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs uppercase">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fathersDayGifts.map(gift => (
            <div key={gift.id} className="bg-white rounded-lg overflow-hidden shadow-lg product-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={gift.image} 
                  alt={gift.name} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{gift.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold">£{gift.price.toFixed(2)}</span>
                  <Button variant="outline" size="sm">
                    Personalise
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">
            View All Father's Day Gifts <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FathersDay;
