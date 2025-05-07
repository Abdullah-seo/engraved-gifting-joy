
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the email to your API
    toast({
      title: "Thank you for subscribing!",
      description: "Your welcome discount code is WELCOME10",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-blush">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for special offers, personalisation tips, 
            and 10% off your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white flex-1"
            />
            <Button type="submit" className="bg-royal-blue hover:bg-royal-blue/90">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
