import React from "react";

// Helper function to convert English numbers to Bangla numbers
const convertToBanglaNumber = (num) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
        .toString()
        .split("")
        .map((digit) => (/\d/.test(digit) ? banglaDigits[digit] : digit))
        .join("");
};

const Table = ({ data }) => {
    return (
        <div className="rounded-md overflow-x-auto">
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className="bg-[#FFF1CA]">
                        <th className="py-2 px-4">#</th>
                        <th className="py-2 px-4">আত্মীয়</th>
                        <th className="py-2 px-4">অংশ</th>
                        <th className="py-2 px-4">জমি (শতাংশ)</th>
                        <th className="py-2 px-4">স্বর্ণ (ভরি)</th>
                        <th className="py-2 px-4">রৌপ্য (ভরি)</th>
                        <th className="py-2 px-4">মুদ্রা(টাকা)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-white" : "bg-[#FFFFED]"}
                        >
                            <td className="py-2 px-4">{convertToBanglaNumber(index + 1)}</td>
                            <td className="py-2 px-4">{item.person || ''}</td>
                            <td className="py-2 px-4">
                                {convertToBanglaNumber(item?.percentage ? item?.percentage?.toFixed(2) : 0)}
                            </td>
                            <td className="py-2 px-4">
                                {convertToBanglaNumber(item.land ? item?.land?.toFixed(2) : 0)}
                            </td>
                            <td className="py-2 px-4">
                                {convertToBanglaNumber(item.gold ? item?.gold?.toFixed(2) : 0)}
                            </td>
                            <td className="py-2 px-4">
                                {convertToBanglaNumber(item.rupa ? item?.rupa?.toFixed(2) : 0)}
                            </td>
                            <td className="py-2 px-4">
                                {convertToBanglaNumber(item.cash ? item?.cash?.toFixed(2) : 0)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
