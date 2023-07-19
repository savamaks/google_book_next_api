export const requstUserData = async (params: any, setFlag: any) => {
    try {
        const res = await fetch("/api/auth?", {
            method: "POST",
            body: params,
        });
        if (res.ok) {
            const data = await res.json();
            setFlag(data);
        } else if (res.status === 400) {
            const data = await res.json();
            setFlag(data);
        }
    } catch (error) {
        console.log("error");
    }
};