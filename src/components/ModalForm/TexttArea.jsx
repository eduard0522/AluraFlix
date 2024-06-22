

function TextArea({titulo,placeholder,color}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-whiteColor text-xl" htmlFor={titulo}> {titulo} 
      </label>
      <textarea id={titulo} placeholder={placeholder}
        className="w-full rounded-xl  border-2  bg-transparent px-4 py-2 outline-0 outline-transparent text-whiteColor" style={{borderColor:`${color}`}}/>
  </div>
  )
}

export default TextArea