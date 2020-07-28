import React from "react";
import "./FontawsomeIcons";
import YourImage from "../asset/Person.jpg"
import RightSection from "./RightSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";


const ReactCV = () => {


    return(

        <>
            <section className={"cv_container"}>
                <article className={"left_section cv_content"}>
                    <LeftSection />

                </article>
                <article className={"middle_section cv_content"}>
                <MiddleSection email={"JanushDEV@gmail.com"}
                               phone={"885445554"}
                               github={"https://github.com/JanushDEV"}
                               MyName={"Janush Ipsum"}
                               YourImage={YourImage}
                               hobby1_icon={"gamepad"}
                               hobby1_description={"Gry komputerowe"}
                               hobby2_icon={"book"}
                               hobby2_description={"Czytanie książek"}
                               hobby3_icon={"bullseye"}
                               hobby3_description={"Strzelectwo rekreacyjne"}
                               hobby4_icon={"swimming-pool"}
                               hobby4_description={"Pływanie"}
                               hobby5_icon={"film"}
                               hobby5_description={"Oglądanie filmów"}
                               hobby6_icon={"music"}
                               hobby6_description={"Słuchanie muzyki"}
                />
                </article>
                <article className={"right_section cv_content"}>

                    <RightSection />
                </article>

            </section>
        </>
    )
}

export default ReactCV;