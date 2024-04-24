import React from "react";
import data from "../data/data.json";

import { TbSettingsCog } from "react-icons/tb";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { TbDeviceDesktop } from "react-icons/tb";

import Pro1Img1 from "../assets/pro-mod-1/img-1.png";
import Pro1Img2 from "../assets/pro-mod-1/img-2.png";
import Pro1Img3 from "../assets/pro-mod-1/img-3.png";
import Pro1Img4 from "../assets/pro-mod-1/img-4.png";
import Pro1Img5 from "../assets/pro-mod-1/img-5.png";

import Pro2Img1 from "../assets/pro-mod-2/img-1.png";
import Pro2Img2 from "../assets/pro-mod-2/img-2.png";
import Pro2Img3 from "../assets/pro-mod-2/img-3.png";

import Carousel from "./Carousel";

let slides = [
    [Pro1Img1, Pro1Img2, Pro1Img3, Pro1Img4, Pro1Img5],
    [Pro2Img1, Pro2Img2, Pro2Img3],
];

const { projects } = data;

export default function Portfolio() {
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
                    <div className="flex flex-row  items-center justify-center w- sm:gap-x-10 gap-x-1 gap-y-4 z-10">
                        <button className="group gap-x-2 text-gray-500 w-fit md:px-5 md:py-5 px-3 py-3 flex items-center border-2 border-gray-500 rounded-xl">
                            <TbDeviceDesktop className="text-gray-500 text-2xl  " />
                            Frontend
                        </button>
                        <button className="group gap-x-2 text-gray-500 w-fit md:px-5 md:py-5 px-3 py-3 flex items-center border-2 border-gray-500 rounded-xl">
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
                            {projects.map((item) => (
                                <div
                                    key={item.id}
                                    className="card border-2 rounded-lg border-gray-500 sm:min-w-[550px] sm:max-w-[550px] min-w-[390px] max-w-[390px] max-h-[650px] min-h-[650px] h-full p-3 flex flex-col items-center justify-between"
                                >
                                    <div className="h-full">
                                        <h5 className="mb-2 text-2xl font-bold min-h-[64px] text-white text-center">
                                            {item.title}
                                        </h5>
                                        <p className="font-normal text-white pb-8">
                                            {item.description}
                                        </p>

                                        <Carousel
                                            slides={slides[item.id - 1]}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <a
                                            href=""
                                            className="text-gray-400 hover:text-white hover:underline"
                                        >
                                            Link para o projeto
                                        </a>
                                        <div className="flex flex-wrap gap-x-2">
                                            {item.tags.map((tags, index) => (
                                                <span
                                                    className="text-white mr-2 text-white w-fit px-1 py-1 my-1 rounded-md bg-gray-800"
                                                    key={index}
                                                >
                                                    {tags}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
