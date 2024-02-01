import React from 'react'

const Container = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div
            className='max-w-[1280px] m-auto px-4 max-sm:px-2'
        >
            {children}
        </div>
    )
}

export default Container