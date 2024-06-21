import { AiFillHome } from "react-icons/ai";

function ButtonHomeMovil() {
  return(
    <button className="flex gap-5 py-2 px-4 w-2/5 rounded-2xl bg-[#2271d15f] border-BluePoyect border-2 text-BluePoyect items-center text-2xl font-bold">
      <AiFillHome />
      <span> HOME </span>

    </button>
  )
}

export default ButtonHomeMovil