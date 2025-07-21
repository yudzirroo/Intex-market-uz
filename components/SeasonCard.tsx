import React from 'react'
import Heading from './Heading'

const SeasonCard = ({index, title, text}: {index: number, title: string, text: string}) => {
  return (
    <div className='w-[340px] h-[126px] flex bg-[var(--clr-green)] gap-[19px] py-[10px] px-[15px] rounded-tr-[40px] rounded-bl-[40px]'>
        <Heading tag='h1' classList='!text-[65px] leading-[100%]'>{index}</Heading>
        <div className='flex flex-col justify-around'>
            <Heading classList='!text-[24px]' tag='h2'>{title}</Heading>
            <p className='font-normal text-[13px]'>{text}</p>
        </div>
    </div>
  )
}

export default SeasonCard