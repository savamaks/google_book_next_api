import Layout from "@/components/layout/layout";
import React from "react";

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/books?subject=Fiction&page=4&maxResults=1");
    if(res.ok){
        console.log('object');
    }
    const repo = await res.json();

    return { props: { repo } };
};



export default function Blog({ repo }: any) {
    return <Layout>{repo? JSON.stringify(repo, null, 2):'Loading...'}</Layout>;
}
