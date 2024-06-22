import { TiHome } from "react-icons/ti";

function ButtonHomeMovil() {
  return(
    <button 
         className="flex gap-5 py-2 px-4  rounded-2xl bg-[#2271d15f] border-BluePoyect border-2 text-BluePoyect items-center text-2xl font-bold">
      <TiHome  className="text-4xl"/>
      <span> HOME </span>
    </button>
  )
}
export default ButtonHomeMovil