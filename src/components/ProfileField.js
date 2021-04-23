import React, { useEffect } from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import SeparateText from './animations/SeparateText'
import { useInView } from 'react-intersection-observer';
import InfoBlock from './animations/InfoBlock'
// import avatarImage from 'images/avatar.jpg'
import Image from 'next/image'

const titleVariants = {
    initial:{
        opacity:0,
        x:20,
        transition:{
            ...defaultTransition,
            duration:0
        }
    },
    easeIn:{
        opacity:1,
        x:0,
        transition:{
            ...defaultTransition,
            duration:2,
        }
    }
}

const barVariant = {
    initial:{
        width:0,
        transition:{
            ...defaultTransition,
            duration:0
        }
    },
    easeIn:{
        width:'30rem',
        transition:{
            ...defaultTransition,
            duration:2,
        }
    }
}


const ProfileField = (props) => {
    const { hashTag } = props
    const titleControls = useAnimation()
    const infoBlockControls = useAnimation()
    const options = {
        threshold:0.6
      }
    const { ref, inView } = useInView(options);

    useEffect(async () => {
        if(inView){
            await titleControls.start('splitTitle')
            await titleControls.start('exitTitle')
            await infoBlockControls.start('easeIn')
        }else{
            await titleControls.start('initial')
            await infoBlockControls.start('initial')
        }
    }, [inView])


    return (
        <motion.div ref={ref} className=' min-h-screen min-w-screen relative bg-white'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <SeparateText 
                    innerText={'About me'}
                    outerText={'关于我'}
                    controls={titleControls}
                />
            </div>

            <motion.div initial='initial' animate={infoBlockControls} transition={{staggerChildren:0.1}} className='p-16 h-full w-full relative'>
                <motion.div variants={titleVariants} className='text-black text-4xl'>
                    {'Me.about()'}
                </motion.div>
                <motion.div variants={barVariant} className='h-0.5 bg-deepGray mt-4 mb-8'/>
                <div className='flex flex-row'>
                    <motion.div variants={titleVariants}>
                        <Image
                            src="/images/avatar.jpg"
                            alt="Picture of the author"
                            width={150}
                            height={150}
                            className='object-fit rounded-full'
                        />
                    </motion.div>
                    <div className='leading-10 text-2xl ml-8'>
                        <motion.div variants={titleVariants}>Hi, I'm Xingyu Li.</motion.div>
                        <motion.div variants={titleVariants}>Master of Artificial Intelligence and Information Technology from University of NSW.</motion.div>
                        <motion.div variants={titleVariants}>3 years of font-end, back-end and UI/UX work experience.</motion.div>
                        <motion.div variants={titleVariants}>I'm focusing on web/mobile app dev using big data, AI, data mining and crawling, data analytics, react, react native, Node.js etc.</motion.div>
                        <motion.div variants={titleVariants}>Powered by VSCode, Cola and Animation, I turn the requirements into high-designed professional products.</motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProfileField
