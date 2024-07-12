function ButtonShadowBlue({text, type = "button"}) {
  return(
    <button type={ type } 
    className=" py-2 px-12 rounded-xl bg-transparent border-4 border-BluePoyect text-BluePoyect shadow-[inset_0_0_10px_0px_#2271D1]">
      {text}
    </button>
  )
}

export default ButtonShadowBlue