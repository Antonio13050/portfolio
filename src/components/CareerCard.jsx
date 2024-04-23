import React from "react";

export default function CareerCard({ item, handleShowModal }) {
    return (
        <div
            key={item.id}
            className="card min-w-[500px] max-w-[500px] min-h-[224px] p-6 border border-gray-400 rounded-lg flex flex-col"
        >
            <div className="h-full">
                <h5 className="mb-2 text-2xl font-bold min-h-[64px] text-white ">
                    {item.title}
                </h5>
                <p className="font-normal text-white pb-8">
                    {item.description}
                </p>
            </div>

            <div className="flex flex-col items-start gap-y-2">
                <span className="font-normal text-gray-400">{item.dates}</span>
                <button
                    onClick={() => handleShowModal(item)}
                    className="inline-flex items-center font-medium text-white hover:text-gray-200 hover:underline"
                >
                    Mais detalhes
                    <svg
                        className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
