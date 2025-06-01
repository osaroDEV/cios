'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProfileItemProps {
  imageSrc: string;
  greeting?: string;
  greetingColor?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: 'sm' | 'md' | 'lg';
  bubblePosition?: 'top' | 'right' | 'bottom' | 'left';
}

const sizes = {
  sm: 'w-16 h-16 md:w-20 md:h-20',
  md: 'w-20 h-20 md:w-28 md:h-28',
  lg: 'w-24 h-24 md:w-32 md:h-32',
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  imageSrc,
  greeting,
  greetingColor = 'bg-emerald-600',
  position,
  size,
  bubblePosition = 'top',
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    // Small random floating animation
    const floatAnimation = () => {
      const randomY = Math.random() * 10 - 5; // -5 to 5
      const randomX = Math.random() * 10 - 5; // -5 to 5
      const duration = 3 + Math.random() * 2; // 3-5 seconds

      item.style.transition = `transform ${duration}s ease-in-out`;
      item.style.transform = `translate(${randomX}px, ${randomY}px)`;

      setTimeout(floatAnimation, duration * 1000);
    };

    floatAnimation();

    return () => {
      if (item) {
        item.style.transition = '';
        item.style.transform = '';
      }
    };
  }, []);

  const bubblePositionClasses = {
    top: '-top-8 left-1/2 -translate-x-1/2',
    right: 'top-1/2 -right-20 -translate-y-1/2',
    bottom: '-bottom-8 left-1/2 -translate-x-1/2',
    left: 'top-1/2 -left-20 -translate-y-1/2',
  };

  const bubbleTailClasses = {
    top: 'after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-t-inherit after:border-l-transparent after:border-r-transparent',
    right:
      'after:top-1/2 after:-translate-y-1/2 after:-left-2 after:border-t-8 after:border-b-8 after:border-r-8 after:border-r-inherit after:border-t-transparent after:border-b-transparent',
    bottom:
      'after:left-1/2 after:-translate-x-1/2 after:-top-2 after:border-l-8 after:border-r-8 after:border-b-8 after:border-b-inherit after:border-l-transparent after:border-r-transparent',
    left: 'after:top-1/2 after:-translate-y-1/2 after:-right-2 after:border-t-8 after:border-b-8 after:border-l-8 after:border-l-inherit after:border-t-transparent after:border-b-transparent',
  };

  return (
    <div
      ref={itemRef}
      className='absolute z-10 transition-transform'
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
      }}
    >
      <div className={cn('relative group', sizes[size])}>
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md'></div>
        <div className='rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 border-2 border-white shadow-lg'>
          <Image
            src={imageSrc}
            alt='Profile'
            width={size === 'lg' ? 128 : size === 'md' ? 112 : 80}
            height={size === 'lg' ? 128 : size === 'md' ? 112 : 80}
            className='object-cover w-full h-full'
          />
        </div>

        {greeting && (
          <div
            className={cn(
              "absolute px-3 py-1.5 rounded-lg text-white font-medium text-sm md:text-base shadow-md after:absolute after:content-[''] after:border-solid z-20",
              bubblePositionClasses[bubblePosition],
              bubbleTailClasses[bubblePosition],
              greetingColor
            )}
          >
            {greeting}
          </div>
        )}
      </div>
    </div>
  );
};

interface CircleDecorProps {
  size: string;
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  opacity?: string;
}

const CircleDecor: React.FC<CircleDecorProps> = ({
  size,
  color,
  position,
  opacity = '0.7',
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    // More pronounced floating animation for decorative elements
    const floatAnimation = () => {
      const randomY = Math.random() * 16 - 8; // -8 to 8
      const randomX = Math.random() * 16 - 8; // -8 to 8
      const duration = 4 + Math.random() * 3; // 4-7 seconds

      circle.style.transition = `transform ${duration}s ease-in-out`;
      circle.style.transform = `translate(${randomX}px, ${randomY}px)`;

      setTimeout(floatAnimation, duration * 1000);
    };

    floatAnimation();

    return () => {
      if (circle) {
        circle.style.transition = '';
        circle.style.transform = '';
      }
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className={`absolute rounded-full ${size} ${color}`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        opacity,
      }}
    ></div>
  );
};

const ProfileGrid: React.FC = () => {
  return (
    <div className='relative w-full h-[500px] md:h-[600px] overflow-hidden'>
      {/* Decorative circles */}
      <CircleDecor
        size='w-8 h-8'
        color='bg-purple-500'
        position={{ top: '25%', right: '15%' }}
        opacity='0.6'
      />
      <CircleDecor
        size='w-10 h-10'
        color='bg-teal-500'
        position={{ bottom: '20%', right: '12%' }}
        opacity='0.5'
      />
      <CircleDecor
        size='w-12 h-12'
        color='bg-red-500'
        position={{ bottom: '35%', left: '15%' }}
        opacity='0.5'
      />
      <CircleDecor
        size='w-6 h-6'
        color='bg-blue-500'
        position={{ top: '20%', left: '20%' }}
        opacity='0.6'
      />

      {/* Profile images without greetings */}
      <ProfileItem
        imageSrc='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        position={{ top: '15%', left: '25%' }}
        size='md'
      />
      <ProfileItem
        imageSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
        position={{ top: '20%', right: '25%' }}
        size='lg'
      />
      <ProfileItem
        imageSrc='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
        position={{ bottom: '20%', left: '30%' }}
        size='md'
      />
      <ProfileItem
        imageSrc='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        position={{ bottom: '15%', right: '28%' }}
        size='lg'
      />
      <ProfileItem
        imageSrc='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
        position={{ top: '40%', left: '50%', right: 'auto' }}
        size='sm'
      />
    </div>
  );
};

export default ProfileGrid;
