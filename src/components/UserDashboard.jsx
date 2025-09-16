import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <button 
                            onClick={() => navigate('/')}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            &larr; Back to Home
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/incident-form')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                            Report Incident
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold text-gray-900">My Reports</h2>
                            <span className="text-2xl">📄</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">Recent incident reports you submitted.</p>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>No reports yet.</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">Latest hazard alerts for your region.</p>
                        <div className="text-sm text-gray-700">No active alerts.</div>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
                            <span className="text-2xl">👤</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">Manage your preferences.</p>
                        <button className="text-blue-600 hover:underline text-sm">Edit preferences</button>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-xl shadow p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Activity</h2>
                        <span className="text-2xl">📊</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Overview of your recent activity will appear here.</p>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;


// new comment
