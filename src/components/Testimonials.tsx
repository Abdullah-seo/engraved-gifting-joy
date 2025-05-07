
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The personalised whiskey glasses I ordered for my husband were absolutely perfect. The engraving was precise and elegant. He loves them!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "James T.",
    rating: 5,
    text: "I ordered a custom baby keepsake box for my sister's newborn. The quality was outstanding and delivery was quicker than expected. Will definitely order again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily W.",
    rating: 4,
    text: "Beautiful engraving work on our anniversary gift. The only reason for 4 stars instead of 5 is that delivery took a day longer than estimated, but it was worth the wait!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Robert P.",
    rating: 5,
    text: "The personalised pen I ordered for my father's retirement was exquisite. The packaging was beautiful and made it feel really special. Exceptional service!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Charlotte B.",
    rating: 5,
    text: "I ordered multiple items for a corporate event and was impressed by the consistency in quality across all pieces. Our clients were thrilled with their personalised gifts.",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
        <h2 className="text-3xl font-bold font-playfair text-center mb-10">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial content */}
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="bg-soft-gray p-8 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                      <p className="font-medium">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-muted-gold scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <p className="text-center mt-8">
            <a href="#" className="text-primary font-medium underline">Read all 230+ reviews</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
