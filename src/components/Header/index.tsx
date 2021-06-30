import React from 'react';
import { Container, Title, IconContainer } from './styles';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void; 
}

const Header: React.FC<Props> = ({toggleTheme}) => {

    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <Title>
                Where in the world?    
            </Title>
            
            <IconContainer onClick={toggleTheme}>
                {title === "dark" ? (
                    <>
                        <BsMoon size="1.6rem"/>
                        <span>Dark Mode</span>
                    </>
                ): (
                    <>
                        <BsSun size="1.6rem"/>
                        <span>Light Mode</span>
                    </>
                )}
            </IconContainer>
        </Container>
    );
};

export default Header;