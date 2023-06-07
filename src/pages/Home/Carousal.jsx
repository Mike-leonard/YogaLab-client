import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper";

import img1 from "../../assets/carousal/yoga-1.webp"
import img2 from "../../assets/carousal/yoga-2.jpg"
import img3 from "../../assets/carousal/yoga-3.jpeg"
import img4 from "../../assets/carousal/yoga-4.webp"

const Carousal = () => {
    return (
        <div className="overflow-x-hidden">
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectCube, Pagination]}
                className="max-w-full"
            >
                <SwiperSlide className="bg">
                    <img src={img1} className="h-[500px] block w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg">
                    <img src={img2} className="h-[500px] block w-full"/>
                </SwiperSlide>
                <SwiperSlide className="bg">
                    <img src={img3}  className="h-[500px] block w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg">
                    <img src={img4}  className="h-[500px] block w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousal;