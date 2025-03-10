/* eslint-disable no-case-declarations */
const Rules = {
    "1": "স্বামী ১/৪ পাবে যখন সন্তান বা পুত্রের সন্তান থাকে।",
    "2": "স্বামী ১/২ পাবে যখন সন্তান বা পুত্রের সন্তান না থাকে।",
    "3": "স্ত্রী ১/৮ পাবে যখন সন্তান বা পুত্রের সন্তান থাকে।",
    "4": "স্ত্রী ১/৪ পাবে যখন সন্তান বা পুত্রের সন্তান না থাকে।",
    "5": "কন্যা ১/২ পাবে যখন একজন মাত্র কন্যা থাকে এবং পুত্র না থাকে।",
    "6": "কন্যা ২/৩ পাবে যখন দুই বা ততধিক কন্যা থাকে এবং পুত্র না থাকে।",
    "7": "কন্য অবশিষ্ট ভোগী হিসাবে পাবেন যখন এক বা একের অধিক পুত্র থাকে।",
    "8": "পুত্রের কন্যা পাবে ১/২ অংশ পাবে যখন একজন মাত্র পুত্রের কন্যা থাকে। যদি কোন পুত্র, পুত্রের পুত্র বা একের অধিক কন্যা এবং পুত্রের কন্যা না থাকে।",
    "9": "পুত্রের কন্যা ২/৩ ভাগ পাবে যখন দুই বা ততধিক পুত্রের কন্যা থাকে এবং পুত্র ও পুত্রের পুত্র এবং এবং একের অধিক কন্যা না থাকে।",
    "10": "পুত্রের কন্যা অবশিষ্ট ভোগী হিসেবে পাবেন। পুত্রের পুত্র না থাকলে সমান অংশ কা আইন অনুযায়ী।",
    "11": "পিতা ১/৬ অংশ পাবে পুত্র বা পুত্রের পুত্র থাকে।",
    "12": "পিতা ১/৬ অবশিষ্ট অংশ ভোগী হিসেবে পাবে যখন এক বা একরে অধিক কন্যা, পুত্রের কন্যা এবং পুত্রের পুত্র না থাকে।",
    "13": "পিতা অবশিষ্ট অংশ ভোগী হিসেবে পাবে যখন পুত্র বা পুত্রের পুত্র থাকে।",
    "14": "মাতা ১/৬ অংশ পাবে যখন পুত্র ও পুত্রের পুত্র এবং দুই বা ততধিক ভাই বোন এবং পিতা থাকে।",
    "15": "মাতা ১/৩ অংশ পাবে যখন পুত্র অথবা পুত্রের পুত্র এবং একের অধিক ভাই বোন না থাকে।",
    "16": "মাতা ১/৩ অংশ পাবে যখন স্ত্রী, স্বামী এবং বাবা থাকে। ",
    "17": "দাদা ১/৬ অংশ পাবে যখন সন্তান এবং পুত্রের সন্তান থাকে এবং পিতা বা নিকটতম পিতামহ না থাকে।",
    "18": "দাদা অবশিষ্ট অংশ ভোগী হিসেবে পাবে ১/৬ অংশ পাবেন যখন কন্যা অথবা পুত্রের কন্যা থাকে।",
    "19": "দাদা অবশিষ্ট অংশ ভোগী হিসেবে পাবে যদি দূরবর্তী কোন অংশিদার বা অকশিষ্ট অংশ ভোগী না থাকে।",
    "20": "দাদী ১/৬ অংশ পাবেন যদি কোন মাতা বা মায়ের দিকে দাদী না থাকে।",

    "21": "পূর্ণ বোন ১/২ অংশ পাবেন যখন একজন মাত্র বোন থাকে এবং যদি কোন সন্তান, পুত্রের সন্তান, পিতা অথবা ভাই না থাকে।",
    "22": "পূর্ণ বোন ২/৩ পাবে যখন দুই বা ততধিক বোন থাকে এবং সন্তান, পুত্রের সন্তান, পিতা ও ভাই না থাকে।",
    "23": "বোন অবশিষ্ট ভোগী হিসেবে পাবে যখন পূর্ণ ভাই থাকে বা এক বা একাধিক পুত্রের কন্যা থাকে এবং বোনকে বঞ্চিত করার মত কোন অংশিদার না থাকে এবং এক বা একাধিক কন্যাদের সহিত অবশিষ্ট ভোগী থাকে তারা কন্যাদের অংশ নেওয়ার পর অবশিষ্ট ভোগী হবে।",
    "24": "বৈমাত্রীক বোন পাবে ১/২ অংশ যখন একজন মাত্র বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা ও পূর্ণ ভাই বোন না থাকে।",
    "25": "বোন পাবে ২/৩ অংশ যখন দুই বা ততধিক বৈমাত্রীক বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা ও পূর্ণ ভাই বোন না থাকে।",

    "26": "বৈমাত্রীয় বোন পাবে ১/৬ ভাগ যখন একজন পূর্ণ বোন থাকে (বোন পাবে ১/২ এবং বৈমাত্রী বোন পাবে ২/৩, ১/২, ১/৬)।",
    "27": "বৈমাত্রীক বোন অব শিষ্ট অংশ ভোগী হিসেবে পাবে যখন কোন বৈমাত্রীক ভাই, এক বা একাধিক কন্যা এবং পুত্রের কন্যা এবং বঞ্চিত করার মত কোন অংশিদার না থাকে।",
    "28": "বৈমাত্রীয় ভাই ১/৬ অংশ পাবে যখন সুধু মাত্র একজন বৈমাত্রীয় ভাই থাকে এবং সন্তান, পুত্রের সন্তান ও পিতা না থাকে।",
    "29": "বৈপিত্রীয় ভাই ১/৩ অংশ পাবে যখন সেখানে দুই বা ততধিক বৈপিত্রীয় ভাই থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
    "30": "বৈপিত্রীয় বোন ১/৬ অংশ পাবে সেখানে একমাত্র বৈপিত্রীয় বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
    "31": "বৈপিত্রীয় বোন ১/৩ অংশ পাবে যখন সেখানে দুই বা ততধিক বৈপিত্রীয় বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
    "32": "মাতা ১/৩ অংশ পাবে যখন পুত্র অথবা পুত্রের পুত্র এবং একের অধিক ভাই বোন না থাকে। এবং মা ১/৩ অংশ পাবে যখন স্ত্রী, স্বামী এবং বাবা থাকে।",
    "33": "রাদ নীতি অনুযায়ী যখন সম্পূর্ণ অংশ ১ এর চেয়ে কম হবে তখন সকল অংশ শুধুমাত্র স্বামী/স্ত্রী এর অংশ ছাড়া অন্য সব অংশ আনুপাতিক হারে বৃদ্ধি পাবে। যাতে মোট অংশটি ১ হয়।",
    "34": "পুত্র ও কন্যা ২:১ অনুপাতে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।",
};
const englishToBanglaDigits = (number) => {
    const englishToBanglaMap = { 0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯" };
    return number.toString().split("").map((digit) => (englishToBanglaMap[digit] !== undefined ? englishToBanglaMap[digit] : digit)).join("");
};
export const calculateSharesWithRules = async (selectedPersons, assets) => {
    const prevAssets = { ...assets };
    const results = [];


    const hasClass1 = selectedPersons.some(p => ["পুত্র", "কন্যা", "পুত্রের পুত্র", "পুত্রের কন্যা"].includes(p.label));

    const hasClass2 = selectedPersons.some(p => ["পিতা", "দাদা"].includes(p.label));

    const hasClass3 = selectedPersons.some(p => ["সহোদর ভাই", "সহোদর বোন", "সৎ ভাই (বৈমাত্রেয়)", "সৎ বোন (বৈমাত্রেয়)", "সহোদর ভাইয়ের পুত্র", "সৎ ভাই(বৈমাত্রেয়)-এর পুত্র", "সহোদর ভাইয়ের পুত্রের পুত্র", "সৎ ভাই(বৈমাত্রেয়)-এর পুত্রের পুত্র"].includes(p.label)
    );

    // const hasClass4 = selectedPersons.some(p => ["চাচা", "চাচা (বৈমাত্রেয়)", "চাচাতো ভাই", "চাচাতো ভাই (বৈমাত্রেয়)", "চাচাতো ভাইয়ের পুত্র", "চাচাতো ভাই (বৈমাত্রেয়) এর পুত্র", "চাচাতো ভাইয়ের পুত্রের পুত্র", "চাচাতো ভাই (বৈমাত্রেয়)এর পুত্রের পুত্র"].includes(p.label)
    // );


    const totalAssets = assets.land + assets.gold + assets.rupa + assets.cash;

    let sonCount = selectedPersons.filter(p => p.label === "পুত্র").reduce((sum, p) => sum + p.value, 0);
    let daughterCount = selectedPersons.filter(p => p.label === "কন্যা").reduce((sum, p) => sum + p.value, 0);
    const sonsSonCount = selectedPersons.filter(p => p.label === "পুত্রের পুত্র").reduce((sum, p) => sum + p.value, 0);
    const fatherCount = selectedPersons.filter(p => p.label === "পিতা").length;
    const motherCount = selectedPersons.filter(p => p.label === "মাতা").length;
    const maternalGrandmotherCount = selectedPersons.filter(p => p.label === "মায়ের দাদী").length;
    const paternalGrandfatherCount = selectedPersons.filter(p => p.label === "পিতার দাদী").length;
    const grandfatherCount = selectedPersons.filter(p => p.label === "দাদা").length;

    const maternalHalfSisterCount = selectedPersons.filter(p => p.label === "বৈমাত্রীক বোন").reduce((sum, p) => sum + p.value, 0);
    const paternalHalfSisterCount = selectedPersons.filter(p => p.label === "বৈপিত্রীয় বোন").reduce((sum, p) => sum + p.value, 0);
    const paternalHalfBrotherCount = selectedPersons.filter(p => p.label === "বৈপিত্রীয় ভাই").reduce((sum, p) => sum + p.value, 0);

    const maternalHalfBrotherCount = selectedPersons.filter(p => p.label === "বৈমাত্রীক ভাই").reduce((sum, p) => sum + p.value, 0);


    const hasSon = sonCount > 0;
    const hasFather = fatherCount > 0;
    const hasMother = motherCount > 0;
    const hasMaternalGrandmother = maternalGrandmotherCount > 0;
    const hasPaternalGrandfather = paternalGrandfatherCount > 0;
    const hasGrandfather = grandfatherCount > 0;

    console.log(prevAssets);

    selectedPersons.forEach(person => {
        if (person.label.includes("মৃত পুত্র")) {
            selectedPersons.forEach(p => {
                if (p.label.includes(`${person.label} ১ এর পুত্র`)) {
                    sonCount += Number(p.value);
                } else if (p.label.includes(`${person.label} ১ এর কন্যা`)) {
                    daughterCount += Number(p.value);
                }
            });
        } else if (person.label.includes("মৃত কন্যা")) {
            selectedPersons.forEach(p => {
                if (p.label.includes(`${person.label} ১ এর পুত্র`)) {
                    sonCount += Number(p.value);
                } else if (p.label.includes(`${person.label}১ এর কন্যা`)) {
                    daughterCount += Number(p.value);
                }
            });
        }
    });

    if (selectedPersons.length === 1) {
        const person = selectedPersons[0];
        if (person.value === 1) {
            const personShare = { person: person.label, rules: [] };
            personShare.land = assets.land;
            personShare.gold = assets.gold;
            personShare.rupa = assets.rupa;
            personShare.cash = assets.cash;
            personShare.rules.push(`${person.label} একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।`);
            personShare.percentage = 100;
            results.push(personShare);
        } else {
            for (let i = 1; i <= person.value; i++) {
                const personShare = { person: person.label, rules: [] };
                personShare.land = assets.land / person.value;
                personShare.gold = assets.gold / person.value;
                personShare.rupa = assets.rupa / person.value;
                personShare.cash = assets.cash / person.value;
                if (i === 1) personShare.rules.push(`${person.label} একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।`);
                personShare.percentage = 100 / person.value;
                results.push(personShare);
            }
        }


    } else {
        for (const person of selectedPersons) {
            switch (person.label) {
                case "মাতা":
                    const motherShare = { person: person.label, rules: [] };
                    // Rule 14: Mother gets 1/6 if there are sons, grandsons, two or more brothers, and a father
                    if (hasSon || sonsSonCount > 0 && sonCount > 1) {
                        motherShare.land = prevAssets.land * (1 / 6);
                        motherShare.gold = prevAssets.gold * (1 / 6);
                        motherShare.rupa = prevAssets.rupa * (1 / 6);
                        motherShare.cash = prevAssets.cash * (1 / 6);
                        motherShare.rules.push(Rules["14"]);
                    }
                    // Rule 15: Mother gets 1/3 if there is a son or grandson, and no more than one brother or sister
                    else if ((hasSon || sonsSonCount > 0) && sonCount <= 1) {
                        motherShare.land = prevAssets.land * (1 / 3);
                        motherShare.gold = prevAssets.gold * (1 / 3);
                        motherShare.rupa = prevAssets.rupa * (1 / 3);
                        motherShare.cash = prevAssets.cash * (1 / 3);
                        motherShare.rules.push(Rules["15"]);
                    }
                    // Rule 16: Mother gets 1/3 if husband, wife, and father are present
                    else if (hasFather || hasSon || daughterCount === 0) {
                        motherShare.land = prevAssets.land * (1 / 3);
                        motherShare.gold = prevAssets.gold * (1 / 3);
                        motherShare.rupa = prevAssets.rupa * (1 / 3);
                        motherShare.cash = prevAssets.cash * (1 / 3);
                        motherShare.rules.push(Rules["16"]);
                    }

                    const totalMotherShare = motherShare.land + motherShare.gold + motherShare.rupa + motherShare.cash;
                    motherShare.percentage = (totalMotherShare / totalAssets) * 100;
                    results.push(motherShare);

                    assets.land -= motherShare.land;
                    assets.gold -= motherShare.gold;
                    assets.rupa -= motherShare.rupa;
                    assets.cash -= motherShare.cash;
                    break;

                case "পিতা":
                    const fatherShare = { person: person.label, rules: [] };
                    if (hasSon) {
                        fatherShare.land = prevAssets.land * (1 / 6);
                        fatherShare.gold = prevAssets.gold * (1 / 6);
                        fatherShare.rupa = prevAssets.rupa * (1 / 6);
                        fatherShare.cash = prevAssets.cash * (1 / 6);
                        fatherShare.rules.push(Rules['11']);
                    } else if (daughterCount > 0 || sonsSonCount !== 0) {
                        // Rule 12: Father gets 1/6 as residual heir when Daughter or Son's Daughter exists, no Son
                        fatherShare.land = prevAssets.land * (1 / 6);
                        fatherShare.gold = prevAssets.gold * (1 / 6);
                        fatherShare.rupa = prevAssets.rupa * (1 / 6);
                        fatherShare.cash = prevAssets.cash * (1 / 6);
                        fatherShare.rules.push(Rules["12"]);
                    } else {
                        // Rule 13: Father inherits remaining assets as residual heir
                        fatherShare.land = assets.land;
                        fatherShare.gold = assets.gold;
                        fatherShare.rupa = assets.rupa;
                        fatherShare.cash = assets.cash;
                        fatherShare.rules.push(Rules["13"]);
                    }

                    const totalFatherShare = fatherShare.land + fatherShare.gold + fatherShare.rupa + fatherShare.cash;
                    console.log(prevAssets);
                    fatherShare.percentage = (totalFatherShare / totalAssets) * 100;
                    results.push(fatherShare);

                    assets.land -= fatherShare.land;
                    assets.gold -= fatherShare.gold;
                    assets.rupa -= fatherShare.rupa;
                    assets.cash -= fatherShare.cash;
                    break;


                case "স্বামী":
                    const husbandShare = {
                        person: person.label,
                        land: hasSon ? assets.land * (1 / 4) : assets.land * (1 / 2),
                        gold: hasSon ? assets.gold * (1 / 4) : assets.gold * (1 / 2),
                        rupa: hasSon ? assets.rupa * (1 / 4) : assets.rupa * (1 / 2),
                        cash: hasSon ? assets.cash * (1 / 4) : assets.cash * (1 / 2),
                    };

                    const totalHusbandShare = husbandShare.land + husbandShare.gold + husbandShare.rupa + husbandShare.cash;
                    husbandShare.percentage = (totalHusbandShare / totalAssets) * 100;
                    husbandShare.rules = [hasSon ? Rules["1"] : Rules["2"]];
                    results.push(husbandShare);
                    assets.land -= husbandShare.land;
                    assets.gold -= husbandShare.gold;
                    assets.rupa -= husbandShare.rupa;
                    assets.cash -= husbandShare.cash;
                    break;

                case "স্ত্রী":
                    // Determine the total share for all wives
                    const totalWifeShare = hasSon ? (1 / 8) : (1 / 4);

                    // Calculate the individual share for each wife
                    const individualWifeShare = totalWifeShare / person.value;

                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const wifeShare = {
                            person: `${person.label} (${count})`,
                            land: assets.land * individualWifeShare,
                            gold: assets.gold * individualWifeShare,
                            rupa: assets.rupa * individualWifeShare,
                            cash: assets.cash * individualWifeShare,
                            rules: [hasSon ? Rules["3"] : Rules["4"]],
                        };

                        // Calculate the percentage share for this wife
                        const totalShareValue = wifeShare.land + wifeShare.gold + wifeShare.rupa + wifeShare.cash;
                        wifeShare.percentage = (totalShareValue / totalAssets) * 100;

                        results.push(wifeShare);
                    }

                    // Deduct the total share allocated to wives from the assets
                    assets.land -= assets.land * totalWifeShare;
                    assets.gold -= assets.gold * totalWifeShare;
                    assets.rupa -= assets.rupa * totalWifeShare;
                    assets.cash -= assets.cash * totalWifeShare;
                    break;

                case "কন্যা":
                    if (sonCount === 0) {
                        // No sons, daughters inherit as per Islamic rules
                        for (let i = 1; i <= person.value; i++) {
                            const count = englishToBanglaDigits(i);
                            const daughterShare = { person: `${person.label} (${count})`, rules: [] };
                            if (daughterCount === 1) {
                                // Rule 5: Single daughter gets 1/2 if no son exists
                                daughterShare.land = prevAssets.land * (1 / 2);
                                daughterShare.gold = prevAssets.gold * (1 / 2);
                                daughterShare.rupa = prevAssets.rupa * (1 / 2);
                                daughterShare.cash = prevAssets.cash * (1 / 2);
                                daughterShare.rules.push(Rules["5"]);
                            } else if (daughterCount >= 2) {
                                // Rule 6: Multiple daughters get 2/3 if no son exists
                                daughterShare.land = prevAssets.land * (2 / 3) / daughterCount;
                                daughterShare.gold = prevAssets.gold * (2 / 3) / daughterCount;
                                daughterShare.rupa = prevAssets.rupa * (2 / 3) / daughterCount;
                                daughterShare.cash = prevAssets.cash * (2 / 3) / daughterCount;
                                daughterShare.rules.push(Rules["6"]);
                            }
                            const totalDaughterShare = daughterShare.land + daughterShare.gold + daughterShare.rupa + daughterShare.cash;
                            daughterShare.percentage = (totalDaughterShare / totalAssets) * 100;
                            results.push(daughterShare);
                        }

                    } else {
                        // Sons and daughters coexist, 2:1 ratio
                        const totalRatio = (2 * Number(sonCount)) + Number(daughterCount);
                        for (let i = 1; i <= person.value; i++) {
                            const count = englishToBanglaDigits(i);
                            const daughterShare = {
                                person: `${person.label} (${count})`,
                                land: assets.land * (1 / totalRatio),
                                gold: assets.gold * (1 / totalRatio),
                                rupa: assets.rupa * (1 / totalRatio),
                                cash: assets.cash * (1 / totalRatio),
                                rules: []

                            };
                            if (i === 1) daughterShare.rules.push(Rules["7"])
                            const totalDaughterShare = daughterShare.land + daughterShare.gold + daughterShare.rupa + daughterShare.cash;
                            daughterShare.percentage = (totalDaughterShare / totalAssets) * 100;
                            results.push(daughterShare);
                        }

                    }
                    break;
                case "পুত্র":
                    // Sons inherit as per Islamic rules
                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const sonShare = { person: `${person.label} (${count})`, rules: [] };

                        if (daughterCount === 0) {
                            // Rule 3: Sons inherit everything if no daughters
                            sonShare.land = assets.land / Number(sonCount);
                            sonShare.gold = assets.gold / Number(sonCount);
                            sonShare.rupa = assets.rupa / Number(sonCount);
                            sonShare.cash = assets.cash / Number(sonCount);
                            if (i === 1) {
                                sonShare.rules.push("পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");
                            }
                        } else {
                            // Sons and daughters coexist, 2:1 ratio
                            const totalRatio = (2 * Number(sonCount)) + Number(daughterCount);
                            sonShare.land = assets.land * (2 / totalRatio);
                            sonShare.gold = assets.gold * (2 / totalRatio);
                            sonShare.rupa = assets.rupa * (2 / totalRatio);
                            sonShare.cash = assets.cash * (2 / totalRatio);
                            if (i === 1) sonShare.rules.push(Rules["34"]);
                        }
                        const totalSonShare = sonShare.land + sonShare.gold + sonShare.rupa + sonShare.cash;
                        sonShare.percentage = (totalSonShare / totalAssets) * 100;
                        results.push(sonShare);
                    }
                    break;

                case "মৃত পুত্র":
                    if (person.label.startsWith("মৃত পুত্র")) {
                        const grandchildren = selectedPersons.filter(p => p.label.startsWith(`${person.label} এর`));
                        const sonCount = grandchildren.filter(p => p.label.endsWith("পুত্র")).reduce((sum, p) => sum + Number(p.value), 0);
                        const daughterCount = grandchildren.filter(p => p.label.endsWith("কন্যা")).reduce((sum, p) => sum + Number(p.value), 0);

                        if (sonCount === 0) {
                            // No sons, grandchildren inherit as per Islamic rules
                            grandchildren.forEach(grandchild => {
                                let share = { person: grandchild.label, rules: [] };

                                if (grandchild.label.endsWith("পুত্র")) {
                                    // Calculate share for deceased son's son
                                    share.land = assets.land * (2 / ((2 * sonCount) + daughterCount));
                                    share.gold = assets.gold * (2 / ((2 * sonCount) + daughterCount));
                                    share.rupa = assets.rupa * (2 / ((2 * sonCount) + daughterCount));
                                    share.cash = assets.cash * (2 / ((2 * sonCount) + daughterCount));
                                } else if (grandchild.label.endsWith("কন্যা")) {
                                    // Calculate share for deceased son's daughter
                                    share.land = assets.land * (1 / ((2 * sonCount) + daughterCount));
                                    share.gold = assets.gold * (1 / ((2 * sonCount) + daughterCount));
                                    share.rupa = assets.rupa * (1 / ((2 * sonCount) + daughterCount));
                                    share.cash = assets.cash * (1 / ((2 * sonCount) + daughterCount));
                                }

                                const totalShare = share.land + share.gold + share.rupa + share.cash;
                                share.percentage = (totalShare / totalAssets) * 100;
                                results.push(share);

                                // Deduct the calculated shares from the assets
                                assets.land -= share.land;
                                assets.gold -= share.gold;
                                assets.rupa -= share.rupa;
                                assets.cash -= share.cash;
                            });
                        } else {
                            // Sons and daughters coexist, 2:1 ratio
                            const totalRatio = (2 * sonCount) + daughterCount;
                            grandchildren.forEach(grandchild => {
                                let share = { person: grandchild.label, rules: [] };

                                if (grandchild.label.endsWith("পুত্র")) {
                                    // Calculate share for deceased son's son
                                    share.land = assets.land * (2 / totalRatio);
                                    share.gold = assets.gold * (2 / totalRatio);
                                    share.rupa = assets.rupa * (2 / totalRatio);
                                    share.cash = assets.cash * (2 / totalRatio);
                                } else if (grandchild.label.endsWith("কন্যা")) {
                                    // Calculate share for deceased son's daughter
                                    share.land = assets.land * (1 / totalRatio);
                                    share.gold = assets.gold * (1 / totalRatio);
                                    share.rupa = assets.rupa * (1 / totalRatio);
                                    share.cash = assets.cash * (1 / totalRatio);
                                }

                                const totalShare = share.land + share.gold + share.rupa + share.cash;
                                share.percentage = (totalShare / totalAssets) * 100;
                                results.push(share);

                                // Deduct the calculated shares from the assets
                                assets.land -= share.land;
                                assets.gold -= share.gold;
                                assets.rupa -= share.rupa;
                                assets.cash -= share.cash;
                            });
                        }
                    } else if (person.label.startsWith("মৃত কন্যা")) {
                        const grandchildren = selectedPersons.filter(p => p.label.startsWith(`${person.label} এর`));
                        grandchildren.forEach(grandchild => {
                            let share = { person: grandchild.label, rules: [] };

                            if (grandchild.label.endsWith("পুত্র")) {
                                // Calculate share for deceased daughter's son
                                share.land = assets.land * (1 / ((2 * sonCount) + daughterCount));
                                share.gold = assets.gold * (1 / ((2 * sonCount) + daughterCount));
                                share.rupa = assets.rupa * (1 / ((2 * sonCount) + daughterCount));
                                share.cash = assets.cash * (1 / ((2 * sonCount) + daughterCount));
                            } else if (grandchild.label.endsWith("কন্যা")) {
                                // Calculate share for deceased daughter's daughter
                                share.land = assets.land * (1 / ((2 * sonCount) + daughterCount));
                                share.gold = assets.gold * (1 / ((2 * sonCount) + daughterCount));
                                share.rupa = assets.rupa * (1 / ((2 * sonCount) + daughterCount));
                                share.cash = assets.cash * (1 / ((2 * sonCount) + daughterCount));
                            }

                            const totalShare = share.land + share.gold + share.rupa + share.cash;
                            share.percentage = (totalShare / totalAssets) * 100;
                            results.push(share);

                            // Deduct the calculated shares from the assets
                            assets.land -= share.land;
                            assets.gold -= share.gold;
                            assets.rupa -= share.rupa;
                            assets.cash -= share.cash;
                        });
                    }
                    break;

                case "দাদা":
                    const grandfatherShare = { person: person.label, rules: [] };
                    if (hasSon || sonsSonCount > 0 && !hasFather && !hasPaternalGrandfather) {
                        grandfatherShare.land = prevAssets.land * (1 / 6);
                        grandfatherShare.gold = prevAssets.gold * (1 / 6);
                        grandfatherShare.rupa = prevAssets.rupa * (1 / 6);
                        grandfatherShare.cash = prevAssets.cash * (1 / 6);
                        grandfatherShare.rules.push(Rules["17"]);
                    } else if ((daughterCount > 0 || sonsSonCount > 0) && hasFather) {
                        grandfatherShare.land = prevAssets.land * (1 / 6);
                        grandfatherShare.gold = prevAssets.gold * (1 / 6);
                        grandfatherShare.rupa = prevAssets.rupa * (1 / 6);
                        grandfatherShare.cash = prevAssets.cash * (1 / 6);
                        grandfatherShare.rules.push(Rules["18"]);
                    } else if (daughterCount > 0 && sonsSonCount === 0) {
                        grandfatherShare.land = prevAssets.land * (1 / 3);
                        grandfatherShare.gold = prevAssets.gold * (1 / 3);
                        grandfatherShare.rupa = prevAssets.rupa * (1 / 3);
                        grandfatherShare.cash = prevAssets.cash * (1 / 3);
                    } else {
                        grandfatherShare.land = prevAssets.land;
                        grandfatherShare.gold = prevAssets.gold;
                        grandfatherShare.rupa = prevAssets.rupa;
                        grandfatherShare.cash = prevAssets.cash;
                        grandfatherShare.rules.push(Rules["19"]);
                    }

                    const totalGrandfatherShare = grandfatherShare.land + grandfatherShare.gold + grandfatherShare.rupa + grandfatherShare.cash;
                    grandfatherShare.percentage = (totalGrandfatherShare / totalAssets) * 100;
                    results.push(grandfatherShare);

                    assets.land -= grandfatherShare.land;
                    assets.gold -= grandfatherShare.gold;
                    assets.rupa -= grandfatherShare.rupa;
                    assets.cash -= grandfatherShare.cash;
                    break;

                case "দাদী":
                    const grandmotherShare = { person: person.label, rules: [] };
                    if ((!hasMother || !hasMaternalGrandmother) && !hasGrandfather) {
                        grandmotherShare.land = prevAssets.land * (1 / 6);
                        grandmotherShare.gold = prevAssets.gold * (1 / 6);
                        grandmotherShare.rupa = prevAssets.rupa * (1 / 6);
                        grandmotherShare.cash = prevAssets.cash * (1 / 6);
                        grandmotherShare.rules.push(Rules["20"]);
                    }

                    const totalGrandmotherShare = grandmotherShare.land + grandmotherShare.gold + grandmotherShare.rupa + grandmotherShare.cash;
                    grandmotherShare.percentage = (totalGrandmotherShare / totalAssets) * 100;
                    results.push(grandmotherShare);

                    assets.land -= grandmotherShare.land;
                    assets.gold -= grandmotherShare.gold;
                    assets.rupa -= grandmotherShare.rupa;
                    assets.cash -= grandmotherShare.cash;
                    break;

                case "পুত্রের কন্যা":
                    const sonDaughtersShare = [];

                    if (sonCount === 0 && sonsSonCount === 0 && daughterCount === 0) {
                        if (person.value === 1) {
                            // Rule 8: Single পুত্রের কন্যা gets 1/2 share
                            const share = {
                                person: person.label,
                                land: assets.land * (1 / 2),
                                gold: assets.gold * (1 / 2),
                                rupa: assets.rupa * (1 / 2),
                                cash: assets.cash * (1 / 2),
                                rules: [Rules["8"]]
                            };
                            sonDaughtersShare.push(share);
                        } else if (person.value > 1) {
                            // Rule 9: Multiple পুত্রের কন্যা collectively get 2/3 share
                            const totalShare = {
                                land: assets.land * (2 / 3),
                                gold: assets.gold * (2 / 3),
                                rupa: assets.rupa * (2 / 3),
                                cash: assets.cash * (2 / 3),
                            };
                            const individualShare = {
                                land: totalShare.land / person.value,
                                gold: totalShare.gold / person.value,
                                rupa: totalShare.rupa / person.value,
                                cash: totalShare.cash / person.value,
                            };

                            for (let i = 0; i < person.value; i++) {
                                const count = englishToBanglaDigits(i + 1);
                                sonDaughtersShare.push({
                                    person: `${person.label} ${count}`,
                                    land: individualShare.land,
                                    gold: individualShare.gold,
                                    rupa: individualShare.rupa,
                                    cash: individualShare.cash,
                                    rules: [Rules["9"]]
                                });
                            }
                        }
                    } else if (sonCount === 0) {
                        // Rule 10: Residual share for পুত্রের কন্যা
                        const remainingAssets = assets.land + assets.gold + assets.rupa + assets.cash;
                        const equalShare = remainingAssets / person.value;

                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            sonDaughtersShare.push({
                                person: `${person.label} ${count}`,
                                land: equalShare / 4,
                                gold: equalShare / 4,
                                rupa: equalShare / 4,
                                cash: equalShare / 4,
                                rules: [Rules["10"]]
                            });
                        }
                    }

                    // Add shares to results and deduct from assets
                    sonDaughtersShare.forEach(share => {
                        results.push(share);
                        assets.land -= share.land;
                        assets.gold -= share.gold;
                        assets.rupa -= share.rupa;
                        assets.cash -= share.cash;
                    });
                    break;

                case "পূর্ণ বোন":
                    if (sonCount === 0 && sonsSonCount === 0 && fatherCount === 0 && selectedPersons.filter(p => p.label === "পূর্ণ ভাই").length === 0) {
                        const fullSistersShare = { person: person.label, rules: [] };

                        if (person.value === 1) {
                            // Rule 21: 1/2 share for one sister
                            fullSistersShare.land = assets.land * (1 / 2);
                            fullSistersShare.gold = assets.gold * (1 / 2);
                            fullSistersShare.rupa = assets.rupa * (1 / 2);
                            fullSistersShare.cash = assets.cash * (1 / 2);
                            fullSistersShare.rules.push(Rules["21"]);
                        } else if (person.value > 1) {
                            // Rule 22: 2/3 share for two or more sisters
                            const totalShare = totalAssets * (2 / 3);
                            const equalShare = totalShare / person.value;

                            fullSistersShare.land = assets.land * (2 / 3);
                            fullSistersShare.gold = assets.gold * (2 / 3);
                            fullSistersShare.rupa = assets.rupa * (2 / 3);
                            fullSistersShare.cash = assets.cash * (2 / 3);
                            fullSistersShare.rules.push(Rules["22"]);

                            // Distribute equally among all sisters
                            for (let i = 0; i < person.value; i++) {
                                const count = englishToBanglaDigits(i + 1);
                                results.push({
                                    person: `${person.label} ${count}`,
                                    land: equalShare / totalAssets * assets.land,
                                    gold: equalShare / totalAssets * assets.gold,
                                    rupa: equalShare / totalAssets * assets.rupa,
                                    cash: equalShare / totalAssets * assets.cash,
                                    rules: [Rules["22"]]
                                });
                            }
                        }
                    } else if (selectedPersons.filter(p => p.label === "পূর্ণ ভাই").length > 0 || selectedPersons.some(p => p.label === "পুত্রের কন্যা")) {
                        // Rule 23: Residual share
                        const residualShare = {
                            person: person.label,
                            land: assets.land,
                            gold: assets.gold,
                            rupa: assets.rupa,
                            cash: assets.cash,
                            rules: [Rules["23"]]
                        };

                        results.push(residualShare);
                        assets.land = 0;
                        assets.gold = 0;
                        assets.rupa = 0;
                        assets.cash = 0;
                    }
                    break;

                case "বৈমাত্রীক ভাই":
                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const halfBrotherShare = { person: `${person.label} (${count})`, rules: [] };

                        if (maternalHalfBrotherCount === 1 && daughterCount === 0 && hasFather === false && sonCount === 0) {
                            halfBrotherShare.land = prevAssets.land * (1 / 3);
                            halfBrotherShare.gold = prevAssets.gold * (1 / 3);
                            halfBrotherShare.rupa = prevAssets.rupa * (1 / 3);
                            halfBrotherShare.cash = prevAssets.cash * (1 / 3);
                            halfBrotherShare.rules.push(Rules["21"]);
                        } else if (maternalHalfBrotherCount >= 2) {
                            halfBrotherShare.land = prevAssets.land * (2 / 3) / maternalHalfBrotherCount;
                            halfBrotherShare.gold = prevAssets.gold * (2 / 3) / maternalHalfBrotherCount;
                            halfBrotherShare.rupa = prevAssets.rupa * (2 / 3) / maternalHalfBrotherCount;
                            halfBrotherShare.cash = prevAssets.cash * (2 / 3) / maternalHalfBrotherCount;
                            halfBrotherShare.rules.push(Rules["22"]);
                        } else {
                            halfBrotherShare.land = prevAssets.land * (1 / 6);
                            halfBrotherShare.gold = prevAssets.gold * (1 / 6);
                            halfBrotherShare.rupa = prevAssets.rupa * (1 / 6);
                            halfBrotherShare.cash = prevAssets.cash * (1 / 6);
                            halfBrotherShare.rules.push(Rules["23"]);
                        }

                        const totalHalfBrotherShare = halfBrotherShare.land + halfBrotherShare.gold + halfBrotherShare.rupa + halfBrotherShare.cash;
                        halfBrotherShare.percentage = (totalHalfBrotherShare / totalAssets) * 100;
                        results.push(halfBrotherShare);

                        assets.land -= halfBrotherShare.land;
                        assets.gold -= halfBrotherShare.gold;
                        assets.rupa -= halfBrotherShare.rupa;
                        assets.cash -= halfBrotherShare.cash;
                    }
                    break;

                // Rule for paternal half-brothers
                case "বৈপিত্রীয় ভাই":
                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const paternalHalfBrotherShare = { person: `${person.label} (${count})`, rules: [] };

                        if (paternalHalfBrotherCount === 1) {
                            paternalHalfBrotherShare.land = prevAssets.land * (1 / 2);
                            paternalHalfBrotherShare.gold = prevAssets.gold * (1 / 2);
                            paternalHalfBrotherShare.rupa = prevAssets.rupa * (1 / 2);
                            paternalHalfBrotherShare.cash = prevAssets.cash * (1 / 2);
                            paternalHalfBrotherShare.rules.push(Rules["31"]);
                        } else if (paternalHalfBrotherCount >= 2) {
                            paternalHalfBrotherShare.land = prevAssets.land * (1 / paternalHalfBrotherCount);
                            paternalHalfBrotherShare.gold = prevAssets.gold * (1 / paternalHalfBrotherCount);
                            paternalHalfBrotherShare.rupa = prevAssets.rupa * (1 / paternalHalfBrotherCount);
                            paternalHalfBrotherShare.cash = prevAssets.cash * (1 / paternalHalfBrotherCount);
                            paternalHalfBrotherShare.rules.push(Rules["32"]);
                        } else {
                            paternalHalfBrotherShare.land = prevAssets.land * (1 / 6);
                            paternalHalfBrotherShare.gold = prevAssets.gold * (1 / 6);
                            paternalHalfBrotherShare.rupa = prevAssets.rupa * (1 / 6);
                            paternalHalfBrotherShare.cash = prevAssets.cash * (1 / 6);
                            paternalHalfBrotherShare.rules.push(Rules["33"]);
                        }

                        const totalPaternalHalfBrotherShare = paternalHalfBrotherShare.land + paternalHalfBrotherShare.gold + paternalHalfBrotherShare.rupa + paternalHalfBrotherShare.cash;
                        paternalHalfBrotherShare.percentage = (totalPaternalHalfBrotherShare / totalAssets) * 100;
                        results.push(paternalHalfBrotherShare);

                        assets.land -= paternalHalfBrotherShare.land;
                        assets.gold -= paternalHalfBrotherShare.gold;
                        assets.rupa -= paternalHalfBrotherShare.rupa;
                        assets.cash -= paternalHalfBrotherShare.cash;
                    }
                    break;

                // Rule for half-sisters (maternal and paternal)
                case "বৈমাত্রীক বোন":
                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const halfSisterShare = { person: `${person.label} (${count})`, rules: [] };

                        if (maternalHalfSisterCount === 1 && daughterCount === 0 && hasFather === false && sonCount === 0) {
                            halfSisterShare.land = prevAssets.land * (1 / 2);
                            halfSisterShare.gold = prevAssets.gold * (1 / 2);
                            halfSisterShare.rupa = prevAssets.rupa * (1 / 2);
                            halfSisterShare.cash = prevAssets.cash * (1 / 2);
                            halfSisterShare.rules.push(Rules["24"]);
                        } else if (maternalHalfSisterCount >= 2) {
                            halfSisterShare.land = prevAssets.land * (2 / 3) / maternalHalfSisterCount;
                            halfSisterShare.gold = prevAssets.gold * (2 / 3) / maternalHalfSisterCount;
                            halfSisterShare.rupa = prevAssets.rupa * (2 / 3) / maternalHalfSisterCount;
                            halfSisterShare.cash = prevAssets.cash * (2 / 3) / maternalHalfSisterCount;
                            halfSisterShare.rules.push(Rules["25"]);
                        } else {
                            halfSisterShare.land = prevAssets.land * (1 / 6);
                            halfSisterShare.gold = prevAssets.gold * (1 / 6);
                            halfSisterShare.rupa = prevAssets.rupa * (1 / 6);
                            halfSisterShare.cash = prevAssets.cash * (1 / 6);
                            halfSisterShare.rules.push(Rules["26"]);
                        }

                        const totalHalfSisterShare = halfSisterShare.land + halfSisterShare.gold + halfSisterShare.rupa + halfSisterShare.cash;
                        halfSisterShare.percentage = (totalHalfSisterShare / totalAssets) * 100;
                        results.push(halfSisterShare);

                        assets.land -= halfSisterShare.land;
                        assets.gold -= halfSisterShare.gold;
                        assets.rupa -= halfSisterShare.rupa;
                        assets.cash -= halfSisterShare.cash;
                    }
                    break;

                case "বৈপিত্রীয় বোন":
                    for (let i = 1; i <= person.value; i++) {
                        const count = englishToBanglaDigits(i);
                        const halfSisterShare = { person: `${person.label} (${count})`, rules: [] };

                        if (paternalHalfSisterCount === 1 && daughterCount === 0 && hasFather === false && sonCount === 0) {
                            halfSisterShare.land = prevAssets.land * (1 / 3);
                            halfSisterShare.gold = prevAssets.gold * (1 / 3);
                            halfSisterShare.rupa = prevAssets.rupa * (1 / 3);
                            halfSisterShare.cash = prevAssets.cash * (1 / 3);
                            halfSisterShare.rules.push(Rules["30"]);
                        } else if (paternalHalfSisterCount >= 2) {
                            halfSisterShare.land = prevAssets.land * (1 / 3) / paternalHalfSisterCount;
                            halfSisterShare.gold = prevAssets.gold * (1 / 3) / paternalHalfSisterCount;
                            halfSisterShare.rupa = prevAssets.rupa * (1 / 3) / paternalHalfSisterCount;
                            halfSisterShare.cash = prevAssets.cash * (1 / 3) / paternalHalfSisterCount;
                            halfSisterShare.rules.push(Rules["31"]);
                        }

                        const totalHalfSisterShare = halfSisterShare.land + halfSisterShare.gold + halfSisterShare.rupa + halfSisterShare.cash;
                        halfSisterShare.percentage = (totalHalfSisterShare / totalAssets) * 100;
                        results.push(halfSisterShare);

                        assets.land -= halfSisterShare.land;
                        assets.gold -= halfSisterShare.gold;
                        assets.rupa -= halfSisterShare.rupa;
                        assets.cash -= halfSisterShare.cash;
                    }
                    break;

                // Bewlo are new and need to corrrect 

                case "নানি":
                    // Maternal Grandmother
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 6);
                        individualShare.gold = assets.gold * (1 / 6);
                        individualShare.rupa = assets.rupa * (1 / 6);
                        individualShare.cash = assets.cash * (1 / 6);
                        individualShare.rules.push("নানি ১/৬ অংশ পাবে যদি কোন মাতা এবং দাদি না থাকে।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;

                case "সহোদর ভাই":
                    if (sonCount === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 3);
                            individualShare.gold = assets.gold * (1 / 3);
                            individualShare.rupa = assets.rupa * (1 / 3);
                            individualShare.cash = assets.cash * (1 / 3);
                            individualShare.rules.push("সহোদর ভাই একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "সহোদর বোন":
                    // Full Sister
                    if (daughterCount === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 3);
                            individualShare.gold = assets.gold * (1 / 3);
                            individualShare.rupa = assets.rupa * (1 / 3);
                            individualShare.cash = assets.cash * (1 / 3);
                            individualShare.rules.push("সহোদর ভাই একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;
                            results.push(individualShare);
                        }
                    }
                    break;
                case "সৎ ভাই(বৈমাত্রেয়)":
                    // Step Brother (Maternal side)
                    if (sonCount === 0 && daughterCount === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 4);
                            individualShare.gold = assets.gold * (1 / 4);
                            individualShare.rupa = assets.rupa * (1 / 4);
                            individualShare.cash = assets.cash * (1 / 4);
                            individualShare.rules.push("সৎ ভাই (বৈমাত্রেয়) একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "সৎ বোন(বৈমাত্রেয়)":
                    // Step Sister (Maternal side)
                    if (sonCount === 0 && daughterCount === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 4);
                            individualShare.gold = assets.gold * (1 / 4);
                            individualShare.rupa = assets.rupa * (1 / 4);
                            individualShare.cash = assets.cash * (1 / 4);
                            individualShare.rules.push("বৈমাত্রেয় বোন ১/২ অংশ পাবে যখন একজন মাত্র বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা ও পূর্ণ ভাই, বোন না থাকে");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "সৎ ভাই(বৈপিত্রেয়)":
                    // Step Brother (Paternal side)
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 4);
                        individualShare.gold = assets.gold * (1 / 4);
                        individualShare.rupa = assets.rupa * (1 / 4);
                        individualShare.cash = assets.cash * (1 / 4);
                        individualShare.rules.push("সৎ ভাই(বৈপিত্রেয়) একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;

                case "সৎ বোন(বৈপিত্রেয়)":
                    // Step Sister (Paternal side)
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 4);
                        individualShare.gold = assets.gold * (1 / 4);
                        individualShare.rupa = assets.rupa * (1 / 4);
                        individualShare.cash = assets.cash * (1 / 4);
                        individualShare.rules.push("সৎ বোন(বৈপিত্রেয়) একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;
                case "সহোদর ভাইয়ের পুত্র":
                    // Son of Full Brother
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 3);
                        individualShare.gold = assets.gold * (1 / 3);
                        individualShare.rupa = assets.rupa * (1 / 3);
                        individualShare.cash = assets.cash * (1 / 3);
                        individualShare.rules.push("সহোদর ভাইয়ের পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;

                case "সৎ ভাই(বৈমাত্রেয়) - এর পুত্র":
                    // Son of step brother (maternal side)
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 4);
                        individualShare.gold = assets.gold * (1 / 4);
                        individualShare.rupa = assets.rupa * (1 / 4);
                        individualShare.cash = assets.cash * (1 / 4);
                        individualShare.rules.push("সৎ ভাই(বৈমাত্রেয়) - এর পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;

                case "সহোদর ভাইয়ের পুত্রের পুত্র":
                    // Grandson of Full Brother
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 12); // Example share for grandson of full brother
                        individualShare.gold = assets.gold * (1 / 12);
                        individualShare.rupa = assets.rupa * (1 / 12);
                        individualShare.cash = assets.cash * (1 / 12);
                        individualShare.rules.push("সহোদর ভাইয়ের পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;

                case "সৎ ভাই(বৈমাত্রেয়) - এর পুত্রের পুত্র":
                    // Grandson of Step Brother from Maternal Side
                    for (let i = 0; i < person.value; i++) {
                        const count = englishToBanglaDigits(i + 1);
                        let individualShare = { person: `${person.label} (${count})`, rules: [] };

                        individualShare.land = assets.land * (1 / 12); // Example share for grandson of step brother from maternal side
                        individualShare.gold = assets.gold * (1 / 12);
                        individualShare.rupa = assets.rupa * (1 / 12);
                        individualShare.cash = assets.cash * (1 / 12);
                        individualShare.rules.push("সৎ ভাই(বৈমাত্রেয়)-এর পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                        // Immediately reduce assets after calculation
                        assets.land -= individualShare.land;
                        assets.gold -= individualShare.gold;
                        assets.rupa -= individualShare.rupa;
                        assets.cash -= individualShare.cash;

                        results.push(individualShare);
                    }
                    break;


                case "চাচা":
                    // Uncle
                    if (!hasClass1 && !hasClass2 && !hasClass3) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 6);
                            individualShare.gold = assets.gold * (1 / 6);
                            individualShare.rupa = assets.rupa * (1 / 6);
                            individualShare.cash = assets.cash * (1 / 6);
                            individualShare.rules.push("চাচা একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচা(বৈমাত্রেয়)":
                    // Paternal Half Uncle
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 12); // Example share for Paternal Half Uncle
                            individualShare.gold = assets.gold * (1 / 12);
                            individualShare.rupa = assets.rupa * (1 / 12);
                            individualShare.cash = assets.cash * (1 / 12);
                            individualShare.rules.push("চাচা(বৈমাত্রেয়) একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচাতো ভাই":
                    // Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 12); // Example share for Cousin Brother
                            individualShare.gold = assets.gold * (1 / 12);
                            individualShare.rupa = assets.rupa * (1 / 12);
                            individualShare.cash = assets.cash * (1 / 12);
                            individualShare.rules.push("চাচাতো ভাই একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচাতো ভাই(বৈমাত্রেয়)":
                    // Paternal Half Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাই").length === 0) {

                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 12); // Example share for Paternal Half Cousin Brother
                            individualShare.gold = assets.gold * (1 / 12);
                            individualShare.rupa = assets.rupa * (1 / 12);
                            individualShare.cash = assets.cash * (1 / 12);
                            individualShare.rules.push("চাচাতো ভাই(বৈমাত্রেয়) একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;
                case "চাচাতো ভাইয়ের পুত্র":
                    // Son of Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাই").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 24); // Example share for Son of Cousin Brother
                            individualShare.gold = assets.gold * (1 / 24);
                            individualShare.rupa = assets.rupa * (1 / 24);
                            individualShare.cash = assets.cash * (1 / 24);
                            individualShare.rules.push("চাচাতো ভাইয়ের পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচাতো ভাই(বৈমাত্রেয়) এর পুত্র":
                    // Son of Paternal Half Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাই").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাইয়ের পুত্র").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 48); // Example share for Son of Paternal Half Cousin Brother
                            individualShare.gold = assets.gold * (1 / 48);
                            individualShare.rupa = assets.rupa * (1 / 48);
                            individualShare.cash = assets.cash * (1 / 48);
                            individualShare.rules.push("চাচাতো ভাই(বৈমাত্রেয়) এর পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচাতো ভাইয়ের পুত্রের পুত্র":
                    // Grandson of Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাই").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাইয়ের পুত্র").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 48); // Example share for Grandson of Cousin Brother
                            individualShare.gold = assets.gold * (1 / 48);
                            individualShare.rupa = assets.rupa * (1 / 48);
                            individualShare.cash = assets.cash * (1 / 48);
                            individualShare.rules.push("চাচাতো ভাইয়ের পুত্রের পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                case "চাচাতো ভাই(বৈমাত্রেয়)এর পুত্রের পুত্র":
                    // Grandson of Paternal Half Cousin Brother
                    if (!hasClass1 && !hasClass2 && !hasClass3 && selectedPersons.filter(p => p.label === "চাচা").length === 0 && selectedPersons.filter(p => p.label === "চাচা(বৈমাত্রেয়)").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাই").length === 0 && selectedPersons.filter(p => p.label === "চাচাতো ভাইয়ের পুত্র").length === 0) {
                        for (let i = 0; i < person.value; i++) {
                            const count = englishToBanglaDigits(i + 1);
                            let individualShare = { person: `${person.label} (${count})`, rules: [] };

                            individualShare.land = assets.land * (1 / 96); // Example share for Grandson of Paternal Half Cousin Brother
                            individualShare.gold = assets.gold * (1 / 96);
                            individualShare.rupa = assets.rupa * (1 / 96);
                            individualShare.cash = assets.cash * (1 / 96);
                            individualShare.rules.push("চাচাতো ভাই(বৈমাত্রেয়)এর পুত্রের পুত্র একমাত্র অবশিষ্ট ভোগী হিসেবে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।");

                            // Immediately reduce assets after calculation
                            assets.land -= individualShare.land;
                            assets.gold -= individualShare.gold;
                            assets.rupa -= individualShare.rupa;
                            assets.cash -= individualShare.cash;

                            results.push(individualShare);
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    }
    return results;
};

// Example Usage
// const selectedPersons = [
//     { label: "কন্যা", value: 2 },
//     { label: "দাদী", value: 1 },
//     { label: "দাদা", value: 1 },
//     { label: "পিতা", value: 1 },
// ];

// const assets = {
//     land: 20,
//     gold: 20,
//     rupa: 20,
//     cash: 20
// };

// const sharesWithRules = calculateSharesWithRules(selectedPersons, assets);
// console.log(sharesWithRules);
