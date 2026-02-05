import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <header className="page-header">
        <h1>Aula 03-5</h1>
        <p className="subtitle">React + TypeScript components (Card + Counter)</p>
      </header>

      <main className="exercise-group">
        <Card
          title="React + TypeScript Card"
          description="This is a styled card component for Aula 03-5."
          buttonText="Show Alert"
        />

        <Counter />
      </main>
    </>
  );
}
