
import { useEffect, useRef, useState } from 'react'
import TitleEaseIn from 'components/animations/TitleEaseIn'
import FloatActionsBar from 'components/animations/FloatActionsBar'

const HomeField = (props) => {
    return (
      <div className='h-screen w-full relative'>
        <div className='text-gray-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl'>
          <TitleEaseIn leftTitle='Xingyu' rightTitle='Li'/>
        </div>
        <FloatActionsBar/>
      </div>
    )
}

export default HomeField
