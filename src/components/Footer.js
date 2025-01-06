import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Enomfon Okon. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/enomfon-okon/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="mailto:enomfon20@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="email.svg" alt="Email" className="h-6 w-6" />
          </a>
          <a href="https://github.com/okonenomfon" target="_blank" rel="noopener noreferrer">
            <img src="github.svg" alt="Github" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
