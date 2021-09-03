import Head from "next/head";
import { useEffect, useState } from "react";
import AddInput from "../components/AddInput";
import AddTeam from "../components/AddTeam";
import { v4 as uuid } from "uuid";


const data1 = [
  // {
  //   name: "frontend ",
  //   members: [
  //     { value: 3, label: "Devon Webb" },
  //     { value: 2, label: "Arlene Mccoy" },
  //     { value: 7, label: "Caroline Schultz" },
  //   ],
  // },
  // {
  //   name: "backend",
  //   members: [
  //     { value: 3, label: "Devon Webb" },
  //     { value: 5, label: "Tanya Fox" },
  //   ],
  // },
  // {
  //   name: "design",
  //   members: [
  //     { value: 3, label: "Devon Webb" },
  //     { value: 5, label: "Tanya Fox" },
  //   ],
  // },
];


export default function Home() {
  const [data, setData] = useState(data1);
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList((prev) => {
      const id = uuid()
      return [...prev, <AddInput
        key={id}
        setData={setData}
        id={id}
      />];
    });
  };

  useEffect(() => {
    data?.map((team) => {
      console.log(team);

      setInputList((prev) => {
        
      const id = uuid()
        return [...prev, <AddInput
          key={id}
          initData={team}
          setData={setData}
          id={id}
        />];
      });
    });

  }, []);

useEffect(()=>{
console.log(data);
}, [data])

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
