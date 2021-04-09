import React, {forwardRef} from 'react'

const ScrollBlock = (props,ref) => {
    const {
        rootClasses,
        title,
        children,
        leftClasses,
        rightClasses,
    } = props
    return (
        <div className={`min-h-screen flex relative ${rootClasses}`}>
            <div ref={ref} className={`flex-1 h-screen sticky top-0 relative ${leftClasses}`}>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {title}
                </div>
            </div>
            <div className={`w-screen flex-1 ${rightClasses}`}>
            {children}
            </div>
        </div>
    )
}

export default forwardRef(ScrollBlock)
