import { useState } from "react"

const Country = ({country,updateVisited}) => {

    const [visited, setVisited] = useState(false);

    const updateVisit = (e) => {
        if (visited === true){
            setVisited(false);
            updateVisited(country.name);
        } else {
            setVisited(true);
            updateVisited(country.name);
        }
        //visited? setVisited(false) : setVisited(true);
    }

    return(
        <li>
            <p>{country.name.common}</p>
            <input type="checkbox" className="visited" onChange={updateVisit}></input>
        </li>
    )
}

export default Country