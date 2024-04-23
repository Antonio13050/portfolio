import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <div name="home" className="h-fit w-screen text-white">
            <div className="container mx-auto h-full flex flex-row items-center justify-between w-full px-4 py-4">
                <div>Copyright © Antonio · 2024</div>
                <div className=" z-10">
                    <a
                        href="https://www.linkedin.com/in/antonio13050/"
                        target="_blank"
                        className="mr-4"
                    >
                        <div className="rounded-full bg-gray-500 p-2 inline-block hover:scale-125 duration-200">
                            <FaLinkedinIn className="text-gray-900" />
                        </div>
                    </a>
                    <a
                        href="https://github.com/Antonio13050/"
                        target="_blank"
                        className="mr-4"
                    >
                        <div className="rounded-full bg-gray-500 p-2 inline-block hover:scale-125 duration-200">
                            <TbBrandGithubFilled className="text-gray-900" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
