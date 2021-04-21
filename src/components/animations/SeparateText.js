import React from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"


const outerTextVariants = {
    initial:{
        opacity:1,
    },
    splitTitle:{
        opacity:0.7,
        transition:{
            ...defaultTransition,
            delay:0.5
        }
    },
    exitTitle:{
        opacity:0,
        transition:{
            delay:0.5,
            ...defaultTransition,
        },
    }
}

const innerTextVariants = {
    initial:{
        opacity:0,
    },
    splitTitle:{
        opacity:1,
        transition:{
            ...defaultTransition,
            delay:1
        }
    },
}

const innerBlockVariants = {
    initial:{
        opacity:1,
        scaleY:0,
        translateY:'3.5rem'
    },
    splitTitle:{
        scaleY:1,
        translateY:'3.5rem',
        transition:{
            ...defaultTransition,
            delay:0.5
        }
    },
    exitTitle:{
        opacity:0,
        transition:{
            ...defaultTransition,
            delay:1,
        },
    }
}


const SeparateText = (props) => {
    const { innerText, outerText, controls } = props

    return (
        <motion.div animate={controls} className='relative flex flex-col items-center'>
            <motion.div variants={innerBlockVariants} className='px-12 text-gray-50 text-4xl bg-black overflow-hidden' style={{zIndex:1}}>
                <motion.div variants={innerTextVariants} className='select-none overflow-hidden'>
                    {innerText}
                </motion.div>
            </motion.div>
            <motion.div variants={outerTextVariants} className='text-gray-50 text-7xl bg-black select-none'>
                {outerText}
            </motion.div>
        </motion.div>
    )
}

export default SeparateText
