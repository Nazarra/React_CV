import React from "react";
import "./FontawsomeIcons";
import YourImage from "../asset/Person.jpg"
import RightSection from "./RightSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";


const ReactCV = () => {


    return(

        <>
            <div className={'cv_background_container'}>
            <section className={"cv_container"}>
                <article className={"left_section cv_content"}>
                    <LeftSection />

                </article>
                <article className={"middle_section cv_content"}>
                <MiddleSection email={"JanushDEV@gmail.com"}
                               phone={"885445554"}
                               github={"https://github.com/JanushDEV"}
                               MyName={"Bartłomiej Dygoń"}
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
                <p className={'rodo'}>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
                    z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)</p>
            </div>
        </>
    )
}

export default ReactCV;