
function InputAdd({titulo,placeholder}) {
  return(
      <div className="flex flex-col gap-3">
        <label 
            htmlFor={titulo}
            className="text-whiteColor" 
        > { titulo} </label>

        <input
          type="text"   
          name={titulo} 
          className="w-full border-2 border-gray-300 py-2 px-4 rounded-xl outline-none bg-transparent "  
          placeholder={placeholder}
        />
      </div>
  )
}

export default InputAdd