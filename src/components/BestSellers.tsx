
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample bestseller products
const bestSellers = [
  {
    id: 1,
    name: "Personalised Whiskey Glass",
    price: 24.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    name: "Custom Engraved Wooden Box",
    price: 39.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544601284-28839c77739b?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    name: "Baby Milestone Keepsake",
    price: 29.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 4,
    name: "Anniversary Date Sign",
    price: 34.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596507457972-9843ad5fc8a0?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 5,
    name: "Engraved Photo Frame",
    price: 27.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1581330496501-55e671b28b54?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 6,
    name: "Custom Message Bracelet",
    price: 19.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=60"
  }
];

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16}
        fill={i < Math.floor(rating) ? "#D4AF37" : "none"}
        color={i < Math.floor(rating) ? "#D4AF37" : "#D4AF37"}
        className={i < Math.floor(rating) ? "text-muted-gold" : "text-muted-gold opacity-30"}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-playfair">Our Bestsellers</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={() => scroll('left')}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        <div 
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" 
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellers.map(product => (
            <div key={product.id} className="min-w-[260px] max-w-[260px] product-card">
              <div className="relative overflow-hidden rounded-md aspect-square mb-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 hover:text-primary truncate">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center my-1">
                  {renderStars(product.rating)}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold">£{product.price.toFixed(2)}</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    Personalise
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
