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
    "16": "মা ১/৩ অংশ পাবে যখন স্ত্রী, স্বামী এবং বাবা থাকে। ",
    "17": "দাদা ১/৬ অংশ পাবে যখন সন্তান এবং পুত্রের সন্তান থাকে এবং পিতা বা নিকটতম পিতামহ না থাকে।",
    "18": "দাদা অবশিষ্ট অংশ ভোগী হিসেবে পাবে ১/৬ অংশ পাবেন যখন কন্যা অথবা পুত্রের কন্যা থাকে।",
    "19": "দাদা অবশিষ্ট অংশ ভোগী হিসেবে পাবে যদি দূরবর্তী কোন অংশিদার বা অকশিষ্ট অংশ ভোগী না থাকে।",
    "20": "দাদী ১/৬ অংশ পাবেন যদি কোন মাতা বা মায়ের দিকে দাদী না থাকে।",
    "21": "পূর্ণ বোন ১/২ অংশ পাবেন যখন একজন মাত্র বোন থাকে এবং যদি কোন সন্তান, পুত্রের সন্তান, পিতা অথবা ভাই না থাকে।",
    "22": "পূর্ণ বোন ২/৩ পাবে যখন দুই বা ততধিক বোন থাকে এবং সন্তান, পুত্রের সন্তান, পিতা ও ভাই না থাকে।",
    "23": "বোন অবশিষ্ট ভোগী হিসেবে পাবে যখন পূর্ণ ভাই থাকে বা এক বা একাধিক পুত্রের কন্যা থাকে এবং বোনকে বঞ্চিত করার মত কোন অংশিদার না থাকে এবং এক বা একাধীক কন্যাদের সহিত অবশিষ্ট ভোগী থাকে তারা কন্যাদের অংশ নেওয়ার পর অবশিষ্ট ভোগী হবে।",
    "24": "বৈমাত্রীক বোন পাবে ১/২ অংশ যখন একজন মাত্র বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা ও পূর্ণ ভাই বোন না থাকে।",
    "25": "বোন পাবে ২/৩ অংশ যখন দুই বা ততধিক বৈমাত্রীক বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা ও পূর্ণ ভাই বোন না থাকে।",
    "26": "বৈমাত্রীয় বোন পাবে ১/৬ ভাগ যখন একজন পূর্ণ বোন থাকে (বোন পাবে ১/২ এবং বৈমাত্রী বোন পাবে ২/৩, ১/২, ১/৬)।",
    "27": "বৈমাত্রীয় বোন অবশিষ্ট অংশ ভোগী হিসেবে পাবে যখন কোন বৈমাত্রীয় ভাই, এক বা একাধিক কন্যা এবং পুত্রের কন্যা এবং বঞ্চিত করার মত কোন অংশিদার না থাকে।",
    "28": "বৈমাত্রীয় ভাই ১/৬ অংশ পাবে যখন সুধু মাত্র একজন বৈমাত্রীয় ভাই থাকে এবং সন্তান, পুত্রের সন্তান ও পিতা না থাকে।",
    "29": "বৈপিত্রীয় ভাই ১/৩ অংশ পাবে যখন সেখানে দুই বা ততধিক বৈপিত্রীয় ভাই থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
    "30": "বৈপিত্রীয় বোন ১/৬ অংশ পাবে সেখানে একমাত্র বৈপিত্রীয় বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
    "31": "বৈপিত্রীয় বোন ১/৩ অংশ পাবে যখন সেখানে দুই বা ততধিক বৈপিত্রীয় বোন থাকে এবং সন্তান, সন্তানের সন্তান এবং পিতা না থাকে।",
}


const calculateShares = (selectedPersons, assets) => {
    const totalAssets = assets.land + assets.gold + assets.rupa + assets.cash;
    const shares = [];
    let remainingAssets = totalAssets;

    // Helper function to add shares
    const addShare = (label, fraction) => {
        const share = totalAssets * fraction;
        shares.push({ label, value: share.toFixed(2), fraction: `${fraction}` });
        remainingAssets -= share;
    };

    // Step 1: Distribute Fixed Shares (জবিউল ফুরুজ)
    selectedPersons.forEach((person) => {
        switch (person.label) {
            case "স্বামী":
                addShare(
                    "স্বামী",
                    selectedPersons.some((p) => p.label === "পুত্র" || p.label === "কন্যা") ? 1 / 4 : 1 / 2
                );
                break;
            case "স্ত্রী":
                addShare(
                    "স্ত্রী",
                    selectedPersons.some((p) => p.label === "পুত্র" || p.label === "কন্যা") ? 1 / 8 : 1 / 4
                );
                break;
            case "পিতা":
                addShare("পিতা", 1 / 6);
                break;
            case "মাতা":
                addShare("মাতা", selectedPersons.length > 1 ? 1 / 6 : 1 / 3);
                break;
            case "কন্যা":
                const hasSon = selectedPersons.some((p) => p.label === "পুত্র");
                if (!hasSon) {
                    const daughters = parseInt(person.value);
                    if (daughters === 1) addShare("কন্যা", 1 / 2);
                    else if (daughters >= 2) addShare("কন্যা", 2 / 3);
                }
                break;
            case "পুত্র":
                // Sons are residual inheritors (আসাবা)
                break;
            default:
                break;
        }
    });

    // Step 2: Handle Residual Shares (আসাবা)
    const sons = selectedPersons.filter((p) => p.label === "পুত্র");
    const daughters = selectedPersons.filter((p) => p.label === "কন্যা");

    if (sons.length > 0 || daughters.length > 0) {
        const totalUnits = sons.length * 2 + daughters.length;
        const sonShare = (remainingAssets * 2) / totalUnits;
        const daughterShare = remainingAssets / totalUnits;

        sons.forEach((son) =>
            shares.push({
                label: "পুত্র",
                value: sonShare.toFixed(2),
                fraction: `2 / ${totalUnits}`,
            })
        );
        daughters.forEach((daughter) =>
            shares.push({
                label: "কন্যা",
                value: daughterShare.toFixed(2),
                fraction: `1 / ${totalUnits}`,
            })
        );
        remainingAssets = 0; // All assets distributed
    }

    // Step 3: Check for Remaining Assets
    if (remainingAssets > 0) {
        shares.push({
            label: "অবশিষ্ট",
            value: remainingAssets.toFixed(2),
            fraction: "Remaining",
        });
    }

    return shares;
};

export default calculateShares;
