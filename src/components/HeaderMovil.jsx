import Logo from '/Logo.svg'
function HeaderMovil() {
  return(
    <div className='w-full h-16 bg-black flex items-center justify-center border-b-4 border-BluePoyect shadow-[inset_2px_0px_17px_1px_#2271D1]'> 
        <img src={Logo} alt="Logo aluraflix" className='w-2/5' />
    </div>
  )
}

export default HeaderMovil