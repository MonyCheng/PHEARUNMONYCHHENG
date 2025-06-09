
import Link from 'next/link';

const WorkingJournetSection = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-400 antialiased leading-relaxed selection:bg-teal-300 selection:text-teal-900">
            <div className="max-w-5xl mx-auto px-6 py-12 font-sans">
                {/* <header className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">Phearunmony chheng</h1>
                    <h2 className="mt-3 text-xl font-medium text-slate-200">iOS Developer</h2>
                    <p className="mt-4">
                        I build accessible, pixel-perfect digital experiences for Mobile Banking for Woori Bank & Prince Bank{" "}
                        <span className="font-semibold text-slate-200">
                            Cambodia
                        </span>.
                    </p>
                    
                </header> */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="gradient-text">Experience</span>
                </h2>
                <main className="space-y-10">
                    <section id="experience">

                        <div className="mb-12">
                            <h4 className="text-xl font-bold text-slate-100 mb-4">Prince Bank</h4>
                            <ol className="relative border-l border-slate-700 pl-6 space-y-10">
                                <li className="relative">
                                    <div className="flex items-center gap-3">
                                        <span className="timeline-dot timeline-dot-red" />
                                        <h5 className="text-lg font-semibold text-slate-200 ml-2">
                                            Assistant Manager, iOS Engineering
                                        </h5>
                                    </div>
                                    <p className="text-sm text-slate-200 pl-6">October 2024 – Present</p>
                                    <p className="mt-2 text-slate-400 pl-6">
                                        Leading modernization of mobile apps using Swift and clean architecture.
                                    </p>
                                    <ul className="mt-2 pl-12 space-y-2 text-sm text-slate-400 list-disc">
                                        <li>
                                            <Link href="https://www.princebank.com.kh/digital/prince-mobile-app"
                                                className="text-teal-100 underline hover:text-teal-300 transition"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Digital Banking
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.princebank.com.kh/digital/prince-mobilebiz"
                                                className="text-teal-100 underline hover:text-teal-300 transition"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Mobile Biz
                                            </Link>
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-slate-400 pl-6">
                                        Coordinated with <span className="font-semibold text-slate-200">vendors</span>, managed project timelines, and collaborated with <span className="font-semibold text-slate-200">UX/UI designers</span> in agile cycles.
                                        Solid experience in <span className="font-semibold text-slate-200">Git</span>, <span className="font-semibold text-slate-200">gRPC</span>, and <span className="font-semibold text-slate-200">code reviews</span>.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-4">Woori Bank</h4>
                            <ol className="relative border-l border-slate-700 pl-6 space-y-10">
                                <li className="relative">
                                    <div className="flex items-center gap-3">
                                        <span className="timeline-dot timeline-dot-purple" />
                                        <h5 className="text-lg font-semibold text-slate-200 ml-2">
                                            Senior Officer, Mobile Development
                                        </h5>
                                    </div>
                                    <p className="text-sm text-slate-200 pl-6">
                                        April 2024 – October 2024
                                    </p>
                                    <p className="mt-4 text-slate-400 pl-6">
                                        Collaborated with <span className="font-semibold text-slate-200">Scrum teams</span>, using <span className="font-semibold text-slate-200">Jira</span> for agile planning.
                                        Gained experience in <span className="font-semibold text-slate-200">REST APIs</span>, Git, and collaborative development.
                                    </p>
                                </li>

                                <li className="relative">
                                    <div className="flex items-center gap-3">
                                        <span className="timeline-dot timeline-dot-blue" />
                                        <h5 className="text-lg font-semibold text-slate-200 ml-2">
                                            Junior Mobile Developer
                                        </h5>
                                    </div>
                                    <p className="text-sm text-slate-200 pl-6">
                                        April 2022 – April 2024</p>
                                    <p className="mt-2 text-slate-400 pl-6">
                                        Contributed to mobile product development and maintenance:
                                    </p>
                                    <ul className="mt-2 pl-12 space-y-2 text-sm text-slate-400 list-disc">
                                        <li>
                                            <Link href="https://www.wooribank.com.kh/personal-banking/mobile-banking/"
                                                className="text-teal-100 underline hover:text-teal-300 transition"
                                                target="_blank" rel="noopener noreferrer">
                                                Mobile Banking
                                            </Link>
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
        </div >
    );
}

export default WorkingJournetSection;