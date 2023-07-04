import Layout from "@/components/layout/layout";
let user = {
    email: "John",
    password: "Smith",
};
var params = new URLSearchParams(); 
params.set('email', user.email);
params.set('password', user.password);


export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/auth?", {
        method: "POST",
        body: params,
    });

    if (res.ok) {
        console.log("object");
    }
    const repo = await res.json();

    return { props: { repo } };
};

export default function AudioBooks({ repo }: any) {
    return <Layout>{repo ? JSON.stringify(repo, null, 2) : "Loading..."}</Layout>;
}
