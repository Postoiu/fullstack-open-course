import { useState } from "react"

import CountryView from "./CountryView"

const ListItem = ({ country }) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleShow = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            <p>
                {country.name}
                <button onClick={handleShow}>{showDetails ? 'hide' : 'show'}</button>
            </p>

            {
                showDetails && <CountryView country={country} />
            }
        </>
    )
}

export default ListItem