
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    name: "Gifts for Him",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=60",
    url: "/shop/for-him"
  },
  {
    id: 2,
    name: "Gifts for Her",
    image: "https://images.unsplash.com/photo-1617150119111-5839f4931371?auto=format&fit=crop&w=800&q=60",
    url: "/shop/for-her"
  },
  {
    id: 3,
    name: "Baby Gifts",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=60",
    url: "/shop/for-baby"
  },
  {
    id: 4,
    name: "Anniversary",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=60",
    url: "/shop/occasions/anniversary"
  }
];

const Collections = () => {
  return (
    <section className="py-16 bg-soft-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-playfair text-center mb-10">Shop by Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map(collection => (
            <Link key={collection.id} to={collection.url} className="collection-card block">
              <div className="relative h-72 overflow-hidden rounded-md">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-5 w-full">
                    <h3 className="text-white text-xl font-semibold mb-2">{collection.name}</h3>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
