import React from 'react'
import CoverEaseIn from 'components/animations/CoverEaseIn'
import CoverEaseOut from 'components/animations/CoverEaseOut'

const more = (props) => {
    return (
        <div className='bg-gray-800 h-full w-full min-h-screen flex'>
            <CoverEaseIn/>
            <CoverEaseOut/>
            <div className='text-gray-50'>more</div>
        </div>
    )
}

export default more
