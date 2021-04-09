import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { defaultTransition } from 'helper/animationHelper'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
        y: 100,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1,
        transition: { duration: 1, ...transition },
    },
};

const TitleEaseIn = (props) => {
    const { leftTitle='Firstname', rightTitle='Lastname' } = props
    const leftLetters = leftTitle.split('')
    const rightLetters = rightTitle.split('')
    return (
        <motion.div  initial='initial' animate='animate' transition={defaultTransition}>
            <motion.span className='inline-block' variants={firstName}>
                {leftLetters.map((char,index)=>
                    <motion.span className='inline-block' variants={letter} index={index}>
                        {char}
                    </motion.span>
                )}
            </motion.span>
            <motion.span className='inline-block' variants={lastName} className='ml-8'>
                {rightLetters.map((char,index)=>
                    <motion.span className='inline-block' variants={letter} index={index}>
                        {char}
                    </motion.span>
                )}
            </motion.span>
        </motion.div>
    )
}

export default TitleEaseIn
