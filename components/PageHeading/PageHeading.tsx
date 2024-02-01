import { PageHeadingProps } from '@/types/types'
import React from 'react'

const PageHeading = (props: PageHeadingProps) => {

    const { title, subTitle, className } = props

    return (
        <div className='mb-10'>
            <h1 className={`text-center first-letter:text-primary ${className}`}>{title}</h1>
            <span className='block h-2 bg-gray-300 w-32 m-auto mt-4 rounded-lg max-sm:w-20 max-sm:mt-3'></span>
        </div>
    )
}

export default PageHeading