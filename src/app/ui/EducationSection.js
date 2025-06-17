const EducationSection = () => {
    return (
        <section className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="relative pl-6">
                    <span className="absolute left-0 top-1 w-4 h-4 bg-teal-500 rounded-full z-10" />
                    <span className="absolute left-[6px] top-[25px] w-px h-[calc(100%-1.5rem)] bg-slate-700" />

                    <h3 className="text-xl font-semibold text-slate-100">
                        Bachelor of Management Information System
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                        Setec Institute — <span className="italic">2019 – 2024</span>
                    </p>
                    <p className="mt-2 text-slate-400">
                        Focused on software engineering, Design, algorithms, and mobile development. Graduated with strong academic standing and built foundational skills.
                    </p>
                </div>


                <div className="relative pl-6 pt-10">
                    <span className="absolute left-0 top-11 w-4 h-4 bg-blue-500 rounded-full z-10" />
                    <span className="absolute left-[6px] top-[65px] w-px h-[calc(100%-3.7rem)] bg-slate-700" />
                    <h3 className="text-xl font-semibold text-slate-100">
                        iOS development
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                        Institute of Science and technology Advanced Development - ISTAD — <span className="italic">2019 – 2024</span>
                    </p>
                    <p className="mt-2 text-slate-400">
                        Focused on software engineering, Design, algorithms, and mobile development. Graduated with strong academic standing and built foundational skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;