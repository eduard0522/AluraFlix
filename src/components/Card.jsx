
import ButtonsCard from "./Buttons/ButtonsCard"


function CardVideo({ group }) {
  return(
    <div className=" min-w-[340px] mx-auto  h-72 rounded-xl overflow-hidden  sm:max-w-96">
        <div
          className= "w-full h-[218px]  bg-cover bg-no-repeat rounded-t-xl  border-4"
          style={{backgroundImage:`url(https://i.pinimg.com/originals/a9/95/63/a995634384bf179509c82723aa748af1.jpg)`,
             borderColor:`${group.color}`, boxShadow:`inset 0px 0px 17px 8px ${group.color}`
          }}
        > 
                      
        </div>
        <ButtonsCard color={group.color} />
          
    </div>
  )
}

export default CardVideo