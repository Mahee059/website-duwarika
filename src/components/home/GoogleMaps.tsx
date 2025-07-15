'use client'
import React from 'react';

const GoogleMaps = () => {
    return (
        <div className="  bg-white">
           
            {/* Right Panel - Google Maps */}
            <div className=" relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3912975491144!2d85.33977687471607!3d27.705202325587344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d62b49797%3A0x2138d3ae677c130f!2sThe%20Dwarika&#39;s%20Hotel!5e0!3m2!1sen!2snp!4v1752563490607!5m2!1sen!2snp" width="100%" height="420"  loading="lazy" />
                
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <span className="text-lg">+</span>
                    </button>
                    <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <span className="text-lg">−</span>
                    </button>
                </div>
                
                {/* Street View Control */}
                <div className="absolute bottom-4 right-4">
                    <button className="w-12 h-12 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <span className="text-lg">👤</span>
                    </button>
                </div>
                
                {/* Google Logo */}
                <div className="absolute bottom-4 left-4">
                    <div className="bg-white px-2 py-1 rounded shadow-sm">
                        <span className="text-sm font-medium text-blue-600">Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleMaps;