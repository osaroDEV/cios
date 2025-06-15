'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useCaptionsStore } from '../../../store/useStore';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function CarouselCaptions() {
  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const { captions } = useCaptionsStore();
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 100); // Start fade-in
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % captions.length);
        setFade(false);
      }, 400); // Fade out before switching
    }, 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='w-full h-[70vh)] flex flex-col items-center justify-between gap-5 p-6'>
      <div
        className={`relative flex flex-col justify-between items-center text-center gap-4 w-full transition-opacity duration-400 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
        key={index}
      >
        <h2 className='text-[1.75rem] font-bold leading-[1.2] text-center'>
          {captions[index].header}
        </h2>
        <h3 className='sm:h-auto leading-[1.3] p-4 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed'>
          {captions[index].note}
        </h3>
      </div>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <Button className='w-[70%] cursor-pointer h-12.5'>Apply Now</Button>
        {/* <Button className='w-[70%] cursor-pointer h-12.5'>See Courses</Button> */}
        <div
          className={`w-[70%] transition-all duration-200 ${
            searchFocused ? 'scale-105' : 'scale-100'
          }`}
        >
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 dark:text-white' />
            <Input
              placeholder='Search Course...'
              className='pl-10 h-12.5 dark:placeholder:text-[rgba(255,255,255,0.7)] dark:bg-input/30 dark:text-white'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
