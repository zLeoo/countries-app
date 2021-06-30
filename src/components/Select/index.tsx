
import { Container, SelectInput, SelectBody, Option } from './styles';
import { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io';

import { Dispatch, SetStateAction } from "react";
import api from '../../services/api';

interface Country{
    name: string;
    region: string;
    capital: string;
    flag: string;
    alpha3Code: string;
    population: number;

}

interface SelectProps{
    placeholder: string;
    items: Array<string>;
    setCountries: Dispatch<SetStateAction<Country[]>>;
}


const Select: React.FC<SelectProps> = ({placeholder, items, setCountries}) => {

    const [selectValue, setSelectValue] = useState<Node["textContent"] | null>(placeholder);
    const [showOptions, setShowOptions] = useState(false);

    async function handleClick(e: React.MouseEvent<HTMLElement>){
        const value = e.currentTarget.getAttribute('data-item');
        const currentText = e.currentTarget.textContent;
        const response = await api.get(`region/${value}`);
        const data = response.data;
        setCountries(data);
        setSelectValue(currentText);
        setShowOptions(false);
    }

    return (
        <Container>
            
            <SelectInput onClick={() => setShowOptions(!showOptions)}>{selectValue}  <IoIosArrowDown /> </SelectInput>
            {showOptions && <SelectBody>
                {items.map((item, index) => <Option key={index} data-item={item} onClick={handleClick}>{item.charAt(0).toUpperCase() + item.slice(1)}</Option>)}
            </SelectBody>}
            
        </Container>
    );
};

export default Select;