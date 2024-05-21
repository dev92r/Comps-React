import { FruitsItems } from "../Model/Fruits";
import Table from "../components/Table/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "orange", score: 5 },
    { name: "Apple", color: "red", score: 3 },
    { name: "Banana", color: "yellow", score: 1 },
    { name: "Lime", color: "green", score: 4 },
  ];

  const config = [
    { label: "Fruits", render: (fruit: FruitsItems) => fruit.name },
    { label: "Colors", render: (fruit: FruitsItems) => fruit.color },
    { label: "Scores", render: (fruit: FruitsItems) => fruit.score },
  ];

  return <Table data={data} config={config} />;
}

export default TablePage;
