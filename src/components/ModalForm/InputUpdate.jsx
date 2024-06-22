function  InputForm({titulo,placeholder}) {
  return(
    <div className="w-full flex flex-col gap-2">
      <label className="text-whiteColor text-xl" htmlFor={titulo}> {titulo} 
      </label>
      <input type="text"  id={titulo} placeholder={placeholder}
         className="w-full rounded-xl  border-2 border-BluePoyect bg-transparent px-4 py-2 outline-0 outline-transparent text-whiteColor"/>
    </div>
  )
}

export default InputForm