import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import { defaultTransition } from 'helper/animationHelper'

const transition = { ...defaultTransition, duration: 1.2, delay:2.2 };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 0,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1,
        transition: { ...transition, duration: 1, },
    },
    moveToLeft:{
        x:-500,
        y:-100,
        transition:{
            ...transition,
            duration: 1 
        }
    }
};

const titleVariants = {
    initial:{
        x:30,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition: { ...transition,delay:2.3 },
    }
}

const locationVariants = {
    initial:{
        x:30,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition: {...transition,delay:2.5  },
    }
}

const TitleEaseIn = (props) => {
    const { leftTitle='Firstname', rightTitle='Lastname', title='FULLSTACK ENGINEER & ART HOBBYIST', location='CHINA, SHAANXI' } = props
    const leftLetters = leftTitle.split('')
    const rightLetters = rightTitle.split('')
    const controls = useAnimation()
    useEffect(async () => {
        await controls.start('animate')
        // await controls.start('moveToLeft')
    }, [])
    return (
        <motion.div initial='initial' animate={controls} transition={defaultTransition}>
            <div>
                <motion.span className='inline-block' variants={firstName}>
                    {leftLetters.map((char,index)=>
                        <motion.span className='inline-block select-none' variants={letter} index={char}>
                            {char}
                        </motion.span>
                    )}
                </motion.span>
                <motion.span className='inline-block' variants={lastName} className='ml-8'>
                    {rightLetters.map((char,index)=>
                        <motion.span className='inline-block select-none' variants={letter} index={char}>
                            {char}
                        </motion.span>
                    )}
                </motion.span>
            </div>
            <motion.div variants={titleVariants} className='text-base mt-4 select-none'>
                <motion.span className='opacity-70'>{title}</motion.span>
            </motion.div>
            <motion.div variants={locationVariants} className='text-base my-2 select-none'>
                <motion.span className='opacity-70'>{location}</motion.span>
            </motion.div>
        </motion.div>
    )
}

export default TitleEaseIn
