
const WorkingJournetSection = () => {
    return (
        <section id="experinces" className="py-20 bg-gray-900/50">
            <div className="min-h-screen bg-slate-900 text-slate-400 antialiased leading-relaxed selection:bg-teal-300 selection:text-teal-900">
                <div className="max-w-5xl mx-auto px-6 py-12 font-sans">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <main className="space-y-10">
                        <section id="experience">
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-slate-100 mb-4">Prince Bank Cambodia</h3>
                                <ol className="relative pl-6 space-y-10">
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1 w-4 h-4 timeline-dot-red rounded-full z-10" />
                                        <span className="absolute left-[6px] top-7 w-px h-[calc(100%-1.25rem)] bg-slate-700" />

                                        <h5 className="text-lg font-semibold text-slate-200">Assistant Manager, iOS Engineering</h5>
                                        <p className="text-sm text-slate-200 mt-1">October 2024 – Present</p>
                                        <p className="mt-2 text-slate-400">
                                            Leading modernization of mobile apps using Swift and clean architecture.
                                        </p>
                                        <ul className="mt-2 pl-6 space-y-2 text-sm text-slate-400 list-disc">
                                            <li>
                                                <a href="https://www.princebank.com.kh/digital/prince-mobile-app"
                                                    className="text-teal-100 underline hover:text-teal-300 transition"
                                                    target="_blank" rel="noopener noreferrer">
                                                    Digital Banking
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.princebank.com.kh/digital/prince-mobilebiz"
                                                    className="text-teal-100 underline hover:text-teal-300 transition"
                                                    target="_blank" rel="noopener noreferrer">
                                                    Mobile Biz
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="mt-4 text-slate-400">
                                            Coordinated with <span className="font-semibold text-slate-200">Oversea vendors</span>, managed project timelines, and collaborated with <span className="font-semibold text-slate-200">UX/UI designers</span> in agile cycles.
                                            Solid experience in <span className="font-semibold text-slate-200">Git</span>, <span className="font-semibold text-slate-200">gRPC</span>, and <span className="font-semibold text-slate-200">code reviews</span>.
                                        </p>
                                    </li>
                                </ol>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-100 mb-4">Woori Bank Cambodia</h3>
                                <ol className="relative pl-6 space-y-10">
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1 w-4 h-4 timeline-green-dot rounded-full z-10" />
                                        <span className="absolute left-[6px] top-7 w-px h-[calc(100%-1.25rem)] bg-slate-700" />

                                        <h5 className="text-lg font-semibold text-slate-200">Senior Officer, Mobile Development</h5>
                                        <p className="text-sm text-slate-200 mt-1">April 2024 – October 2024</p>
                                        <p className="mt-4 text-slate-400">
                                            Collaborated with <span className="font-semibold text-slate-200">Scrum teams</span>, using <span className="font-semibold text-slate-200">Jira</span> for agile planning.
                                            Gained experience in <span className="font-semibold text-slate-200">REST APIs</span>, Git, and collaborative development.
                                        </p>
                                    </li>

                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1 w-4 h-4 timeline-dot-purple rounded-full z-10" />
                                        <span className="absolute left-[6px] top-7 w-px h-[calc(100%-1.25rem)] bg-slate-700" />
                                        <h5 className="text-lg font-semibold text-slate-200">Junior Mobile Developer</h5>
                                        <p className="text-sm text-slate-200 mt-1">April 2022 – April 2024</p>
                                        <p className="mt-2 text-slate-400">Contributed to mobile product development and maintenance:</p>
                                        <ul className="mt-2 pl-6 space-y-2 text-sm text-slate-400 list-disc">
                                            <li>
                                                <a href="https://www.wooribank.com.kh/personal-banking/mobile-banking/"
                                                    className="text-teal-100 underline hover:text-teal-300 transition"
                                                    target="_blank" rel="noopener noreferrer">
                                                    Mobile Banking
                                                </a>
                                            </li>
                                            <li>Loan Collection (Internal App)</li>
                                            <li>Loan Application (Internal App)</li>
                                            <li>Tab Banking (Internal App)</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default WorkingJournetSection;