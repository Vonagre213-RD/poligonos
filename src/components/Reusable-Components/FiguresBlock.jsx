

import PropTypes from "prop-types";
import styles from "../../css/Reusable-Components-Css/figureBlock.module.css";

export default function FigureBlock({
  figureName,
  figureContent,
  figureType
}) {
  return (
    <section className={styles["figureBlock"]} data-figureCategory={figureType}>
      <h2>{figureName}</h2>
      <article className={styles["FigureContent"]} dangerouslySetInnerHTML={{ __html: figureContent }} />
    </section>
  );
}


FigureBlock.propTypes = {

  figureName: PropTypes.string,
  figureContent: PropTypes.string,
  figureType: PropTypes.string
};
