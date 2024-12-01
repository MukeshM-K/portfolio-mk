import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { socialLinks } from '@/app/data/socialLinks'
import CustomLink from './CustomLink'

const AboutSection = () => {
  return <section id='about' className='scroll-mt-28'>
    <Heading title="About me" desc="Let me know something about me" />

<div className='flex gap-4 flex-col md:flex-row items-center'>
    <div className='h-80 w-80 shrink-0 overflow-hidden rounded-full'>
        <Image src="/profile-3.jpg" alt='' width={600} height={600} className='w-full h-full object-top object-cover'/>
    </div>

    <div className='flex flex-col gap-2 mt-4'>
    <p>Hii 👋🏻. I am Mukesh Kumar</p>
    <p className='text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in, magnam perspiciatis quibusdam quasi maxime error est nulla delectus cum sapiente, unde adipisci voluptatem vel, quisquam aliquid officia soluta voluptatum.</p>
    <ul className='flex gap-2 sm:justify-center md:justify-normal'>
        {socialLinks.map(({ icon: Icon, href}, index) => {
            return (
                <li key={index}>
                    <CustomLink href={href} linkType='secondary' className='w-10 h-10 p-0 rounded-full flex justify-center items-center'>
                     <Icon className='text-xl shrink-0' />
                    </CustomLink>
                </li>
            )
        })}
    </ul>
    </div>

</div>

  </section>
   
}

export default AboutSection
