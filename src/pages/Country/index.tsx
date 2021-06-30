import React from 'react';
import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import { BorderCountriesWrapper, Container, DataContainer, DataWrapper, Wrapper } from './styles';

interface CountryType{
    flag: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: Array<{name: string}>;
    languages: Array<{name: string}>;
    borders: Array<string>
    alpha3Code: string;
}

interface CodeParams{
    code: string;
}

const Country: React.FC = () => {
    const { params } = useRouteMatch<CodeParams>();

    const [country, setCountry] = useState<CountryType | null>(null);


    useEffect(() => {
        api.get(`alpha/${params.code}`).then(response => setCountry(response.data))
    },[params])
    
    
    
    return (
    <>    
        {country && <Container>
            <Link to="/"><BsArrowLeft size="1.5rem" />Back</Link>
            <DataContainer>
                <img src={country.flag} alt="" />
                <Wrapper>
                    <h2>{country.name}</h2>
                    <DataWrapper>
                        <article>
                            <p><strong>Native Name: </strong>{country.nativeName}</p>
                            <p><strong>Population: </strong>{country.population.toLocaleString('pt-br')}</p>
                            <p><strong>Region: </strong>{country.region}</p>
                            <p><strong>Sub Region: </strong>{country.subregion}</p>
                            <p><strong>Capital: </strong>{country.capital}</p>
                        </article>
                        <article>
                            <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
                            <p><strong>Currencies: </strong>{country.currencies.map(value => `${value.name} `)}</p>
                            <p><strong>Languages: </strong>{country.languages.map(value => `${value.name} `)}</p>
                            
                        </article>
                    </DataWrapper>
                    <BorderCountriesWrapper>
                        <p><strong>Border Countries:</strong> </p>
                        {country.borders.map((value, index) => <Link to={`/country/${value.toLowerCase()}`} key={index}>{value}</Link>)}
                    </BorderCountriesWrapper>
                </Wrapper>
            </DataContainer>
        </Container> }           
        
    </>    
    );
};

export default Country;