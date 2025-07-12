import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchModal from './SearchModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <SearchModal />
    </div>
  );
};

export default Layout;