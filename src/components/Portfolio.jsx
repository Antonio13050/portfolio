import React from "react";
import { TbSettingsCog } from "react-icons/tb";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { TbDeviceDesktop } from "react-icons/tb";

export default function Portfolio() {
    return (
        <div
            name="portfolio"
            className="h-max w-screen bg-gradient-to-b from-black to-gray-800"
        >
            <div className="container mx-auto h-full md:w-10/12 w-11/12 pt-20 gap-x-2">
                <span className="mb-5 group text-white w-fit px-3 py-3 mr-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                    🔗 Portfólio
                </span>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4 pb-10">
                    <div className="flex w-full justify-start">
                        <h2 className="text-3xl sm:text-6xl font-bold text-white items-center justify-center self-center">
                            Projetos
                        </h2>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center justify-center gap-x-10 gap-y-4">
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
                <div className="flex flex-row overflow-y-auto gap-6 sm:flex-wrap sm:justify-center justify-start">
                    <div className="border-2 border-gray-500 min-w-80 max-w-80 min-h-96">
                        1
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
    );
}
