
 const Error = ( { message }) => {
  return (
<div className="text-center text-red-500 font-semibold text-2xl ">
  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-4xl font-bold text-gray-800"> { message} </h2>
  </div>
</div>
  )
}

export default Error