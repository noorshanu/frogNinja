function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <h4 className="mt-4 text-2xl text-center font-ninja text-[#a1ff3c]">
          NinjaFrog : The Legendary Solana Sensation! 🐸
          </h4>

          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <h1 className=" font-ninja text-5xl my-4">Ninja Frog </h1>

              <p className=" text-base sm:text-xl">Hop on board, fellow meme enthusiasts and crypto adventurers! Welcome to the realm of NinjaFrog , the ultimate fighter frog of the Solana blockchain!</p>
              <p className=" text-base sm:text-xl py-2">
              NinjaFrog  isn't just your average meme; it's a force to be reckoned with! With lightning speed, unbeatable strength, boundless energy, and a charm that'll make even the toughest whales swoon, NinjaFrog  is here to take the Solana community to the moon and beyond!
              </p>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="py-2 text-base uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  buy now
                </a>
                <a
                  href="https://t.me/ninjafrogs"
                  className="text-base py-2 uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#a1ff3c] to-[#C9A900] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  join telegram
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto" />
              </div>

         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
