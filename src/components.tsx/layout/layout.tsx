import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ["700", "900"],
    style: ['normal', 'italic'],
    subsets: ["latin"],
    display:'swap'

});

const Layout = ({ children }: PropsWithChildren) => {
    // const router = useRouter();
    // const pathname = router.pathname;
    // console.log(pathname);
    return (
        <>
            <Head>
                <title>GoogleBook</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={montserrat.className} >
                <Header />
                    <nav>fdgsdfg</nav>
                <main>выафыва ыва фыа ыва {children}</main>
                <footer></footer>
            </div>
        </>
    );
};

export default Layout;
