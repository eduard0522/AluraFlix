import Logo from '/Logo.svg'

function Footer() {
  return(
    <div className='w-full py-4 bg-black flex items-center justify-center border-t-4 border-BluePoyect shadow-[inset_2px_0px_17px_1px_#2271D1]'> 
        <img src={Logo} alt="Logo aluraflix" className='w-[200px]' />
    </div>
  )
}

export default Footer