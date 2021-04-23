import React from 'react'

const ColorTransBlock = (props) => {
    const { transInColor, transOutColor } = props
    console.log(transInColor,transOutColor)
    return (
        <div className={`h-32 w-full`} style={{
            background: 'rgb(0,0,0)',
            background: `linear-gradient(4deg, ${transInColor} 0%, ${transInColor} 50%, ${transOutColor} 50%, ${transOutColor} 100%)`
        }}>
            
        </div>
    )
}

export default ColorTransBlock
