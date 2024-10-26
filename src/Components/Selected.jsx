

const Selected = ({selected,handleDelete,handleAddToMore}) => {
    return (
        <div className='mb-80'>
            <h1 className="text-[28px] font-bold text-[#131313] mb-5">
            Selected Players ({selected.length}/6)
            </h1>
            <div>
                {
                selected.map(select => <div className='flex justify-between w-full items-center p-2 border-2 border-gray-400 rounded-xl mb-5'>
                    <div className='flex gap-4 items-center'>
                    <div><img className='w-[70px] h-[70px] rounded-xl' src={select.image} alt="" /></div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl font-bold'>{select.name}</h1>
                        <p className='text-gray-500'>{select.playingStyle}</p>
                        <p className='text-gray-500'>Price: {select.biddingPrice}</p>
                    </div>
                    </div>
                    <div><button onClick={() =>handleDelete(select.playerId,select.biddingPrice)}><img src="https://img.icons8.com/color/48/delete-forever.png" alt="" /></button></div>
                </div>)
                }
            </div>

            <div className='border-2 border-gray-500 rounded-xl w-[200px] flex justify-center'><button onClick={()=>handleAddToMore('availiable')} className='w-[184px] h-[48px] bg-[#E7FE29] rounded-xl text-[#131313] text-[18px] m-1'>Add More Player</button></div>
    
        </div>
        
    );
};

export default Selected;