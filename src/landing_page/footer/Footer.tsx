import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <ul>
            <li className="mb-2 text-sm">DonorVerse is a secure fundraising DApp where users can create campaigns, donate to those in need, chat with creators, and earn rewards for their generosity.</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="/create-campaign" className="hover:underline">Create Campaign</a></li>
            <li className="mb-2"><a href="/donate" className="hover:underline">Donate Now</a></li>
            <li className="mb-2"><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="/faq" className="hover:underline">Help & FAQs</a></li>
            <li className="mb-2"><a href="/support" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul>
            <li className="mb-2"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
            <li className="mb-2"><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <span className="font-bold mr-2">Follow Us:</span>
            <a href="#" className="mr-4">Github</a>
            <a href="#">LinkedIn</a>
          </div>
          
        </div>
      </div>

      <div className="mt-10 text-center text-sm">
        <p>&copy; 2024 DonorVerse. All Rights Reserved.</p>
        <p>Powered by SAU Team</p>
      </div>
    </footer>
  );
};

export default Footer;
