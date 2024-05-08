import React from "react";
import HeroImage from "../assets/hero.jpg";

export default function About() {
    return (
        <div name="about" className="h-fit w-screen  text-white">
            <div className="container mx-auto h-full flex flex-col items-center justify-around xl:flex-row md:w-full w-11/12">
                <div className="flex basis-1/3 items-center justify-center">
                    <div className="">
                        <img
                            src={HeroImage}
                            alt="my profile"
                            className="rounded-full mx-auto xl:w-10/12 w-4/12 block"
                        />
                    </div>
                </div>
                <div className="flex flex-col basis-2/3 items-start justify-center mx-auto xl:pl-5">
                    <div className="mb-5">
                        <span className="group text-white w-fit px-3 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                            🙂 Sobre mim
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-6xl font-bold text-white pb-7">
                        Antonio Carlos
                        <span className="block">Virissimo</span>
                    </h2>
                    <div className="">
                        <p className="text-xl  pb-3">
                            🎓 Graduado em Análise e Desenvolvimento de Sistemas
                            pela Estácio de Florianópolis
                        </p>
                        <p className="text-xl  pb-3">
                            🖥️ Formado em Técnico em Informática pelo Instituto
                            Federal de Santa Catarina (IFSC)
                        </p>
                        <p className="text-xl  pb-3">
                            🌟 Conclui recentemente o curso DevInHouse no SENAI,
                            com foco em Desenvolvimento Full Stack utilizando
                            React, Spring e PostgreSQL
                        </p>
                        <p className="text-xl  pb-3">
                            💼 Experiência de 3 anos na Softplan como Analista
                            de Serviços
                        </p>
                        <p className="text-xl  pb-3">
                            🚀 Tentando ser um pouquinho melhor do que ontem
                            todos os dias
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
