import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselButton from "./CarouselButton";
import useMediaQuery from '../utility/useMediaQuery'

const ProductCarousel: React.FC = ({children}) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1599 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1599, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 480 },
      items: 2,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 479, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };
const isMobile =  useMediaQuery('(min-width: 1023px)')
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      autoPlay ={false}
      minimumTouchDrag={80}
      partialVisible
      ssr // means to render carousel on server-side.
      showDots={!isMobile}
      renderButtonGroupOutside
      customButtonGroup={ isMobile ?<CarouselButton next={()=> {}} previous={()=> {} } />:null}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
        {children}
    </Carousel>
  );
};

export default ProductCarousel;
