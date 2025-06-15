import React from 'react';
import Image from 'next/image';

const ProfileGrid = () => {
  return (
    <div>
      <div className='w-full h-[300px] p-5'>
        <Image
          src={
            'https://res.cloudinary.com/dlahyjhur/image/upload/v1747656124/pointing-at-laptop_k74oyb.jpg'
          }
          alt={'coding'}
          width={800}
          height={300}
          className='w-full h-full object-cover rounded-tr-4xl  rounded-bl-4xl'
        />
      </div>
    </div>
  );
};

export default ProfileGrid;
