import styles from "./Home.module.css";
import Slider from '../Reusable-Components/slider'

export default function Home() {
  return (
    <main className={styles.mainContainer}>

<Slider
sliderLeft={
  '<'
}

sliderRight={
  '>'
}
sliderDataProp={[
  <section key={'Antigüedad'} aria-labelledby="antiguedad-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2 id="antiguedad-heading">🏛 Antigüedad</h2>
      <p>
        <strong>📐 3000 a.C. - 2000 a.C. - Uso en la geometría práctica</strong>
      </p>
      <p>
        Durante la Antigüedad, las civilizaciones desarrollaron los conceptos geométricos para resolver problemas de medición, construcción y diseño arquitectónico. Los polígonos jugaron un papel clave en la planificación de ciudades, la construcción de monumentos y la división de tierras agrícolas.
      </p>
      <h3>🔹 Civilización Egipcia</h3>
      <ul>
        <li>Los egipcios usaban la geometría para calcular superficies y dividir tierras después de las crecidas del río Nilo.</li>
        <li>La construcción de pirámides se basaba en el uso de triángulos y cuadriláteros para lograr estructuras estables.</li>
        <li>El <strong>Papiro de Rhind</strong> (c. 1650 a.C.) es uno de los documentos matemáticos más antiguos y describe métodos geométricos para calcular áreas de figuras poligonales.</li>
        <li>Los triángulos isósceles y rectángulos fueron esenciales en la inclinación de las pirámides.</li>
      </ul>
      <h3>🔹 Civilización Mesopotámica</h3>
      <ul>
        <li>Los babilonios utilizaban polígonos para la planificación de sus ciudades y la delimitación de campos agrícolas.</li>
        <li>Aplicaban la geometría en la construcción de templos, murallas y canales de riego.</li>
        <li>Se encontraron tablillas de arcilla con cálculos matemáticos que muestran el uso de polígonos en la trigonometría primitiva.</li>
        <li>Babilonia introdujo el sistema sexagesimal, que influenció la medición de ángulos y la geometría en general.</li>
      </ul>
      <p>
        <strong>🔺 600 a.C. - 300 a.C. - Los griegos y la geometría euclidiana</strong>
      </p>
      <p>
        La Antigua Grecia marcó un punto de inflexión en la historia de la geometría. Pasó de ser una herramienta empírica para la construcción a convertirse en un campo teórico fundamentado en axiomas y demostraciones lógicas.
      </p>
      <h3>🔹 Pitágoras (c. 570 - 495 a.C.) y los polígonos regulares</h3>
      <ul>
        <li>Pitágoras y su escuela estudiaron las propiedades de los polígonos regulares y los relacionaron con la música, la armonía y los números.</li>
        <li>Descubrió que los ángulos internos de los polígonos tienen una relación matemática con sus lados.</li>
        <li>Su teorema sobre triángulos rectángulos se convirtió en la base de muchas aplicaciones geométricas.</li>
        <li>Creía que los números y la geometría eran clave para comprender el universo.</li>
      </ul>
      <h3>🔹 Platón (427 - 347 a.C.) y los sólidos platónicos</h3>
      <ul>
        <li>Platón estudió los polígonos en un contexto tridimensional, describiendo los cinco sólidos platónicos (tetraedro, cubo, octaedro, dodecaedro e icosaedro).</li>
        <li>Relacionó estos sólidos con los elementos de la naturaleza en su obra <em>Timeo</em>.</li>
        <li>Inspiró el desarrollo de la geometría como un sistema estructurado basado en principios universales.</li>
      </ul>
      <h3>🔹 Euclides (c. 300 a.C.) y la sistematización de la geometría</h3>
      <ul>
        <li>Euclides escribió <em>Los Elementos</em>, una de las obras matemáticas más influyentes de la historia.</li>
        <li>En este tratado, estableció definiciones y postulados que formalizaron el estudio de los polígonos.</li>
        <li>Introdujo el concepto de congruencia y similitud de polígonos.</li>
        <li>Su axioma del paralelismo influyó en siglos de estudio geométrico.</li>
        <li>Definió métodos para calcular el área de polígonos regulares e irregulares.</li>
      </ul>
    </article>
    <figure>

    </figure>
  </div>
</section>
,

<section key={'history'} aria-labelledby="about-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2 id="about-heading">Historia de los Polígonos en la Edad Media</h2>
      
      <h3>🏰 Edad Media (500 - 1500 d.C.)</h3>
      <p>
        Durante la Edad Media, los polígonos jugaron un papel crucial en distintas áreas del conocimiento, 
        como la arquitectura, el arte y las matemáticas. Tanto la civilización islámica como la Europa medieval 
        avanzaron en su comprensión y aplicación.
      </p>

      <h4>📐 Uso en la arquitectura islámica y gótica</h4>

      <h5>🔹 Arquitectura islámica</h5>
      <ul>
        <li>Los arquitectos islámicos empleaban polígonos en mosaicos geométricos detallados, conocidos como <strong>“girih”</strong>, utilizados en mezquitas y palacios.</li>
        <li>Diseñaban patrones con pentágonos, hexágonos y octágonos entrelazados para crear efectos visuales simétricos.</li>
        <li><strong>Ejemplo:</strong> La <em>Alhambra</em> de Granada, España, presenta una de las decoraciones geométricas más avanzadas.</li>
      </ul>

      <h5>🔹 Arquitectura gótica</h5>
      <ul>
        <li>En la Europa medieval, la arquitectura gótica incorporó polígonos en los rosetones de las catedrales, como <strong>Notre-Dame de París</strong>.</li>
        <li>Los arcos ojivales y las bóvedas estrelladas usaban polígonos para mejorar la resistencia estructural.</li>
        <li>Se utilizaban hexágonos y octógonos en la planificación de edificios religiosos para optimizar el espacio interior.</li>
      </ul>

      <h4>📊 Avances matemáticos en la Edad Media</h4>

      <h5>🔹 Matemáticos islámicos y su contribución</h5>
      <ul>
        <li><strong>Al-Juarismi (c. 780 - 850 d.C.)</strong> usó polígonos en ecuaciones geométricas y en la creación de algoritmos que influirían en la informática.</li>
        <li><strong>Omar Khayyam (1048 - 1131 d.C.)</strong> estudió ecuaciones cúbicas y su relación con polígonos, contribuyendo al desarrollo de la geometría analítica.</li>
      </ul>

      <h5>🔹 Avances en trigonometría</h5>
      <ul>
        <li>Matemáticos islámicos desarrollaron la <strong>trigonometría esférica</strong>, clave en navegación y astronomía.</li>
        <li>Se perfeccionaron las funciones trigonométricas para mejorar la medición y construcción de estructuras poligonales.</li>
      </ul>

      <h4>🔍 Legado de los polígonos en la Edad Media</h4>
      <ul>
        <li>Los mosaicos islámicos inspiraron diseños geométricos en el arte renacentista.</li>
        <li>Las técnicas matemáticas desarrolladas fueron fundamentales para el avance de la geometría en el Renacimiento.</li>
        <li>El uso de polígonos en arquitectura sentó las bases para el diseño estructural de edificios modernos.</li>
      </ul>

    </article>
    
    <figure>
     
    </figure>
  </div>
</section>,


<section key={'history'} aria-labelledby="about-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2 id="about-heading">
        Renacimiento (siglos XV - XVII)
      </h2>
      <p>
        El Renacimiento fue una época de gran florecimiento en las artes, la ciencia y la matemática. Durante este período, los estudios sobre la geometría se expandieron significativamente, especialmente en el contexto de la perspectiva, la astronomía y la geometría analítica. Los avances en estas áreas reflejaron la búsqueda por comprender el mundo en términos más precisos y racionales.
      </p>
      <h3>Leonardo da Vinci (1452-1519) y el estudio de los polígonos en el arte y la perspectiva</h3>
      <p>
        Leonardo da Vinci, uno de los genios más grandes del Renacimiento, combinó el arte con la ciencia de una manera única. Su investigación sobre la geometría fue fundamental para sus obras artísticas, especialmente en el estudio de la perspectiva. Da Vinci empleó los polígonos para comprender cómo las formas se perciben en el espacio y cómo se deben representar correctamente en un plano bidimensional.
      </p>
      <ul>
        <li>Utilizó polígonos en el diseño de sus obras y como parte de su estudio de la perspectiva cónica.</li>
        <li>Aplicó sus conocimientos de geometría para lograr efectos de profundidad en sus pinturas, como en La última cena, donde utilizó triángulos y cuadriláteros para crear una sensación de espacio.</li>
        <li>Estudió figuras poligonales para resolver problemas relacionados con la representación de objetos tridimensionales sobre una superficie plana.</li>
      </ul>
      <h3>Alberto Durero (1471-1528) y la geometría en la representación artística</h3>
      <p>
        Alberto Durero, conocido principalmente por sus grabados, también fue un estudioso de la geometría. Fue uno de los primeros artistas en aplicar principios matemáticos rigurosos a la creación de obras de arte, integrando polígonos y figuras geométricas en su trabajo.
      </p>
      <ul>
        <li>Durero publicó una obra titulada Instrucción sobre la medida de los hombres en la que exploraba las proporciones humanas utilizando figuras geométricas.</li>
        <li>Su famoso tratado &quot;La geometría y la perspectiva&quot; explora cómo la geometría puede ser usada para crear una representación más precisa y naturalista de los objetos en el espacio.</li>
        <li>Estudió los polígonos regulares y la manera en que podían aplicarse para representar la proporción y el equilibrio en el arte.</li>
      </ul>
      <h3>Johannes Kepler (1571-1630) y los polígonos en astronomía</h3>
      <p>
        Johannes Kepler, astrónomo y matemático alemán, hizo uso de polígonos y sólidos geométricos en su estudio sobre la estructura del universo. En su obra más famosa, &quot;Las leyes del movimiento planetario&quot;, Kepler utilizó las propiedades geométricas para entender y describir los movimientos de los planetas alrededor del sol.
      </p>
      <ul>
        <li>Kepler estaba interesado en los polígonos estelares y cómo las formas regulares, como los poliedros (sólidos compuestos de polígonos), podían influir en la distribución de los planetas en el sistema solar.</li>
        <li>Durante su investigación, propuso que las órbitas planetarias eran elipses, pero también se ocupó de los sólidos platónicos (relacionados con los polígonos regulares) y su influencia en la astronomía.</li>
        <li>Utilizó los polígonos en sus estudios sobre las distancias y las áreas del espacio, desarrollando un enfoque geométrico para representar el cosmos.</li>
      </ul>
      <h3>René Descartes (1596-1650) y la geometría analítica</h3>
      <p>
        René Descartes, un filósofo y matemático francés, revolucionó la geometría con el desarrollo de la geometría analítica. Este enfoque permitió describir figuras geométricas, incluidos los polígonos, mediante el uso de coordenadas en un sistema cartesiano.
      </p>
      <ul>
        <li>Descartes introdujo la idea de representar los puntos en un plano mediante un sistema de coordenadas, lo que permitió representar polígonos y otras figuras geométricas de forma algebraica.</li>
        <li>Su trabajo en la geometría analítica permitió a los matemáticos y científicos del futuro manipular polígonos de manera más eficiente y precisa, ya que la relación entre la geometría y el álgebra se fortaleció.</li>
        <li>La obra más influyente de Descartes, &quot;La Géométrie&quot;, publicó ideas que hoy son fundamentales en la descripción de los polígonos y sus propiedades mediante ecuaciones y coordenadas.</li>
      </ul>
    </article>
    <figure>

    </figure>
  </div>
</section>,


<section key={'mathematicDevelopment'} aria-labelledby="euler-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2> desarrollo matematico</h2><br></br>
      <h3>
        Leonhard Euler (1707-1783) y la fórmula de poliedros
      </h3>
      <p>
        Leonhard Euler fue uno de los matemáticos más influyentes de la historia, y sus trabajos en geometría y topología revolucionaron el campo. Entre sus más importantes logros se encuentra la famosa fórmula de los poliedros, que establece una relación fundamental entre el número de vértices (V), aristas (E) y caras (F) de cualquier poliedro convexo:
        <br/>
        <strong>V - E + F = 2</strong>
        <br/>
        Esta ecuación, conocida como la característica de Euler, es una de las primeras ecuaciones topológicas y es crucial para la clasificación de poliedros. La fórmula fue descubierta por Euler en 1750 y ha sido esencial para el desarrollo de la topología moderna, una rama de las matemáticas que estudia las propiedades de los objetos geométricos que permanecen invariantes bajo transformaciones continuas. La fórmula de Euler es válida para cualquier poliedro convexo, como los cubos, pirámides y dodecaedros, y sigue siendo un principio fundamental en el estudio de geometría tridimensional.
      </p>
    </article>
   
  



      <h3>
        Carl Friedrich Gauss (1777-1855) y la construibilidad de polígonos con regla y compás
      </h3>
      <p>
        Carl Friedrich Gauss, considerado uno de los matemáticos más grandes de todos los tiempos, también hizo importantes aportes al estudio de los polígonos. A principios del siglo XIX, Gauss desarrolló el concepto de la construcción de polígonos regulares con regla y compás. En 1796, a la edad de 19 años, Gauss demostró que un polígono regular de 17 lados (heptadecágono) se podía construir utilizando solo una regla y un compás. Este descubrimiento fue trascendental porque desafiaba la suposición de que solo ciertos polígonos podían construirse con estas herramientas.
        <br/>
        Su demostración fue un resultado importante en la teoría de los números y la geometría constructiva. A lo largo de los siglos XIX y XX, este trabajo condujo a más descubrimientos sobre la construibilidad de polígonos regulares. La investigación de Gauss abrió la puerta para explorar otros polígonos constructibles, relacionados con números primos y otras propiedades algebraicas, y ayudó a fundamentar el desarrollo de la teoría de Galois, un pilar de las matemáticas modernas.
      </p>


  


      <h3>
        Sophie Germain (1776-1831) y los números primos relacionados con los polígonos regulares
      </h3>
      <p>
        Sophie Germain fue una matemática pionera en una época en la que las mujeres enfrentaban enormes barreras para ingresar a las ciencias y las matemáticas. A pesar de las dificultades, Germain hizo contribuciones significativas en varios campos, incluida la teoría de números y la geometría. Estudió los números primos de Germain, que son números primos p para los cuales 2p + 1 también es primo. Estos números primos están relacionados con los polígonos regulares en el contexto de la teoría de la construibilidad con regla y compás.
        <br/>
        Su trabajo se basó en la investigación de Gauss y otros matemáticos de la época sobre los polígonos constructibles. Sophie Germain desarrolló estudios que mostraron que ciertos números primos están directamente relacionados con la posibilidad de construir polígonos regulares. Además, sus investigaciones en teoría de números fueron de gran importancia para el desarrollo de la teoría de los números primos y, más tarde, para las matemáticas modernas. Su legado sigue siendo recordado no solo por sus contribuciones matemáticas, sino también por su perseverancia ante las restricciones sociales de su tiempo.
      </p>
  

      </div>
</section>,

<section key={'history'} aria-labelledby="about-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2 id="about-heading">
        Computación y Gráficos Digitales en el Siglo XX
      </h2>
      <p>
        Durante el siglo XX, la computación y los gráficos digitales dieron grandes pasos, especialmente en el campo de la geometría computacional, el modelado 3D y los gráficos por computadora. El desarrollo de tecnologías clave y la creación de herramientas innovadoras marcaron el inicio de una nueva era en la visualización y representación gráfica, que ha tenido un impacto profundo en las industrias del entretenimiento, el diseño y la ingeniería.
      </p>

      <h3>Década de 1960: Desarrollo de la geometría computacional y el modelado 3D basado en polígonos</h3>
      <p>
        En la década de 1960, se comenzó a investigar el uso de algoritmos y métodos matemáticos para representar y manipular objetos tridimensionales en una computadora. Los avances en la geometría computacional sentaron las bases para el modelado de figuras geométricas en el espacio 3D utilizando polígonos. En este período, se empezaron a desarrollar algoritmos para crear y representar superficies 3D a partir de polígonos, lo que permitió a los científicos y a los ingenieros simular y visualizar modelos más realistas de objetos. Estos avances fueron fundamentales para el desarrollo posterior de gráficos por computadora y la animación 3D.
      </p>
      <p>
        El uso de polígonos, especialmente triángulos, comenzó a ser una técnica estándar en la representación de superficies 3D. Los triángulos eran simples de manejar computacionalmente y podían conectarse entre sí para formar modelos complejos de cualquier tipo de objeto en 3D. Esta técnica de modelado basada en polígonos sigue siendo la base de los gráficos 3D en la actualidad.
      </p>

      <h3>Década de 1970: Ivan Sutherland crea el primer software de modelado poligonal para gráficos por computadora</h3>
      <p>
        A principios de la década de 1970, Ivan Sutherland, un pionero en la informática gráfica, desarrolló &quot;Sketchpad&quot;, un sistema interactivo de dibujo que permitió por primera vez a los usuarios crear gráficos y formas geométricas utilizando una pantalla de computadora. Aunque Sketchpad fue principalmente una herramienta de dibujo, también sirvió como base para el desarrollo de más tarde programas de modelado y gráficos.
      </p>
      <p>
        Más allá de Sketchpad, Sutherland es conocido por su trabajo en el desarrollo de software de modelado poligonal para gráficos por computadora. En 1972, Sutherland colaboró en el desarrollo de un sistema llamado &quot;3D Computer Graphics&quot; que permitió la creación y manipulación de modelos tridimensionales utilizando polígonos. Este software facilitó la creación de gráficos 3D más complejos, abriendo la puerta para el desarrollo de la animación digital y los gráficos por computadora que conocemos hoy.
      </p>

      <h3>Década de 1980: Se popularizan los motores gráficos en videojuegos con polígonos en 3D</h3>
      <p>
        En los años 80, la tecnología de gráficos por computadora avanzó significativamente, y con ello, los videojuegos comenzaron a incorporar gráficos en 3D. Durante esta década, surgieron los primeros motores gráficos 3D capaces de renderizar mundos virtuales en tiempo real, utilizando modelos de polígonos para representar personajes, objetos y entornos en los juegos.
      </p>
      <p>
        Los motores gráficos como &quot;Id Tech&quot;, el motor de videojuegos desarrollado por John Carmack y utilizado en juegos como *Doom* (1993), aprovecharon los avances en la geometría computacional para crear entornos 3D complejos. Estos motores utilizaron polígonos como bloques básicos para representar personajes y escenarios, y fueron fundamentales para la evolución de los videojuegos en 3D.
      </p>
      <p>
        Este período también vio la aparición de consolas de videojuegos como la Nintendo 64 y la PlayStation original, que introdujeron gráficos 3D en los videojuegos de manera masiva. A lo largo de los años 80, el uso de polígonos en gráficos 3D permitió una mayor realismo y complejidad en los videojuegos, marcando un cambio significativo en la industria.
      </p>

      <h3>1995: Pixar lanza *Toy Story*, la primera película completamente en 3D basada en polígonos</h3>
      <p>
        En 1995, Pixar, una de las empresas líderes en gráficos computacionales, lanzó *Toy Story*, la primera película animada completamente en 3D. *Toy Story* fue un hito en la historia de la animación por computadora, ya que representó la culminación de años de investigación y desarrollo en gráficos 3D y modelado poligonal.
      </p>
      <p>
        La película fue el resultado del uso avanzado de gráficos 3D basados en polígonos, que permitió crear personajes, fondos y efectos visuales con un nivel de detalle y realismo sin precedentes para una película animada en ese momento. Los personajes de *Toy Story* fueron modelados utilizando miles de polígonos, y la animación de la película fue realizada mediante técnicas de renderizado y sombreado avanzadas.
      </p>
      <p>
        *Toy Story* no solo cambió la industria de la animación, sino que también mostró al mundo las posibilidades del modelado 3D y la animación por computadora. Desde su lanzamiento, las técnicas de gráficos en 3D y modelado poligonal se han utilizado ampliamente en la creación de películas, videojuegos y otros medios visuales.
      </p>
    </article>
    
  </div>
</section>,

<section key={'history'} aria-labelledby="about-heading" className={styles.contentBlock}>
  <div className={styles.historyWrapper}>
    <article className={styles.history_textContainer}>
      <h2 id="about-heading">
        Siglo XXI: Avances en Modelado y Videojuegos
      </h2>
      <p>
        Durante el siglo XXI, los avances en modelado 3D y la evolución de los videojuegos han estado marcados por la mejora de las tecnologías de gráficos, la optimización de modelos y la integración de la inteligencia artificial (IA) en los procesos de creación de contenido digital. El modelado poligonal y las técnicas asociadas han llegado a un nivel de sofisticación sin precedentes, permitiendo una representación más realista, interactiva y dinámica de mundos virtuales.
      </p>
      
      <h3>Motores Gráficos como Unity y Unreal Engine usan mallas poligonales para representar modelos 3D</h3>
      <p>
        En el siglo XXI, los motores gráficos como <strong>Unity</strong> y <strong>Unreal Engine</strong> se han convertido en herramientas fundamentales para la creación de videojuegos y simulaciones interactivas. Ambos motores utilizan mallas poligonales como la base para representar los modelos 3D dentro de sus entornos virtuales. Estas mallas están compuestas por vértices, aristas y caras, formando la estructura básica de los objetos tridimensionales. Los polígonos, especialmente los triángulos, son utilizados para definir las superficies de los modelos y se conectan entre sí para crear formas complejas, desde personajes hasta paisajes.
      </p>
      <p>
        Unity y Unreal Engine permiten la creación y manipulación de estos modelos en tiempo real, utilizando potentes sistemas de renderizado y sombreados para simular la luz, la sombra y los reflejos de manera realista. Estos motores gráficos también proporcionan herramientas de optimización para gestionar el rendimiento de los juegos y la calidad visual, asegurando que los modelos poligonales sean visualizados de manera fluida en diferentes plataformas.
      </p>

      <h3>Desarrollo de técnicas de teselado y optimización de polígonos para mejorar gráficos en tiempo real</h3>
      <p>
        Una de las grandes áreas de innovación en el siglo XXI ha sido el <strong>teselado</strong> o <strong>tesselation</strong>, una técnica avanzada para mejorar la resolución y calidad de las superficies 3D sin afectar demasiado al rendimiento. El teselado permite subdividir un modelo poligonal en secciones más pequeñas (por ejemplo, subdividir un triángulo en más triángulos) para agregar más detalles a medida que el objeto se acerca al espectador, sin sobrecargar la representación de los objetos que están más distantes.
      </p>
      <p>
        El teselado ha sido incorporado en los motores gráficos como una técnica esencial para los gráficos en tiempo real, ya que permite a los desarrolladores agregar niveles de detalle de manera dinámica, ajustándose en función de la distancia entre el objeto y la cámara. Esto optimiza el uso de recursos computacionales, permitiendo que los juegos mantengan un alto nivel de realismo mientras se aseguran de no exceder las capacidades de las consolas o PCs.
      </p>
      <p>
        Además, la optimización de los modelos poligonales es crucial en el desarrollo de videojuegos modernos. Las técnicas de <strong>LOD (Level of Detail)</strong> permiten reducir la cantidad de polígonos en objetos distantes y aumentar el número de polígonos de los objetos cercanos, lo que mejora el rendimiento sin sacrificar la calidad visual. Estas optimizaciones también están orientadas a reducir el uso de memoria y mejorar el rendimiento en tiempo real, asegurando experiencias de juego fluidas y sin interrupciones.
      </p>

      <h3>Inteligencia Artificial y Machine Learning facilitan la generación procedural de polígonos en gráficos computacionales</h3>
      <p>
        La inteligencia artificial y el <strong>machine learning</strong> están comenzando a jugar un papel cada vez más importante en la creación de gráficos computacionales, particularmente en lo que respecta a la <strong>generación procedural</strong> de contenido. A través de algoritmos avanzados y redes neuronales, las máquinas ahora son capaces de generar modelos poligonales complejos de manera autónoma, sin intervención directa de los diseñadores.
      </p>
      <p>
        La generación procedural es una técnica en la que los elementos del mundo 3D se crean automáticamente mediante algoritmos, en lugar de ser diseñados manualmente. Esto ha permitido la creación de mundos virtuales más vastos y dinámicos en videojuegos, como los juegos de mundo abierto o los entornos de simulación, donde las geometrías, texturas y patrones del terreno son generados automáticamente para crear una experiencia única para cada jugador.
      </p>
      <p>
        Además, el uso de la inteligencia artificial ha permitido optimizar la creación de mallas poligonales al reducir el número de polígonos necesarios para crear una forma compleja sin sacrificar la calidad visual. Por ejemplo, a través de redes generativas adversarias (GANs), los algoritmos pueden aprender a generar modelos 3D de alta calidad a partir de datos de entrenamiento, lo que acelera el proceso de creación de modelos y mejora la variedad y detalle del contenido generado.
      </p>
      <p>
        La IA también facilita la creación de animaciones realistas mediante el aprendizaje de movimientos humanos y animales, lo que da lugar a personajes más naturales y creíbles. En combinación con el modelado poligonal, esta tecnología ha permitido a los desarrolladores producir videojuegos de nivel AAA que cuentan con mundos inmersivos y personajes altamente detallados.
      </p>
    </article>
  
  </div>
</section>



]}

customSliderClass={{
  sliderContainer: styles["sliderContainer"],
}}
/>
    
    </main>
  );
}
