import React from "react";

function Meme() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
      <h2 className=" text-2xl py-2">A Meme Saga begins...</h2>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#a1ff3c] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">Telegram Games on Steriods</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/meme1.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">RPS(Rock-, Paper, Scissors), but make it epic with Milo 404. Battle ,win and vibe with your crypto crew on telegram all while bagging some sick NFT loot. it's not just a game; It's your new favorite pastime.</p>
          </div>
        </div>
        
        <div className="flex flex-col flex-wrap  justify-center items-center overflow-hidden rounded-xl border border-[#a1ff3c] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">NFT Wonderland</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/meme2.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">Enter the realm of Milo 404 NFTs, where your digital treasures unlock worlds of possibility. More than mere pixels, these gems get you VIP passes to the coolest crypto circuses in town. Arts? Check.
              </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#a1ff3c] w-[270px] h-[500px]">
          <div>
            <p className=" font-ninja">The Culture Coin of Solana</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/meme3.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">We're crafting more than a meme coin; we're cultivating a culture. With Milo 404, every holder has a voice, and every opinion matters. 
            It's democracy, decentralization, and dank memes all rolled into one. Welcome to the family.</p>
          </div>
        </div>
       
       
       
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#a1ff3c] w-[270px]">
          <div>
            <p className=" font-ninja">Telegram Games on Steriods</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/meme4.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">RPS(Rock-, Paper, Scissors), but make it epic with Milo 404. Battle ,win and vibe with your crypto crew on telegram all while bagging some sick NFT loot. it's not just a game; It's your new favorite pastime.</p>
          </div>
        </div>
{/*         
        <img
          src="images/meme2.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        />
        <img
          src="images/meme3.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        /> */}
      </div>
    </div>
  );
}

export default Meme;
