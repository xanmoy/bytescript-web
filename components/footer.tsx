import React from 'react'
import { Link } from "@nextui-org/link";
export const Footer = () => {
  return (
   
      <>




          <footer className="bg-zinc-200 shadow dark:bg-zinc-900 sm:h-40 h-34">
              <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                  <div className="sm:flex sm:items-center sm:justify-between">
                      <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                          
                          <span className="self-center text-xl font-semibold whitespace-nowrap bytescript pt-5 dark:text-white">ByteScript</span>
                      </a>
                      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                          
                          <li>
                              <a href="https://github.com/xanmoy/bytescript-web/blob/main/LICENSE" className="hover:underline me-4 md:me-6">Licensing</a>
                          </li>
                          
                      </ul>
                  </div>
                  
              </div>
          </footer>



      </>
  )
}


