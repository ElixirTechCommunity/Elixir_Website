import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-cover bg-center py-16" style={{ backgroundImage: "url('../../public/footer_rays.png')" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="dark:text-white light:text-black text-lg font-semibold mb-4">About Us</h2>
            <p className="dark:text-white light:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat elit. Cras in ex ut elit hendrerit efficitur.</p>
          </div>
          <div className="col-span-1">
            <h2 className="dark:text-white light:text-black text-lg font-semibold mb-4">Contact Us</h2>
            <p className="dark:text-white light:text-black">add gmail</p>
          </div>
          <div className="col-span-1">
            <h2 className="dark:text-white light:text-black text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:text-white light:text-black">
                 Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:text-white light:text-black">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:text-white light:text-black">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

