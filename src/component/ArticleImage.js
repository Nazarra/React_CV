import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ArticleImage=(props)=>{

    return(
        <>
            <div className={"img_container"}>
                <div className={"section_img"}>
                    <FontAwesomeIcon icon={props.ArticleImg} size='3x' color={props.color}/>
                </div>
            </div>
        </>

    )
}
export default ArticleImage;