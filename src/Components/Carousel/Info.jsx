import React from "react";

const Info = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-7">
            <div className="h-96 bg-stone-200 m-3 border-2 border-blue-900 rounded-l overflow-hidden">
                <img src="./img/ayush.jpg" alt="ayush" />
            </div>
            <div className="h-96 bg-stone-200 m-3 border-2 border-blue-900 rounded-lg overflow-hidden">
                <img src="./img/sih.jpg" alt="sin" />
            </div>
        </div>
    );
};

export default Info;
