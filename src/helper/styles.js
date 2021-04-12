import classnames from 'tailwindcss-classnames'
export const animationRootClasses = (skillInView,educationInView)=>{
    return classnames('h-full','w-full','min-h-screen','overflow-y-hidden','relative','transition-colors',{
        'bg-black':!skillInView && !educationInView,
        'bg-black':skillInView,
        'bg-black':educationInView,
      })
}