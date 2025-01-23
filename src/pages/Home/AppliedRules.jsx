import React from "react";
export default function AppliedRules({ data }) {
    console.log(data);

    // Function to convert a number to Bangla numerals
    const toBanglaNumerals = (num) => {
        const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().split('').map(digit => banglaNumerals[parseInt(digit)]).join('');
    };

    return (
        <div className="p-4">
            {data.map((item, index) => (
                item.rules.map((rule, ruleIndex) => (
                    <p key={`${index}-${ruleIndex}`} className="mb-2 text-[#333333] text-[1.375rem] leading-[2.5rem]">
                        <strong>{toBanglaNumerals(index + 1)}</strong>. {rule}
                    </p>
                ))
            ))}
        </div>
    );
}