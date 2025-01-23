import React from 'react';

const FancyLoading = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className="flex space-x-2">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default FancyLoading;