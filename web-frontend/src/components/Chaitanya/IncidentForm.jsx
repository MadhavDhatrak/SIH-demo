import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IncidentForm() {
    const navigate = useNavigate();
    const [hazardType, setHazardType] = useState('');
    const [customHazard, setCustomHazard] = useState('');
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [contactNumber, setContactNumber] = useState('');
    const [mediaFiles, setMediaFiles] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [successId, setSuccessId] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const hazardOptions = useMemo(() => [
        'Oil spill',
        'Floating debris',
        'Illegal fishing',
        'Distress signal',
        'Algal bloom',
        'Other'
    ], []);

    useEffect(() => {
        if (!coords && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
                },
                () => {
                    // ignore error, user may deny
                },
                { enableHighAccuracy: true, timeout: 8000 }
            );
        }
    }, [coords]);

    const handleFiles = (e) => {
        const files = Array.from(e.target.files || []);
        setMediaFiles(files);
    };

    const prettyCoords = coords ? `${coords.lat.toFixed(5)}, ${coords.lon.toFixed(5)}` : 'Not available';

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setErrorMsg('');
        setSuccessId(null);

        try {
            const formData = new FormData();
            const finalHazard = hazardType === 'Other' ? customHazard : hazardType;
            formData.append('hazardType', finalHazard);
            formData.append('locationText', locationText);
            if (coords) {
                formData.append('latitude', String(coords.lat));
                formData.append('longitude', String(coords.lon));
            }
            formData.append('contactNumber', contactNumber);
            mediaFiles.forEach((file, idx) => formData.append('media', file, file.name || `upload-${idx}`));

            const apiBase = (typeof process !== 'undefined' && process.env && (process.env.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL))
                || (typeof window !== 'undefined' && window.__API_BASE_URL__)
                || '';
            const url = `${apiBase}/reports`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const text = await response.text().catch(() => '');
                throw new Error(`Failed to submit report (${response.status}). ${text}`.trim());
            }
            let data = {};
            try {
                data = await response.json();
            } catch (_) {
                // ignore if no JSON body
            }
            setSuccessId(data.id || 'submitted');
        } catch (err) {
            setErrorMsg(err.message || 'Submission failed');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-gray-900">Report an Incident</h2>
                    <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-500">Back</button>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
                    {successId ? (
                        <div className="text-center">
                            <div className="text-5xl mb-2">✅</div>
                            <div className="text-gray-900 font-semibold">Report submitted successfully</div>
                            <div className="text-gray-600 text-sm">Reference: {successId}</div>
                            <div className="mt-6">
                                <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Go to Home</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Problem / Hazard Type</label>
                                    <div className="flex gap-3">
                                        <select
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            value={hazardType}
                                            onChange={(e) => setHazardType(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled>Select a hazard</option>
                                            {hazardOptions.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {hazardType === 'Other' && (
                                        <input
                                            type="text"
                                            placeholder="Describe hazard"
                                            value={customHazard}
                                            onChange={(e) => setCustomHazard(e.target.value)}
                                            className="mt-3 w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                    <input
                                        type="tel"
                                        inputMode="tel"
                                        pattern="[0-9+\- ]{7,15}"
                                        placeholder="Your phone number"
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Images / Video (optional)</label>
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        multiple
                                        onChange={handleFiles}
                                        className="w-full"
                                    />
                                    {mediaFiles.length > 0 && (
                                        <div className="mt-2 text-xs text-gray-600">{mediaFiles.length} file(s) selected</div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            placeholder="e.g., Near Marina Beach, Chennai"
                                            value={locationText}
                                            onChange={(e) => setLocationText(e.target.value)}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (navigator.geolocation) {
                                                    navigator.geolocation.getCurrentPosition((pos) => {
                                                        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                                                    });
                                                }
                                            }}
                                            className="px-4 py-3 rounded-lg border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            Use my location
                                        </button>
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">Auto-geo: {prettyCoords}</div>
                                </div>

                                {errorMsg && (
                                    <div className="p-3 rounded bg-red-50 text-red-700 border border-red-200">{errorMsg}</div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="bg-blue-600 disabled:opacity-70 text-white px-5 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {submitting ? 'Submitting...' : 'Submit Report'}
                                    </button>
                                    <button type="button" onClick={() => navigate('/')} className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 w-full sm:w-auto">Cancel</button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IncidentForm;


