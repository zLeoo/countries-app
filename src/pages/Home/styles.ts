import styled from "styled-components";


// import { IconType } from 'react-icons/lib';

export const Container = styled.div`
    margin: 4rem 4rem;

    @media (max-width: 1024px) {
        margin: 3rem 1rem;
    }
    @media (max-width: 768px) {
        margin: 3rem 1.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    height: 3rem;
    width: 100%;

    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 12rem;
    }
    
    input{
        background-color: ${props => props.theme.colors.secondary};
        
        /* background-image: url(${`data:image/svg+xml, <svg stroke="currentColor" fill="currentColor"  stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>`}); */
        background-size: contain;
        width: 40%;
        font-size: 1rem;
        padding: 0 1.5rem;
        color: ${props => props.theme.colors.text};
        border-radius: 8px;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
        cursor: pointer;
        transition: background-color .3s ease;
        ::placeholder{
            color: ${props => props.theme.colors.text};
            font-size: 1rem;
           
        }
        @media (max-width: 425px) {
            width: 100%;
            min-height: 3rem;
            margin-bottom: 3rem;
        }

        
    }

    
`;

export const CardsContainer = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    
    margin-top: 6rem;

    @media (max-width: 1024px) {
        gap: 1.5rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
       
    }
    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0;
    }
    a{
        display: flex;
        flex-direction: column;
        cursor: pointer;
        height: 25rem;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        transition: transform .5s ease,  background-color .3s ease;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
        z-index: 100;
        
        h2{
            
            font-size: 1.7rem;
            word-break: break-all;
        }
        p{
            margin-top: .5rem;
            font-size: 1.1rem;
        }

        img{
            object-fit: cover;
            width: 100%;
            height: 10rem;
        }

        :hover{
            transform: scale(1.1);
        }

    }

`;


export const DataContainer = styled.div`
    padding: 1rem;
`;