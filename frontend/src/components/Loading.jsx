import React from "react"

const Loading =()=>{
    return(
        <div classname="min-h-screen flex items-center justify-center bg-white">
            {/* Tailwind spinning circle */}
            <div className="w-12 h-12 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
        </div>
    )
}
export default Loading;