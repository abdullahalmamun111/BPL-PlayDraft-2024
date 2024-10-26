import React, { useEffect, useState } from "react";

const Availiable = ({handleChoosePlayerBtn}) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="mb-80">
      <h1 className="text-[28px] font-bold text-[#131313] mb-5">
        Available Players
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {players.map((player) => (
          <div className="card bg-base-100 shadow-md border-2 border-gray-300 px-5 py-5 space-y-3">
            <figure className="">
              <img
                src={player.image}
                alt="Shoes"
                className="rounded-xl w-full h-[200px]"
              />
            </figure>
            <div className="space-y-3">
              <h1 className="flex items-center gap-5 text-2xl font-bold"><span><img src="https://img.icons8.com/metro/26/administrator-male.png" alt="" /></span> {player.name}</h1>
              <div className="flex justify-between items-center border-b-2 pb-3">
                <p className="flex gap-2 text-24px font-semibold text-gray-500"><img className="w-[25px]" src="https://img.icons8.com/offices/30/flag.png" alt="" />{player.country}</p>
                <button className="btn btn-active btn-ghost">{player.role}</button>
              </div>
              <h3 className="text-xl font-bold">Rating</h3>
              <div className="flex justify-between">
                <p className="text-xl font-semibold">{player.playingStyle}</p>
                <p className="text-xl text-[#131313B3]">{player.playingStyle}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Price: ${player.biddingPrice}</p>
                <button onClick={()=> handleChoosePlayerBtn(player)} className="hover:bg-[#E7FE29] hover:text-gray-400 px-2 py-2 border-2 rounded-lg shadow-sm">Choose Player</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availiable;
