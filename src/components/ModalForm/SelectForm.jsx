import { forwardRef } from "react"

const  SelectForm = forwardRef(({opciones,color, label,error, ...props}, ref) => {
  
  return (
    <div className="w-full flex flex-col gap-3">
        <label
             htmlFor="grupo"
             className="text-whiteColor text-xl"
        > 
          {label}
        </label>

        <select name="grupo" id="grupo" 
          {...props}
          ref={ref}
          className="w-full rounded-xl  border-2  bg-transparent px-4 py-2 text-gray-300 outline-none"
          style={{ borderColor:`${color}`}}
        >
            { opciones.map(opcion => <option key={opcion._id} value={opcion.name} className="bg-BluePoyectDark"> {opcion.name } </option>)} 
        </select>

        { error && <label> {error.message } </label>  }
    </div>
  )
})

export default SelectForm