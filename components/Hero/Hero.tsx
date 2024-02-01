import React from 'react'
import Image from 'next/image'
import Container from "../Container/Container"
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FiSearch } from "react-icons/fi";


const Hero = () => {
  return (
    <>
      <div className="_hero bg-hero bg-cover py-28 bg-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="">
              <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-6xl text-gray-700'>
                Find Your Best <br />
                <span className="text-primary">
                  Dream Car for <br /> Rental.
                </span>
              </h1>
              <p className='font-semibold text-lg mt-4 text-gray-700'>
                Drive the Extraordinary: Rent a Car, Elevate Your Dubai Experience. <br /> Unmatched Luxury, Unforgettable Journeys.
              </p>

              <Button text='Book Now' className='mt-4'  />

            </div>
            <div className="max-sm:hidden">
              <Image priority className='object-contain' src="/car-right.png" width={546} height={358} alt='hero' />
            </div>
          </div>

        </Container>
      </div>
      <Container>
        <div className="relative h-28 shadow-xl flex items-center px-4 shadow-gray-300 rounded-lg -mb-14 -top-14 bg-light max-w-4xl m-auto">
          <Input placeholder='Search' /> <Button text='Search' className='ml-4' icon={<FiSearch />} />
        </div>
      </Container>
    </>

  )
}

export default Hero