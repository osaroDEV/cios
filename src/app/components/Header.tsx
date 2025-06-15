'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Add X here
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const DropdownMenu = () => (
  <div className='flex flex-col gap-4 p-6 shadow-lg rounded-b-lg'>
     <Link href='/courses' className='w-15 inline'>
      <span className='hover:text-blue-800 hover:underline dark:text-white dark:hover:text-blue-400'>Courses</span>
    </Link>
    <Button className='h-12.5 cursor-pointer'>Get Started</Button>
  </div>
);

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='w-full'>
      <div className='h-20 flex items-center justify-between px-4'>
        <div>
          <Link href='/' className='inline md:hidden'>
            <Image src='/code-ill.svg' alt='logo' width={70} height={70} />
          </Link>
          <Link href='/' className='hidden md:inline'>
            <Image src='/code-ill.svg' alt='logo' width={80} height={80} />
          </Link>
        </div>
        <div className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest'>CIOS</div>
        <div className='flex items-center gap-4 md:gap-6'>
          {/* Theme toggle */}
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='rounded-full cursor-pointer'
          >
            <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
          {/* Mobile menu icon */}
          <span
            className='md:hidden p-2 hover:bg-accent dark:hover:bg-accent/50 rounded-sm cursor-pointer'
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </span>
          <Button className='hidden md:inline'>Get Started</Button>
        </div>
      </div>
      {/* Mobile dropdown */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${menuOpen ? 'max-h-30 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
