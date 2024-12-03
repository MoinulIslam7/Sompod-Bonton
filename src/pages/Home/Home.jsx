import React, { useState } from "react";
import CheckboxList from "../Checkbox/CheckboxList";
import calculateShares from './index.js';

// Function to convert English numbers to Bangla digits
const englishToBanglaDigits = (number) => {
  const englishToBanglaMap = { 0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯" };
  return number
    .toString()
    .split("")
    .map((digit) => (englishToBanglaMap[digit] !== undefined ? englishToBanglaMap[digit] : digit))
    .join("");
};

const Home = () => {
  const [items, setItems] = useState([
    { label: "স্বামী", checked: false, input: false, value: "1" },
    { label: "স্ত্রী", checked: false, input: true, value: "1" },
    { label: "পুত্র", checked: false, input: true, value: "1" },
    { label: "মৃত পুত্র", checked: false, input: true, value: "1" },
    { label: "কন্যা", checked: false, input: true, value: "1" },
    { label: "মৃত কন্যা", checked: false, input: true, value: "1" },
    { label: "পিতা", checked: false, input: true, value: "1" },
    { label: "মাতা", checked: false, input: true, value: "1" },
    { label: "দাদা", checked: false, input: true, value: "1" },
    { label: "দাদি", checked: false, input: true, value: "1" },
    { label: "নানি", checked: false, input: true, value: "1" },
    { label: "সহোদর ভাই", checked: false, input: true, value: "1" },
    { label: "সহোদর বোন", checked: false, input: true, value: "1" },
    { label: "সৎ ভাই (বৈমাত্রেয়)", checked: false, input: true, value: "1" },
    { label: "সৎ বোন (বৈমাত্রেয়)", checked: false, input: true, value: "1" },
    { label: "সৎ ভাই (বৈপিত্রেয়)", checked: false, input: true, value: "1" },
    { label: "সৎ বোন (বৈপিত্রেয়)", checked: false, input: true, value: "1" },
    { label: "সহোদর ভাইয়ের পুত্র", checked: false, input: true, value: "1" },
    { label: "সৎ ভাই(বৈমাত্রেয়)-এর পুত্র", checked: false, input: true, value: "1" },
    { label: "সহোদর ভাইয়ের পুত্রের পুত্র", checked: false, input: true, value: "1" },
    { label: "সৎ ভাই(বৈমাত্রেয়)-এর পুত্রের পুত্র", checked: false, input: true, value: "1" },
    { label: "চাচা", checked: false, input: true, value: "1" },
    { label: "চাচা (বৈমাত্রেয়)", checked: false, input: true, value: "1" },
    { label: "চাচাতো ভাই", checked: false, input: true, value: "1" },
    { label: "চাচাতো ভাই (বৈমাত্রেয়)", checked: false, input: true, value: "1" },
    { label: "চাচাতো ভাইয়ের পুত্র", checked: false, input: true, value: "1" },
    { label: "চাচাতো ভাই (বৈমাত্রেয়) এর পুত্র", checked: false, input: true, value: "1" },
    { label: "চাচাতো ভাইয়ের পুত্রের পুত্র", checked: false, input: true, value: "1" },
  ]);

  const [memberCount, setMemberCount] = useState(0);
  const [assetDetails, setAssetDetails] = useState({
    gold: 0,
    rupa: 0,
    land: 0,
    cash: 0,
  });

  const handleChange = (index, newValue = null) => {
    const updatedItems = items.map((item, i) =>
      i === index
        ? {
          ...item,
          checked: newValue === null ? !item.checked : item.checked,
          value: newValue !== null ? newValue : item.value,
        }
        : item
    );

    setItems(updatedItems);

    // Calculate total member count dynamically
    const count = updatedItems.reduce(
      (total, item) => (item.checked ? total + (Number(item.value) || 0) : total),
      0
    );
    setMemberCount(count);
  };

  const handleSubmit = () => {
    // Gather selected individuals and their input values
    const selectedItems = items.filter(item => item.checked).map(item => ({
      label: item.label,
      value: item.value,
    }));

    // Call the inheritance logic to calculate shares
    const result = calculateShares(selectedItems, assetDetails);
    console.log(result); // You can display this in your UI or alert
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-8">
      <CheckboxList
        title="আত্মীয়-স্বজনের তালিকা"
        items={items}
        onChange={handleChange}
        toBangla={englishToBanglaDigits}
      />

      {/* Member Details */}
      <div className="p-4 border border-gray-300 rounded-lg bg-yellow-50">
        <h2 className="bg-yellow-500 text-white text-lg font-semibold py-2 px-4 rounded-md mb-4">
          সদস্য বিবরণ
        </h2>
        <div className="space-y-2">
          {items
            .filter((item) => item.checked)
            .map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{item.label}</span>
                <span className="text-gray-700 font-medium">
                  {englishToBanglaDigits(Number(item.value) || 0)}
                </span>
              </div>
            ))}
        </div>
        <div className="mt-4 border-t pt-4 flex justify-between items-center">
          <span className="text-gray-800 font-semibold">মোট সদস্য সংখ্যা</span>
          <span className="text-lg font-bold text-gray-900">
            {englishToBanglaDigits(memberCount)}
          </span>
        </div>
      </div>

      {/* Asset Details */}
      <div className="p-4 border border-gray-300 rounded-lg bg-yellow-50">
        <h2 className="bg-yellow-500 text-white text-lg font-semibold py-2 px-4 rounded-md mb-4">
          সম্পদের বিবরণ
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-gray-700">জমি (শতাংশ)</label>
            <input
              type="number"
              value={(assetDetails.land)}
              onChange={(e) =>
                setAssetDetails((prev) => ({
                  ...prev,
                  land: parseInt(e.target.value),
                }))
              }
              className="w-full h-8 border-gray-300 rounded focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>
          <div>
            <label className="text-gray-700">সোনা (ভরি)</label>
            <input
              type="number"
              value={(assetDetails.gold)}
              onChange={(e) =>
                setAssetDetails((prev) => ({
                  ...prev,
                  gold: parseInt(e.target.value),
                }))
              }
              className="w-full h-8 border-gray-300 rounded focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>
          <div>
            <label className="text-gray-700">রৌপ্য (ভরি)</label>
            <input
              type="number"
              value={(assetDetails.rupa)}
              onChange={(e) =>
                setAssetDetails((prev) => ({
                  ...prev,
                  rupa: parseInt(e.target.value),
                }))
              }
              className="w-full h-8 border-gray-300 rounded focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>
          <div>
            <label className="text-gray-700">মুদ্রা (টাকা)</label>
            <input
              type="number"
              value={(assetDetails.cash)}
              onChange={(e) =>
                setAssetDetails((prev) => ({
                  ...prev,
                  cash: parseInt(e.target.value),
                }))
              }
              className="w-full h-8 border-gray-300 rounded focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>
        </div>
      </div>

      {/* Result Button */}
      <button onClick={handleSubmit} className="w-full py-2 bg-green-600 text-white rounded-md text-lg font-semibold hover:bg-green-700">
        ফলাফল দেখুন
      </button>
    </div>
  );
};

export default Home;
