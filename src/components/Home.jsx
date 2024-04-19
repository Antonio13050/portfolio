import React from "react";
import HeroImage from "../assets/heroImage.png";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiDownloadLine } from "react-icons/ri";

export default function Home1() {
    return (
        <div
            name="home"
            className="h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="container mx-auto h-full flex flex-col items-center justify-around lg:flex-row w-full pt-20">
                <div className="flex basis-1/5 flex-col lg:items-start items-center justify-center pl-10">
                    <span className="group text-white w-fit px-3 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                        👋🏾 Saudações!
                    </span>
                    <h2 className="md:text-5xl lg:text-6xl text-4xl font-bold text-white pt-3">
                        Antonio
                    </h2>
                    <p className="text-2xl text-gray-500 py-4 max-w-md">
                        Full stack developer
                    </p>
                    <div className="max-w-md">
                        <a href="" className="mr-4">
                            <div className="rounded-full bg-gray-500 p-2 inline-block hover:scale-125 duration-200">
                                <FaLinkedinIn className="text-gray-900" />
                            </div>
                        </a>
                        <a href="" className="mr-4">
                            <div className="rounded-full bg-gray-500 p-2 inline-block hover:scale-125 duration-200">
                                <TbBrandGithubFilled className="text-gray-900" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex basis-2/4 items-center justify-center p-4">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto lg:w-10/12 w-5/12 block"
                    />
                </div>

                <div className="flex basis-1/5 flex-col h-fit items-center justify-center w-full pr-10">
                    <div className="max-w-md flex lg:flex-col flex-row lg:items-end justify-around md:gap-x-16 gap-x-3 gap-y-3">
                        <a
                            href="/caminho/para/o/seu/arquivo.pdf"
                            download
                            className="flex items-center text-gray-500 hover:text-gray-300 max"
                        >
                            <span className="mr-2 ">Baixar CV</span>
                            <RiDownloadLine />
                        </a>
                        <span className="group text-gray-500 w-fit px-3 py-3 my-1 flex items-center border-2 border-gray-500 rounded-md">
                            <FaWhatsapp className="text-gray-500" /> Saudações!
                            Saud
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
