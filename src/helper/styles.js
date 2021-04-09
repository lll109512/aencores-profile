import classnames from 'tailwindcss-classnames'
export const animationRootClasses = (skillInView,educationInView)=>{
    return classnames('h-full','w-full','min-h-screen','overflow-y-hidden','relative','transition-colors',{
        'bg-gray-900':!skillInView && !educationInView,
        'bg-gray-800':skillInView,
        'bg-blue-800':educationInView,
      })
}