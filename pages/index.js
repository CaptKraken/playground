import Head from "next/head";
import { useEffect, useState } from "react";
import AddInput from "../components/AddInput";
import AddTeam from "../components/AddTeam";

const data1 = [
  {
    name: "frontend ",
    members: [
      { value: 3, label: "Devon Webb" },
      { value: 2, label: "Arlene Mccoy" },
      { value: 7, label: "Caroline Schultz" },
    ],
  },
  {
    name: "backend",
    members: [
      { value: 3, label: "Devon Webb" },
      { value: 5, label: "Tanya Fox" },
    ],
  },
];

export default function Home() {
  const [data, setData] = useState(data1);
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList((prev) => {
      return inputList.concat(
        <AddInput
          key={inputList.length}
          setData={setData}
          id={inputList.length}
        />
      );
    });
  };

  useEffect(() => {
    data.map((team) => {
      console.log(team);
      setInputList((prev) => {
        return inputList.concat(
          <AddInput
            initData={team}
            key={inputList.length}
            setData={setData}
            id={inputList.length}
          />
        );
      });
    });
  }, []);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <AddTeam onAddBtnClick={onAddBtnClick} />
        {inputList}
      </main>
    </div>
  );
}
