export default function Button({href,className,variant,children}){
    const addClassName = className ? `${className}` : ''
    const variants ={
        "outline-yellow": "border border-yellow-500 text-yellow-500",
        "yellow" : "bg-[#FFBA33] font-bold text-[#6A4029]",
        "White": "bg-white font-bold text-[#0B132A]",
       
    }
    const pickedVariant = variants[variant]
    return(
        <a href={href} className={`py-3 px-10 font-semibold text-base rounded-full inline-block ${pickedVariant} ${addClassName} `}>{children}</a>
    )
}