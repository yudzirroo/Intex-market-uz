import React from 'react'
import Heading from './Heading'

const Title = ({title}:{title: string}) => {
  return (
    <div className='bg-[var(--clr-green)] py-[20px] text-center'>
      <Heading classList='!text-[23px] md:!text-[50px]' tag='h1'>{title}</Heading>
    </div>
  )
}

export default Title