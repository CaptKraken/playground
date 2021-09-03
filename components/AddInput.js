import { useEffect, useState } from "react";
import Select from "react-select";

const people = [
  {
    value: 1,
    label: "Wade Cooper",
  },
  {
    value: 2,
    label: "Arlene Mccoy",
  },
  {
    value: 3,
    label: "Devon Webb",
  },
  {
    value: 4,
    label: "Tom Cook",
  },
  {
    value: 5,
    label: "Tanya Fox",
  },
  {
    value: 6,
    label: "Hellen Schmidt",
  },
  {
    value: 7,
    label: "Caroline Schultz",
  },
  {
    value: 8,
    label: "Mason Heaney",
  },
  {
    value: 9,
    label: "Claudie Smitham",
  },
  {
    value: 10,
    label: "Emil Schaefer",
  },
];

const AddInput = ({ setData, id, initData = { name: "", members: [] } }) => {
  const [selectedTeammates, setSelectedTeammates] = useState(initData?.members);
  const [input, setInput] = useState(initData?.name);
  const [oneData, setOneData] = useState(initData);

  console.log("onedata", oneData);
  useEffect(() => {
    if (!input || !selectedTeammates) return;
    setData((prev) => {
      return {
        ...prev,
        [`${id}`]: { name: input, members: selectedTeammates },
      };
    });
  }, [selectedTeammates, setSelectedTeammates, input, setInput]);

  return (
    <div className="flex w-full gap-4 mt-3">
      <button className="text-red-500 hover:text-red-400">&times;</button>
      <input
        type="text"
        className="block max-w-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        placeholder="Team Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="w-full">
        <Select
          placeholder="Teammates"
          id="assign-to"
          defaultValue={selectedTeammates}
          onChange={setSelectedTeammates}
          options={people}
          isMulti
          className="5"
        />
      </div>
    </div>
  );
};

export default AddInput;
