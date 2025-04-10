import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkVariants = {
    initial: {
      color: "#4B5563", // text-gray-600
    },
    hover: {
      scale: 1.2,
      y: -4,
      color: "#000000",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9,
      color: "#1F2937"
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      rotate: -5
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            variants={logoVariants}
            whileHover="hover" 
            whileTap="tap"
            initial={{ scale: 1 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold">YONZA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer"
            >
              <Link href="/" className="text-gray-600 transition-all duration-300">
                Home
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer"
            >
              <Link href="/shop" className="text-gray-600 transition-all duration-300">
                Shop
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer"
            >
              <Link href="/about" className="text-gray-600 transition-all duration-300">
                About
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer"
            >
              <Link href="/contact" className="text-gray-600 transition-all duration-300">
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <motion.div
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link
                  href="/shop"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 