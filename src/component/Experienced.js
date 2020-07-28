import React from "react";

const Experienced =(props)=>{
    return(
        <>
        <div className={'experience'}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h3>{props.data}</h3>

        </div>
        </>
    )
}

export default Experienced;