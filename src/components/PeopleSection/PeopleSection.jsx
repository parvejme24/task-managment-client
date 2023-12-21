// PeopleSection.jsx

import React from "react";

const PeopleSection = ({ people }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Who Uses This Website?</h2>
      <ul className="list-disc ml-6">
        {people.map((person, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {person}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleSection;
