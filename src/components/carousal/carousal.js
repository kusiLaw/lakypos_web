

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Devices from '../device';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousal({children}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <Devices img ={'./images/pos_1.png'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Devices img ={ './images/lakypos_2.PNG'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Devices laptop={false} img ={'./images/lakypos_1.PNG'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Devices laptop={false} img ={'./images/lakypos_5.PNG'}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
