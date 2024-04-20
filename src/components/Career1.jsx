import React from "react";

export default function Career() {
    return (
        <div
            name="career"
            className="h-max w-screen bg-gradient-to-b from-black via-black to-gray-800 border-none"
        >
            <div className="container mx-auto h-full md:w-10/12 w-11/12 pt-20 gap-x-2">
                <div>
                    <span className="group text-white w-fit px-3 py-3 my-1 flex items-center mx-auto justify-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
                        💼 Carreira
                    </span>
                    <h2 className="md:text-5xl lg:text-6xl text-4xl font-bold text-white pt-3 pb-20 text-center">
                        Tragetória até aqui
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-around gap-x-4 lg:flex-row">
                    <div>
                        <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pt-3 pb-10 text-center">
                            Profissional
                        </h2>

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
            </div>
        </div>
    );
}
