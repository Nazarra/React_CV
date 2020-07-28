import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



const MiddleSection = (props) =>{

    return(
        <>
            <section className={'Contact'}>

                <article className={"contact_header"}>
                    <h2>Kontakt</h2>
                        <div className={"contact_content"}>
                            <div className={"email_section contact-description"}>
                            <FontAwesomeIcon icon='envelope-open-text' size={"4x"} />
                            <p>{props.email}</p>
                            </div>
                            <div className={"phone_section contact-description"}>
                                <FontAwesomeIcon icon='mobile-alt' size={"4x"} />
                                <p>{props.phone}</p>
                            </div>
                            <div className={"git_section contact-description"}>
                                <FontAwesomeIcon icon={['fab','github-square']} size={"4x"} />
                                <a href={props.github}>{props.github}</a>
                            </div>
                        </div>
                    </article>

                <article className={"CV_image"}>
                    <div className={'decor'}>
                    <div className={"image_container"}>

                        <div>
                            <img className={"cv_your_image"} src={props.YourImage} alt={"Twoje zdjęcie"} />
                        </div>
                    </div>
                    </div>
                </article>

                <article className={"Your_description"}>
                    <h1>{props.MyName}</h1>
                    <h3>Zainteresowania</h3>
                    <div className={"hobbies"}>
                        <div>
                            <FontAwesomeIcon icon={props.hobby1_icon} size={"3x"} />
                            <p>{props.hobby1_description}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={props.hobby2_icon} size={"3x"} />
                            <p>{props.hobby2_description}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={props.hobby3_icon} size={"3x"} />
                            <p>{props.hobby3_description}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={props.hobby4_icon} size={"3x"} />
                            <p>{props.hobby4_description}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={props.hobby5_icon} size={"3x"} />
                            <p>{props.hobby5_description}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={props.hobby6_icon} size={"3x"} />
                            <p>{props.hobby6_description}</p>
                        </div>
                    </div>
                </article>
        </section>
        </>
    )
}

export default MiddleSection;