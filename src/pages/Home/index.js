const Rules = {
    "1": "স্বামী ১/৪ পাবে যখন সন্তান বা পুত্রের সন্তান থাকে।",
    "2": "স্বামী ১/২ পাবে যখন সন্তান বা পুত্রের সন্তান না থাকে।",
    "3": "স্ত্রী ১/৮ পাবে যখন সন্তান বা পুত্রের সন্তান থাকে।",
    "4": "স্ত্রী ১/৪ পাবে যখন সন্তান বা পুত্রের সন্তান না থাকে।",
    "5": "কন্যা ১/২ পাবে যখন একজন মাত্র কন্যা থাকে এবং পুত্র না থাকে।",
    "6": "কন্যা ২/৩ পাবে যখন দুই বা ততধিক কন্যা থাকে এবং পুত্র না থাকে।",
    "7": "কন্য অবশিষ্ট ভোগী হিসাবে পাবেন যখন এক বা একের অধিক পুত্র থাকে।",
    "8": "পুত্রের কন্যা পাবে ১/২ অংশ পাবে যখন একজন মাত্র পুত্রের কন্যা থাকে। যদি কোন পুত্র, পুত্রের পুত্র বা একের অধিক কন্যা এবং পুত্রের কন্যা না থাকে।",
    "9": " পুত্রের কন্যা ২/৩ ভাগ পাবে যখন দুই বা ততধিক পুত্রের কন্যা থাকে এবং পুত্র ও পুত্রের পুত্র এবং এবং একের অধিক কন্যা না থাকে।",
    "10": " পুত্রের কন্যা অবশিষ্ট ভোগী হিসেবে পাবেন। পুত্রের পুত্র না থাকলে সমান অংশ কা আইন অনুযায়ী।",
    "11": "পিতা ১/৬ অংশ পাবে পুত্র বা পুত্রের পুত্র থাকে।",
    "12": "পিতা ১/৬ অবশিষ্ট অংশ ভোগী হিসেবে পাবে যখন এক বা একরে অধিক কন্যা, পুত্রের কন্যা এবং পুত্রের পুত্র না থাকে।",
    "13": "পিতা অবশিষ্ট অংশ ভোগী হিসেবে পাবে যখন পুত্র বা পুত্রের পুত্র থাকে।",
    "14": "মাতা ১/৬ অংশ পাবে যখন পুত্র ও পুত্রের পুত্র এবং দুই বা ততধিক ভাই বোন এবং পিতা থাকে।",
    "15": "মাতা ১/৩ অংশ পাবে যখন পুত্র অথবা পুত্রের পুত্র এবং একের অধিক ভাই বোন না থাকে।",
    "16": "মা ১/৩ অংশ পাবে যখন স্ত্রী, স্বামী এবং বাবা থাকে। ",
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
};

