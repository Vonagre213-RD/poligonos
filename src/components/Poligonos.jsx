import styles from "../css/figures.module.css";
import { useState, useEffect } from "react";
import FiguresBlock from "./Reusable-Components/FiguresBlock";

export default function Productos() {
  const [FiguresData, setFiguresData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/Data/figuresData.json")
      .then((response) => {
        if (!response.ok) throw new Error("fallo en la solicitud");
        return response.json();
      })
      .then((data) => {
        setFiguresData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Ocurrió un error:", error);
      });
  }, []);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error</div>;

  const filteredFigures = selectedCategory
    ? FiguresData.filter((figure) => figure.figureType=== selectedCategory)
    : FiguresData;

  // Render Figures data
  return (
    <div id={styles["mainContainer"]}>
      <div className={styles["categoriesContainer"]}>
        <h2
          style={{ textAlign: "center", color: "#fff", background: "black" }}
          onClick={() => setSelectedCategory("")}
        >
          Categorías
        </h2>
        <h2 style={{ textAlign: "center", color: "black" }}>
          Categoria seleccionada:
        </h2>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          {selectedCategory}
        </h2>
        <ul>
          {[
            "Triángulo",
            "Cuadrilátero",
            "Pentágono",
            "Hexágono",
            "Heptágono",
            "Octágono",
            "Eneágono",
            "Decágono",
            "Hendecágono",
            "Dodecágono",
          ].map((figureType) => (
            <li
              key={figureType}
              className={styles["categoryScrollBarItem"]}
              onClick={() => setSelectedCategory(figureType)}
            >
              <h2>{figureType}</h2>
            </li>
          ))}
        </ul>
      </div>

      <div id={styles.FiguresSectionContainer}>
        
        <section className={styles.FigureContent}>
          {filteredFigures.map((figure) => (
            <FiguresBlock
              key={figure.id}
              figureContent={figure.figureContent}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
