import React from 'react'

const Footer = () => {
  return (
    <><footer className="bg-gray-800 text-white text-center p-4 mt-8">
    <p>
      &copy; {new Date().getFullYear()} My Next.js App. All rights reserved. | 
      <a href="https://github.com/webDeveloperRamu"target="_blank"rel="noopener noreferrer"className="hover:text-blue-500 hover:underline transform transition-all duration-300 ease-in-out hover:scale-105">
        github.com/webDeveloperRamu
      </a>
    </p>
  </footer>
  </>
  )
}

export default Footer