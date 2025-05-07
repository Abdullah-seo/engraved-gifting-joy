
import React from 'react';
import { Button } from '@/components/ui/button';

const InstagramGallery = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1458538977777-0549b2370168?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1594758205217-6fef32fbd8c5?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1525310072745-f9ed0bbbfc9a?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1522204709263-68a23e3ef7e5?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=60",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-playfair mb-3">Share Your Gift Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tag us on Instagram with #YourGiftStory to be featured on our page and receive a special discount.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-md aspect-square">
              <img 
                src={image} 
                alt={`Instagram post ${index}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-muted-gold text-muted-gold hover:bg-muted-gold/10">
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
