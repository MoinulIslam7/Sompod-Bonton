import React from "react";

const CheckboxList = ({ title, items, onChange, toBangla }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-green-50">
            <h2 className="bg-green-600 text-white text-lg font-semibold py-2 px-4 rounded-md mb-4">
                {title}
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            checked={item.checked}
                            onChange={() => onChange(index)}
                            className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor={`checkbox-${index}`} className="text-gray-700">
                            {item.label}
                        </label>
                        {item.checked && (
                            <input
                                type="text" // Change to text to handle both Bangla and English input
                                value={toBangla(item.value)} // Display the Bangla value here
                                onChange={(e) => onChange(index, e.target.value)} // Capture raw value
                                readOnly={item.input === false}
                                className="ml-2 w-14 h-8 border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200"
                            />
                        )}
                        {item.checked && (
                            <span className="ml-2 text-gray-600">
                                ({toBangla(item.value)}) {/* Display Bangla digits here */}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxList;
