import React from 'react';
import Facebook from '../../assets/Icons/facebook.svg?react';
import Instragram from '../../assets/Icons/instragram.svg?react';
import Twitter from '../../assets/Icons/twitter.svg?react';

const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-primary font-comicSansMS">
      <div className='container'>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-5 gap-3 lg:gap-5 pt-[1.188rem]">
          <span className="text-base leading-5 text-white sm:text-center pointer-events-none">
            © {date.getFullYear()}{' '}
            <a href="" className="hover:underline text-[#FDC200]">
              By Uttoradhikar
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-2 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-white">
              <Facebook />
            </a>
            <a href="#" className="text-white">
              <Instragram />
            </a>
            <a href="#" className="text-white">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

