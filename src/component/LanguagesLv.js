import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LanguagesLv=(props)=>{

    const result=[];

    for (let i=0; i < props.languagesSkill; i++ ){
        result.push(<FontAwesomeIcon key={i} icon='star' size='1x' color={"gold"}/>)
    }

    const MaxSkill = 6-props.languagesSkill;

    for (let i=0; i < MaxSkill; i++ ){
        result.push(<FontAwesomeIcon icon={['far','star']} size='1x' color={"gold"}/>)
    }


    const Language = [
        <>
            <div className={'language'}>
                <h2>{props.LanguageName}</h2>
                <div>
                    <h3>{props.LanguageLevel}</h3>
                    {result}
                </div>
            </div>
        </>
    ]



    return(
        <>
            {Language}
        </>
    )
}
export default LanguagesLv