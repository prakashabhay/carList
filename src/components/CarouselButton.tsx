import Image from "next/image";
import { Click } from "vcc-ui";
import styles from './Carousel.module.css'
import {ICON_SIZE} from '../utility/constant'

type CarouselNavigationButtonProps = {
  next: () => void;
  previous: () => void;
};

const CarouselNavigationButton: React.FC<CarouselNavigationButtonProps> = ({
    next,
    previous,
}) => (
  <div className={styles.buttonGroup}>
    <Click
      style={{ transform: "rotate(180deg)" }}
      onClick={() => {
        previous();
      }}
    >
      <Image
        src="/icons/chevron-circled.svg"
        alt="Prev"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </Click>
    <Click
      onClick={() => {
        next();
      }}
    >
      <Image
        src="/icons/chevron-circled.svg"
        alt="Next"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </Click>
  </div>
);

export default CarouselNavigationButton;
