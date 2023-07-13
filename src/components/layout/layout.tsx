import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import { Montserrat } from "next/font/google";
import Navigation from "../Navigation/Navigation";
import style from "./layout.module.scss";

const montserrat = Montserrat({
    weight: ["700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

const Layout = ({ children }: PropsWithChildren) => {
    // const router = useRouter();
    // const pathname = router.pathname;
    // console.log(pathname);
    return (
        <>
            <Head>
                <title>Google Books Api</title>
                <meta name="description" content="Google Books shop" />
                <meta name="author" content="Maksim Savinec" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={montserrat.className}>
                <Header />
                <main className={style.main}>{children}</main>
                <footer></footer>
            </div>
        </>
    );
};

export default Layout;
