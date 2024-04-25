import React from "react";
import Carousel from "./Carousel";

import Pro1Img1 from "../assets/pro-mod-1/img-1.png";
import Pro1Img2 from "../assets/pro-mod-1/img-2.png";
import Pro1Img3 from "../assets/pro-mod-1/img-3.png";
import Pro1Img4 from "../assets/pro-mod-1/img-4.png";
import Pro1Img5 from "../assets/pro-mod-1/img-5.png";

import Pro2Img1 from "../assets/pro-mod-2/img-1.png";
import Pro2Img2 from "../assets/pro-mod-2/img-2.png";
import Pro2Img3 from "../assets/pro-mod-2/img-3.png";

import ProBuilderImg from "../assets/pro-builder/img.png";
import ProBuilderImg1 from "../assets/pro-builder/img-1.png";
import ProBuilderImg2 from "../assets/pro-builder/img-2.png";
import ProBuilderImg3 from "../assets/pro-builder/img-3.png";

let slides = [
    [Pro1Img1, Pro1Img2, Pro1Img3, Pro1Img4, Pro1Img5],
    [Pro2Img1, Pro2Img2, Pro2Img3],
    [ProBuilderImg, ProBuilderImg1, ProBuilderImg2, ProBuilderImg3],
];

export default function ProjectCard({ item }) {
    return (
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

                <Carousel slides={slides[item.id - 1]} />
            </div>
            <div className="flex flex-col gap-y-2">
                <a
                    href={item.link}
                    target="_blank"
                    className="text-gray-400 hover:text-white hover:underline"
                >
                    Link para o projeto
                </a>

                <div className="flex flex-wrap gap-x-1 items-center">
                    {item.online && (
                        <a
                            href={item.online}
                            target="_blank"
                            className="group gap-x-2 w-fit flex px-1 py-1 items-center cursor-pointer bg-green-800 text-white rounded-md"
                        >
                            <span class="relative flex">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4AE290] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#4AE290]"></span>
                            </span>
                            online
                        </a>
                    )}
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
    );
}
