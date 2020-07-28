import React from "react";
import ArticleImage from "./ArticleImage";
import Skill from "./Skill";
import LanguagesLv from "./LanguagesLv";

const RightSection=()=>{

    return(
        <>
        <section className={"left_section_container"}>
            <article className={"skills"}>
                <ArticleImage ArticleImg={'brain'} color={'#C4C6C2'}/>
                <h2 className={'section_title'}>Umiejętności</h2>
                <h3>Języki programowania :</h3>
                <Skill skillIcon={['fab','js']} skillName={'JavaScript'} skillLevel={5.5} />
                <Skill skillIcon={['fab','php']} skillName={'PHP'} skillLevel={4} />
                <Skill skillIcon={['fab','css3-alt']} skillName={'CSS'} skillLevel={6} />
                <h3>Frameworki :</h3>
                <Skill skillIcon={['fab','react']} skillName={'React'} skillLevel={6} />
                <Skill skillIcon={['fab','symfony']} skillName={'Symfony'} skillLevel={3} />
                <h3>Bazy danych :</h3>
                <Skill skillIcon={'database'} skillName={'MySql'} skillLevel={4} />
                <h3>Systemy operacyjne :</h3>
                <Skill skillIcon={['fab','ubuntu']} skillName={'Ubuntu'} skillLevel={7.5} />
                <Skill skillIcon={['fab','windows']} skillName={'Windows'} skillLevel={7} />
                <h3>Inne :</h3>
                <ul>
                    <li>Umiejętność logicznego myślenia</li>
                    <li>Umiejętność rozwiązywania problemów</li>
                    <li>Chęć do nauki i rozwoju</li>
                    <li>Przyjmowanie konstruktywnej krytyki</li>
                    <li>Szybkie nawiązywanie kontaktów</li>
                    <li>Zaangażowanie w prace</li>
                    <li>Umiejętność pracy pod presją</li>
                    <li>Samodzielność i odpowiedzialność</li>
                    <li>Komunikatywność</li>
                    <li>Prawo jazdy kategorii B</li>
                </ul>
            </article>

            <article className={"languages"}>
                <ArticleImage ArticleImg={'comments'} color={'#C4C6C2'}/>
                <h2 className={'section_title'}>Języki obce</h2>
                <LanguagesLv LanguageName={'Angielski'} LanguageLevel={'B2'} languagesSkill={4} />
                <LanguagesLv LanguageName={'Niemiecki'} LanguageLevel={'C1'} languagesSkill={5} />
                <LanguagesLv LanguageName={'Ukraiński'} LanguageLevel={'A2'} languagesSkill={2} />
            </article>
        </section>


        </>
    )
}
export default RightSection;