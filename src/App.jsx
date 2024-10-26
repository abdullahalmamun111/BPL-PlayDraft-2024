import Banner from "./Components/Banner"
import Buttons from "./Components/Buttons"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isActive, setIsActive] = useState({
    availiable : true,
    status :"availiable"
  })
  const[freeClaim, setFreeClaim] = useState(0)
  const[selected, setSelected] = useState([]);
  const[deletePlayer, setDeletePlayer] = useState([]);
  // available section and selected button toggle functionality here

const handleToggleSection = (status) => {
if(status === "availiable"){
  setIsActive(
    {
      availiable : true,
      status :"availiable"
    }
  )
}
else{
  setIsActive(
    {
      availiable : false,
      status :"selected"
    }
  )
}
}
// free claim creadit button functionality
const handleFreeClaimBtn = (claimAmount) => {
 setFreeClaim(freeClaim + claimAmount);
}
// choose player button functionality
const handleChoosePlayerBtn = (player) => {

const isExist = selected.find(prevSelect => prevSelect.playerId === player.playerId );
const isplayerExist = selected.length === 6 ;
  if(freeClaim < player.biddingPrice){
    toast.error('!Not enough money to buy this player.Claim some Creadit'
      , {
        position: "top-center",
        autoClose: 2000
        }
    );
  }
  else if(!isExist && !isplayerExist){
    toast.success(`Congrates!${player.name} is now in your squad`
      , {
        position: "top-center",
        autoClose: 2000
        }
    );
      setSelected([...selected, player])
      setFreeClaim(freeClaim - player.biddingPrice )
  }

  else if(selected.length === 6){
    setSelected(selected)
    setFreeClaim(freeClaim)
    toast.error('Sorry, your player purchase limit has expired !'
      , {
        position: "top-center",
        autoClose: 2000
        }
    )
  }
  else{
      
    toast.warn('Player already selected'
      , {
        position: "top-center",
        autoClose: 2000
        }
    )
  }

}

// delete player button functionality
const handleDelete = (id,price) => {

// const deletedPlayer = selected.find(player => player.playerId === id)

const updatePlayer = selected.filter(player =>player.playerId !== id)
setSelected(updatePlayer);

  // We can add this functionality if we want to get back the price we bought the player after clicking the delete button. It was not in your requirement so I did not comment it. below that.. 
// setDeletePlayer([...deletePlayer, deletedPlayer])
// setFreeClaim(freeClaim + price)

toast.info('Player removed!'
  , {
    position: "top-center",
    autoClose: 2000
    }
)
}

// Add to more player button functionality
const handleAddToMore =(status) => {
  if(status === "availiable"){
    setIsActive(
      {
        availiable : true,
        status :"availiable"
      }
    )
  }
  else{
    setIsActive(
      {
        availiable : false,
        status :"selected"
      }
    )
  }
}
  return (
    <>
     <div className="container mx-auto px-1">
     <Header freeClaim={freeClaim}></Header>
     <Banner
     handleFreeClaimBtn={handleFreeClaimBtn}
     ></Banner>
     <Buttons 
     isActive={isActive}
     handleToggleSection={handleToggleSection}
     handleChoosePlayerBtn={handleChoosePlayerBtn}
     selected={selected}
     handleDelete={handleDelete}
     handleAddToMore={handleAddToMore}
     ></Buttons>
     
     </div>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
