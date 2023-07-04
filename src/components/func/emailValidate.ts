const emailValidate = (value: string) => {

    return value.match(/@/gi)?.length;
};

export default emailValidate