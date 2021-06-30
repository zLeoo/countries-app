import styled from "styled-components";

export const Container = styled.section`
    
    display: flex;
    flex-direction: column;
    margin: 3rem 4rem;
    
    @media (max-width: 425px) {
        margin: 3rem 2rem;
    }
    

    a{
        display: flex;
        justify-content: space-around;
        padding: 0 1.5rem;
        align-items: center;
        width: 8rem;
        height: 2.3rem;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        border-radius:5px ;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
        cursor: pointer;
        text-decoration: none;
        transition:  background-color .3s ease;

    }
`;


export const DataContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    
    margin-top: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
    }

    img{
        width: 100%;
        height: 100%;
    }

    

`;


export const Wrapper = styled.article`
    
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};
    
    h2{
        width: 100%;
        height: 2rem;
        margin-bottom: 2rem;
        font-size: 1.8rem;
    }
    
`;

export const DataWrapper = styled.article`
    display: flex;
    width: 100%;
    article{
        width: 50%;

        p{
            font-size: 1.1rem;

            
            margin: .6rem 0;
            

        }
    }
`;

export const BorderCountriesWrapper = styled.article`
    display: flex;
    align-items: center;

    flex-wrap: wrap;

    p{
        margin-right: 1rem;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7rem;
        height: 2rem;
        padding: .3rem;
        margin-top: .5rem;
        margin-bottom: .5rem;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};
        border-radius: 5px ;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
        text-decoration: none;
        cursor: pointer;
        transition:  background-color .3s ease;

        margin-right: .5rem;

        @media (max-width: 425px) {
                
            margin-right: 1rem;
                
        }   
        & + a{
            margin-left: 1rem;

            @media (max-width: 425px) {
                
                margin-left: 0;
                
            }   
            
        }

        
    }

    p{
            
        @media (max-width: 425px) {
            width: 100%;
        }   
    }
`;
