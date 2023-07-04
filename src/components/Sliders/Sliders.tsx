import React from "react";
import banner_one from "../../../public/images/banner-1.png";
import banner_two from "../../../public/images/banner-2.png";
import banner_three from "../../../public/images/banner-3.png";
import arrow from "../../../public/images/arrow.svg";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import style from "./Sliders.module.scss";

const Sliders = () => {
    return (
        <div className={style.container}>
            <Swiper
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide className={style.box_img}>
                    <Image priority={true} className={style.img} src={banner_one} alt="banner_one" />
                </SwiperSlide>
                <SwiperSlide className={style.box_img}>
                    <Image priority={true} className={style.img} src={banner_two} alt="banner_two" />
                </SwiperSlide>
                <SwiperSlide className={style.box_img}>
                    <Image priority={true} className={style.img} src={banner_three} alt="banner_three" />
                </SwiperSlide>
            </Swiper>
            <div className={style.block}>
                <p className={style.block_text}>Change old book on new</p>
                <button className={style.block_button}>
                    <Image src={arrow} alt="arrow" />
                </button>
            </div>
            <div className={style.blockTwo}>
                <p className={style.block_text}>top 100 books 2022</p>
                <button className={style.block_button}>
                    <Image src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Sliders;
