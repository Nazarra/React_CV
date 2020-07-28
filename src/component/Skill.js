import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Skill = (props) =>{

    const convertSkillLvToString = props.skillLevel.toString();

    const DecimalSkillLv= convertSkillLvToString.split(".",2)




    const skillLever = Math.floor(props.skillLevel)

    const result = [];

    for (let i=0; i < skillLever; i++ ){
        result.push(<FontAwesomeIcon key={i} icon='star' size='1x' color={"black"}/>)
    }

    if(DecimalSkillLv[1]){
        result.push(<FontAwesomeIcon icon='star-half-alt' size='1x' color={"black"}/>)
    }

    const MaxSkill = 10-result.length;

    for (let i=0; i < MaxSkill; i++ ){
        result.push(<FontAwesomeIcon icon={['far','star']} size='1x' color={"black"}/>)
    }


    const skill = [
        <>
            <div className={'skill_level'}>
                {result}
            </div>
        </>
    ]

    return(
        <>
            <div className={'skill'}>
                <FontAwesomeIcon icon={props.skillIcon} size='2x' color={"black"}/>
                <h2>{props.skillName}</h2>
                {skill}
            </div>


        </>
    )
}
export default Skill