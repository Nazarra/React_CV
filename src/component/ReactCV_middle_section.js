import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import GithubIcon from "../asset/github-square-brands.svg"


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
                                <img className={"git_section_image"} src={GithubIcon} alt={"github Icon"} />
                                <a href={props.github}>{props.github}</a>
                            </div>
                        </div>
                    </article>

                <article className={"CV_image"}>
                    <div className={"image_container"}>
                        <div>
                            <img className={"cv_your_image"} src={props.YourImage} alt={"Twoje zdjęcie"} />
                        </div>

                    </div>
                </article>

                <article className={"Your_description"}>
                    <h1>{props.MyName}</h1>
                    <h3>Zainteresowania</h3>
                    <div className={"hobbies"}>
                        <div>
                            <FontAwesomeIcon icon='gamepad' size={"3x"} />
                            <p>Gry komputerowe</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon='book' size={"3x"} />
                            <p>Czytanie książek</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon='bullseye' size={"3x"} />
                            <p>Strzelectwo rekreacyjne</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon='swimming-pool' size={"3x"} />
                            <p>Pływanie</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon='film' size={"3x"} />
                            <p>Oglądanie filmów</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon='music' size={"3x"} />
                            <p>Słuchanie muzyki</p>
                        </div>
                    </div>
                </article>
        </section>
        </>
    )
}

export default MiddleSection;