const calculateSharesWithRules = (selectedPersons, assets) => {
    const results = [];

    const sonCount = selectedPersons.filter(p => p.label === "পুত্র").reduce((sum, p) => sum + p.value, 0);
    const daughterCount = selectedPersons.filter(p => p.label === "কন্যা").reduce((sum, p) => sum + p.value, 0);
    const sonsSonCount = selectedPersons.filter(p => p.label === "পুত্রের পুত্র").reduce((sum, p) => sum + p.value, 0);
    const sonsDaughterCount = selectedPersons.filter(p => p.label === "পুত্রের কন্যা").reduce((sum, p) => sum + p.value, 0);
    const paternalSisterCount = selectedPersons.filter(p => p.label === "বৈমাত্রীক বোন").reduce((sum, p) => sum + p.value, 0);
    const paternalBrotherCount = selectedPersons.filter(p => p.label === "বৈমাত্রীক ভাই").reduce((sum, p) => sum + p.value, 0);
    const fullBrotherCount = selectedPersons.filter(p => p.label === "পূর্ণ ভাই").reduce((sum, p) => sum + p.value, 0);
    const fullSisterCount = selectedPersons.filter(p => p.label === "পূর্ণ বোন").reduce((sum, p) => sum + p.value, 0);



    const hasSon = selectedPersons.some(person => person.label === "পুত্র");
    const hasDaughter = selectedPersons.some(person => person.label === "কন্যা");
    const hasFather = selectedPersons.some(person => person.label === "পিতা");
    const hasFullBrother = selectedPersons.some(p => p.label === "পূর্ণ ভাই");
    const hasFullSister = selectedPersons.some(p => p.label === "পূর্ণ বোন");
    const hasPaternalBrother = paternalBrotherCount > 0;
    const hasPaternalSister = paternalSisterCount > 0;


    for (const person of selectedPersons) {
        const share = { person: person.label, rules: [] };

        if (person.label === "স্বামী") {
            if (hasSon) {
                share.land = assets.land * (1 / 4) * person.value;
                share.gold = assets.gold * (1 / 4) * person.value;
                share.rupa = assets.rupa * (1 / 4) * person.value;
                share.cash = assets.cash * (1 / 4) * person.value;
                share.rules.push(Rules["1"]);
            } else {
                share.land = assets.land * (1 / 2) * person.value;
                share.gold = assets.gold * (1 / 2) * person.value;
                share.rupa = assets.rupa * (1 / 2) * person.value;
                share.cash = assets.cash * (1 / 2) * person.value;
                share.rules.push(Rules["2"]);
            }
        } else if (person.label === "স্ত্রী") {
            if (hasSon) {
                share.land = assets.land * (1 / 8) * person.value;
                share.gold = assets.gold * (1 / 8) * person.value;
                share.rupa = assets.rupa * (1 / 8) * person.value;
                share.cash = assets.cash * (1 / 8) * person.value;
                share.rules.push(Rules["3"]);
            } else {
                share.land = assets.land * (1 / 4) * person.value;
                share.gold = assets.gold * (1 / 4) * person.value;
                share.rupa = assets.rupa * (1 / 4) * person.value;
                share.cash = assets.cash * (1 / 4) * person.value;
                share.rules.push(Rules["4"]);
            }
        }
        else if (person.label === "পুত্র") {
            if (sonsSonCount === 0) {
                share.land = assets.land * (1 / 2) * person.value;
                share.gold = assets.gold * (1 / 2) * person.value;
                share.rupa = assets.rupa * (1 / 2) * person.value;
                share.cash = assets.cash * (1 / 2) * person.value;
                share.rules.push(Rules["8"]);
            } else {
                share.land = assets.land * (2 / 3) * person.value;
                share.gold = assets.gold * (2 / 3) * person.value;
                share.rupa = assets.rupa * (2 / 3) * person.value;
                share.cash = assets.cash * (2 / 3) * person.value;
                share.rules.push(Rules["9"]);
            }
        } else if (person.label === "কন্যা") {
            if (daughterCount === 1 && sonCount === 0) {
                share.land = assets.land * (1 / 2) * person.value;
                share.gold = assets.gold * (1 / 2) * person.value;
                share.rupa = assets.rupa * (1 / 2) * person.value;
                share.cash = assets.cash * (1 / 2) * person.value;
                share.rules.push(Rules["5"]);
            } else if (daughterCount > 1 && sonCount === 0) {
                share.land = assets.land * (2 / 3) * person.value;
                share.gold = assets.gold * (2 / 3) * person.value;
                share.rupa = assets.rupa * (2 / 3) * person.value;
                share.cash = assets.cash * (2 / 3) * person.value;
                share.rules.push(Rules["6"]);
            } else {
                share.land = assets.land * (1 / sonCount) * person.value;
                share.gold = assets.gold * (1 / sonCount) * person.value;
                share.rupa = assets.rupa * (1 / sonCount) * person.value;
                share.cash = assets.cash * (1 / sonCount) * person.value;
                share.rules.push(Rules["7"]);
            }
        } else if (person.label === "পুত্রের কন্যা") {
            const totalSonsDaughters = sonCount + daughterCount;
            if (person.value === 1 && daughterCount <= 1 && sonCount === 0 && sonsSonCount === 0) {
                // Rule 8: Single পুত্রের কন্যা and no পুত্র, no পুত্রের পুত্র, no কন্যা count > 1
                share.land = assets.land * (1 / 2) * person.value;
                share.gold = assets.gold * (1 / 2) * person.value;
                share.rupa = assets.rupa * (1 / 2) * person.value;
                share.cash = assets.cash * (1 / 2) * person.value;
                share.rules.push(Rules["8"]);
            } else if (person.value > 1 && sonCount === 0 && sonsSonCount === 0 && daughterCount <= 1) {
                // Rule 9: Two or more পুত্রের কন্যা, no পুত্র, no পুত্রের পুত্র, no কন্যা count > 1
                share.land = assets.land * (2 / 3) * person.value;
                share.gold = assets.gold * (2 / 3) * person.value;
                share.rupa = assets.rupa * (2 / 3) * person.value;
                share.cash = assets.cash * (2 / 3) * person.value;
                share.rules.push(Rules["9"]);
            } else if (sonsSonCount === 0) {
                // Rule 10: Residual heir case
                share.land = (assets.land / totalSonsDaughters) * person.value;
                share.gold = (assets.gold / totalSonsDaughters) * person.value;
                share.rupa = (assets.rupa / totalSonsDaughters) * person.value;
                share.cash = (assets.cash / totalSonsDaughters) * person.value;
                share.rules.push(Rules["10"]);
            }
        }
        else if (person.label === "পিতা") {
            if (hasSon || sonsSonCount > 0) {
                share.land = assets.land * (1 / 6) * person.value;
                share.gold = assets.gold * (1 / 6) * person.value;
                share.rupa = assets.rupa * (1 / 6) * person.value;
                share.cash = assets.cash * (1 / 6) * person.value;
                share.rules.push(Rules["11"]);
            } else if (daughterCount > 0 || sonsDaughterCount !== 0) {
                // Rule 12: পিতা gets 1/6 as residual heir when কন্যা or পুত্রের কন্যা exists, no পুত্র
                share.land = assets.land * (1 / 6) * person.value;
                share.gold = assets.gold * (1 / 6) * person.value;
                share.rupa = assets.rupa * (1 / 6) * person.value;
                share.cash = assets.cash * (1 / 6) * person.value;
                share.rules.push(Rules["12"]);
            } else {
                // Rule 13: পিতা inherits remaining assets as residual heir
                share.land = assets.land;
                share.gold = assets.gold;
                share.rupa = assets.rupa;
                share.cash = assets.cash;
                share.rules.push(Rules["13"]);
            }
        } else if (person.label === "মাতা") {
            if (hasSon || hasDaughter) {
                share.land = assets.land * (1 / 6) * person.value;
                share.gold = assets.gold * (1 / 6) * person.value;
                share.rupa = assets.rupa * (1 / 6) * person.value;
                share.cash = assets.cash * (1 / 6) * person.value;
                share.rules.push(Rules["14"]);
            } else {
                share.land = assets.land * (1 / 3);
                share.gold = assets.gold * (1 / 3);
                share.rupa = assets.rupa * (1 / 3);
                share.cash = assets.cash * (1 / 3);
                share.rules.push(Rules["15"]);
            }
        } else if (person.label === "মা") {
            if (selectedPersons.some(p => p.label === "স্ত্রী") && selectedPersons.some(p => p.label === "স্বামী") && selectedPersons.some(p => p.label === "পিতা")) {
                // Rule 16: মা inherits 1/3 when স্ত্রী, স্বামী, and পিতা are present
                share.land = assets.land * (1 / 3);
                share.gold = assets.gold * (1 / 3);
                share.rupa = assets.rupa * (1 / 3);
                share.cash = assets.cash * (1 / 3);
                share.rules.push(Rules["16"]);
            }
        } else if (person.label === "দাদা") {
            if (hasSon || sonsSonCount > 0) {
                // Rule 17: দাদা gets 1/6 when পুত্র or পুত্রের পুত্র exists and no পিতা or closer grandfather
                share.land = assets.land * (1 / 6);
                share.gold = assets.gold * (1 / 6);
                share.rupa = assets.rupa * (1 / 6);
                share.cash = assets.cash * (1 / 6);
                share.rules.push(Rules["17"]);
            } else if (hasDaughter || sonsDaughterCount > 0) {
                // Rule 18: দাদা gets 1/6 as a residual heir when কন্যা or পুত্রের কন্যা exists
                share.land = assets.land * (1 / 6);
                share.gold = assets.gold * (1 / 6);
                share.rupa = assets.rupa * (1 / 6);
                share.cash = assets.cash * (1 / 6);
                share.rules.push(Rules["18"]);
            } else {
                // Rule 19: দাদা inherits as a residual heir when no other heirs exist
                share.land = assets.land;
                share.gold = assets.gold;
                share.rupa = assets.rupa;
                share.cash = assets.cash;
                share.rules.push(Rules["19"]);
            }
        } else if (person.label === "দাদী") {
            if (!selectedPersons.some(p => p.label === "মাতা") && !selectedPersons.some(p => p.label === "মায়ের দিকের দাদী")) {
                // Rule 20: দাদী gets 1/6 if no মাতা or মায়ের দিকের দাদী
                share.land = assets.land * (1 / 6);
                share.gold = assets.gold * (1 / 6);
                share.rupa = assets.rupa * (1 / 6);
                share.cash = assets.cash * (1 / 6);
                share.rules.push(Rules["20"]);
            }
        } else if (person.label === "পূর্ণ বোন") {
            if (fullSisterCount === 1 && sonCount === 0 && sonsSonCount === 0 && !hasFather && fullBrotherCount === 0) {
                // Rule 21: Single পূর্ণ বোন gets 1/2
                share.land = assets.land * (1 / 2);
                share.gold = assets.gold * (1 / 2);
                share.rupa = assets.rupa * (1 / 2);
                share.cash = assets.cash * (1 / 2);
                share.rules.push(Rules["21"]);
            } else if (fullSisterCount > 1 && sonCount === 0 && sonsSonCount === 0 && !hasFather && fullBrotherCount === 0) {
                // Rule 22: Two or more পূর্ণ বোন share 2/3
                share.land = assets.land * (2 / 3);
                share.gold = assets.gold * (2 / 3);
                share.rupa = assets.rupa * (2 / 3);
                share.cash = assets.cash * (2 / 3);
                share.rules.push(Rules["22"]);
            } else if (fullBrotherCount > 0 || daughterCount > 0) {
                // Rule 23: Residual heir case
                const totalHeirs = fullBrotherCount + daughterCount + fullSisterCount;
                share.land = assets.land / totalHeirs;
                share.gold = assets.gold / totalHeirs;
                share.rupa = assets.rupa / totalHeirs;
                share.cash = assets.cash / totalHeirs;
                share.rules.push(Rules["23"]);
            }
        } else if (person.label === "বৈমাত্রীক বোন") {
            if (paternalSisterCount === 1 && !hasSon && sonsSonCount === 0 && !hasFather && !hasFullBrother && !hasFullSister) {
                // Rule 24: Single বৈমাত্রীক বোন, no children, grandchildren, father, or full siblings
                share.land = assets.land * (1 / 2);
                share.gold = assets.gold * (1 / 2);
                share.rupa = assets.rupa * (1 / 2);
                share.cash = assets.cash * (1 / 2);
                share.rules.push("24");
            } else if (paternalSisterCount > 1 && !hasSon && sonsSonCount === 0 && !hasFather && !hasFullBrother && !hasFullSister) {
                // Rule 25: Two or more বৈমাত্রীক বোন, no children, grandchildren, father, or full siblings
                share.land = assets.land * (2 / 3);
                share.gold = assets.gold * (2 / 3);
                share.rupa = assets.rupa * (2 / 3);
                share.cash = assets.cash * (2 / 3);
                share.rules.push("25");
            } else if (fullSisterCount === 1 && !hasSon && sonsSonCount === 0 && !hasFather && !hasFullBrother && !hasPaternalBrother) {
                // Rule 26: One full sister and no other heirs
                share.land = assets.land * (1 / 2);
                share.gold = assets.gold * (1 / 2);
                share.rupa = assets.rupa * (1 / 2);
                share.cash = assets.cash * (1 / 2);
                share.rules.push("26");
            } else if (hasPaternalSister && !hasPaternalBrother && !hasSon && sonsSonCount === 0 && !hasFather && !hasFullBrother
            ) {
                // Rule 27: Paternal sister gets a share if there is no paternal brother and no other heirs
                share.land = assets.land;
                share.gold = assets.gold;
                share.rupa = assets.rupa;
                share.cash = assets.cash;
                share.rules.push("27");
            }
        }

        if (person.label === "বৈমাত্রীয় ভাই") {
            if (paternalBrotherCount === 1 && !hasSon && sonsSonCount === 0 && !hasFather) {
                // Rule 28: Single paternal brother, no children, no father's sons
                share.land = assets.land * (1 / 6);
                share.gold = assets.gold * (1 / 6);
                share.rupa = assets.rupa * (1 / 6);
                share.cash = assets.cash * (1 / 6);
                share.rules.push("28");
            } else if (paternalBrotherCount > 1 && !hasSon && sonsSonCount === 0 && !hasFather) {
                // Rule 29: Multiple paternal brothers, no children, no father's sons
                share.land = assets.land * (1 / 3);
                share.gold = assets.gold * (1 / 3);
                share.rupa = assets.rupa * (1 / 3);
                share.cash = assets.cash * (1 / 3);
                share.rules.push("29");
            }
        } else if (person.label === "বৈপিত্রীয় বোন") {
            if (paternalSisterCount === 1 && !hasSon && sonsSonCount === 0 && !hasFather) {
                // Rule 30: Single paternal sister, no children, no grandchildren, no father
                share.land = assets.land * (1 / 6);
                share.gold = assets.gold * (1 / 6);
                share.rupa = assets.rupa * (1 / 6);
                share.cash = assets.cash * (1 / 6);
                share.rules.push("30");
            } else if (paternalSisterCount > 1 && !hasSon && sonsSonCount === 0 && !hasFather) {
                // Rule 31: Multiple paternal sisters, no children, no grandchildren, no father
                share.land = assets.land * (1 / 3);
                share.gold = assets.gold * (1 / 3);
                share.rupa = assets.rupa * (1 / 3);
                share.cash = assets.cash * (1 / 3);
                share.rules.push("31");
            }
        }
        results.push(share);
    }

    return results;
};


