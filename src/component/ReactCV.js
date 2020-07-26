import React from "react";
import "./FontawsomeIcons";
import YourImage from "../asset/Person.jpg"

import MiddleSection from "./ReactCV_middle_section";


const ReactCV = () => {


    return(

        <>
            <section className={"cv_container"}>
                <article className={"left_section cv_content"}>

                </article>
                <article className={"middle_section cv_content"}>
                <MiddleSection email={"NazarraDEV@gmail.com"}
                               phone={"885370390"}
                               github={"https://github.com/Nazarra"}
                               MyName={"Bartłomiej Dygoń"}
                               YourImage={YourImage}
                />
                </article>
                <article className={"right_section cv_content"}>

                </article>

            </section>
        </>
    )
}

export default ReactCV;