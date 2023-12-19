import React from "react";

const About = () => {
    return (
        <div>
            <div className="sm:py-26 bg-gradient-to-r from-indigo-200 to-blue-100 rounded-2xl">
                <div className="mx-auto max-w-5xl pt-20 lg:px-8 p-4">
                    <div className="mx-auto max-w-2xl text-center rounded-2xl">
                        <h2 className=" text-3xl font-bold pb-4 leading-7 text-blue-900">
                            Indian Systems of Medicine
                        </h2>
                        {/* <p className=" text-lg font-bold leading-8 text-black">
                            The Traditional medical systems like Ayurveda,
                            Unani, Siddha & Sowa Rigpa come under the heading of
                            Indian Systems of Medicine
                        </p> */}
                    </div>
                    <div className="mx-auto m-10 flex flex-row items-center justify-evenly">
                        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                <img src="./img/ayurveda.jpg" alt="ayurveda" />
                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Ayurveda
                                </h5>
                                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    Ayurveda means "the science of life" (ayur
                                    means "life" and veda means "science" in
                                    Sanskrit). Ayurveda is a discipline of the
                                    upaveda or "auxiliary knowledge" in Vedic
                                    tradition.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    <a
                                        target="_blank"
                                        href="https://en.wikipedia.org/wiki/Ayurveda"
                                    >
                                        Read More
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                <img src="./img/siddha.jpg" alt="siddha" />
                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Siddha
                                </h5>
                                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    "Siddhargal" or Siddhars were the premier
                                    scientists of ancient days. Siddhars, mainly
                                    from Southern India, in the state of TN laid
                                    the foundation for Siddha system of
                                    medicine.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    <a
                                        target="_blank"
                                        href="https://en.wikipedia.org/wiki/Siddha"
                                    >
                                        Read More
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
