import { useState ,useEffect} from "react"
import Country from "../Components/Country";
import ListOfCountries from "../Components/ListOfCountries";

const CountriesContainer = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisited] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            const jsonData = await response.json();
            setCountries(jsonData);
        }
        fetchData()
    },[])

    const updateVisited = (countryName) => {
        
    }

    console.log(countries);

    return(
        <>
            <p>Unvisited</p>
            <ListOfCountries countries={countries} updateVisited={updateVisited}/>
            <p>Visited</p>
            <ListOfCountries countries={visitedCountries} updateVisited={updateVisited}/>
        </>
        )  
            //{countries ? <ListOfCountries countries = {countries}/> : <p>hello world</p>}
        
}

export default CountriesContainer;