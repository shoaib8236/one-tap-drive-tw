import { InputProps } from '@/types/types'
import React from 'react'

const Input = (props: InputProps) => {

    const { type, placeholder, name, value, onChange, className, size, id } = props;


    const renderSize = () => {
        switch (size) {
            case 'sm':
                return 'py-2 px-4'
            case 'md':
                return 'py-3 px-5'
            case 'lg':
                return 'py-4 px-6'
            default:
                return 'py-3 px-5'
        }
    }

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={`${renderSize()} border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 ${className}`}

        />
    )
}

export default Input