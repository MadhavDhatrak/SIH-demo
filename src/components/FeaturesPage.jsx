import React from 'react';

function FeaturesPage() {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-b from-white via-blue-50 to-blue-100/60">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
                    <h3 className="text-3xl font-extrabold text-gray-900 text-center">Why OceanHazardWatch?</h3>
                    <p className="text-center text-gray-600 mt-2">Tools designed to keep our oceans safe</p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white">
                            <h4 className="font-semibold text-gray-900">Report Hazards</h4>
                            <p className="text-gray-600 mt-1">Submit hazards instantly with precise locations and context.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white">
                            <h4 className="font-semibold text-gray-900">Media Upload</h4>
                            <p className="text-gray-600 mt-1">Add images/videos to strengthen your report.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white">
                            <h4 className="font-semibold text-gray-900">Social Analytics</h4>
                            <p className="text-gray-600 mt-1">See trending issues across coastal regions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeaturesPage;


