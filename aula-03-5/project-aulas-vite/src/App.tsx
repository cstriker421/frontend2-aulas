import { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Counter from "./components/Counter";

import Toggle from "./aula-10/Toggle";
import UseMemoCalculator from "./aula-10/UseMemoCalculator";
import UseCallbackDad from "./aula-10/UseCallback";
import FilteredList from "./aula-10/UseMemoListFilter";
import InputFocus, { UseRefCounter } from "./aula-10/UseRef";

function ExerciseTile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="exercise-tile">
      <h2 className="exercise-title">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [filter, setFilter] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  return (
    <>
      <header className="page-header">
        <h1>Aula 03-5</h1>
        <p className="subtitle">React + TypeScript components</p>
      </header>

      <main className="exercise-group">
        <Card
          title="React + TypeScript Card"
          description="This is a styled card component for Aula 03-5."
          buttonText="Show Alert"
        />

        <Counter />

        <ExerciseTile title="Toggle (Aula 10)">
          <Toggle />
        </ExerciseTile>

        <ExerciseTile title="useMemo Calculator (Aula 10)">
          <UseMemoCalculator />
        </ExerciseTile>

        <ExerciseTile title="useCallback (Aula 10)">
          <UseCallbackDad />
        </ExerciseTile>

        <ExerciseTile title="useMemo List Filter (Aula 10)">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Type to filter..."
          />
          <FilteredList items={items} filter={filter} />
        </ExerciseTile>

        <ExerciseTile title="useRef Input Focus (Aula 10)">
          <InputFocus />
        </ExerciseTile>

        <ExerciseTile title="useRef Previous Value (Aula 10)">
          <UseRefCounter />
        </ExerciseTile>
      </main>
    </>
  );
}
