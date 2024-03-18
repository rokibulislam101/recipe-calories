const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center flex-col h-screen  m-20 bg-[url('https://i.ibb.co/Jksjvqs/hero.png?fbclid=IwAR0gkAbTEZsdF3y8gh9LOUCGggTis27NFAVrEYggbcgy3FtMCrz1RCKDhIQ')] bg-no-repeat bg-cover  text-center space-y-4 rounded-3xl  text-white">
        <h1 className="text-6xl font-bold">
          Discover an exceptional cooking <br /> class tailored for you
        </h1>
        <p className="text-xl md:w-1/2 text-center">
          Discover an exceptional experience where every dish is tailored to
          your individual culinary aspirations, guided by expert chefs who will
          inspire and empower you to create masterpieces in the kitchen.
        </p>
        <div>
          <button className="btn bg-green-400 text-xl rounded-full ">
            Explore Now
          </button>
          <button className="btn ml-4 text-white  rounded-full bg-transparent text-xl border-sky-100 border-2">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
