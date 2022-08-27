import "./App.css";
import { DiaryEditor } from "./DiaryEditor";
import { DiaryList } from "./DiaryList";

const mockData = [
  {
    id: 1,
    author: "이지민",
    content: "이지민 최고",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이지민",
    content: "이지민 최고",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이지민",
    content: "이지민 최고",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이지민",
    content: "이지민 최고",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "이지민",
    content: "이지민 최고",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <DiaryEditor />
      <DiaryList diaryList={mockData} />
    </div>
  );
}

export default App;
