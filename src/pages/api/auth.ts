import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).send({ error: true, message: "Only POST" });
    }

    const { email, password } = req.body;
    // Ваша функция для валидации
    const validatedInfo = validate(email, password);

    if (!validatedInfo) {
        res.status(400).send({ error: true, message: "Email or password are incorrect" });
    } else {
        res.status(200).send({ success: true, token: "testToken" });
    }
}

const validate = (email: string, password: string) => {
    if (email === "a@" && password === "qwerty") {
        return true;
    } else {
        return false;
    }
};
// email === "name@mail.com" && password === "password"