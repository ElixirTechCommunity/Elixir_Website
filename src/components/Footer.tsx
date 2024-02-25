import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/elixir-tech-community/"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/TheElixirTech"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Elixir: A student community uniting ABESEC's GeeksforGeeks, GDSC, and Codechef chapters, fostering student growth and networking.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: info@musicschool.com</p>
          
        </div>
      </div>
    
    </footer>
  );
};

