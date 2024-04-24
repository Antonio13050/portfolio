import React from "react";
import data from "../data/data.json";

import { TbSettingsCog } from "react-icons/tb";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { TbDeviceDesktop } from "react-icons/tb";

const { projects } = data;

export default function Career() {
    return (
        <div name="portfolio" className="h-max w-screen pt-10">
            <div className="container mx-auto h-full md:w-10/12 w-11/12 gap-x-2">
                <div className="flex flex-col items-center justify-center gap-y-4 pb-10">
                    <span className="mb-5 group text-white w-fit px-3 py-3 mr-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                        🔗 Portfólio
                    </span>
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4 pb-10">
                        <div className="flex w-full justify-start">
                            <h2 className="text-3xl sm:text-6xl font-bold text-white items-center justify-center self-center z-10">
                                Projetos
                            </h2>
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center justify-center gap-x-10 gap-y-4 z-10">
                        <button className="group gap-x-2 text-gray-500 w-fit md:px-5 md:py-5 px-3 py-3 flex items-center border-2 border-gray-500 rounded-xl">
                            <TbDeviceDesktop className="text-gray-500 text-2xl  " />
                            Frontend
                        </button>
                        <button className="group  gap-x-2 text-gray-500 w-fit md:px-5 md:py-5 px-3 py-3 flex items-center border-2 border-gray-500 rounded-xl">
                            <TbSettingsCog className="text-gray-500 text-2xl" />
                            Backend
                        </button>
                        <button className="group gap-x-2 text-gray-500 w-fit md:px-5 md:py-5 px-3 py-3 flex items-center border-2 border-gray-500 rounded-xl">
                            <TbDeviceDesktopCog className="text-gray-500 text-2xl" />
                            Fullstack
                        </button>
                    </div>
                </div>

                <div className="flex xl:flex-row flex-col">
                    <div className="w-full z-10">
                        <div className="card-container flex flex-row overflow-y-auto gap-6 xl:flex-wrap xl:justify-center justify-start">
                            <div className="card border-2 rounded-lg border-gray-500 min-w-[550px] max-w-[550px] max-h-[550px] h-full p-3">
                                <div className="h-full">
                                    <h5 className="mb-2 text-2xl font-bold min-h-[64px] text-white text-center">
                                        {projects[0].title}
                                    </h5>
                                    <p className="font-normal text-white pb-8">
                                        {projects[0].description}
                                    </p>

                                    <img
                                        src="https://avatars.githubusercontent.com/u/101685829?v=4"
                                        alt="my profile"
                                        className="rounded-2xl mx-auto w-5/12 block"
                                    />

                                    <a href="" className="text-white">
                                        Link para o projeto
                                    </a>
                                    <div>
                                        <span className="text-white">
                                            {projects[0].techs}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-gray-500 min-w-80 max-w-80 min-h-96">
                                1
                            </div>
                            <div className="border-2 border-gray-500 min-w-80 max-w-80 min-h-96">
                                1
                            </div>
                            <div className="border-2 border-gray-500 min-w-80 max-w-80 min-h-96">
                                1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
