
import styled from 'styled-components';

import {darken, lighten} from 'polished'; 

// interface OptionProps{
//     item: string;
// }

export const Container = styled.div`
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    z-index: 1000;

`; 

export const SelectInput= styled.div`
    background-color: ${props => props.theme.colors.secondary};
    height: 100%;
    width: 13rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);
    transition: background-color .3s ease;
    @media (max-width: 425px) {
        height: 3rem;
        width: 100%;
    }
`; 

export const SelectBody = styled.div`
    border-radius: 8px;
    margin-top: 3px;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.40);

    transition: background-color .3s ease;
`; 

export const Option = styled.div`
    
    height: 3rem;
    width: 13rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    
    :hover{
        background-color: ${props => props.theme.title === 'dark' ? lighten(0.06,props.theme.colors.secondary) : darken(0.06,props.theme.colors.secondary) };
    }

    @media (max-width: 425px) {
        
        width: 100%;
    }
`;

