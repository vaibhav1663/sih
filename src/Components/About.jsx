import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar page="about" />
            <div class="lg:mb-0 flex " style={{ height: '100vh', textAlign: 'center' }} >
                <img src="./img/img2.jpg" alt="" class="object-cover w-1/3" />
                <section>
                    <div class="container mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
                        <p class="my-5 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            How to get your book reccomended by NCISM?
                        </p>
                        <div class="w-full">
                            <ul class="space-y-6">
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            1
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold ">
                                            Submission
                                        </h3>
                                        <p class="leading-loose text-gray-500">
                                            Visit the dashboard, click "Recommend Book," and submit your book following the provided guidelines. Stay tuned for updates on the status table.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            2
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold ">
                                            Admin Review
                                        </h3>
                                        <p class="leading-loose text-gray-500">
                                            The NCISM Committee will assess whether to assign reviewers for the book or reject it outright. If rejected, a detailed email explaining the reasons will be sent. Additionally, a cool-down period for re-submission will be provided.</p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            3
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold">
                                            Peer Review
                                        </h3>
                                        <p class="leading-loose text-gray-500">
                                            Assigned reviewers will receive notifications via email. They are required to submit a book review following the NCISM Guidelines. The scores provided will determine whether the book is recommended or rejected.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            4
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold">
                                            Publish
                                        </h3>
                                        <p class="leading-loose text-gray-500">
                                            After all three reviewers have completed their assessments, the administrator will consolidate the total scores. Based on the cumulative evaluation, the final decision will be made regarding the inclusion of the book in the list.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default About