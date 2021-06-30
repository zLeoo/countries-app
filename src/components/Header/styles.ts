import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 4.5rem;

    padding: 0 5rem;

    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
    transition: background-color .3s ease;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
       
    }
`; 

export const Title = styled.h1`
    font-size: 1.7rem;
    font-weight: 800;

    color: ${props => props.theme.colors.text};
    @media (max-width: 425px) {
            font-size: 1.5rem;
       
        }
`;

export const IconContainer = styled.div`
    display: flex;
    cursor: pointer;
    svg{
        fill: ${props => props.theme.colors.text};
    }
    
    span{
        color: ${props => props.theme.colors.text};
        font-size: 1.2rem;
        font-weight: 600;
        margin-left: .6rem;
        @media (max-width: 425px) {
            display: none;
       
        }
    }
`; 