import { memo } from "react";
import empty from '../image/empty.png'

const NoResults = memo( ({message})  => {

    return (
        <main style={{gridColumnEnd: "span 4", marginBottom: "50px"}}>
            <img 
                src={empty} 
                alt="No results!"
                height={400} 
                width={400} 
                style={{backgroundColor: 'transparent'}}
            />
            <h3>{message}</h3>
        </main>
    )

})

export default NoResults;