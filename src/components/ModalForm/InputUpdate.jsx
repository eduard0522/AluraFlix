import { forwardRef } from "react"

const  InputForm = forwardRef(({label,placeholder, ...props}, ref)  => {
  return(
    <div className="w-full flex flex-col gap-2">
      <label className="text-whiteColor text-xl" htmlFor={label}> {label} 
      </label>
      <input 
        type="text" 
        id={label}
        placeholder={placeholder}
        {...props} 
        ref={ref}
        className="w-full rounded-xl  border-2 border-BluePoyect bg-transparent px-4 py-2 outline-0 outline-transparent text-whiteColor"/>
    </div>
  )
})


export default InputForm