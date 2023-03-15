import Country from "./Country";

const ListOfCountries = ({countries,updateVisited}) => {
    
    const countryComponents = countries.map((country,index) => {
        return <Country country={country} key={index} updateVisited = {updateVisited}/>;
    })
    
    return(
    <ul>
        {countryComponents}
    </ul>
    );
}

export default ListOfCountries;