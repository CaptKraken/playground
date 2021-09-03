import Head from "next/head";
import { useEffect, useState } from "react";
import AddInput from "../components/AddInput";
import AddTeam from "../components/AddTeam";
import { v4 as uuid } from "uuid";


const data1 = [
  {
      id: 'e3b78856-bab8-48ea-98e6-5c560d9ba036',
      name:"Frontend Developers",
      members:[
        {
          value:1,
          label:"Wade Cooper"
        },
        {
          value:3,
          label:"Devon Webb"
        }
      ]
  },
  {
    id:  "d609f94d-4f0a-4452-8840-34e8598ce890",
    name:"Backend Developers",
    members:[
      {
        value:6,
        label:"Hellen Schmidt"
      },
      {
        value:8,
        label:"Mason Heaney"
      },
      {
        value:9,
        label:"Claudie Smitham"
      }
    ]
  },
    
    {
      id:"6fc643a5-469d-407d-b9ad-b1a319e6541e",
      name:"UI/UX Designers",
      members:[
        {value:2,label:"Arlene Mccoy"}
        ,{value:5,label:"Tanya Fox"}
      ]
    }
  
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
    data.map((team) => {
      setInputList((prev) => {
        return [...prev, <AddInput
          key={team.id}
          initData={team}
          setData={setData}
          id={team.id}
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
