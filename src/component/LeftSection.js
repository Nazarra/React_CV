import React from "react";
import ArticleImage from "./ArticleImage";
import Experienced from "./Experienced";



const LeftSection = ()=>{


    return(
        <>
            <section className={"right_section_container"}>
                <article className={"about_me"}>
                    <ArticleImage ArticleImg={'user'} color={"#C4C6C2"}/>
                    <div className={'about_me_description'}>
                        <h2 className={'section_title'}>O mnie</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sem, pellentesque vel mattis vel, luctus quis mi. Nullam viverra eu diam et porta. Fusce et ultricies lacus.
                        </p>
                    </div>
                </article>
                <article className={'experiences'}>
                    <ArticleImage ArticleImg={'briefcase'} color={"#C4C6C2"}/>
                    <h2 className={'section_title'}>Doświadczenie zawodowe</h2>
                    <Experienced name={'Lorem ipsum'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sem, pellentesque vel mattis vel, luctus quis mi.'}
                                 data={'2011-2014'} />
                    <Experienced name={'Lorem ipsum'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sem, pellentesque vel mattis vel, luctus quis mi.'}
                                 data={'2014-2020'} />

                </article>
                <article className={'education'}>
                    <ArticleImage ArticleImg={'graduation-cap'} color={"#C4C6C2"}/>
                    <h2 className={'section_title'}>Edukacja</h2>
                    <Experienced name={'Lorem ipsum'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sem, pellentesque vel mattis vel, luctus quis mi.'}
                                 data={'2011-2014'} />
                    <Experienced name={'Lorem ipsum'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sem, pellentesque vel mattis vel, luctus quis mi.'}
                                 data={'2014-2020'} />
                </article>
                <article className={'training_and_certifications'}>
                    <ArticleImage ArticleImg={'stamp'} color={"#C4C6C2"}/>
                    <h2 className={'section_title'}>Szkolenia i certyfikaty</h2>
                    <ul>
                        <li>Ukończony kurs programowania PHP</li>
                        <li>Ukończony kurs programowania JS/React</li>
                    </ul>
                </article>
            </section>


        </>
    )
}

export default LeftSection;