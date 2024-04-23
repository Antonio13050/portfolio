export default function Modal({ showModal, setShowModal, title, details }) {
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
                    <div className="relative max-w-3xl w-full bg-gradient-to-b from-black  to-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-5 relative">
                            <h3 className="text-2xl text-white font-semibold">
                                {title}
                            </h3>
                            <button
                                className="absolute top-0 right-0 p-3 focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 overflow-y-auto max-h-96">
                            {details.map((detail, index) => (
                                <p
                                    className="text-lg text-gray-300 pb-3"
                                    key={index}
                                >
                                    {detail}
                                </p>
                            ))}
                        </div>
                        <div className="p-3 flex justify-end">
                            <button
                                className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
