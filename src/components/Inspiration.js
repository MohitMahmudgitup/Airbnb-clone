import React, { useState } from 'react'

const Inspiration = () => {
    const [activeTab, setActiveTab] = useState('tips')
    return (
        <div className='   bg-[#F7F7F7] py-10'>
            {/* m-auto max-w-7xl */}
            <div className="w-full m-auto max-w-7xl ">
                {/* Title */}
                <h2 className="text-xl font-semibold mb-4">Inspiration for future getaways</h2>


                {/* Tabs */}
                <div className="flex border-b mb-6 space-x-6 text-sm font-medium">
                    <button
                        onClick={() => setActiveTab('tips')}
                        className={`pb-2 ${activeTab === 'tips' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
                    >
                        Travel tips & inspiration
                    </button>
                    <button
                        onClick={() => setActiveTab('apartments')}
                        className={`pb-2 ${activeTab === 'apartments' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
                    >
                        Airbnb-friendly apartments
                    </button>
                </div>


                {/* Content */}
                {activeTab === 'tips' && (
                    <div className="grid grid-cols-3 gap-6 text-sm">
                        <div>
                            <h3 className="font-semibold">Family travel hub</h3>
                            <p className="text-gray-500">Tips and inspiration</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Family budget travel</h3>
                            <p className="text-gray-500">Get there for less</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Vacation ideas for any budget</h3>
                            <p className="text-gray-500">Make it special without making i</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Travel Europe on a budget</h3>
                            <p className="text-gray-500">How to take the kids to Europe f</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Outdoor adventure</h3>
                            <p className="text-gray-500">Explore nature with the family</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Bucket list national parks</h3>
                            <p className="text-gray-500">Must-see parks for family travel</p>
                        </div>


                        <div>
                            <h3 className="font-semibold">Kid-friendly state parks</h3>
                            <p className="text-gray-500">Check out these family-friendly l</p>
                        </div>
                    </div>
                )}


                {activeTab === 'apartments' && (
                    <div className="grid grid-cols-6 gap-6 text-sm">
                        {[
                            { city: 'Albuquerque', state: 'New Mexico' },
                            { city: 'Atlanta Metro', state: 'Georgia' },
                            { city: 'Augusta', state: 'Georgia' },
                            { city: 'Austin Metro', state: 'Texas' },
                            { city: 'Baton Rouge', state: 'Louisiana' },
                            { city: 'Bentonville', state: 'Arkansas' },
                            { city: 'Birmingham', state: 'Alabama' },
                            { city: 'Boise', state: 'Idaho' },
                            { city: 'Boston Metro', state: 'Massachusetts' },
                            { city: 'Boulder', state: 'Colorado' },
                            { city: 'Charlotte', state: 'North Carolina' },
                            { city: 'Chicago Metro', state: 'Illinois' },
                            { city: 'Cincinnati', state: 'Ohio' },
                            { city: 'Columbus', state: 'Ohio' },
                            { city: 'Crestview', state: 'Florida' },
                            { city: 'Dallas', state: 'Texas' },
                            { city: 'Denver', state: 'Colorado' },
                        ].map((location, index) => (
                            <div key={index}>
                                <h3 className="font-semibold">{location.city}</h3>
                                <p className="text-gray-500">{location.state}</p>
                            </div>
                        ))}
                        <div>
                            <h3 className="font-semibold text-blue-600 cursor-pointer">Show more</h3>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Inspiration
