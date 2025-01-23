import React from "react";

const CheckboxList = ({ title, items, onChange, toBangla }) => {
    return (
        <div className="p-4 mt-8 border border-[#E7EAF3] rounded-lg bg-[#FEFEE1] " style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.18)' }}>
            <h2 className="bg-primary text-white text-lg font-semibold py-2 px-4 rounded-md mb-4">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 h-[300px] md:h-auto overflow-y-scroll md:overflow-auto">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className="flex justify-center items-center space-x-3">
                            <input
                                type="checkbox"
                                id={`checkbox-${index}`}
                                checked={item.checked}
                                onChange={() => onChange(index)}
                                className="hidden"
                            />
                            <label
                                htmlFor={`checkbox-${index}`}
                                className={`w-6 h-6 flex items-center justify-center border border-[#333333] border-opacity-50 rounded-lg cursor-pointer ${item.checked ? 'bg-secondary border-transparent' : ''}`}
                            >
                                {item.checked && (
                                    <span className="text-white">✔</span>
                                )}
                            </label>
                            <label htmlFor={`checkbox-${index}`} className="text-[1.125rem] leading-[1.361rem] text-[#333333]">
                                {item.label}
                            </label>
                            {item.checked && (
                                <input
                                    type="text"
                                    value={toBangla(item.value)}
                                    onChange={(e) => onChange(index, e.target.value)}
                                    readOnly={item.input === false}
                                    className="ml-2 w-[32px] h-8 rounded-[4px] outline-none border-[#333333] text-center focus:border-primary focus:ring focus:ring-primary"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxList;