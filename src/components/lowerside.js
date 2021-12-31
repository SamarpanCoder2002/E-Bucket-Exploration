import ProductShowCase from "../img/product-showcase.png";
import ProductList from "../img/products-list.png";
import Search from "../img/search.png";
import Suggestion from "../img/suggestions.png";

const LowerSide = () => {
  return (
    <div className="w-full">
      <div className="text-center mt-3 text-2xl font-semibold">
        App Screen Images
      </div>
      
      <div className="flex flex-wrap">
        {[ProductList, ProductShowCase, Suggestion, Search].map(
          (productPicName, index) => (
            <div
              className="h-screen mx-auto 2xl:h-2/5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              key={index}
            >
              <ImageShow productPicName={productPicName}  />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const ImageShow = ({ productPicName }) => {
  return (
    <img
      src={productPicName}
      alt="App Screen Collection"
      className="object-cover h-full generatio-home-mockup"
    />
  );
};

export default LowerSide;
