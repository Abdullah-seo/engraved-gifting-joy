
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-soft-gray">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold font-playfair mb-4 text-royal-blue">404</h1>
          <p className="text-2xl text-gray-700 mb-6 font-playfair">Oops! We can't find that page</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for might have been moved, deleted, or perhaps never existed.
          </p>
          <Button asChild className="bg-muted-gold hover:bg-muted-gold/90 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
