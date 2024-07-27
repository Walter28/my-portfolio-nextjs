import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

function Clients() {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Kind words from
            <span className='text-purple'> satisfied clients</span>
        </h1>
        <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center relative overflow-hidden'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {companies.map(({ id, img, name, nameImg }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-24 w-20' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients