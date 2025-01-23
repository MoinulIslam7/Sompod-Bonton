import React from "react";
import Table from "./Table";
import PieChart from "./Chart";
import AppliedRules from "./AppliedRules";

const Result = ({ data }) => {
    return (
        <div className="container">
            <div className="border border-[#E7EAF3] rounded-md p-4" style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.17)' }}>
                <h1 className="text-xl font-bold text-left px-5 bg-primary text-white py-2 rounded-t-md">
                    ফলাফল
                </h1>
                <div className="bg-[#FFFFF1]">
                    <Table data={data} />
                </div>

            </div>
            <div className="bg-[#FFFFF1] p-4 rounded-md shadow-lg mt-10" style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.17)' }}>
                <PieChart data={data} />
            </div>

            <div className="border border-[#E7EAF3] rounded-md p-4 mt-6" style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.17)' }}>
                <h1 className="text-xl font-bold text-left px-5 bg-primary text-white py-2 rounded-t-md">
                    হিসাবের ধাপ সমুহ
                </h1>
                <div className="bg-[#FFFFF1]" >
                    <AppliedRules data={data} />
                </div>

            </div>

        </div>
    );
};

export default Result;
