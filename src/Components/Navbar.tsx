"use client"
import * as React from 'react';
import renasa_logo from '@/Images/logo/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white shadow-lg z-50">
      <Image className='' width={180} height={180} src={renasa_logo} alt="Renasa Logo" />
      <div className="hidden lg:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hidden lg:flex gap-10 items-center">
        <div className="flex gap-5 items-center">
          <Link target='_blank' href="https://www.facebook.com"><FacebookIcon /></Link>
          <Link target='_blank' href="https://www.x.com"><TwitterIcon /></Link>
          <Link target='_blank' href="https://www.linkedin.com"><LinkedinIcon /></Link>
          <Link target='_blank' href="tel:01644394337"><CallIcon /></Link>
          <Link target='_blank' href="mailto:mehetajkhandaker@gmail.com"><MailIcon /></Link>
        </div>
        <Button variant='contained' color='error'>Login</Button>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={handleToggle}>
          <MenuIcon />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg p-5 flex flex-col items-start lg:hidden">
          <Link href="/" className="py-2 w-full text-center" onClick={handleToggle}>Home</Link>
          <Link href="/about" className="py-2 w-full text-center" onClick={handleToggle}>About</Link>
          <Link href="/services" className="py-2 w-full text-center" onClick={handleToggle}>Services</Link>
          <Link href="/products" className="py-2 w-full text-center" onClick={handleToggle}>Products</Link>
          <Link href="/gallery" className="py-2 w-full text-center" onClick={handleToggle}>Gallery</Link>
          <Link href="/contact" className="py-2 w-full text-center" onClick={handleToggle}>Contact</Link>
          <div className="flex gap-5 py-2 w-full justify-center">
            <Link target='_blank' href="https://www.facebook.com" onClick={handleToggle}><FacebookIcon /></Link>
            <Link target='_blank' href="https://www.x.com" onClick={handleToggle}><TwitterIcon /></Link>
            <Link target='_blank' href="https://www.linkedin.com" onClick={handleToggle}><LinkedinIcon /></Link>
            <Link target='_blank' href="tel:01644394337" onClick={handleToggle}><CallIcon /></Link>
            <Link target='_blank' href="mailto:mehetajkhandaker@gmail.com" onClick={handleToggle}><MailIcon /></Link>
          </div>
          <Button variant='contained' color='error' className="w-full mt-2" onClick={handleToggle}>Login</Button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
