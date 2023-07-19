import { StaticImageData } from "next/image";
import plug from "../../../public/images/book-placeholder.jpg";

const emailValidate = (value: string) => {
    return value.match(/@/gi)?.length;
};

export default emailValidate;


export const validateSrc = (object: any) => {
    if (!object) {
        return plug;
    } else {
        return object.smallThumbnail;
    }
};

export const validateStar = () => {
    
};