import EBucket_Landing from "../img/landing.png";

const UpperSide = () => {
  return (
    <div className="lg:h-screen bg-white ">
      <div className="grid lg:grid-cols-2 container mx-auto px-4">
        {/* Upper Left Section   */}
        <div className="mt-5 md:mt-10 lg:my-auto 2xl:mt-96 max-w-lg mx-auto lg:mr-0 ">
          <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-6xl 2xl:text-9xl font-bold content-center">
            <span
              className="app-name-heading text-4xl"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              E-Bucket
            </span>
          </h1>
          <div
            className="mt-2 2xl:mt-5 text-lg 2xl:text-4xl text-center lg:text-left"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            A E-Commerce App Clone Made in Flutter Where You Can Add Products
            with Category and Description, Also You Can Add Products to your
            Cart As Well.
            <p
              className="text-[#007cd6] font-semibold inline cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="3000"
              onClick={() => {
              
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              {" "}
              Scroll Down to Learn More
            </p>
          </div>
          <div
            className="w-full lg:w-36 2xl:w-60 align-center flex justify-center md:flex-none md:justify-center mt-5 2xl:mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1800"
          >
            <button
              className="transition duration-500 border-0 text-lg h-12 2xl:h-20 text-center w-36 2xl:w-56 text-white px-3 rounded-md btn hover:shadow-2xl"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ZwqLPUVxeekkj2g8sogE7J5mXqujp2-b/view?usp=sharing",
                  "_blank"
                )
              }
            >
              {" "}
              <span className="2xl:text-3xl">Download</span>{" "}
              <i className="bx bx-down-arrow-alt animate-bounce text-xl"></i>
            </button>
          </div>
        </div>

        {/* Upper Right Section */}
        <div
          className="h-screen mx-auto hidden lg:block 2xl:h-2/5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img
            src={EBucket_Landing}
            alt="Generation Home Page"
            className="object-cover h-full generatio-home-mockup"
          />
        </div>
      </div>

      {/* For Mobile and Tab View */}
      <div
        className="h-screen lg:hidden flex justify-center"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <img
          src={EBucket_Landing}
          alt="Generation Home Page"
          className="object-cover h-full generatio-home-mockup"
        />
      </div>
    </div>
  );
};

export default UpperSide;
