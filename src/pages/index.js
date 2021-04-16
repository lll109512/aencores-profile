
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SEO from 'components/layout/SEO'
import CoverEaseIn from 'components/animations/CoverEaseIn'
import CoverEaseOut from 'components/animations/CoverEaseOut'
import TitleEaseIn from 'components/animations/TitleEaseIn'
import FloatActionsBar from 'components/animations/FloatActionsBar'
import SkillField from 'components/SkillField'
import { animationRootClasses } from 'helper/styles'
import ScrollBlock from 'components/layout/ScrollBlock'
import { useInView } from 'react-intersection-observer';
import classnames from 'tailwindcss-classnames'

export default function Home() {
  const options = {
    threshold:0.2
  }
  // const { ref:skillRef, inView:skillInView } = useInView(options);
  // const { ref:educationRef, inView:educationInView } = useInView(options);
  return (
    <div className={'h-full','w-full','min-h-screen','overflow-y-hidden','relative','transition-colors'} style={{transitionDuration:'1000ms'}}>
      <SEO title='Hello'/>
      <CoverEaseIn/>
      <div className='h-screen w-full relative'>
        <div className='text-gray-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl'>
          <TitleEaseIn leftTitle='Xingyu' rightTitle='Li'/>
        </div>
        <FloatActionsBar/>
      </div>
      <div>
        <SkillField/>
      </div>
      {/* <ScrollBlock 
        ref={skillRef}
        title={
          <div className='text-gray-50 text-5xl'>
            Skills
          </div>
        }
      >
        <div>
          <Link href='/more'>
          more
          </Link>
        </div>
      </ScrollBlock>
      <ScrollBlock 
        ref={educationRef}
        title={
          <div className='text-gray-50 text-5xl'>
            Education
          </div>
        }
      >
        <div>
          123
        </div>
      </ScrollBlock> */}

    </div>
  )
}
