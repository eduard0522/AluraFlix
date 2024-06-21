
function ButtonTecnologi({color, titulo}) {
  return(
    <button className="rounded-2xl inline py-4 px-16 lg:px-24 text-2xl lg:text-3xl text-whiteColor font-bold" style={{ background:`${color}`}}>
      {titulo}
    </button>
  )
}

export default ButtonTecnologi