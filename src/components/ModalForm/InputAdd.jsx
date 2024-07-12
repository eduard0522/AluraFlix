import { forwardRef } from "react";


const InputAdd  =  forwardRef(( { placeholder,error, label, ...props}, ref) => {
  return(
      <div className="flex flex-col gap-3">
        <label 
            className="text-whiteColor" 
        > { label} </label>

        <input
          {...props}
          type="text"   
          ref={ref}
          className="w-full border-2 border-gray-300 py-2 px-4 rounded-xl outline-none bg-transparent "  
          placeholder={placeholder}
        />

        { error && <label> {error.message}  </label> }
      </div>
  )
})

export default InputAdd