
function SelectForm({titulo,opciones,color}) {
  
  return (
    <div className="w-full flex flex-col gap-3">
        <label
             htmlFor="grupo"
             className="text-whiteColor text-xl"
        > 
          {titulo}
        </label>

        <select name="grupo" id="grupo" 
          className="w-full rounded-xl  border-2  bg-transparent px-4 py-2 text-gray-300 outline-none"
          style={{ borderColor:`${color}`}}
        >
            { opciones.map(opcion => <option key={opcion.id} value={opcion.name} className="bg-BluePoyectDark"> {opcion.name } </option>)} 
        </select>
    </div>
  )
}

export default SelectForm