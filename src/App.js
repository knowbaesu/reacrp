import "./App.css";
import "./custom.css";
import { useState } from "react";

function Example({ value }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>버튼을 {count}번 눌렀습니다</p>
      <button
        onClick={() => setCount(count + 2)}
        style={{
          backgroundColor: "yellow",
        }}
      >
        {value}
      </button>
    </div>
  );
}
const data = ["apple", "banana", "orange"];

function Title({ value }) {
  return <h1>{value}</h1>;
}

function One({ value }) {
  return <div>{value}</div>;
}

function Mybutton({ value, onMyClick }) {
  console.log({ value, onMyClick });
  return (
    <button
      style={{
        backgroundColor: "blueviolet",
      }}
      onClick={onMyClick}
    >
      {value}
    </button>
  );
}

function App() {
  function handleClick() {
    return function () {
      alert("hi");
    };
  }
  return (
    <div className="App">
      <Title value="제목입니당1" />
      <Example value="증가"></Example>
      <Mybutton value="버튼입니당" onMyClick={() => alert("Hi")} />
      <One value={123} />
      <div className="box">Hi</div>
      <button onClick={handleClick()}>click me</button>
      {data.map((v) => (
        <p>{v}</p>
      ))}
    </div>
  );
}

export default App;

const guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 500000 },
  { name: "Mark", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
  { name: "Kan", money: 100000 },
  { name: "Sam", money: 100000 },
];

const rich = guys.filter((man, index, target) => {
  const maxOfMoney = Math.max(...target.map((person) => person.money));
  return man.money === maxOfMoney;
});

console.log(rich);
// [{name: "YD", money: 500000}, {name: "Bill", money: 500000}]

const poor = guys.filter((man, index, target) => {
  const minOfMoney = Math.min(...target.map((person) => person.money));
  return man.money === minOfMoney;
});

console.log(poor);
// [{name: "Kan", money: 100000}, {name: "Sam", money: 100000}]
