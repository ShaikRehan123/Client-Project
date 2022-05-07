/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const ImageSlideShow = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          alt="Cadence Architects"
          srcSet="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/NAVYAS-scaled.jpg?resize=750%2C456&#038;ssl=1 750w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/NAVYAS-scaled.jpg?resize=1000%2C608&#038;ssl=1 1000w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/NAVYAS-scaled.jpg?resize=1500%2C912&#038;ssl=1 1500w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/NAVYAS-scaled.jpg?resize=2500%2C1521&#038;ssl=1 2500w"
          sizes="auto"
          data-src="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/NAVYAS-scaled.jpg?resize=1000%2C608&#038;ssl=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Cadence Architects"
          srcSet="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/1-Badari-scaled.jpg?resize=750%2C456&#038;ssl=1 750w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/1-Badari-scaled.jpg?resize=1000%2C608&#038;ssl=1 1000w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/1-Badari-scaled.jpg?resize=1500%2C912&#038;ssl=1 1500w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/1-Badari-scaled.jpg?resize=1653%2C1521&#038;ssl=1 2500w"
          sizes="auto"
          data-src="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/1-Badari-scaled.jpg?resize=1000%2C608&#038;ssl=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Cadence Architects"
          srcSet="https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/Kowdiar-cover-scaled.jpg?resize=750%2C456&#038;ssl=1 750w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/Kowdiar-cover-scaled.jpg?resize=1000%2C608&#038;ssl=1 1000w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/Kowdiar-cover-scaled.jpg?resize=1500%2C912&#038;ssl=1 1500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/Kowdiar-cover-scaled.jpg?resize=2500%2C1521&#038;ssl=1 2500w"
          sizes="auto"
          data-src="https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/Kowdiar-cover-scaled.jpg?resize=1000%2C608&#038;ssl=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Cadence Architects"
          srcSet="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/end-1-scaled.jpg?resize=750%2C456&#038;ssl=1 750w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/end-1-scaled.jpg?resize=1000%2C608&#038;ssl=1 1000w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/end-1-scaled.jpg?resize=1500%2C912&#038;ssl=1 1500w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/end-1-scaled.jpg?resize=2500%2C1521&#038;ssl=1 2500w"
          sizes="auto"
          data-src="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/05/end-1-scaled.jpg?resize=1000%2C608&#038;ssl=1"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default ImageSlideShow;
