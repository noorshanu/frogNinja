function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <h4 className="mt-4 text-2xl text-center font-ninja text-[#a1ff3c]">
            King PEPE is the real king of the Solana meme world
          </h4>

          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <h1 className=" font-ninja text-5xl my-4">FrogNinja</h1>

              <p className=" text-xl">Welcome to the kingdom of King Pepe, where memes meet crypto in a fusion of fun and fortune! King Pepe is not just another meme coin; we're on a mission to become the one true ruler of Solana's meme realm. King Pepe brings you endless excitement, hype on every pump, and best of all, a 0% fee on all purchases for our beloved holders!</p>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="py-2 text-base uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  buy now
                </a>
                <a
                  href="https://t.me/kingpepeso"
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
