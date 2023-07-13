import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Из запрсоса в аргументе req( http://localhost:3000/api/books?subject=Fiction&page=1&maxResults=2) беруться параметры: subject, page, maxResults
    const { subject, page, maxResults } = req.query;

    //  с помощью интерфейса URLSearchParams  и метода set, устанавливаем значение указаные выше
    const gbooksReqParams = new URLSearchParams();

    gbooksReqParams.set("q", `${subject}`);
    gbooksReqParams.set("page", `${page}`);
    gbooksReqParams.set("maxResults", `${maxResults}`);

    // запрос получается https://www.googleapis.com/books/v1/volumes?q=subject=Fiction&page=1&maxResults=2

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`);

    const booksData = await response.json();

    // если данные пришли со статусом 200, то они отправляются обьектом с полем data
    res.status(200).send({
        data: booksData,
    });

    // если данные пришли со статусом 400, то они отправляются обьектом с полем error
    if (!req.query.subject) {
        res.status(400).send({
            error: true,
            message: "No subject in query params",
        });
    }
}
