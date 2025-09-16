import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('en');

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header with INCOIS branding */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl">
                                🌊
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-blue-800">OceanHazardWatch</h1>
                                <p className="text-xs text-blue-600">Powered by INCOIS, Ministry of Earth Sciences</p>
                            </div>
                </div>
                        <div className="hidden md:flex items-center gap-6">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm"
                            >
                                <option value="en">English</option>
                                <option value="hi">हिंदी</option>
                                <option value="ta">தமிழ்</option>
                                <option value="te">తెలుగు</option>
                                <option value="ml">മലയാളം</option>
                            </select>
                            <button 
                                onClick={() => navigate('/login')}
                                className="text-blue-700 hover:text-blue-900"
                            >
                                Sign In
                            </button>
                    <button
                                onClick={() => navigate('/dashboard')}
                                className="text-blue-700 hover:text-blue-900"
                    >
                                Dashboard
                    </button>
                <button
                    onClick={() => navigate('/incident-form')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                    Report Incident
                </button>
                        </div>
                        <button className="md:hidden text-gray-500">
                            ☰
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section - Full-screen immersive design */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400">
                {/* Animated waves */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="wave-animation w-[200%] h-[50%] absolute bottom-[-25%]" style={{
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 88.7\'%3E%3Cpath d=\'M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
                        backgroundPosition: '0 bottom',
                        backgroundRepeat: 'repeat-x',
                        animation: 'wave 20s -3s linear infinite',
                    }}></div>
                    <div className="wave-animation w-[200%] h-[50%] absolute bottom-[-20%]" style={{
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 88.7\'%3E%3Cpath d=\'M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
                        backgroundPosition: '0 bottom',
                        backgroundRepeat: 'repeat-x',
                        animation: 'wave 10s linear infinite',
                    }}></div>
                    <div className="wave-animation w-[200%] h-[50%] absolute bottom-[-30%]" style={{
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 88.7\'%3E%3Cpath d=\'M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
                        backgroundPosition: '0 bottom',
                        backgroundRepeat: 'repeat-x',
                        animation: 'wave 15s -5s linear infinite',
                    }}></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-20 right-20 animate-float opacity-70">
                    <div className="text-7xl">🚢</div>
                </div>
                <div className="absolute bottom-40 left-20 animate-float-slow opacity-70">
                    <div className="text-5xl">🐬</div>
                </div>
                <div className="absolute top-40 left-[40%] animate-float-reverse opacity-70">
                    <div className="text-4xl">⛵</div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 relative">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8 text-white">
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-2">
                                <span className="mr-2">🔍</span> INCOIS Ocean Hazard Monitoring System
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                                Protecting India's Coastline Through Citizen Science
                            </h1>
                            <p className="text-xl text-blue-50 leading-relaxed">
                                Help INCOIS monitor ocean hazards by reporting incidents in real-time. 
                                Your observations strengthen our early warning systems and save lives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={() => navigate('/incident-form')}
                                    className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                                >
                                    <span className="mr-2">📱</span> Report an Incident
                                </button>
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="bg-blue-700/50 backdrop-blur-sm border border-white/30 text-white hover:bg-blue-700/70 px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center"
                                >
                                    <span className="mr-2">🗺️</span> View Dashboard
                                </button>
                            </div>
                        </div>
                        
                        {/* Interactive visualization */}
                        <div className="relative p-1 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
                            <div className="rounded-2xl overflow-hidden bg-blue-100/20 backdrop-blur-md p-6 text-white">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                                            <span className="text-xl">🌊</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">OceanHazardWatch</h3>
                                            <p className="text-xs text-blue-100">Powered by INCOIS</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-medium">
                                        Live Updates
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <div className="w-full bg-blue-700/30 h-40 rounded-xl mb-4 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl">🗺️</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-3">
                                            <p className="text-sm font-medium">Indian Coastline Monitor</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-blue-800/30 p-3 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl">📊</span>
                                            <span className="text-xs bg-blue-500/30 px-2 py-0.5 rounded">Today</span>
                                        </div>
                                        <p className="text-xs mt-2">Active Reports</p>
                                        <p className="text-2xl font-bold">7,523</p>
                                    </div>
                                    <div className="bg-blue-800/30 p-3 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl">⚠️</span>
                                            <span className="text-xs bg-orange-500/30 px-2 py-0.5 rounded">Alert</span>
                                    </div>
                                        <p className="text-xs mt-2">Hazard Warnings</p>
                                        <p className="text-2xl font-bold">3</p>
                                    </div>
                                    <div className="col-span-2">
                                        <button className="w-full bg-white text-blue-700 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
                                            Access Full Dashboard
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes wave {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }
                    @keyframes float-slow {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-15px);
                        }
                    }
                    @keyframes float-reverse {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(15px);
                        }
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    .animate-float-slow {
                        animation: float-slow 8s ease-in-out infinite;
                    }
                    .animate-float-reverse {
                        animation: float-reverse 7s ease-in-out infinite;
                    }
                `}</style>
            </section>

            {/* Ocean Hazards Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Ocean Hazards We Monitor</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Help us track and respond to these critical ocean phenomena
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🌊</div>
                            <h3 className="font-semibold text-gray-900">Tsunamis</h3>
                            <p className="text-sm text-gray-600 mt-1">Seismic sea waves</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🌪️</div>
                            <h3 className="font-semibold text-gray-900">Storm Surges</h3>
                            <p className="text-sm text-gray-600 mt-1">Coastal flooding</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🌀</div>
                            <h3 className="font-semibold text-gray-900">Rip Currents</h3>
                            <p className="text-sm text-gray-600 mt-1">Fast water channels</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🦠</div>
                            <h3 className="font-semibold text-gray-900">Algal Blooms</h3>
                            <p className="text-sm text-gray-600 mt-1">Harmful growths</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🛢️</div>
                            <h3 className="font-semibold text-gray-900">Oil Spills</h3>
                            <p className="text-sm text-gray-600 mt-1">Water pollution</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-2">🗑️</div>
                            <h3 className="font-semibold text-gray-900">Marine Debris</h3>
                            <p className="text-sm text-gray-600 mt-1">Floating waste</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Your reports help save lives and protect coastal communities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800 text-xl mb-4">1</div>
                            <h3 className="font-semibold text-gray-900 text-lg">Observe</h3>
                            <p className="text-gray-600 mt-2">
                                Notice unusual ocean conditions or coastal hazards
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800 text-xl mb-4">2</div>
                            <h3 className="font-semibold text-gray-900 text-lg">Report</h3>
                            <p className="text-gray-600 mt-2">
                                Submit details with photos through our platform
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800 text-xl mb-4">3</div>
                            <h3 className="font-semibold text-gray-900 text-lg">Analyze</h3>
                            <p className="text-gray-600 mt-2">
                                INCOIS experts review and validate reports
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800 text-xl mb-4">4</div>
                            <h3 className="font-semibold text-gray-900 text-lg">Act</h3>
                            <p className="text-gray-600 mt-2">
                                Alerts issued to protect communities and mariners
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Insights */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Social Media Insights</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Our platform aggregates social media discussions about ocean hazards, providing valuable insights about:
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">✓</div>
                                    <span className="text-gray-700">Public awareness during hazardous events</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">✓</div>
                                    <span className="text-gray-700">Real-time ground reports from affected areas</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">✓</div>
                                    <span className="text-gray-700">Trending discussions about emerging threats</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">✓</div>
                                    <span className="text-gray-700">Community sentiment and response to warnings</span>
                                </li>
                            </ul>
                        <button
                                onClick={() => navigate('/social-insights')}
                                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                                View Social Insights Dashboard
                        </button>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Social Trends</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">🐦</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Twitter Trends</h4>
                                            <p className="text-sm text-gray-600">#HighTides trending in Mumbai</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">📱</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Recent Reports</h4>
                                            <p className="text-sm text-gray-600">15 new reports in Chennai coastal area</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">📈</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Engagement</h4>
                                            <p className="text-sm text-gray-600">High engagement on cyclone warnings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Join India's Ocean Hazard Monitoring Network</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Your observations help INCOIS protect our 7,500+ km coastline and the millions of people who depend on the ocean
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => navigate('/incident-form')}
                            className="bg-white text-blue-700 px-6 py-3 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                        >
                            Report an Incident Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
                                    🌊
                                </div>
                                <div className="font-bold text-lg">OceanHazardWatch</div>
                            </div>
                            <p className="text-gray-400 text-sm">
                                A project by Indian National Centre for Ocean Information Services (INCOIS)
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">About INCOIS</a></li>
                                <li><a href="#" className="hover:text-white">Ocean Hazards</a></li>
                                <li><a href="#" className="hover:text-white">Early Warning Systems</a></li>
                                <li><a href="#" className="hover:text-white">Education</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                                <li><a href="#" className="hover:text-white">Report Incident</a></li>
                                <li><a href="#" className="hover:text-white">Social Insights</a></li>
                                <li><a href="#" className="hover:text-white">Data Privacy</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>INCOIS, Hyderabad, India</li>
                                <li>contact@incois.gov.in</li>
                                <li>Emergency: +91-40-23895000</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm">
                            © 2025 Indian National Centre for Ocean Information Services. All rights reserved.
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;