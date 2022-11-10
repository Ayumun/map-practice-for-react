import "./styles.css";

export default function App() {
  const list = [1, 2, 3, 4];
  const datalist = [
    {
      name: "taro",
      age: 21
    },
    {
      name: "yoshiko",
      age: 30
    }
  ];
  return (
    <div className="App">
      <h1>map practice</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {datalist.map((data) => (
        <div>
          {data.name}
          <span>{data.age}</span>
        </div>
      ))}
    </div>
  );
}
