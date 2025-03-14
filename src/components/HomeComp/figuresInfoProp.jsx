import styles from './Home.module.css'

export default function FiguresInfoProp(){
    return(
        
<section  key={'AboutUs'} aria-labelledby="about-heading" className={styles.contentBlock}>
<div className={styles.aboutUSWrapper}>
  <article className={styles.aboutUS_textContainer}>
    <h2 id="about-heading">
        Triángulo
    </h2>
    <p>
        Un triángulo es una figura geométrica que tiene tres lados, tres vértices y tres ángulos. Los lados son las rectas que forman el polígono, mientras que los vértices son los puntos donde se unen dos lados. 
        Los triángulos se pueden clasificar en diferentes tipos según sus lados (equilátero, isósceles y escaleno) y sus ángulos (acutángulo, rectángulo y obtusángulo).
    </p>
  </article>
  <figure>

  </figure>
</div>
</section>
    )
}