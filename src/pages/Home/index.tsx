
import { CardsContainer, Container, DataContainer, Form } from './styles';
import api from '../../services/api';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Select from './../../components/Select/index';

// import {AiOutlineSearch} from 'react-icons/ai';

interface Country{
    name: string;
    region: string;
    capital: string;
    flag: string;
    alpha3Code: string;
    population: number;

}

const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState(''); //form input
    
    const [countries, setCountries] = useState<Country[]>([]); //data from api

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();
        const response = await api.get(`name/${inputValue}`);
        const data = response.data;

        setCountries(data);

    }
    
    useEffect(() => {
        api.get(`all`).then(response => setCountries(response.data))
    },[])

 
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search for a country..." />

                <Select placeholder="Filter by Region " items={['africa', 'americas', 'asia', 'europe']} setCountries={setCountries}/>

     
            </Form>

            <CardsContainer>
                { countries.map((country, key) => {
                    const { name, population, flag, region, capital, alpha3Code} = country;
                    
                    return <Link key={key} to={`/country/${alpha3Code.toLowerCase()}`}>
                            <img src={flag} alt=""/>
                            <DataContainer>

                                <h2>{name}</h2>
                                <p><strong>Population: </strong>{population.toLocaleString('pt-br')}</p>
                                <p><strong>Region: </strong>{region}</p>
                                <p><strong>Capital: </strong>{capital}</p>
                            </DataContainer>
                        </Link>
                })
                }
                


            </CardsContainer>

        </Container>
    );
};

export default Home;