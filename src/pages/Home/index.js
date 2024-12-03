// inheritanceLogic.js

// Helper function to calculate shares based on family relationships
export default function calculateShares(selectedItems, totalAssets) {
    // Initialize shares for all relatives as 0
    const shares = {
        "স্বামী": 0,
        "স্ত্রী": 0,
        "পুত্র": 0,
        "মৃত পুত্র": 0,
        "কন্যা": 0,
        "মৃত কন্যা": 0,
        "পিতা": 0,
        "মাতা": 0,
        "দাদা": 0,
        "দাদি": 0,
        "নানি": 0,
        "সহোদর ভাই": 0,
        "সহোদর বোন": 0,
        "সৎ ভাই (বৈমাত্রেয়)": 0,
        "সৎ বোন (বৈমাত্রেয়)": 0,
        "সৎ ভাই (বৈপিত্রেয়)": 0,
        "সৎ বোন (বৈপিত্রেয়)": 0,
        "সহোদর ভাইয়ের পুত্র": 0,
        "সৎ ভাই(বৈমাত্রেয়)-এর পুত্র": 0,
        "সহোদর ভাইয়ের পুত্রের পুত্র": 0,
        "সৎ ভাই(বৈমাত্রেয়)-এর পুত্রের পুত্র": 0,
        "চাচা": 0,
        "চাচা (বৈমাত্রেয়)": 0,
        "চাচাতো ভাই": 0,
        "চাচাতো ভাই (বৈমাত্রেয়)": 0,
        "চাচাতো ভাইয়ের পুত্র": 0,
        "চাচাতো ভাই (বৈমাত্রেয়) এর পুত্র": 0,
        "চাচাতো ভাইয়ের পুত্রের পুত্র": 0,
    };

    // Initialize rules for applied calculations
    const appliedRules = {};

    const hasChildren = selectedItems.some(item => (item.label === "পুত্র" || item.label === "কন্যা") && item.checked);
    const hasParents = selectedItems.some(item => (item.label === "পিতা" || item.label === "মাতা") && item.checked);
    const hasSpouse = selectedItems.some(item => (item.label === "স্ত্রী" || item.label === "স্বামী") && item.checked);
    const hasSiblings = selectedItems.some(item => (item.label === "সহোদর ভাই" || item.label === "সহোদর বোন") && item.checked);

    // Total Assets (gold, rupa, land, cash)
    const totalGold = totalAssets.gold || 0;
    const totalRupa = totalAssets.rupa || 0;
    const totalLand = totalAssets.land || 0;
    const totalCash = totalAssets.cash || 0;

    // Helper function to distribute asset among selected relatives
    const distributeAssets = (assetValue) => {
        // Only consider the selected relatives (checked)
        const selectedRelatives = selectedItems.filter(item => item.checked === true);
        const totalShares = selectedRelatives.reduce((sum, item) => sum + parseFloat(item.value), 0);
        const assetPerShare = assetValue / totalShares;

        selectedRelatives.forEach(item => {
            shares[item.label] = assetPerShare * parseFloat(item.value);
            appliedRules[item.label] = `${item.label} এর জন্য এই সম্পদটি ভাগ হবে ${assetPerShare * parseFloat(item.value)} এর সমান`;
        });
    };

    // If there are children (পুত্র or কন্যা) and they are checked
    if (hasChildren) {
        // If there is a spouse and spouse is checked, give them 1/8 of the share
        if (hasSpouse) {
            const spouseChecked = selectedItems.find(item => (item.label === "স্ত্রী" || item.label === "স্বামী") && item.checked);
            if (spouseChecked) {
                shares["স্বামী"] = 1 / 8;  // Spouse gets 1/8 if there are children
                shares["স্ত্রী"] = 1 / 8;  // Same for wife
                appliedRules["spouse_with_children"] = "যেহেতু সন্তান রয়েছে, স্বামী/স্ত্রী ১/৮ পাবেন";
            }
        }

        // Calculate share for children (1 - share of spouse, if spouse is checked)
        const totalChildren = selectedItems.filter(item => (item.label === "পুত্র" || item.label === "কন্যা") && item.checked).length;
        const remainingShare = 1 - (shares["স্বামী"] + shares["স্ত্রী"]);  // Remaining share after spouse's share
        const childrenShare = remainingShare / totalChildren;  // Divide among children

        selectedItems.forEach(item => {
            if ((item.label === "পুত্র" || item.label === "কন্যা") && item.checked) {
                shares[item.label] = childrenShare;
                appliedRules[item.label] = `প্রত্যেক সন্তানকে অবশিষ্ট অংশ থেকে সমান ভাগ দেওয়া হবে`;
            }
        });
    }

    // If there are no children, but there are parents and they are checked
    if (!hasChildren && hasParents) {
        // If there is a spouse and spouse is checked, give them 1/4
        if (hasSpouse) {
            const spouseChecked = selectedItems.find(item => (item.label === "স্ত্রী" || item.label === "স্বামী") && item.checked);
            if (spouseChecked) {
                shares["স্বামী"] = 1 / 4;  // Spouse gets 1/4 if there are no children but parents are present
                shares["স্ত্রী"] = 1 / 4;  // Same for wife
                appliedRules["spouse_without_children"] = "যেহেতু সন্তান নেই, কিন্তু পিতা-মাতা আছেন, স্বামী/স্ত্রী ১/৪ পাবেন";
            }
        }

        // Parents' share
        const remainingShare = 1 - (shares["স্বামী"] + shares["স্ত্রী"]);  // Remaining share after spouse's share
        const parentShare = remainingShare / 2;  // Divide between father and mother

        selectedItems.forEach(item => {
            if (item.label === "পিতা" && item.checked) {
                shares["পিতা"] = parentShare;
                appliedRules["pita_share"] = `পিতা এবং মাতা প্রত্যেকেই ১/৬ পাবেন`;
            }
            if (item.label === "মাতা" && item.checked) {
                shares["মাতা"] = parentShare;
                appliedRules["mata_share"] = `পিতা এবং মাতা প্রত্যেকেই ১/৬ পাবেন`;
            }
        });
    }

    // If there are no children, no parents, but there are siblings and they are checked
    if (!hasChildren && !hasParents && hasSiblings) {
        const totalSiblings = selectedItems.filter(item => (item.label === "সহোদর ভাই" || item.label === "সহোদর বোন") && item.checked).length;
        const remainingShare = 1 - (shares["স্বামী"] + shares["স্ত্রী"]);  // Remaining share after spouse's share
        const siblingShare = remainingShare / totalSiblings;  // Divide equally among siblings

        selectedItems.forEach(item => {
            if ((item.label === "সহোদর ভাই" || item.label === "সহোদর বোন") && item.checked) {
                shares[item.label] = siblingShare;
                appliedRules[item.label] = `প্রত্যেক সহোদর/সহোদরি ভাগে সমান ভাগ পাবেন`;
            }
        });
    }

    // Handle distant relatives (like চাচা, চাচাতো ভাই, etc.)
    if (!hasChildren && !hasParents && !hasSiblings) {
        const totalRelatives = selectedItems.filter(item => (item.label === "চাচা" || item.label === "চাচাতো ভাই") && item.checked).length;
        const remainingShare = 1 - (shares["স্বামী"] + shares["স্ত্রী"]);  // Remaining share after spouse's share
        const relativeShare = remainingShare / totalRelatives;  // Divide equally among relatives

        selectedItems.forEach(item => {
            if ((item.label === "চাচা" || item.label === "চাচাতো ভাই") && item.checked) {
                shares[item.label] = relativeShare;
                appliedRules[item.label] = `প্রত্যেক চাচা/চাচাতো ভাই সমান ভাগ পাবেন যখন সন্তান, পিতা-মাতা বা সহোদর/সহোদরি নেই`;
            }
        });
    }

    // Distribute the assets (gold, rupa, land, cash)
    distributeAssets(totalGold);
    distributeAssets(totalRupa);
    distributeAssets(totalLand);
    distributeAssets(totalCash);

    // Return the calculated shares and the rules applied
    return { shares, appliedRules };
}