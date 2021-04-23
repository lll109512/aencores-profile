
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SEO from 'components/layout/SEO'
import CoverEaseIn from 'components/animations/CoverEaseIn'
import CoverEaseOut from 'components/animations/CoverEaseOut'
import TitleEaseIn from 'components/animations/TitleEaseIn'
import FloatActionsBar from 'components/animations/FloatActionsBar'
import SkillField from 'components/SkillField'
import HomeField from 'components/HomeField'
import ProfileField from 'components/ProfileField'
import { animationRootClasses } from 'helper/styles'
import ScrollBlock from 'components/layout/ScrollBlock'
import ColorTransBlock from 'components/layout/ColorTransBlock'
import { useInView } from 'react-intersection-observer';
import classnames from 'tailwindcss-classnames'
import { Element } from 'react-scroll'

const Home = (props) => {
  return (
    <div className={'h-full','w-full','min-h-screen','overflow-y-hidden','relative','transition-colors'} style={{transitionDuration:'1000ms'}}>
      <SEO title='Hello'/>
      <CoverEaseIn/>
      <Element name='home-element'>
        <HomeField/>
      </Element>
      <ColorTransBlock transInColor='rgb(234,241,240)' transOutColor='rgba(39, 39, 42)'/>
      <Element name="profile-element">
        <ProfileField/>
      </Element>
      <Element name="skill-element">
        <SkillField/>
      </Element>
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

export default Home