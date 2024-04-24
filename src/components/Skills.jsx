import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiGradle } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiDbeaver } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiRedis } from "react-icons/si";

import { SiLua } from "react-icons/si";
import { SiDelphi } from "react-icons/si";

export default function Skills() {
    return (
        <div name="skills" className="h-screen w-screen  text-white pt-10">
            <div className="container mx-auto h-full flex items-center justify-center flex-col w-full gap-y-6">
                <div>
                    <span className="group text-white w-fit px-3 py-3 my-1 flex items-center mx-auto justify-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                        👨🏾‍💻 Skills
                    </span>
                    <h2 className="md:text-5xl lg:text-6xl text-4xl font-bold text-white pt-3 pb-20 text-center">
                        Tecnologias e habilidades
                    </h2>
                </div>
                <div className=" z-10">
                    <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pt-3 pb-10 text-center">
                        Techs que já usei em projetos
                    </h2>
                    <div className="flex items-center justify-center gap-x-4 pb-2">
                        <div className="flex items-center justify-center">
                            <FaHtml5 className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#E65100]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaCss3Alt className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#2965F1]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <IoLogoJavascript className="text-gray-500 rounded-3xl md:text-7xl sm:text-5xl text-4xl hover:text-[#F0DB4F]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaReact className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#61DBFB]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaBootstrap className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#7952B3]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiTailwindcss className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#38BDF8]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiMui className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#007FFF]" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-x-4 pb-2">
                        <div className="flex items-center justify-center">
                            <FaJava className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#F89820]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiSpring className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#6cb52d]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiSpringboot className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#6cb52d]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiSpringsecurity className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#6cb52d]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiApachemaven className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#e77627]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiGradle className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#02303a]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiRedis className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#d82c20]" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-x-4 ">
                        <div className="flex items-center justify-center">
                            <FaGitAlt className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#F05032]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaGithub className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#24292e]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaDocker className="text-gray-500 md:text-7xl sm:text-5xl text-4xl hover:text-[#0db7ed]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiPostgresql className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#336791]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiMysql className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#4479a1]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiDbeaver className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#0052cc]" />
                        </div>
                        <div className="flex items-center justify-center ">
                            <SiPostman className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#ff6c37]" />
                        </div>
                    </div>
                </div>
                <div className=" z-10">
                    <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pt-3 pb-10 text-center">
                        Outras techs que já estudei em cursos
                    </h2>
                    <div className="flex items-center justify-center gap-x-4">
                        <div className="flex items-center justify-center">
                            <SiLua
                                aria-label="JavaScript"
                                className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#00017d]"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiDelphi className="text-gray-500  md:text-7xl sm:text-5xl text-4xl hover:text-[#c3192d]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
