import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-white/10 bg-black-100">
            <div className="mx-auto max-w-8xl px-6 py-2 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Left */}
                <div className="flex flex-col gap-1">
                    <p className="text-white font-semibold tracking-tight">Umut Can Top</p>
                    <p className="text-secondary text-sm">{year} • All rights reserved.</p>
                </div>

                {/* Right (icons stacked) */}
                <div className="flex flex-col !items-start sm:items-end">
                    {/* GitHub */}
                    <a
                        href="https://github.com/umtcntp"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full  px-4 py-2"
                        aria-label="GitHub profile"
                    >
                        <span className="flex h-8 w-11 items-center justify-center ">
                            <img
                                src={github}
                                alt="GitHub"
                                className="h-6 w-6 object-contain opacity-90 group-hover:opacity-100 transition"
                            />
                        </span>

                        <span className="text-sm font-semibold text-white/90 group-hover:text-white transition">
                            github.com/umtcntp
                        </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/umtcntp/"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full  px-4 py-2 transition"
                        aria-label="LinkedIn profile"
                    >
                        <span className="flex h-8 w-11 items-center justify-center ">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 text-blue-600 opacity-90 group-hover:opacity-100 transition"
                            >
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                            </svg>
                        </span>

                        <span className="text-sm font-semibold text-white/90 group-hover:text-white transition">
                            in/umtcntp
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
