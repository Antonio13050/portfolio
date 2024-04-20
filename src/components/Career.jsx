import React from "react";

export default function Career() {
    return (
        <div
            name="career"
            className="h-max w-screen bg-gradient-to-b from-black to-gray-800"
        >
            <div className="container mx-auto h-full md:w-10/12 w-11/12 gap-x-2">
                <div className="flex flex-col items-center justify-center gap-y-4 pb-10">
                    <span className="group text-white w-fit px-3 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                        💼 Carreira
                    </span>
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4 pb-10">
                        <div className="flex w-full justify-start">
                            <h2 className="text-3xl sm:text-6xl font-bold text-white items-center justify-center self-center">
                                Tragetória até aqui
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex xl:flex-row flex-col">
                    <div className="pb-10 w-full">
                        <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pb-10 text-center">
                            Profissional
                        </h2>
                        <div className="flex flex-row overflow-y-auto gap-6 xl:flex-wrap xl:justify-center justify-start">
                            <div className="min-w-[500px] max-w-[500px] p-6 border border-gray-400 rounded-lg ">
                                <h5 class="mb-2 text-2xl font-bold  text-white ">
                                    Estagiário na Softplan
                                </h5>
                                <p class="font-normal text-white  pb-8">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <p class="font-normal text-gray-400">
                                    Abril/2021 - Outubro/2021
                                </p>
                            </div>

                            <div className="min-w-[500px] max-w-[500px] p-6 border border-gray-400 rounded-lg ">
                                <h5 class="mb-2 text-2xl font-bold  text-white ">
                                    Análista de Serviços de TI na Softplan
                                </h5>
                                <p class="font-normal text-white  pb-8">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <p class="font-normal text-gray-400">
                                    Outubro/2021 - Atualmente
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pb-10 text-center">
                            Acadêmica
                        </h2>
                        <div className="flex flex-row overflow-y-auto gap-6 xl:flex-wrap xl:justify-center justify-start">
                            <div className="min-w-[500px] max-w-[500px] p-6 border border-gray-400 rounded-lg ">
                                <h5 class="mb-2 text-2xl font-bold  text-white ">
                                    Análista de Serviços de TI na Softplan
                                </h5>
                                <p class="font-normal text-white  pb-8">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <p class="font-normal text-gray-400">
                                    Outubro/2021 - Atualmente
                                </p>
                            </div>
                            <div className="min-w-[500px] max-w-[500px] p-6 border border-gray-400 rounded-lg ">
                                <h5 class="mb-2 text-2xl font-bold  text-white ">
                                    Análista de Serviços de TI na Softplan
                                </h5>
                                <p class="font-normal text-white  pb-8">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <p class="font-normal text-gray-400">
                                    Outubro/2021 - Atualmente
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
