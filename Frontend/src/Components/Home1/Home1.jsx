import "./Home1.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { bannerImages } from "../../utils/constants";

const Home1 = () => {
  return (
    <div className="home-1">
      <div className="banner-main">
        <Splide
          options={{
            pagination: false,
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            autoplayInterval: 1000,
          }}
        >
          {bannerImages.map((data) => (
            <SplideSlide key={data}>
              <img src={data} alt="img" className="banner-img" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Home1;