// const selectedPersons = [
//     { label: 'স্বামী', value: 1 },
//     { label: 'স্ত্রী', value: 1 },
//     { label: 'পুত্র', value: 2 },
//     { label: 'কন্যা', value: 1 },
//     { label: 'পিতা', value: 1 },
//     { label: 'মাতা', value: 1 },
//     { label: 'দাদা', value: 1 },
//     { label: 'দাদী', value: 1 },
//     { label: 'বোন', value: 1 }
// ];

const selectedPersons = [
    { label: 'স্বামী', value: 1 },
    { label: 'পুত্র', value: 2 },
    { label: 'কন্যা', value: 1 },
];

const assets = {
    land: 20,
    gold: 20,
    rupa: 20,
    cash: 20
};

// Example usage
const sharesWithRules = calculateSharesWithRules(selectedPersons, assets);
console.log(sharesWithRules);

/*

আত্মীয়	        অংশ	    জমি (শতাংশ)    	স্বর্ণ (ভরি)	রৌপ্য (ভরি)    	মুদ্রা(টাকা)
স্বামী         	0.25	    5	        5	            5	        5
পুত্র (১)       0.3        	6	        6	            6	        6
পুত্র (২)     	0.         6	        6	            6	        6
কন্যা      	0.15	    3	        3	                3	        3


(১).	 স্বামী ১/৪ অংশ পাবে যখন সন্তান বা পুত্রের সন্তান থাকে।
(২).	 কন্যা অবশিষ্ট ভোগী হিসেবে পাবে যখন পুত্র থাকে । পুত্র ও কন্যা ২:১ অনুপাতে অবশিষ্ট সম্পতির উত্তরাধিকারী হয়।


*/