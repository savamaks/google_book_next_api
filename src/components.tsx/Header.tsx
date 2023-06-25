import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import user from "../../public/team/user.svg";
import bag from "../../public/team/shop bag.svg";

const Container = styled.header`
    padding: 0 166px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    background-color: #ffffff;
`;
const Title = styled.h1`
    color:#1c2a39;
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
    
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;
const Text = styled.p`
    color: #5c6a79;
    font-size: 10px;
    font-family: Montserrat;
    font-weight: 700;
`;

const Header = () => {
    return (
        <Container>
            <Title>Bookshop</Title>
            <Box>
                <Link href={"/"}>
                    <Text>books</Text>
                </Link>
                <Link href={"/"}>
                    <Text>audiobooks</Text>
                </Link>
                <Link href={"/"}>
                    <Text>Stationery & gifts</Text>
                </Link>
                <Link href={"/"}>
                    <Text>blog</Text>
                </Link>
            </Box>
            <Box>
                <Link href={"/"}>
                    <Image src={user} alt="" />
                </Link>
                <Link href={"/"}>
                    <Image src={bag} alt="" />
                </Link>
            </Box>
        </Container>
    );
};
export default Header;
