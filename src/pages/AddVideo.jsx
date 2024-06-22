import FormAddVideo from "../components/FormAddVideo"

function AddVideo() {
  
  return (
    <main className="bg-BluePoyectDark text-whiteColor min-h-[80vh] px-4 py-8">
      <div>    
        <h1 className="text-4xl font-semibold text-center mb-4"> NUEVO VIDEO </h1>
        <h2 className="text-center"> COMPLETE ESTE FORMULARIO PARA AGREGAR UNA NUEVA TARJETA DE VIDEO</h2>
      </div>

      <FormAddVideo />

    </main>
  )
}

export default AddVideo