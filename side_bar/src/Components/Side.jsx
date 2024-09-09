import React from "react";
import {ChevronFirst} from 'lucide-react'
const Side=()=>{
    return (
        <>
            <div className="h-screen">
                <div className="h-full flex flex-col bg-white border-r shadow-">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src="http://img.logoipsum.com/243.svg" alt="" className="w-32" />
                    </div>
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Side;