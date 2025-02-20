import React from "react";

export default function Card(props) {
  return (
    <div className="max-w-[300px] h-auto rounded-lg overflow-hidden shadow-lg bg-yellow-100">
      <img
        src={props.item.image}
        alt=""
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-yellow-700">{props.item.location}</h4>
          <p className="text-gray-500 text-sm">
            <span>{props.item.startDate}</span>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{props.item.title}</h2>
          <span className="text-gray-500 text-sm">{props.item.endDate}</span>
          <p className="mt-2 text-gray-600">{props.item.description.slice(0,100)}...</p>
        </div>
      </div>
    </div>
  );
}
