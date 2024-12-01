import React from 'react';
import CustomLink from './CustomLink';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className='grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px] scroll-mt-28'>
      <div>
        <p className='text-lg mb-1'>Hii I am</p>
        <h1 className='font-title tracking-wider text-3xl sm:text-6xl -ml-0.5'>Front-End Developer</h1>
        <p className='text-zinc-300 mt-2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia a excepturi possimus repellat quas quisquam harum reiciendis at fugiat, voluptatum sequi ducimus placeat rem corrupti, omnis alias laborum aliquid nulla?
        </p>
        <CustomLink href="#project"  className='mt-4 w-32 justify-center'>My Work</CustomLink>
      </div>

      <div className='hidden md:flex w-full h-full relative overflow-hidden'>
      <Image src="/profile-1.png" alt="profile image" width={600} height={600} className='object-cover object-top w-full h-full self-end' />
        <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent'></div>
      </div>
    </section>
  );
};

export default HeroSection;
