import Layout from "@/components/layout/layout";
import Link from "next/link";
import style from './404.module.scss'

const Error = () => {
    return (
        <Layout>
            <div className={style.container}>
                <h2 className={style.title}>Такой страницы не существует, вернитесь на  <Link href={'/'}>главную страницу</Link></h2>
                
            </div>
        </Layout>
    );
};

export default Error;
