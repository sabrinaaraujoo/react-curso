import "./App.css";
import MyForm from "./components/MyForm";
function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Sabrina",
          email: "sabrina@gmail.com",
          bio: "descrição",
          role: "admin",
          radio: false,
        }}
      />
    </div>
  );
}

export default App;
