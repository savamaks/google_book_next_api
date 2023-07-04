import Layout from "@/components/layout/layout";
import React from "react";
import Image from "next/image";
import style from "./user.module.scss";
import avatar from "../../../public/images/avatarProfile.png";

const User = () => {
    return (
        <Layout>
            <div className={style.box}>
                <div className={style.container}>
                    <p className={style.container_title}>PROFILE</p>
                    <div className={style.container_box}>
                        <Image className={style.container_box_img} src={avatar} alt="avatar" />
                        <div className={style.container_box_list}>
                            <span className={style.list_name}>YOUR NAME</span>
                            <span className={style.list_text}>John Smith</span>
                            <span className={style.list_name}>YOUR EMAIL</span>
                            <span className={style.list_text}>example@mail.com</span>
                            <button className={style.list_button}>EDIT PROFILE</button>
                        </div>
                    </div>
                </div>
                <div className={style.block}>
                    <p className={style.list_name}>ABOUT ME</p>
                    <span className={style.container_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat, ornare nisi et, ultrices libero. Nunc nibh
                        dolor, maximus quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla ac varius.
                    </span>
                </div>
            </div>
        </Layout>
    );
};

export default User;
