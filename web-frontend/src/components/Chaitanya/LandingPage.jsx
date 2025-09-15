import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen">
            <header className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-blue-700/90 shadow-lg shadow-blue-900/20 flex items-center justify-center text-white font-bold">🌊</div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">OceanHazardWatch</h1>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-gray-900">
                    <button
                        className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 shadow hover:bg-gray-100"
                        onClick={() => navigate('/features')}
                    >
                        Features
                    </button>
                </nav>
                <button
                    onClick={() => navigate('/incident-form')}
                    className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Report Incident
                </button>
            </header>

            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-24 md:pt-16 md:pb-32">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
                                Crowdsourced Ocean Hazard Reporting
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                Empowering citizens to report hazards and analyze social signals to improve maritime safety.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-5 sm:gap-6 w-full sm:w-auto">
                                <button
                                    onClick={() => navigate('/incident-form')}
                                    className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 shadow hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Report an Incident
                                </button>
                                <button
                                    onClick={() => navigate('/features')}
                                    className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 shadow hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Explore Features
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <div className="text-3xl">🧭</div>
                                        <div className="mt-2 font-semibold text-gray-900">Geo Reports</div>
                                        <div className="text-sm text-gray-600">Location-tagged incidents</div>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <div className="text-3xl">📸</div>
                                        <div className="mt-2 font-semibold text-gray-900">Media Proof</div>
                                        <div className="text-sm text-gray-600">Images & videos</div>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <div className="text-3xl">📈</div>
                                        <div className="mt-2 font-semibold text-gray-900">Social Insights</div>
                                        <div className="text-sm text-gray-600">Trending hazards</div>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <div className="text-3xl">⚓</div>
                                        <div className="mt-2 font-semibold text-gray-900">For Mariners</div>
                                        <div className="text-sm text-gray-600">Safer navigation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <svg className="w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="rgba(255, 255, 255, 0.88)" d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,101.3C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </section>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
                    <h3 className="text-2xl font-bold text-gray-900 text-center">Quick navigation</h3>
                    <p className="text-center text-gray-600 mt-2">Jump straight to the most used areas</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <button
                            onClick={() => navigate('/incident-form')}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md text-left text-black"
                        >
                            <div className="text-sm font-semibold text-black">Report an Incident</div>
                            <div className="text-sm text-black mt-1">Create a new hazard report</div>
                        </button>
                        <button
                            onClick={() => navigate('/features')}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md text-left text-black"
                        >
                            <div className="text-sm font-semibold text-black">Explore Features</div>
                            <div className="text-sm text-black mt-1">See what the platform offers</div>
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md text-left text-black"
                        >
                            <div className="text-sm font-semibold text-black">Sign in</div>
                            <div className="text-sm text-black mt-1">Access your account</div>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="text-center text-gray-600 py-8 bg-white">
                © 2025 OceanHazardWatch
            </footer>
        </div>
    );
}

export default LandingPage;
