import React, { useRef, useState } from "react";
import CheckboxList from "./CheckboxList";
import Result from "./Result";
import toast from "react-hot-toast";
import { calculateSharesWithRules } from ".";
import { Helmet } from "react-helmet-async";
import { blogs } from "../Blog/blogs";
import { Link, NavLink } from "react-router-dom";

// Function to convert English numbers to Bangla digits
const englishToBanglaDigits = (number) => {
  const englishToBanglaMap = { 0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯" };
  return number.toString().split("").map((digit) => (englishToBanglaMap[digit] !== undefined ? englishToBanglaMap[digit] : digit)).join("");
};

const banglaToEnglishDigits = (str) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return str?.split('').map((digit) => { const index = banglaDigits.indexOf(digit); return index !== -1 ? englishDigits[index] : digit; }).join('');
};


const HomePage = () => {
  const [items, setItems] = useState([
    { label: "স্বামী", checked: false, input: false, value: "1" },
    { label: "স্ত্রী", checked: false, input: true, value: "1" },
    { label: "পুত্র", checked: false, input: true, value: "1" },
    { label: "কন্যা", checked: false, input: true, value: "1" },
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
    { label: "মৃত পুত্র", checked: false, input: true, value: "1" },
    { label: "মৃত কন্যা", checked: false, input: true, value: "1" },
  ]);

  const [data, setData] = useState([]);
  const [memberCount, setMemberCount] = useState(0);
  const [assetDetails, setAssetDetails] = useState({ gold: 0, rupa: 0, land: 0, cash: 0 });
  const landRef = useRef();
  const goldRef = useRef();
  const rupaRef = useRef();
  const cashRef = useRef();

  const handleChange = (index, newValue = null) => {
    const updatedItems = items.flatMap((item, i) => {
      if (i === index) {

        const isHusbandSelected = items.find((itm) => itm.label === "স্বামী" && itm.checked);
        const isWifeSelected = items.find((itm) => itm.label === "স্ত্রী" && itm.checked);

        if ((item.label === "স্বামী" && isWifeSelected) || (item.label === "স্ত্রী" && isHusbandSelected)) {
          toast.error("স্বামী, স্ত্রী দুই আত্মীয় একসাথে থাকতে পারে না।");
          return item;
        }

        const updatedItem = {
          ...item,
          checked: newValue === null ? !item.checked : item.checked,
          value: newValue !== null ? newValue : item.value,
        };

        // Dynamically add child items for "মৃত পুত্র" and "মৃত কন্যা"
        if (["মৃত পুত্র", "মৃত কন্যা"].includes(item.label) && updatedItem.checked) {
          const childCount = Number(updatedItem.value) || 1; // Default to 1 if value is invalid
          // eslint-disable-next-line no-unused-vars
          const childItems = Array.from({ length: childCount }).flatMap((_, idx) => [
            {
              // label: `${item.label} ${idx + 1} এর পুত্র`,
              label: `${item.label} ১ এর পুত্র`,
              checked: false,
              input: true,
              value: "1",
            },
            {
              // label: `${item.label} ${idx + 1} এর কন্যা`,
              label: `${item.label} ১ এর কন্যা`,
              checked: false,
              input: true,
              value: "1",
            },
          ]);
          return [updatedItem, ...childItems];
        }

        return [updatedItem];
      }
      return [item];
    });

    setItems(updatedItems);

    // Calculate total member count dynamically
    const count = updatedItems.reduce(
      (total, item) => (item.checked ? total + (Number(item.value) || 0) : total),
      0
    );
    setMemberCount(count);
  };

  const handleSubmit = async () => {
    // Gather selected individuals and their input values
    const selectedItems = items.filter(item => item.checked).map(item => ({ label: item.label, value: item.value }));
    const sortedSelectedItems = selectedItems.sort((a, b) => {
      const order = ["মাতা", "পিতা", "স্বামী", "কন্যা", "দাদা", "পুত্র",];
      return order.indexOf(a.label) - order.indexOf(b.label);
    });
    console.log(sortedSelectedItems);
    // const assetValues = {
    //     land: parseInt((landRef.current.value)) || 0,
    //     gold: parseInt((goldRef.current.value)) || 0,
    //     rupa: parseInt((rupaRef.current.value)) || 0,
    //     cash: parseInt((cashRef.current.value)) || 0,
    // };
    const result = await calculateSharesWithRules(sortedSelectedItems, assetDetails);
    console.log(result);
    setData(result);
  };

  return (
    <div className="container space-y-8">
      <Helmet>
        <title>Uttoradhikar</title>
        <meta name="description" content="Welcome to Uttoradhikar, a platform for cultural heritage information." />
        <meta name="keywords" content="cultural heritage, family, society" />
      </Helmet>
      <CheckboxList
        title="আত্মীয়-স্বজনের তালিকা"
        items={items}
        onChange={handleChange}
        toBangla={englishToBanglaDigits}
      />

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="p-4 border border-gray-300 rounded-lg bg-yellow-50 w-full lg:w-[50%]">
          <h2 className="bg-third text-black text-[1.5rem] leading-[1.813rem] font-medium py-2 px-4 rounded-md mb-4">
            সদস্য বিবরণ
          </h2>
          <div className="space-y-2">
            {items
              .filter((item) => item.checked)
              .map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-3">
                  <div className="flex justify-start items-center gap-3">
                    <label
                      htmlFor={`checkbox-${index}`}
                      className={`w-[18px] h-[18px] flex items-center justify-center border border-[#333333] border-opacity-50 rounded-lg cursor-pointer ${item.checked ? 'bg-secondary border-transparent' : ''}`}
                    >
                      {item.checked && (
                        <span className="text-white">✔</span>
                      )}
                    </label>
                    <span className="text-xl leading-6 text-black">{item.label}</span>
                  </div>
                  <span className="text-primary text-2xl font-medium px-6 py-1 bg-white bg-opacity-50 border border-[#E7EAF3]">
                    {englishToBanglaDigits(Number(item.value) || 0)}
                  </span>
                </div>
              ))}
          </div>
          <div className="mt-4 p-6 bg-white flex justify-between items-center">
            <span className="text-[1.5rem] leading-[1.813rem] font-medium text-secondary">মোট সদস্য সংখ্যা</span>
            <span className="text-[2rem] leading-[2.496rem] font-medium text-black">
              {englishToBanglaDigits(memberCount)}
            </span>
          </div>
        </div>

        <div className="p-4 border border-gray-300 rounded-lg bg-yellow-50 w-full lg:w-[50%]">
          <h2 className="bg-secondary text-white text-[1.5rem] leading-[1.813rem] font-medium py-2 px-4 rounded-md mb-5">
            সম্পদের বিবরণ
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-black text-lg">জমি</label>
              <div className="flex justify-between items-center mt-2 border border-[#E7EAF3] rounded">
                <input
                  type="text"
                  ref={landRef}
                  value={englishToBanglaDigits(assetDetails.land)}
                  onChange={(e) => {
                    const englishValue = banglaToEnglishDigits(e.target.value);
                    if (!isNaN(englishValue)) {
                      setAssetDetails((prev) => ({ ...prev, land: parseInt(englishValue) || 0 }));
                    }
                    e.target.value = englishToBanglaDigits(englishValue);
                  }}
                  className="w-full px-5 py-3 text-lg text-black outline-none"
                />
                <div className="mr-2 w-[4.375rem] px-2 py-2 bg-secondary text-lg text-white rounded-lg text-center">
                  শতাংশ
                </div>
              </div>
            </div>

            <div>
              <label className="text-black text-lg">স্বর্ণ</label>
              <div className="flex justify-between items-center mt-2  border border-[#E7EAF3] rounded">
                <input
                  type="text"
                  ref={goldRef}
                  value={englishToBanglaDigits(assetDetails.gold)}
                  onChange={(e) => {
                    const englishValue = banglaToEnglishDigits(e.target.value);
                    e.target.value = englishToBanglaDigits(englishValue);
                    if (!isNaN(englishValue)) { setAssetDetails((prev) => ({ ...prev, gold: parseInt(englishValue) || 0 })); }
                  }}
                  className="w-full px-5 py-3 text-lg text-black outline-none"
                />
                <div className="mr-2 w-[4.375rem] px-2 py-2  bg-secondary text-lg text-white rounded-lg text-center">
                  ভরি
                </div>
              </div>
            </div>
            <div>
              <label className="text-black text-lg">রৌপ্য</label>
              <div className="flex justify-between items-center mt-2  border border-[#E7EAF3] rounded">
                <input
                  type="text"
                  ref={rupaRef}
                  value={englishToBanglaDigits(assetDetails.rupa)}
                  onChange={(e) => {
                    const englishValue = banglaToEnglishDigits(e.target.value);
                    e.target.value = englishToBanglaDigits(englishValue);
                    if (!isNaN(englishValue)) { setAssetDetails((prev) => ({ ...prev, rupa: parseInt(englishValue) || 0, })); }

                  }}
                  className="w-full px-5 py-3 text-lg text-black outline-none"
                />
                <div className="mr-2 w-[4.375rem] px-2 py-2  bg-secondary text-lg text-white rounded-lg text-center">
                  ভরি
                </div>
              </div>
            </div>
            <div>
              <label className="text-black text-lg">মুদ্রা</label>
              <div className="flex justify-between items-center mt-2  border border-[#E7EAF3] rounded">
                <input
                  type="text"
                  ref={cashRef}
                  value={englishToBanglaDigits(assetDetails.cash)}
                  onChange={(e) => {
                    const englishValue = banglaToEnglishDigits(e.target.value);
                    e.target.value = englishToBanglaDigits(englishValue);
                    if (!isNaN(englishValue)) { setAssetDetails((prev) => ({ ...prev, cash: parseInt(englishValue) || 0 })); }
                  }}
                  className="w-full px-5 py-3 text-lg text-black outline-none"
                />
                <div className="mr-2 w-[4.375rem] px-2 py-2  bg-secondary text-lg text-white rounded-lg text-center">
                  টাকা
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button onClick={handleSubmit} className="px-6 py-3 mt-6 bg-green-600 text-white rounded-md text-lg font-medium hover:bg-secondary">
              ফলাফল দেখুন
            </button>
          </div>
        </div>
      </div>
      {data.length > 0 && <Result data={data} />}

      <div className="mt-20">
        <div className="container">
          <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <NavLink to='/blog' className="px-6 py-3 mt-6 bg-green-600 text-white rounded-md text-lg font-medium hover:bg-secondary">
              আরও ব্লগ দেখুন
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
