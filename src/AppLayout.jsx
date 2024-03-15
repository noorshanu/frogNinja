import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";

function AppLayout() {
  return (
    <>
    
        <Navbar />
        <main className=" pt-2 bg-main">
        <Hero />
      </main>
      <div className=" h-[70px] border-t-2 border-b-2 py-4 border-[#751717] mb-2 ">
      <a href="https://solscan.io/token/nPQTtFaZXWJNCshUAhTh67Vqb2RoGoEr4z8n5fVp9pN" target="_blank" className="my-2 flex justify-center text-base text-center text-white  sm:text-xl">
            {" "}
            Contract : nPQTtFaZXWJNCshUAhTh67Vqb2RoGoEr4z8n5fVp9pN
          </a>
      </div>
      <div>
        <AboutUs />

        <div className=" mt-4">

         <Meme/>

        </div>

        <div className="container-wrapper mt-8">
          <div className=" flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              className="max-w-[7rem] w-full rounded-full"
              alt=""
            />

            <p className=" text-2xl font-medium">KingPepe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
