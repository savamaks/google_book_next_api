import React, { useEffect, useState } from "react";
import banner_one from "../../../public/images/banner-1.png";
import banner_two from "../../../public/images/banner-2.png";
import banner_three from "../../../public/images/banner-3.png";
import arrow from "../../../public/images/arrow.svg";
import Image from "next/image";

import "swiper/scss";
import "swiper/scss/pagination";
import style from "./Sliders.module.scss";
import { Arr } from "@/type";

const arr: Array<Arr> = [
    { name: "banner_one", url: banner_one },
    { name: "banner_two", url: banner_two },
    { name: "banner_three", url: banner_three },
];
const Sliders = (): JSX.Element => {
    const [count, setCount] = useState(0);
    let interval: any;
    // const mouseDown = () => {
    //     clearInterval(interval);
    // };
    // const mouseUp = () => {
    //     if (count >= 2) {
    //         setCount(0);
    //     } else {
    //         setCount((prev) => prev + 1);
    //     }
    // };
    const clickPoint = (e: any) => {
        setCount(+e.target.attributes["data-index"].textContent);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (count >= 2) {
                setCount(0);
            } else {
                setCount((prev) => prev + 1);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className={style.container}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image priority={true} className={style.img} src={arr[count].url} alt={arr[count].name} />
                <div className={style.box}>
                    {arr.map((el: Arr, index: number) => {
                        return (
                            <div
                                onClick={clickPoint}
                                data-index={index}
                                key={index}
                                className={`${style.box_point} ${count === index ? style.active : ""}`}
                            ></div>
                        );
                    })}
                </div>
            </div>

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
