import React, { useState } from "react";
import data from "../data/data.json";
import Modal from "./Modal";
import CareerCard from "./CareerCard";

const { career, education } = data;

export default function Career() {
    const [showModal, setShowModal] = useState(false);
    const [infoModal, setInfoModal] = useState({
        title: "",
        description: "",
    });
    const handleShowModal = (item) => {
        setShowModal(true);
        setInfoModal(item);
    };
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
                            Acadêmica
                        </h2>
                        <div className="card-container flex flex-row overflow-y-auto gap-6 xl:flex-wrap xl:justify-center justify-start">
                            {education.map((item) => (
                                <CareerCard
                                    key={item.id}
                                    item={item}
                                    handleShowModal={handleShowModal}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-white pb-10 text-center">
                            Profissional
                        </h2>
                        <div className="card-container flex flex-row overflow-y-auto gap-6 xl:flex-wrap xl:justify-center justify-start">
                            {career.map((item) => (
                                <CareerCard
                                    key={item.id}
                                    item={item}
                                    handleShowModal={handleShowModal}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={infoModal.title}
                details={infoModal.details}
            />
        </div>
    );
}
