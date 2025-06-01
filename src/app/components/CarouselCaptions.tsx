'use client';
import { Button } from '@/components/ui/button';
import * as React from 'react';

const captions = [
  {
    header: 'Unlock Your Coding Potential',
    note: 'Master essential skills and build projects that stand out. Start your journey today!',
  },
  {
    header: 'From Beginner to Builder',
    note: 'Our courses guide you through every step, with hands-on practice and expert support. Level up your career!',
  },
  {
    header: 'Dive into the World of Code',
    note: 'Learn in-demand languages like React, JavaScript, and more. Flexible schedules and interactive lessons await!',
  },
  {
    header: 'Future-Proof Your Skills',
    note: 'Join our community of passionate coders and gain the expertise to thrive in the tech industry. Enroll now and transform your future!',
  },
];

export function CarouselCaptions() {
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
        <h3 className='sm:h-auto leading-[1.3] p-4 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed'>{captions[index].note}</h3>
      </div>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <Button className='w-[70%] cursor-pointer'>Apply Now</Button>
        <Button className='w-[70%] cursor-pointer'>See Courses</Button>
      </div>
    </div>
  );
}
