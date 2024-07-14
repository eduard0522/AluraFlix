import { forwardRef } from "react"


const TextArea = forwardRef(({label,placeholder,color, error , ...props}, ref) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-whiteColor text-xl" htmlFor={label}> {label} 
      </label>
      <textarea id={label} placeholder={placeholder} {...props} ref={ref}
        className="w-full rounded-xl  border-2  bg-transparent px-4 py-2 outline-0 outline-transparent text-whiteColor" style={{borderColor:`${color}`}}/>

        { error && <label> {error.message} </label>}
  </div>
  )
})

export default TextArea