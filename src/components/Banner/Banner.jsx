const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/images/user.png"
            className="max-w-xl "
          />
          <div className="">
            <h1 className="text-5xl font-bold leading-snug">One Step <br />Closer To Your <br /> <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Dream Job</span></h1>
            <p className="py-4 w-[450px] leading-loose text-md text-gray-500">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-[#6573CB] to-[#7A5CCC] ... text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
