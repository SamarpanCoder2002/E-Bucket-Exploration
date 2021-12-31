const ExtraSection = () => {
  return (
    <div className="mt-10 w-full bg-background">
      <DesignFooter />
    </div>
  );
};

const DesignFooter = () => {
  return (
    <div className="container mx-auto p-5 px-10">
      {/* Lower Fist Section   */}
      <div className="grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-md md:text-2xl 2xl:text-4xl">
            🙋 Designed and Developed by
            <span className="font-bold" style={{ letterSpacing: "0.6px" }}>
              {" "}
              Samarpan Dasgupta
            </span>
          </p>
          <br />
        </div>

        <div className="text-center lg:text-right my-auto mt-5 lg:mt-0">
          <i
            className="bx bxl-github bx-md mr-10 cursor-pointer"
            style={{ color: "#171515" }}
            onClick={() => {
              window.open(
                "https://github.com/SamarpanCoder2002/E-Bucket.git",
                "_blank"
              );
            }}
          ></i>
          <i
            className="bx bxl-youtube bx-md cursor-pointer"
            style={{ color: "red" }}
            onClick={() => {
              window.open("https://youtu.be/nxZa9D8_wrc", "_blank");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
