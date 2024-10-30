import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  // Function to handle click event and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-main">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="src\assets\logo-hidro-tani.png"
                alt="Hidrotani"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                  aria-current="page"
                  onClick={() => handleLinkClick('/')}
                >
                  Beranda
                </Link>
                <Link
                  to="/edukasi"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/edukasi' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                  onClick={() => handleLinkClick('/edukasi')}
                >
                  Edukasi
                </Link>
                <Link
                  to="/forum"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/forum' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                  onClick={() => handleLinkClick('/forum')}
                >
                  Forum
                </Link>
                <Link
                  to="/about"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/about' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                  onClick={() => handleLinkClick('/about')}
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/mobileapp"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/mobileapp' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                  onClick={() => handleLinkClick('/mobileapp')}
                >
                  Hidrotani App
                </Link>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              className="rounded-xl bg-primary px-8 py-2 text-sm font-medium text-white hover:bg-secondary"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Beranda
          </Link>
          <Link
            to="/Edukasi"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary hover:text-white"
          >
            Edukasi
          </Link>
          <Link
            to="/Forum"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary hover:text-white"
          >
            Forum
          </Link>
          <Link
            to="/Tentang Kami"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary hover:text-white"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
