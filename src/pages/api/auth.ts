import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).send({ success: false,error: true, message: "Only POST" });
    }

    const { email, password } = req.body;
    // Ваша функция для валидации
    const validatedInfo = validate(email, password);

    if (!validatedInfo) {
        res.status(400).send({ success: false, error: true, message: "Email or password are incorrect" });
    } else {
        res.status(200).send({ success: true, error: false, message: "OK" });
    }
}

const validate = (email: string, password: string) => {
    if (email === "name@mail.com" && password === "password") {
        return true;
    } else {
        return false;
    }
};
// email === "name@mail.com" && password === "password"
