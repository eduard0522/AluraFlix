import { clsx } from "clsx"

function ButtonTecnologi({color, titulo}) {
  return(
    <div className="w-72 h-[60px] rounded-2xl flex items-center justify-center md:self-center" style={{ background:`${color}`}}>
        <h2 className="text-2xl text-whiteColor font-bold"> { titulo } </h2>
    </div>
  )
}

export default ButtonTecnologi