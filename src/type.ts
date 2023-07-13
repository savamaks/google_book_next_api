import { StaticImageData } from "next/image";

export type BookTypeElement = {
    book: BookType;
};
export type BookType = {
    title: string;
    accessInfo: object;
    etag: string;
    id: string;
    kind: string;
    saleInfo: SaleInfoType;
    searchInfo: object;
    selfLink: string;
    volumeInfo: VolumeInfoType;
    count: number;
    buy: boolean;
};
export type VolumeInfoType = {
    imageLinks: string;
    authors: Array<string>;
    title: string;
    averageRating: string;
    raitingCount: string;
    description: string;
};
export type SaleInfoType = {
    saleability: string;
    listPrice: {
        amount: number;
        currencyCode: string;
    };
};
export type HomeType = {
    data: DataBook;
};
export type DataBook = {
    items: Array<BookType>;
    kind: string;
    totalItems: number;
};
export type CardBookBasketType ={
    book:BookType
}
export type srcType ={
    src:string
}
export type Arr = {
    name: string;
    url: StaticImageData;
};