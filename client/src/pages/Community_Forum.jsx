import React from 'react';

const Community_Forum = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Community Forum</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Welcome to the BronxWatch Community Forum. Join the discussion and share your insights!
                </p>

                {/* Forum Posts Section */}
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">General Discussion</h2>
                        <p className="text-gray-600">Discuss any topic related to community safety and awareness.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">Tips and Resources</h2>
                        <p className="text-gray-600">Share and find tips on how to stay safe in the Bronx.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">Event Announcements</h2>
                        <p className="text-gray-600">Get information about upcoming safety workshops and community gatherings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community_Forum;
