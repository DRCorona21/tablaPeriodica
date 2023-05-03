window.addEventListener("load", Datos, true); //Desde que inicia el html se ejecuta esta funcion
window.addEventListener("load", () => {
  //Esta funcion se encarga de precargar timmers y obtencion de datos
  const contenedor_loader = document.querySelector(".contenedor_loader"); //funcion encargada de ejecutar
  contenedor_loader.style.opacity = 0; //el preloader
  contenedor_loader.style.visibiliy = "hidden";
  let reloj = function () {
    contenedor_loader.style.display = "none";
  };
  setTimeout(reloj, 1000);
});
let r = 1;
class dataBiograficos {
  //Creamos nustros getters y setters para cada dato con su respectivo constructor
  constructor(completeN, biographicD, logros, img) {
    this.completeN = completeN;
    this.biographicD = biographicD;
    this.logros = logros;
    this.img = img;
  }

  get nameComplete() {
    return this.completeN;
  }
  get dataBiographics() {
    return this.biographicD;
  }
  get logross() {
    return this.logros;
  }
  get photo() {
    return this.img;
  }
}

let fullData = []; //Datos dados de alta desde un constructor y gusrdados en un array unidimensional
fullData[r] = new dataBiograficos( //Aunque el arreglo sea unidimensional contiene datos obtenidos de una clase
  "Augusta do Condesa de Lovelace ",
  " Nació en Londres, el 10 de diciembre de 1815. Fue hija del famoso poeta romántico Lord Byron y de la matemática Annabella Milbanke",
  " Creó el primer algoritmo informático esta investigación, que tenía su origen en el trabajo de Babbage ",
  "RecursosFoto/1.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Edith Clarke ",
  " El 10 de febrero de 1883 nació en Howard County, estado de Maryland (EE. UU.), Edith Clarke, la que sería una pionera en el campo de la electricidad. Gracias a unas propiedades que heredó, consiguió entrar en el Vasaar College, en Poughkeepsie, Nueva York, estudiando aquí matemáticas y astronomía. ",
  " fue la primera mujer en presentar una ponencia en el AIEE, que fue publicada en las Transactions.",
  "RecursosFoto/2.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Hedwig Eva Maria Kiesler",
  "Nació en Viena el 9 de noviembre de 1914 como Hedwig Eva Maria Kiesler. Fue la única hija de un banquero de Lemberg y una pianista de Budapest que, aún siendo de origen judío, se habían criado en el catolicismo.",
  "inventó un sistema de comunicaciones de salto de frecuencia para los Aliados ",
  "RecursosFoto/3.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Betty Snyder Holberton",
  " La programadora Betty Snyder Holberton (1917-2001) nació un 7 de marzo. Fue una de las seis programadoras originales de la primera computadora digital de propósito general ENIAC ",
  "Es también reconocida por sus contribuciones al lenguaje COBOL",
  "RecursosFoto/4.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Jean Jennings Bartik",
  " La programadora Betty Jean Jennings Bartik (1924-2011) nació un 27 de diciembre. Fue una de las programadoras originales de la computadora ENIAC.",
  "Fue incluida en el Women in Technology International Hall of Fame.",
  "RecursosFoto/5.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Kathleen McNulty Mauchly Antonelli",
  "Nació en el Condado de Donegal, Irlanda, en 1921, pero su familia emigró a los Estados Unidos en octubre de 1924 y se afincó en Pensilvania. En junio de 1942 la joven Kay se graduó en matemáticas en el Chestnut Hill College para mujeres",
  " En junio de 1945, Kay fue elegida para ser una de sus primeras programadoras del ENIAC.",
  "RecursosFoto/6.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Marlyn Wescoff Meltzer",
  "Nació en 1922 en Finlandia, Estados Unidos. Asistió a la Universidad de Temple donde estudio matemáticas con especialización en maquinas comerciales. ",
  " Marlyn fue seleccionada por el Ejército de los Estados Unidos para integrar un equipo de seis mujeres programadoras del Integrador Numérico Electrónico e Informático, la ENIAC. ",
  "RecursosFoto/7.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Ruth Lichterman Teitelbaum",
  "Fue contratada por la Moore School of Electrical Engineering de la Universidad de Pennsylvania para calcular trayectorias balísticas. La Escuela Moore fue financiada por el Ejército de los EE. UU.",
  "Teitelbaum fue seleccionado como uno de un grupo de siete mujeres para ser las primeras programadoras de ENIAC, que fue la primera computadora programable totalmente electrónica.",
  "RecursosFoto/8.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Frances Bilas Spence",
  " Nació en Filadelfia en 1922 y fue la segunda de cinco hermanas. Su padre era Ingeniero del Sistema de Escuelas Públicas de Filadelfia y su madre maestra, ambos en el sector de la educación.",
  "Su trabajo allano el camino para las computadoras electrónicas del futuro, y su innovación puso en marcha el auge de la computación electrónica ",
  "RecursosFoto/9.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Joan Elisabeth Lowther Clarke Murray",
  " Nació un 24 de junio. Trabajó con Alan Turing en la sección de Bletchley Park conocida como Hut 8, de la que llegó a convertirse en su responsable El objetivo del Hut 8 era el más ambicioso de todos; el descifrado del Enigma Naval ",
  "Fue descifradora de códigos en Bletchley Park durante la Segunda Guerra Mundial.",
  "RecursosFoto/10.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Ángela Ruiz Robles",
  " Maestra, pedagoga e inventora española, reconocida como la precursora del libro electrónico. Nació en Villamanín (León), Cursó estudios superiores en la Escuela de Maestras de León, donde impartió sus primeras lecciones entre 1915 y 1917",
  " Inventó el primer prototipo de libro digital para facilitar la enseñanza a sus alumnos y aligerar la carga de libros. ",
  "RecursosFoto/11.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Rósa Politzer",
  " Nació el 17 de febrero de 1905 en Budapest, Hungría. Nunca se casó, pero cambió su apellido de origen judio alemán por el de Péter en los años 30.",
  " presentó un trabajo sobre funciones recursivas y propuso formalmente que su estudio fuese considerado una nueva área de investigación dentro de las matemáticas.",
  "RecursosFoto/12.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Grace Murray Hopper",
  "Nació el 9 de diciembre de 1906, en Nueva York, y murió en Arlington, Virginia (USA) el 1 de enero de 1992. Grace Hopper fue un distinguido oficial de la marina estadounidense y una destacada científica computacional.",
  "Trabajó en el desarrolo del COBOL, uno de los primeros lenguajes de programación.",
  "RecursosFoto/13.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Jean E. Sammet",
  " Trabajó para las empresas Sperry Gyroscope (1955-1958) –donde supervisó el primer grupo de programación científica– y Sylvania (1958-1961) –como asesora de investigación de programación–. Se unió a IBM en 1961 –allí desarrolló FORMAC– donde formó parte del comité que creó COBOL.",
  " Desarrolló el lenguaje de programación FORMAC en 1962, considerado el primer lenguaje de programación para la manipulación simbólica.",
  "RecursosFoto/14.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Karen Spärck Jones",
  " Ha sido una de las pioneras en la recuperación de la información –junto a Stephen E. Robertson desarrolló el Binary Independent Retrieval– y procesamiento del lenguaje natural. ",
  " Una de sus contribuciones más significativas es el concepto de Inverse Document Frequency, una técnica adoptada como estándar en los sistemas modernos. ",
  "RecursosFoto/15.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Mary Kenneth Keller",
  "La informática Mary Kenneth Keller (1913-1985) nació un 17 de diciembre. En 1965, fue una de las dos primeras personas –la otra fue Irving Tang– doctoradas en informática en Estados Unidos.",
  " Escribió cuatro libros sobre informática, fue codesarrolladora del lenguaje de programación BASIC y cofundadora de la asociación ASCUE (Asociación para el uso de ordenadores en educación).",
  "RecursosFoto/16.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Margaret Hamilton",
  " Fue directora de la División de Ingeniería de Software del Laboratorio de Instrumentación del MIT, donde con su equipo desarrolló el software de navegación on-board para el Programa Espacial Apolo. ",
  " Margaret fue la encargada de desarrollar el software para el primer ordenador AN/FSQ-7 que buscaba aviones “no amigos” en el espacio aéreo norteamericano.",
  "RecursosFoto/17.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Evelyn Berezin",
  " Física, informática y empresaria estadounidense. Inventó el ordenador de oficina. Desarrolló el primer sistema de reservas de billetes de líneas aéreas. ",
  " Produjo el primer procesador informático, que permitía almacenar y editar textos. ",
  "RecursosFoto/18.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Erna Schneider Hoover ",
  " Nació en Irvington (Nueva Jersey), En 1948, Erna se graduó con las máximas calificaciones en la Universidad de Wellesey (Massachusetts). ",
  " Inventó un sistema automatizado de conmutación del teléfono (US 3623007 A), que evitaba sobrecargas del sistema en horas punta. Usaba un ordenador para supervisar las llamadas entrantes, y ajustaba automáticamente la aceptación de la llamada. ",
  "RecursosFoto/19.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Shirley Ann Jackson ",
  " La reconocida física y presidenta universitaria Shirley Ann Jackson nació el 5 de agosto de 1946 en Washington, D.C., hija de George Hiter Jackson y Beatrice Cosby Jackson.",
  "En 1973, Jackson se graduó del MIT con su doctorado en física teórica de partículas elementales, la primera mujer en recibir un doctorado en física en la historia del MIT. ",
  " Permaneció en los Bell Lab hasta 1991, publicando en solitario o conjuntamente unos 100 estudios que abrieron las puertas para futuras invenciones tales como el teléfono de teclado, las células solares, los cables de fibra óptica y la tecnología para la identificación del emisor, alcanzando gran prestigio en la investigación de las propiedades ópticas y electrónicas de los materiales bidimensionales.",
  "RecursosFoto/20.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Frances Elizabeth «Fran» Allen ",
  " Allen creció en una granja en Peru, Nueva York y obtuvo una maestría en Matemáticas por la Universidad Estatal para Profesores de Nueva York (actual Universidad Estatal de Nueva York en Albany) en 1954. ",
  " Trabajo en compiladores, optimización de código, y computación paralela. También tuvo un rol importante en la creación de lenguajes de programación y códigos de seguridad para la Agencia de Seguridad Nacional Americana.",
  "RecursosFoto/21.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Radia Joy Perlman ",
  " Perlman nació en un entorno científico y tecnológico. Tanto su madre como su padre fueron ingenieros que trabajaron para el Gobierno de Estados Unidos. Su madre fue programadora y su padre trabajaba en el ámbito de los radares. Desde pequeña encontró fascinantes los acertijos de lógica y disfrutaba con las clases de matemáticas. ",
  " Ella es creadora de software, ingeniera de redes y experta en seguridad. ",
  "RecursosFoto/22.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Carol Shaw ",
  " Ingeniera e informática estadounidense, conocida por ser la primera mujer diseñadora de videojuegos profesional. Trabajó para Atari y Activision, dos empresas míticas del mundo de los videojuegos. Creadora del legendario juego River Raid para Atari 2600 con más de un millón de unidades vendidas.",
  " En 1978, diseña en Atari su primer juego, Polo, que desarrolló en 3 meses (128 bytes de memoria RAM) para una campaña publicitaria de una nueva colonia de Ralph Lauren que fue cancelada. El juego salió a la venta años después. ",
  "RecursosFoto/23.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Jude Milhon ",
  " La programadora y hacker Jude Milhon (1939-2003) nació un 12 de marzo. Comenzó a programar tras leer un libro titulado Teach Yourself Fortran, siendo contratada después como programadora en una empresa de máquinas expendedoras. Conocida como St. Jude, animó a otras mujeres a unirse a la cultura cibernética que comenzaba a expandirse en la década de 1970 en EE. UU., acuñando el término de cypherpunk –uniendo cifra y ciberpunk– para denominar a las personas defensoras de la privacidad digital.",
  " Fue miembro de la asociación Computer Professionals for Social Responsibility y autora, entre otros libros, de The Cyberpunk Handbook (1995).",
  "RecursosFoto/24.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Lynn Conway ",
  " Lynn Conway (2 de enero de 1938, Mount Vernon, Nueva York) es una informática, inventora y activista transgénero estadounidense. Trabajó para IBM en la década de 1960 e inventó el “generalised dynamic instruction handling”, de importancia para el paradigma de ejecución “Out-of-order” de las computadoras. IBM la despidió en 1968 después de reafirmarse transexual y planificar una reasignación de sexo. ",
  " Fue seleccionada para unirse al equipo de diseño de arquitectura de computadoras y supercomputadoras avanzadas.",
  "RecursosFoto/25.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Stephanie “Steve” Shirley ",
  " En 1962 fundó la compañía de software Freelance Programmers para comercializar programas informáticos. Uno de sus objetivos era crear oportunidades laborales para otras mujeres, y en su gran mayoría su empresa tuvo solamente empleadas. Además favorecía los horarios flexibles y permitía a quien lo necesitara trabajar desde su casa.",
  " La empresa de Shirley llegó a tener 8 500 empleados y su valor en bolsa alcanzó los 3 000 millones de dólares. ",
  "RecursosFoto/26.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Mary Allen Wilkes ",
  "En 1959, una mujer se acercó a las oficinas del Instituto de Tecnología de Massachusetts (MIT) con el arrojo y la valentía de una persona que no tiene nada que perder. Mary Allen Wilkes desconocía por completo todo lo que tuviera que ver con la ciencia computacional, de hecho, ella se había graduado en Filosofía. Se presentó allí influenciada por un profesor de geografía que destacó de ella su “mente lógica”, atributo que ella creía que le serviría para poder trabajar en ese campo ",
  " Durante la Segunda Guerra Mundial, unas 6.600 mujeres pertenecieron al grupo de Bletchley Park y varias programadoras ya habían trabajado en el ENIAC.",
  "RecursosFoto/27.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Katie Bouman ",
  " Katherine Louise Bouman (Indiana, Estados Unidos, 9 de mayo de 1989) es una ingeniera eléctrica y científica de la computación estadounidense que trabaja en el campo imágenes generadas por computadora.",
  " Dirigió el desarrollo de un algoritmo para la obtención de imágenes de agujeros negros, conocido como Reconstrucción Continua de Imágenes de Alta Resolución utilizando Prioridades de Parche (CHIRP, por sus siglas en inglés), y fue miembro del equipo del Telescopio Event Horizon que capturó la primera imagen de un agujero negro. ",
  "RecursosFoto/28.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Marisol Alarcón ",
  "Marisol Alarcón es una emprendedora chilena que busca romper las brechas digitales y capacitar a mujeres en esta área, promoviendo la inclusión tecnológica. De origen ecuatoriano-chilena, Marisol desarrolló a lo largo de su vida un rol social y de impacto que fue movilizado por la injusticia y la búsqueda de igualdad, lo que la hizo parte de organizaciones como Techo Chile",
  "Capacitar mujeres en el área digital",
  "RecursosFoto/29.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Adele Goldberg ",
  " Empresaria e informática, participó en el desarrollo del lenguaje orientado a objetos Smalltalk-80 en el Centro de Investigación de Palo Alto de Xerox. Smalltalk-80 afianzó los lenguajes dinámicos, los recolectores de basura, el uso de máquinas virtuales y se utilizó como prototipo de la interfaz WIMP (ventanas, iconos, menús, punteros) en Xerox PARC, la piedra angular de las modernas interfaces gráficas de usuario.",
  " Trabajó con el equipo de Alan Kay en Xerox para el desarrollo del lenguaje de programación Smalltalk y colaboró en la documentación de la investigación y en la promoción del lenguaje.",
  "RecursosFoto/30.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Kathleen Booth ",
  " A finales de septiembre moría a con cien años de edad Kathleen Booth, una pionera británica de la informática, y autora del primer lenguaje ensamblador de la historia.",
  " Un lenguaje ensamblador es un lenguaje de programación de bajo nivel que sólo está un paso por encima de escribir el código en los ceros y unos que entiende un ordenador digital. Lo que, a su vez sólo está un paso por encima de recablear el ordenador para cargar en él el programa y los datos con los que tiene que trabajar. Son fundamentales para escribir el software que hace funcionar el ordenador a un nivel básico. ",
  "RecursosFoto/31.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Emily Roebling ",
  " La ingeniera Emily Warren Roebling (1843-1903) nació un 23 de septiembre.",
  " Es conocida por su contribución a la conclusión del Puente de Brooklyn en Nueva York: su marido, el ingeniero civil Washington Roebling (1837-1926), desarrolló un síndrome de descomprensión durante la construcción del puente y Emily se convirtió en la ingeniera jefa de la obra.",
  "RecursosFoto/32.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Helen Augusta Blanchard ",
  " Helen Augusta Blanchard (25 de octubre de 1840 -12 de enero de 1922) fue una inventora estadounidense que recibió 28 patentes entre 1873 y 1915. Era conocida por sus numerosos inventos relacionados con las máquinas de coser y la tecnología de la costura.",
  "1873-Mejoras en Máquinas de coser\n1875- Mejora de costuras elásticas para prendas\n1875- Mejora de la cornada elástica para zapatos\n1876- Mejora en Welted y Cubrió Seams\n",
  "RecursosFoto/33.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Stephanie Louise Kwolek ",
  " La mujer que nos ocupa hoy fue una pionera en el ámbito de los materiales poliméricos. En un mundo predominantemente masculino consiguió lo que pocos pudieron, inventar uno de los polímeros más importantes que existen. ",
  "El material que ha salvado miles de vidas en todo el planeta y una de las fibras más utilizadas en aplicaciones tan distintas como la aeroespacial o la construcción: el Kevlar®. Su inventora es Stephanie Kwolek, la química que revolucionó el mundo de las fibras poliméricas.",
  "RecursosFoto/34.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Katherine Coleman Goble Johnson ",
  " Creola Katherine Johnson nació el 26 de agosto de 1918 en Virginia, Estados Unidos. Debido a las leyes de segregación en el Estados Unidos de la época que no permitían a los afroamericanos estudiar más de octavo curso en su condado natal, su familia decidió mudarse a Institute, para que sus cuatro hijos pudieran ir a un instituto para afroamericanos.",
  " Su aportación más destacada en la exploración espacial fueron los cálculos que ayudaron a sincronizar el Módulo Lunar del Proyecto Apolo con el Módulo de Comando y Servicio en órbita lunar. Sus cuentas ayudaron a que el aterrizaje en la Luna fuera un éxito.",
  "RecursosFoto/35.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Amy Shira ",
  " La entusiasta de la ciencia, Amy Shira Teitel es unaNacional canadiense-estadounidense nacido el 7 de marzo de 1986 en Toronto, Ontario. Ella nació bajo el signo zodiacal, Piscis. Su familia es judía. No hay otros detalles Durante sus días de licenciatura, Amy Shira Teitelencontró una manera de compartir su interés y obtener más conocimiento: bloguear.",
  " Comenzó su sitio de blog, Vintage Space en noviembre de 2010, que narra su amor por la historia y la exploración espaciales tripulada. Fue seguido por la publicación de su primer libro, Romper las cadenas de la gravedad en 2015. El libro fue publicado con críticas positivas y se basó en su investigación para su tesis de maestría sobre vuelos espaciales ante la NASA. Su segundo libro, Luchando por el espacio se espera que se lance en enero de 2020. conocidos acerca de su familia o de sus antecedentes educativos tempranos.",

  "RecursosFoto/36.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Kamilah Taylor ",
  " Kamilah Taylor es ingeniera de software senior en LinkedIn, empresa en la que ha estado involucrada en muchas iniciativa importantes, incluida la reescritura de la principal aplicación, los mensajes, la infraestructura y la aplicación LinkedIn Learning iOS.",
  " Su trabajo en la defensa de las mujeres y las personas de color en la industria de la tecnología. Es autora de «Mujeres en la tecnología: lleva tu carrera al siguiente nivel con consejos prácticos e historias inspiradoras», ofrece su tiempo como voluntaria para un grupo de organizaciones como BlackGirlsCode, es conferenciante y organizó el Tech Beach Retreat en Jamaica. ",
  "RecursosFoto/37.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Kimberly Bryant ",
  "Fundadora de Black Girls Code, es una de las mujeres ingenieras que lucha por introducir al sexo femenino en este ámbito. Girls Code, surge de la época en que Bryant se introdujo por primera vez en la programación de computadoras durante la universidad, dodne Apple Macintosh era el no va más",
  " Lanzó Black Girls Code, para brindar a las niñas jóvenes y preadolescentes oportunidades de color para aprender habilidades a demanda en un momento en el que están pensando en lo que quieren ser cuando crezcan.",
  "RecursosFoto/38.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Ruth Rivera Marín ",
  " Primera mujer en egresar de la Escuela Superior de Ingeniería y Arquitectura (ESIA) del IPN. En 1952 inició su carrera como docente en el IPN. -Nació en una familia de tradición nacionalista y de izquierda que marcó su carrera y trayectoria. Fue hija de la escritora y feminista Guadalupe Marín y del pintor muralista Diego Rivera.",
  " Sus obras más importantes fueron la construcción del Museo Anahuacalli en Coyoacán, Centro Médico Nacional y el Museo de Arte Moderno. Extraordinaria promotora de la arquitectura mexicana que se dedicó a proteger el patrimonio artístico de México, siempre mostró rechazo por la imitación de estilos culturales europeos.",
  "RecursosFoto/39.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Patricia Camarena Gallardo ",
  " Primera mujer titulada en Matemáticas de la ESFM del IPN en la generación 1965-1968. Desde 1970 estuvo adscrita al Departamento de Ingeniería en Comunicaciones y Electrónica de la ESIME-Zacatenco.",
  " Sus líneas de investigación son educación, matemática social, matemáticas aplicadas y educación en línea. Entre los proyectos sobre matemáticas aplicadas a la ingeniería destaca el “Modelo de atenuación por lluvia en banda ka” para la NASA de EE.UU.",
  "RecursosFoto/40.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Evangelina Villegas Moreno ",
  " Realizó su Licenciatura en Química y Biología en el IPN en una época en que las mujeres mexicanas no solían acceder a estudios superiores. Fue la primera mujer en recibir el Premio Mundial de Alimentación y nombrada Mujer del Año por la Asociación Mexicana de Mujeres en el año 2000. “Alumna Destacada” por la Kansas State University, donde además crearon un premio con su nombre. ",
  " En 1950 comenzó a trabajar como investigadora en un programa cofinanciado por la Fundación Rockefeller y la Secretaría de Agricultura. Sus primeras investigaciones fueron sobre la eficacia de más alta calidad en el maíz y cereales. Desde 1989, se convirtió en asesora de Sasakawa Africa Associaton para mejorar la tecnología agrícola de ese país, así como de grupos de las y los jóvenes científicos en áreas de Asia y América. Formó parte del Grupo Politécnico Mexicano, organismo que promueve y fomenta la ciencia y la tecnología en México. ",
  "RecursosFoto/41.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " María Fernanda Campa Uranga ",
  " Primera mujer titulada de Ingeniería Geológica en el IPN. Fue integrante del movimiento estudiantil de 1968 y conocida también como “La Chata”, así como en numerosas movilizaciones sociales de la época. Nació en la Ciudad de México, en el seno de una familia de luchadores sociales. Su madre fue la feminista Consuelo Uranga, precursora del voto para las mujeres, y su padre fue el líder ferrocarrilero Valentín Campa.",
  " La geología y la lucha social fueron dos ejes fundamentales en su vida. Formó parte del Instituto Mexicano del Petróleo y fundó el Laboratorio de Geología de yacimientos. En el campo estrictamente político, la primera geóloga mexicana participó en la fundación del Partido de la Revolución Democrática (PRD).",

  "RecursosFoto/42.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Yoloxóchitl Bustamante Díez ",
  " Primera y única Directora General del Instituto Politécnico Nacional. Es egresada de la Escuela Nacional de Ciencias Biológicas (ENCB) del Instituto Politécnico Nacional con la Carrera de Ingeniería Bioquímica.",
  " Como titular del IPN, durante el trienio 2010-2012, se registró un incremento cercano a 11% en la oferta educativa. A través del esfuerzo conjunto entre el IPN y diferentes organismos e instituciones externas, se proporcionaron durante 2012 más de 92 mil becas, lo que significó un aumento de 47.7 por ciento con respecto a 2009.",
  "RecursosFoto/43.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Laura Huerta Muzquiz ",
  " Ingresó en 1934 a la recién formada Escuela de Bacteriología, Parasitología y Fermentaciones de la Universidad Gabino Barrera, que para 1938 se transformó en la Escuela Nacional de Ciencias Biológicas (ENCB) del IPN, y en 1942 se recibió de la primera generación como Química Bacterióloga y Parasitóloga. Fue pionera de la ficología en México y profesora investigadora de su escuela de formación hasta el año en que murió.",
  " En sus tiempos de estudiante se interesó en la investigación y en 1938 publicó su primera contribución sobre fibras textiles de México. -Sus temas generales versaron sobre florística, ecología de algas y el fitoplancton. -Publicó más de 20 artículos entre 1958 al 2000 sobre las algas del Golfo de México, así como de la Península de Yucatán, costas de Oaxaca, Colima, Sinaloa y Baja California. -En la actualidad toda su investigación constituye la base sobre la vegetación marina de los litorales en nuestro país. ",
  "RecursosFoto/44.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " María Luisa Sevilla Hernández ",
  " Fue Directora de la Escuela Nacional de Ciencias Biológicas de 1975 a 1978, siendo entonces una de las primeras mujeres en ocupar una dirección de Unidad Académica en el IPN. -Egresada de la licenciatura en Biología en la misma ENCB en 1954. Posteriormente, recibió una formación en temas pesqueros y acuícolas en la URSS debido al gran interés que tenía en estas áreas auspiciado por la FAO (Organización de las Naciones Unidas para la Alimentación y la Agricultura). ",
  " En 1977 La Asociación de Mujeres Politécnicas premió su labor como egresada, además de recibir la Presea Lázaro Cárdenas en dos ocasiones, la primera como Egresada Distinguida del IPN en 1984, y la segunda en 2006 como ex Directora de ENCB. ",
  "RecursosFoto/45.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " María Guadalupe Vargas Jacobo",
  "Primera Secretaria General del Instituto Politécnico Nacional desde su fundación. Es egresada de la Escuela Superior de Turismo (EST) del IPN, ha sido docente por más de 30 años y directora de esta Unidad Académica. ",
  " Con más de 10 años de experiencia en el desarrollo en programas de capacitación para el sector turístico, ha sido vicepresidenta de la Confederación Nacional de Turistas y asesora de la presidencia en la Confederación Turística de América Latina (COTAL). -En los últimos 20 años se ha desarrollado como servidora pública en el IPN con diversos cargos, como en la Secretaría de Servicios Educativos, en los cuales orgullosamente continúa trabajando para que el Instituto sea un referente educativo de vanguardia y calidad.",
  "RecursosFoto/46.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Maribel Miceli Maza ",
  " Ha sido proyectista de obras hidráulicas, zonas de riego, sistemas de agua potable, sistemas de alcantarillado sanitario, plantas de tratamientos de aguas residuales, entre otros. Fue catedrática en la Universidad Autónoma de Chiapas.",
  " Desde 1990 es Empresaria de la Industria de la Construcción, realizando: estudios, proyectos y construcción de obras, supervisión y consultoría para dependencias federales, estatales y municipales. Es miembro del Colegio de Ingenieros Siglo XXI, Responsable Técnico y Director Responsable de Obra. Ex Vicepresidenta Nacional de Mujeres Empresarias de la Cámara Mexicana de la Industria de la Construcción, impulsando dos objetivos: Reconocimiento Profesional e Igualdad de Oportunidades.",
  "RecursosFoto/47.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Verónica Flores Déleon",
  " Originaria de Barcelona, España. Estudió la carrera de Ingeniería Civil en la Universidad La Salle de México, con postgrado en Gerencia de Proyectos por la División de Educación Continua de la Facultad de Ingeniería de la UNAM. Cuenta con diversos cursos impartidos por escuelas de negocios como el IPADE y el EGADE, enfocados a programas de desarrollo para altos ejecutivos. ",
  " Ingresó a Grupo ICA en 1998 y a lo largo de 18 años de trayectoria profesional desempeñó diversos cargos en varias áreas del Grupo, principalmente dentro de la división de Construcción Civil. Las áreas de experiencia profesional han sido en Ofertas y apoyo técnico, Proyecto Estructural, Coordinación de Ingenierías, Administración, Control de Proyectos, Construcción, Comunicación, Vinculación, Planeación Estratégica, Desarrollo de Negocios y Relaciones Institucionales. ",
  "RecursosFoto/48.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Lorena Rojas Nucamendi ",
  " Lorena Rojas Nucamendi, egresada de la Carrera de Ingeniería en Sistemas Computacionales del Instituto Tecnológico Nacional de México Campus Tuxtla Gutiérrez, logró vincular a cuatro mujeres indígenas de Chiapas con una universidad de la India, para graduarse como Ingenieras Solares y ser las “generadoras de cambio” que lleve luz a sus comunidades. ",
  " En 2013, Lorena Rojas (activista y colaboradora en organizaciones civiles) leyó sobre el trabajo que realiza la Universidad Barefoot College, fundada en 1972 en la India, por Sanjit “Bunker” Roy convencido de que “las soluciones a los problemas de los pobres en las zonas rurales se encuentran en la comunidad, en su patrimonio tradicional y en las nuevas tecnologías que requieren únicamente cierta adaptación a su situación”.",
  "RecursosFoto/49.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Clara O’Farrell ",
  "O´Farrell vivió en la Argentina hasta los 19 años. En ese momento decidió ir a los Estados Unidos para estudiar Ingeniería Mecánica y Aeroespacial en la Universidad de Princeton, en Nueva Jersey. Cuando egresó realizó un doctorado (PhD) en Control y Sistemas Dinámicos en el Instituto de Tecnología de California (Caltech). En 2013, con 27 años y tras finalizar el doctorado, comenzó a trabajar para la NASA.",
  ". La ingeniera participó del desarrollo del dispositivo que se utilizó para aterrizar el rover Perseverance en Marte ",
  "RecursosFoto/50.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " María Isabel Salazar Sánchez ",
  " Investigadora de la Escuela Nacional de Ciencias Biológicas, Unidad Santo Tomás. Desde los 14 años, la doctora María Isabel Salazar Sánchez es “orgullosamente politécnica”. ” Las mujeres tienen en la ciencia una voz única, aportan una voz complementaria, diferente en la formación de recursos humanos y con un futuro más prometedor”, expresó.",
  " Su alma máter le ha permitido desarrollarse en el ámbito de la investigación científica, a la que considera como uno de los quehaceres humanos más satisfactorios que existen. ",
  "RecursosFoto/51.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Isaura Fuentes Carrera ",
  "“Hoy en día no me imagino haciendo algo diferente, para mí la divulgación científica es un compromiso, que gracias al IPN disfruto mucho”, aseguró la doctora Isaura Fuentes Carrera.",
  " Comenzó a esbozarse su interés por la ciencia, lo que la llevó a estudiar Física y convertirse en una destacada astrónoma. ",
  "RecursosFoto/52.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Paula Figueroa Arredondo ",
  " Soy una orgullosa científica politécnica, me siento afortunada porque el IPN me dio las bases científicas para obtener mi Posdoctorado en la Escuela de Medicina de Harvard, Boston, Massachusetts.",
  " Actualmente tengo el honor de que politécnicos que anhelan participar en la investigación científica, me hayan dado la confianza de dirigir sus tesis y ser mis alumnos en las aulas. ",
  "RecursosFoto/53.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Julie Roberge ",
  " Investigadora de la Escuela Superior de Ingeniería y Arquitectura, Unidad Ticomán.  La doctora Julie Roberge, originaria de Quebec, Canadá. “Ser mujer significa trabajar día a día para buscar igualdad, y ahora que soy mamá el sentido de esta frase ha aumentado de manera exponencial” ",
  " Destacó su orgullo de ser politécnica, porque puede contribuir al desarrollo social del país, con alcances internacionales, a través de la formación de recursos humanos responsables y altamente capacitados, que son cimiento de la institución.",
  "RecursosFoto/54.jpg"
);
r++;

fullData[r] = new dataBiograficos(
  " Mayra Beatriz Gómez Patiño ",
  " Todavía en nuestros tiempos somos muy aprehensivas y no soltamos, es necesario involucrar más a los hombres en las labores del hogar. Otro aspecto es evitar el prejuicio de las profesiones en el núcleo familiar, se deben apoyar las vocaciones si se desean o fomentar cuando se tienen ciertas cualidades. Expresó ",
  "Es importante reconocer y enfatizar que las mujeres sí están presentes en la ciencia. Es de destacar el esfuerzo por llevar una vida profesional activa y prominente a la par de echarle ganas con la familia. Siguirio",
  "RecursosFoto/55.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Eva Ramón Gallegos ",
  " El apoyo o el fomento para que las mujeres y las niñas participen en ciencia es indispensable para el crecimiento de los países, ya que tienen otras formas de resolver o proponer nuevas estrategias para enfrentar un problema, eso ayudará a que la ciencia avance. ",
  "(Escuela Nacional de Ciencias Biológicas). Todo lo que se haga en pro de la mujer es bueno para su desarrollo en todos los campos. Históricamente las féminas siempre han estado en la ciencia, que no se le haya dado el reconocimiento es otra cosa. Socialmente la mujer todavía tiene mucha carga sobre sus hombros y en México falta cultura e información en equidad de género.",
  "RecursosFoto/56.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Concepción Mendizábal Mendoza ",
  " En 1930, se tituló de la escuela nacional de ingenieros de la Universidad Nacional Autónoma de México, convirtiéndose así en la primera mujer con el grado de Ingeniería Civil. Según la gaceta de la UNAM número 5 del 2012, la tesis de Mendizábal fue “proyecto de una torre elevada de concreto armado para 300 metros cúbicos de agua, 20 metros de alto con un mirador en la parte superior, desarrollando los principales detalles de la construcción.” ",
  " La primera Ingeniera Civil, que además fue admirada por su inteligencia por parte de sus maestros, fue un inicio de otra perspectiva; pese a los ojos de la sociedad machista, su claridad fue el utensilio poderoso para hacerse camino. En 1974, Mendizábal fue reconocida con el Premio Ruth Rivera junto con la primera arquitecta mexicana, la veracruzana María Luisa Dehesa y Gómez Farías de la UNAM. Se desempeñó como posecretaria de la Sociedad Científica Antonio Álzate y fue coautora de algunos libros. Falleció el 23 de noviembre de 1985. ",
  "RecursosFoto/57.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Laura Cuevas Bulnes",
  " El 31 de enero de 1938, Laura Cuevas Bulnes se tituló de la carrera de Ingeniería Civil. Fue la segunda mujer en graduarse de ese programa de estudios. Fue la primera ingeniera que se integró a la planta docente de la Escuela Nacional de Ingeniería, es decir, la primera en formar a hombres en esa área. ",
  " Después de ella, en 1939, se tituló también como Ingeniera Civil, María del Carmen Grimaldo y Cantero, con la tesis Estudio para la cimentación de colectores en el suelo de la Ciudad de México."
  ,"RecursosFoto/58.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Ángela Alessio Robles",
  " En el año de 1948, de acuerdo con la catedrática, comenzó su trabajo en el sector público en el departamento del Distrito Federal (hoy Gobierno de la Ciudad de México) donde se desempeñó como directora de Planificación, presidenta de Planificación y Directora del Plan de Desarrollo Urbano. Colaboró en la construcción de la Macro Plaza de Monterrey. Obtuvo diversos premios como la mujer del año en 1965; la presea la Legión de Honor Nacional en París en 1968 y el Diploma de la Sociedad Británica 1968. ",
  " Se tituló en 1943 como Ingeniera Civil en la UNAM, con la tesis Obras hidraúlicas en el Valle de México, el caso de Milpa Alta. Según la Doctora Martha Rosa del Moral Nieto, también se convirtió en maestra en Ciencias en planificación y habitación."
  ,"RecursosFoto/59.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Francisca Olivia Cruz Valenzuela",
  " La Ing. Francisca Olivia Cruz Valenzuela con 34 años al servicio de la Residencia General de Carreteras Federales en el Centro SICT Zacatecas: Mi mayor satisfacción es ver carreteras terminadas, seguras y bien construidas; como mujer quiero ser un ejemplo de empoderamiento y de que podemos cumplir nuestros sueños, porque al igual que los hombres, somos capaces de desempeñar cualquier puesto de trabajo con sensibilidad, responsabilidad y aporte humano",
  " La Secretaría ha empleado y formado a cientos de mujeres ingenieras, convirtiéndolas en grandes profesionistas que han dedicado buena parte de su vida a esta labor. Recordemos que la ingeniería es un pilar del progreso nacional y por ello resulta fundamental su participación"
  ,"RecursosFoto/60.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Dalia Carolina Ramos",
  " Dalia Ramos nació en la Ciudad de México, tiene 34 años y siempre ha tenido madera de líder.",
  "Antes de encabezar el departamento de Build and Test del equipo Alpine de Fórmula 1, fue team leader de un importante proyecto de manufactura en Rolls Royce. Se ha acostumbrado a liderar equipos de hombres (muchas veces mayores que ella). Dice que lo ha logrado con determinación y con una actitud que combina seguridad y humildad, reconociendo y aprendiendo del trabajo de los demás. El departamento que dirige en Alpine (antes Renault) se encarga del ensamblaje, las pruebas y la homologación de los autos de Fórmula 1 que conducen los pilotos Fernando Alonso y Esteban Ocon."
  ,"RecursosFoto/61.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Jenifer Avellaneda",
  " A sus 12 años, se hacía muchas preguntas sobre el mundo que la rodeaba. Investigando, llegó a los átomos y la materia atómica.Fue así que se decidió a estudiar algo que la acercara a esta industria. Uno dice nuclear y la gente lo asocia automáticamente con bombas, pero hay muchísimo más allá. A mí, por ejemplo, el tema del cambio climático me preocupa mucho y yo tengo muy claro que con energía nuclear podemos generar electricidad de manera segura, verde y en grandes cantidades",
  "El trabajo actual de Jenifer, quien nació en la Ciudad de México en 1995, es evaluar la probabilidad de riesgos, es decir, qué tan posible es que suceda cualquier tipo de contratiempo o evento catastrófico en una planta nuclear y cuáles tendrían que ser las acciones para mitigarlo."
  ,"RecursosFoto/62.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Alejandra Chávez Santoscoy",
  " Alejandra Chávez nunca pierde el piso y siempre vuelve a su raíz. Nació en Guadalajara, en 1987, y forma parte del Sistema Nacional de Investigadores Nivel 1, en 2017, recibió el reconocimiento Investigadores Innovadores menores de 35 años de Latinoamérica que otorga el MIT Technology Review. Y es que más allá de los títulos, para ella, lo más importante es que, con su trabajo, pueda generar valor a la sociedad mexicana.",
  " Sus investigaciones están encaminadas a usar compuestos bioactivos en alimentos para ayudar a prevenir enfermedades, identificar moléculas de alto valor nutricional, estabilizar sus compuestos por microencapsulación y, con tecnología, adicionarla a otros alimentos, por ejemplo, a las tortillas y al pan de caja, para que sean más saludables"
  ,"RecursosFoto/63.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Roxana Morton",
  " Roxana Morton es egresada de Ingeniería industrial de CETYS Ensenada, actualmente está estudiando un doctorado en Ingeniería Química en University of Nevada, Reno (UNR) con un enfoque en modelado de materiales",
  "Lo que la motivó a estudiar ingeniería fue que luego de visitar el parque eólico de la Rumorosa mientras era estudiante de la Preparatoria CETYS, nació un profundo interés por estudiar los procesos productivos, cómo se fabrican los productos que consumimos y cómo mejorar los procesos"
  ,"RecursosFoto/64.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Ariana Talamantes",
  " Ariana Talamantes es egresada de Ingeniería en Cibernética Electrónica de CETYS y tiene una Maestría en Ciencias Computacionales, actualmente trabaja como analista de ciencia de datos en la empresa tecnológica Lisa Insurtech.",
  " Ella considera que lo más complicado de desarrollarse en este ámbito es lograr obtener respeto y credibilidad."
  ,"RecursosFoto/65.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Alexandra Cortés",
  " Alexandra Cortés, es egresada de Ingeniería en Energías Renovables de CETYS, cuenta con Maestría en ciencias con especialidad en Ingeniería Ambiental con énfasis en Calidad del Agua por la Universidad de Berkeley, y actualmente trabaja en Clearwater Hydrology, en Berkeley, California, empresa que hace proyectos de ingeniería con enfoque en hidrología.",
  " Su interés por la Ingeniería surgió porque quería enfocarse en algo que representara un reto y que contribuyera con el bienestar y desarrollo de la sociedad, economía y el medio ambiente, y sobre su camino hacia el posgrado en ingeniería ambiental después de terminar la carrera, comenta que lo que le ayudó a encontrar su pasión fue el trabajo de investigación, bajo la tutela de un docente, realizado durante varios años en CETYS."
  ,"RecursosFoto/66.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Esperanza Martínez Romero",
  " La Dra. María Esperanza Martínez Romero es investigadora del Centro de Ciencias Genómicas de la UNAM ",
  " Durante su carrera se ha enfocado en el estudio de la relación entre las bacterias benéficas y la salud de las plantas. Mis trabajos sobre las simbiosis de plantas pueden promover el interés de los agricultores para la adopción de prácticas sostenibles y el uso de biofertilizantes, dijo la científica mexicana a CNN."
  ,"RecursosFoto/67.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Sandra Pascoe Ortiz",
  " La científica Sandra Pascoe Ortiz, profesora investigadora en la Universidad del Valle de Atemajac (UNIVA) en Guadalajara, Jalisco, inventó una alternativa ecológica a los plásticos tradicionales.",
  " El proyecto que nació en una feria de ciencias, consiste en la producción de un material plástico 100% natural y biodegradable a partir del nopal. Esta creación permite que a partir de jugo de nopal, sábila y otras suculentas se desarrolle un producto plástico que es capaz de reintegrarse al ecosistema natural en menor tiempo que los plásticos tradicionales."
  ,"RecursosFoto/68.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Carmen Victoria Félix Chaidez",
  " La sinaloense estudió Ingeniería en Electrónica y Telecomunicaciones en el Tec de Monterrey y cuenta con una Maestría en Ciencias Espaciales en la International Space University en Estrasburgo, Francia.",
  " Félix Chaidez trabajó en el Centro de Investigación Ames de la NASA para la División de Satélites Pequeños, en el proyecto PhoneSat, un nanosatélite basado en un teléfono inteligente. Y durante su estancia en NASA, se involucró en los Foros de Consulta para la creación de la Agencia Espacial Mexicana (AEM) ayudó a las universidades mexicanas a crear oportunidades de pasantías en NASA Ames."
  ,"RecursosFoto/69.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Julieta Fierro Gossman",
  " La astrofísica mexicana es investigadora titular del Instituto de Astronomía de la UNAM y profesora de la Facultad de Ciencias. La Dra. Fierro se dedica a la divulgación de la ciencia y con el fin de acercar la ciencia a todo el mundo es que la científica es que ha utilizado la actuación, comedia e incluso actor circenses como un medio para hablar de la ciencia.",
  " Uno de sus proyectos más recientes es su podcast El Universo | Yo te explico, donde habla sobre los secretos de la astronomía, y anteriormente, colaboró con el programa de televisión Sofia Luna, agente espacial, producido por el Canal 11."
  
,"RecursosFoto/70.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Diana Trujillo",
  " La colombiana nacida en Cali (suroeste) y de 41 años es una de las flamantes directoras de vuelo de la Estación Espacial Internacional (EEI) y la única latinoamericana en integrar este equipo de la Administración Nacional de Aeronáutica y el Espacio (NASA).",
  " Desde su rol, la ingeniera aeroespacial supervisa el programa Artemis, que controla el regreso de misiones tripuladas a la Luna, así como diferentes misiones de la EEI y de la tripulación comercial"
  ,"RecursosFoto/71.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Aracely Quispe",
  " La ingeniera astronáutica peruana fue la primera mujer latinoamericana en liderar misiones exitosas en NASA: la Misión de Medición a las Lluvias Tropicales, el Orbitador de Reconocimiento Lunar y el Telescopio Espacial James Webb.",
  "Nacida en Motupe, al norte de Perú, Quispe soñó desde pequeña con trabajar en las misiones espaciales de la NASA.Emigró a EEUU al cumplir los 21 años, ya como egresada de una carrera de Informática e Ingeniería de Sistemas, con el objetivo de especializar sus estudios en ingeniería astronáutica."
  ,"RecursosFoto/72.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Bertha Jiménez",
  "La ingeniera astronáutica peruana fue la primera mujer latinoamericana en liderar misiones exitosas en NASA: la Misión de Medición a las Lluvias Tropicales, el Orbitador de Reconocimiento Lunar y el Telescopio Espacial James Webb",
  " Nacida en Motupe, al norte de Perú, Quispe soñó desde pequeña con trabajar en las misiones espaciales de la NASA. Emigró a EEUU al cumplir los 21 años, ya como egresada de una carrera de Informática e Ingeniería de Sistemas, con el objetivo de especializar sus estudios en ingeniería astronáutica."
  ,"RecursosFoto/73.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Griselda Hernández",
  "Es egresada de la carrera de Ingeniería Industrial de la UP. Actualmente es directora general de UPS. Logró duplicar sus centros operativos, creó 400 empleos, lanzó más servicios y obtuvo un crecimiento de 50% de rentabilidad",
  " Fue nombrada una de las 25 mujeres de negocios más importantes de América Latina por Latin Business Chronicle. Ocupa el décimo tercer puesto en el ranking de Las 50 Mujeres más Poderosas del 2011 de la revista Expansión."
  ,"RecursosFoto/74.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Lesli Ortega Arroyo",
  "Ingeniera del Instituto Politécnico Nacional (IPN), creó un material adicionado con nanopartículas de plata para prótesis dentales, que además de mejorar los beneficios de otros materiales permitirá abatir costos",
  "En su trabajo de tesis doctoral demuestra que una aleación de plata y estaño, adicionada con nanopartículas de plata, es una excelente alternativa para implantes dentales por sus propiedades mecánicas y térmicas."
  ,"RecursosFoto/75.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Maria das Graças Foster",
  "Está a la cabeza del gigante petrolero brasileño Petrobras, la empresa más grande de América Latina.",
  " Se graduó de ingeniera química en la Universidad Federal Fluminense (UFF) y obtuvo una maestría en energía nuclear en la Universidad Federal de Río de Janeiro (COPPE/UFRJ) y un MBA en economía de la Fundação Getúlio Vargas."
  
,"RecursosFoto/76.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Luz Patricia Cerda González",
  " Es ingeniera química, trabaja en ingeniera medioambiental del departamento de Medio Ambiente de Barrick Pueblo Viejo.",
  "Su trabajo consiste en el monitoreo de calidad de aire, agua, ruido, control de polvo y manejo de base de datos, entre otras cosas. Empezó a trabajar en la mina desde hace tres años y fue la única mujer en un grupo de 88 hombres que integraban la unidad de medio ambiente."
  ,"RecursosFoto/77.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Oliva González",
  " Doctora Ingeniera de Caminos, Executive MBA por IE Business School, Coach Ejecutivo y músico. Esta mujer es creadora de MyO Company, consultora innovadora en técnicas de gestión (de empresas y de personas), y en formación y desarrollo en entrenamiento de habilidades directivas.",
  "Su trabajo consiste en el monitoreo de calidad de aire, agua, ruido, control de polvo y manejo de base de datos, entre otras cosas. Empezó a trabajar en la mina desde hace tres años y fue la única mujer en un grupo de 88 hombres que integraban la unidad de medio ambiente."
  ,"RecursosFoto/78.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Odeyda Alcántara Reyes",
  " Es ingeniera industrial de la Universidad Autónoma de Santo Domingo, UASD, trabaja en el departamento de Medio Ambiente en el área de manejo de residuos y reciclaje.",
  " Asegurar la buena gestión y manejo de los residuos peligrosos y no peligrosos, generados en el proyecto para evitar la contaminación y posible impacto al medio ambiente "
  ,"RecursosFoto/79.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  "Valentina Muñoz",
  "Valentina Muñoz Rabanal es una activista juvenil feminista, estudiante de enseñanza media. Es programadora desde los 12 años; y tricampeona regional, campeona nacional y mundial, del concurso internacional de robótica First LEGO League.",
  " . Electa por Ashoka como una de las(os) 7 jóvenes más influyentes del país en 2020, esta joven es también fundadora de la Secretaría de Diversidad de Género y Sexualidad del Liceo Carmela Carvajal (Sedigesex); y presidenta de la Asociación de Mujeres Jóvenes por las Ideas (AMUJI Chile)."
  ,"RecursosFoto/80.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Idelisa Bonelly",
  "Considerada la madre de la conservación marina en el Caribe, Idelisa Bonnelly comenzó sus estudios de biología marina en Nueva York en 1953, ya que en su país natal no había universidades donde se impartiese esa carrera",
  "Fundó la primera institución del país donde estudiar ciencias ambientales marinas. Entre sus numerosos logros, destaca la creación del primer santuario de ballena jorobada en el Atlántico Norte."
  ,"RecursosFoto/81.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " África Flores",
  " La científica guatemalteca África Flores monitorea la salud de los ecosistemas en distintas partes del mundo a través de una red de satélites de la NASA ",
  " fue la ganadora del premio Geospatial Women Champion of the Year, como coordinadora regional del programa SERVIR de la National Aeronautics and Space Administration, creado para detectar información crítica relacionada con seguridad alimentaria, recursos hídricos, uso del suelo, desastres naturales y cambio climático, especialmente en su país, Guatemala y en países de la Amazonía."
  ,"RecursosFoto/82.jpg"
);
r++;

fullData[r] = new dataBiograficos(
  " Kathrin Barboza",
  " Investigadora del programa para la Conservación de los Murciélagos de Bolivia y de la Red Latinoamérica para la Conservación de Murciégalos.",
  " Barboza es la primera científica boliviana en ganar la beca del programa de la Unesco y la Fundación L’Oreal para jóvenes científicas (2012). Redescubrió en Bolivia el murciélago Nariz de Espada que se creía extinto desde hacía 72 años. Su investigación coadyuvó a ampliar el conocimiento sobre los servicios ambientales que los murciélagos le ofrecen a las poblaciones humanas en diferentes hábitats."
  ,"RecursosFoto/83.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Natasha Bloch ",
  " Nombrada editora asociada de la revista científica Proceedings of the Royal Society B, de la Real Sociedad del Reino Unido. ",
  " las investigaciones de Bloch se centran en comprender cómo nuestro cerebro produce diferentes comportamientos para responder adecuadamente a miles de estímulos sociales, y la respuesta neurogenómica que yace debajo de los comportamientos sociales, su evolución y los trastornos derivados."
  ,"RecursosFoto/84.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Sandra López Vergès ",
  " Sandra López Vergès es una bioquímica panameña con un doctorado en Microbiología especialidad Virología. Su investigación se centra en la comprensión de las infecciones virales y las interacciones entre el virus y el huésped humano. Es investigadora superior en salud y jefa del Departamento de Investigación en Virología y Biotecnología en Salud del Instituto Conmemorativo Gorgas de Estudios de la Salud (ICGES).",
  " Está desarrollando una nueva línea de investigación sobre la inmunidad innata de las enfermedades víricas y arbovirales, siendo mentora de estudiantes de doctorado, máster, licenciatura y bachillerato. Sus investigaciones y trabajos han dado lugar a una patente y a numerosas publicaciones en revistas de alto impacto y a prestigiosos premios como el Premio Internacional UNESCO-L'OREAL para Mujeres Jóvenes en la Ciencia."
  ,"RecursosFoto/85.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Ana Inés Zambrana ",
  " Ana Inés Zambrana es Licenciada en Bioquímica de la Universidad de la República y Magíster en Biología del Programa de Desarrollo de las Ciencias Básicas (PEDECIBA). Realizó su tesis de grado en el Departamento de Biotecnología del Instituto ETH Zürich (Suiza), donde investigó arroz transgénico, biofortificado con hierro.",
  " En cuanto a su tesis de Maestría, investigó diferentes aspectos de la Diabetes tipo 1 y su impacto en la salud cardíaca (realizada en el Instituto de Investigaciones Biológicas Clemente Estable, Uruguay). Además, realizó un Diplomado en Gestión de Proyectos para la Cooperación (FLACSO-OEI) y especializaciones en Comunicación, Extensión y Educación de la Ciencia."
  ,"RecursosFoto/86.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Carol Leung ",
  " Carol Leung dirige la ingeniería para el lado de los huéspedes dentro de la iniciativa Plus de Airbnb. Es admirada y respetada por todos, desde sus jefes hasta sus compañeros de equipo, conocida por su capacidad para motivar a la gente y mantener los proyectos en marcha. ",
  " Su promoción como líder de este equipo de ingeniería la ha marcado como una estrella en ascenso en la compañía. Cuando no está en el trabajo, sale a correr. Se ríe de que el hecho de estar embarazada no le impidió correr todos los días. De hecho, el día del parto estaba corriendo en una cinta de correr, nos contó."
  ,"RecursosFoto/87.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Meredith Westafer ",
  " Meredith Westafer es una ingeniera industrial senior de Tesla que dirige el diseño y la maquetación de la Gigafábrica de la compañía, que la fábrica más grande del mundo por tamaño. La fábrica — ubicada en Reno, Nevada — produce las baterías integrales de iones de litio que hacen funcionar los vehículos Tesla. ",
  " Westafer desarrolló los modelos que determinaron cuánto espacio necesitaba la fábrica y cómo fluyen los materiales dentro de la fábrica. Diseñó un sistema automatizado de entrega de material que utiliza una flota de robots móviles autónomos para entregar las mercancías desde y hacia la línea de producción. A veces, cuando voy al trabajo y veo este enorme edificio, me sorprende un poco lo grande que es el desafío, pero es muy divertido, dijo."
  ,"RecursosFoto/88.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Tanya Lattner ",
  " Tanya Lattner es presidenta y directora de operaciones de la Fundación LLVM, una organización a la que ayudó a fundar. LLVM es un proyecto de compilación, lo que significa que ayuda a un ordenador a leer y comprender el software que ejecuta. La tecnología LLVM es utilizada por muchas grandes empresas de tecnología como Adobe, Nvidia, MobileEye o Sony. Lattner es una antigua ingeniera de Apple que trabajó en LLVM como estudiante de posgrado y fue una fuerza impulsora en el éxito del proyecto. ",
  " También tiene cinco patentes a su nombre. La ingeniería de compiladores es un nicho que otros programadores ven con asombro y aún no ha atraído a demasiadas mujeres. Lattner no solo es un modelo a seguir para su propio trabajo, sino que su fundación ha lanzado programas que animan a más mujeres a probar este tipo de ingeniería. Soy ingeniero compilador por formación, que es un campo que muchos consideran intimidante. Me encanta poder ser capaz de cambiar esta perspectiva, nos dice. "
  ,"RecursosFoto/89.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Krysta Svore ",
  " Krysta Svore dirige un grupo de investigación cuántica (QuArC) en Microsoft que ayuda a introducir un nuevo tipo de ordenador. ",
  " Krysta trabaja en algoritmos cuánticos y en cómo implementarlos, desde cómo codificar en un lenguaje de programación de alto nivel, hasta cómo ejecutar estos programas a nivel de hardware. Está en el lado del software de la computación cuántica, un nuevo tipo de ordenador que algún día podría ser de magnitudes más poderosas que los superordenadores más rápidos de la actualidad."
  ,"RecursosFoto/90.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Sylvia Acevedo ",
  " Sylvia Acevedo es la directora ejecutiva de Girl Scouts. Pero se inició como ingeniera trabajando para los Laboratorios de Propulsión a Reacción de la NASA, IBM y Dell y espera usar esas habilidades para ayudar a las Girl Scouts a elevar su perfil entre Silicon Valley y las compañías de tecnología. ",
  " Acevedo ha comentado a Business Insider que ha amado el espacio y la astronomía durante casi todo el tiempo que ha sido una Girl Scout. Durante una acampada, quedó fascinada con las constelaciones y las partes inexploradas del espacio, lo que estimuló su interés por la ciencia y la tecnología. Años más tarde, obtuvo una maestría en ingeniería industrial en Stanford y trabajó para la NASA en la década de 1970."
  ,"RecursosFoto/91.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Erica Baker ",
  " Erica Baker es la gerente principal de ingeniería de Patreon, una startup que ayuda a artistas, músicos y otras personas creativas a cobrar por su trabajo mediante la venta de suscripciones. Baker estuvo previamente en Google y Slack. ",
  " Es bien conocida en el Silicon Valley por su incansable defensa por la inclusión. Es miembro de la junta directiva de Girls Develop It, mentora de Black Girls Code, asesora de Hack the Hood y miembro del consejo de diversidad de Code.org. Y es una oradora frecuente en conferencias."
  ,"RecursosFoto/92.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Wiratni Budhijanto ",
  " La Dra. Wiratni Budhijanto es ingeniera química y profesora en la Universidad de Gadjah Mada en Indonesia.",
  " Trabajando en asociación con el Dr. Largus Angenent de la Universidad de Cornell, Budhijanto inventó una nueva forma de tratar las aguas residuales que es 10 veces más eficiente, requiere mucha menos tierra que los sistemas de retención de estanques y no libera gases de efecto invernadero."
  ,"RecursosFoto/93.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Karen Casella ",
  " Karen Casella es la líder de ingeniería de los equipos de Edge & Playback Access en Netflix. ",
  " Está a cargo de los equipos responsables de garantizar que los usuarios vean el contenido de forma segura. Antes de Netflix, fue vicepresidenta de Ingeniería en Shop.com. También ha ocupado cargos en eBay y ha sido directora de arquitectura de Aplicaciones en eBay y Sun Microsystems."
  ,"RecursosFoto/94.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Caitlin Kalinowski ",
  " Caitlin Kalinowski es la jefa interina de hardware de Oculus, la división a cargo de los auriculares de realidad virtual de Facebook, el Oculus Rift. ",
  " Kalinowski ha dirigido el equipo responsable del diseño del Rift, Touch y Gear VR de Oculus y se encarga de resolver problemas de ingeniería y diseño urgentes, como la adaptación de una gran cantidad de tecnología en unos auriculares pequeños."
  ,"RecursosFoto/95.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Justyna Zander ",
  " Justyna Zander es jefa de productos de automoción de NVIDIA, una de las principales empresas fabricantes de tecnologías subyacentes para la automoción.",
  " Zander lleva más de una década trabajando en el campo de la automoción y es experta en el aprendizaje profundo, la inteligencia artificial y el aprendizaje automático. Tiene seis patentes y ganó el Premio de Líderes Emergentes de la Sociedad de Mujeres Ingenieras en 2017."
  ,"RecursosFoto/96.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Judy Priest ",
  " Judy Priest ha recibido el más alto honorario de ingeniería de Cisco como ingeniera distinguida. ",
  " Trabaja en la Oficina Principal de Tecnología y Arquitectura. Su trabajo consiste en investigar nuevas tecnologías para Cisco realizando pruebas de ensayos de concepto y ayudando a las unidades de negocio a encontrar la forma de añadir la tecnología a sus planes de desarrollo de productos."
  ,"RecursosFoto/97.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Yael Garten ",
  " Yael Garten es directora de ciencia y análisis de datos de Siri en Apple. Garten está a cargo de utilizar los datos para la toma de decisiones de la asistente de voz de Apple, Siri. ",
  " Usando datos, el equipo de Garten ayuda a decidir cómo se actualiza Siri o qué nuevas características obtendrá el programa. Y debido a que su trabajo implica obtener suficientes números para tomar decisiones sobre productos, ella es una experta reconocida en el campo de la ciencia de datos."
  ,"RecursosFoto/98.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Deb Liu ",
  " Deb Liu es la vicepresidenta de Marketplace de Facebook. Liu está a cargo de la plataforma de compradores y vendedores de la empresa que compite con Craigslist. Liu ayudó a construir la plataforma desde cero antes de su lanzamiento en 2016. ",
  " Las historias de cómo las vidas de las personas se han beneficiado del producto en pequeñas y grandes maneras son realmente importantes para mí, y es la mejor parte de este trabajo le ha dicho a Business Insider. "
  ,"RecursosFoto/99.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Sophia Velastegui ",
  " Sophia Velastegui es la directora general de la unidad de productos de inteligencia artificial de Microsoft. ",
  " Velastegui, que es titular de varias patentes y forma parte de la junta directiva de la Facultad de Ingeniería de Georgia Tech, se unió a Microsoft en diciembre de 2017. En este cargo, es responsable de ayudar a Microsoft a desarrollar y crear nuevos productos para sus tecnologías de inteligencia artificial."
  ,"RecursosFoto/100.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Li Fan ",
  " Li Fan es vicepresidente senior de ingeniería en Pinterest. Como una de los principales expertos de la industria en computación visual y búsqueda de imágenes. ",
  " Fan lideró el equipo de más de 450 personas responsable del lanzamiento de Pinterest Lens, la herramienta de búsqueda visual de la compañía que utiliza el aprendizaje automático para ayudar a los usuarios a identificar objetos tomando una foto de ellos."
  ,"RecursosFoto/101.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Aanchal Gupta ",
  " Aanchal Gupta es directora de seguridad en Facebook, donde dirige varios equipos encargados de proteger a Facebook de los cibercriminales. ",
  " Gupta no solo es responsable de asegurarse de que los productos de Facebook — Facebook, Messenger, Instagram, WhatsApp y Oculus sean seguros, sino que también se encarga de proteger la infraestructura corporativa de la empresa."
  ,"RecursosFoto/102.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Sandy Carter ",
  " Sandy Carter es la vicepresidenta de Ingeniería de Cargas de Trabajo Empresariales y Gestión de Productos de Amazon Web Services.",
  " Dirige los equipos de negocio e ingeniería para Windows en AWS, VMware en AWS, las empresas de migración de servidores y la gestión de productos para la unidad Compute Cloud. Amazon es actualmente el líder en el mercado de la computación en nube, y Carter está ayudando a defenderse de rivales prometedores como Microsoft y Google. "
  ,"RecursosFoto/103.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Reshma Shetty ",
  " Reshma Shetty es co-fundadora y jefa de operaciones de Ginkgo Bioworks, una empresa biotecnológica de vanguardia que diseña ADN sintético ",
  " La compañía está generando entusiasmo en el mundo de la biotecnología e incluso ha llamado la atención de Bill Gates, cuyo fondo de gestión de activos invirtió en una ronda de 275 millones de dólares, valorando a la compañía en 1.400 millones de dólares, lo que la convierte en una empresa unicornio. "
  ,"RecursosFoto/104.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Prachi Gupta ",
  " Prachi Gupta es directora de ingeniería en LinkedIn. Gupta dirige los equipos de ingeniería detrás de la página principal de LinkedIn, transmitiendo y compartiendo productos, asegurándose de que el contenido relevante sea mostrado a los usuarios durante cada visita. ",
  " Anteriormente dirigió el equipo de LinkedIn responsable de la función de mensajería. Antes de incorporarse a LinkedIn en 2010, Gupta fue ingeniera en Garmin. "
  ,"RecursosFoto/105.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Julie Larson ",
  " Julie Larson-Green es la directora de experiencia de Qualtrics. Larson-Green es bien conocida por sus 25 años en Microsoft  ",
  " ascendiendo a vicepresidenta ejecutiva y directora de experiencia allí. Dirigió equipos para productos utilizados por miles de millones de personas cada día, incluyendo Office, Windows, Internet Explorer, Xbox y Surface."
  
,"RecursosFoto/106.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Lily Chang ",
  " Lily Chang dirige la Oficina de Transformación Estratégica de VMware, así como la Oficina de Proyectos de la primera empresa conjunta de la compañía con la compañía de infraestructura china Surgon. ",
  " Antes de ocupar estos cargos, fue vicepresidenta de Ingeniería Central de VMware y, antes de eso, fue ingeniera en investigación y desarrollo (I+D). "
  ,"RecursosFoto/107.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Renee James ",
  " Renee James es conocida en la industria de la tecnología como una antigua pez gordo de Intel, que una vez fue la segunda al mando del gigante de los chips. Dejó Intel en 2015, pero acaba de resurgir en el mundo de la construcción de chips a principios de 2018, cuando su startup, Ampere, salió a hurtadillas. ",
  " Ahora es directora general de su propia compañía de semiconductores y una de las dos únicas directora generales que dirigen empresas de chips. La otra es la directora ejecutiva de AMD, Lisa Su (y sí, las dos mujeres se conocen y son amigas, nos dijo James)."
  ,"RecursosFoto/108.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Kathy Winter ",
  " Kathy Winter es una fuerza importante dentro de la división más observada de Intel, el grupo Autonomous Driving, introducido en Intel con la adquisición de Mobileye por valor de 15.000 millones de dólares en 2017. ",
  " Winter se unió a Intel a finales de 2016, antes de la compra de MobileEye, como GM, la División de Soluciones Automatizadas. Estaba trabajando para crear chips para la conducción autónoma como parte de la creciente división Internet of Things de Intel. "
  ,"RecursosFoto/109.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Corinne Yu ",
  " Corinne Yu es vicepresidenta de ingeniería de cruceros en General Motors y trabaja en vehículos autónomos  ",
  " Está encargada de contratar y dirigir diversos equipos que cubren la gama de tecnologías utilizadas en los coches de autoconducción: hardware, sensores, visión por ordenador, formación en aprendizaje por ordenador y mucho más. "
  ,"RecursosFoto/110.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Joy Chik ",
  " Joy Chik es la vicepresidenta corporativa que dirige la división de identidad de Microsoft de su grupo Cloud and Enterprise. ",
  " Como tal, supervisa el equipo que protege los datos de consumidores y empresas en Office 365, Windows, Xbox, Surface y Azure.Durante dos años, Chik también ha sido miembro de la junta directiva del Instituto Anita Borg para Mujeres en Tecnología."
  ,"RecursosFoto/111.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Yanbing Li ",
  " El Dr. Yanbing Li es el vicepresidente senior y directora general de la Unidad de Negocio de Almacenamiento y Disponibilidad de VMware (SABU). ",
  " Es responsable de una amplia cartera de algunos de los productos más prominentes y de más rápido crecimiento de VMware, entre los que se incluyen el desarrollo de productos, la ingeniería y las ventas  "
  ,"RecursosFoto/112.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Carol Zierhoffer ",
  " Bechtel es una de las empresas de ingeniería más grandes del mundo, con 53.000 empleados en todo el mundo, y Carol Zierhoffer es su principal responsable de Tecnología de la Información (TI) — la directora de información. ",
  " Ella y su equipo fueron premiados en 2017 por desarrollar un programa innovador que ayuda a proteger a todos esos empleados de los hackers."
  
,"RecursosFoto/113.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Elissa Murphy ",
  " Elissa Murphy es vicepresidenta de ingeniería de Google Cloud, la plataforma de computación en nube de la compañía que compite con Amazon Web Services y Microsoft Azure. ",
  " Murphy lideró anteriormente los esfuerzos que ayudaron a que la suite de aplicaciones de oficina de Google, G Suite, se centrara más en la empresa. Posee más de 30 patentes con más de 10 pendientes en sistemas distribuidos, aprendizaje de máquinas y seguridad. "
  
,"RecursosFoto/114.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Noël Bakhtian ",
  "Noël Bakhtian es la directora del Centro de Estudios de Energía Avanzada del Laboratorio Nacional de Idaho. CAES es un esfuerzo de investigación entre el Departamento de Energía de los Estados Unidos y cuatro universidades públicas de investigación en Idaho y Wyoming. ",
  " Bakhtian lidera los esfuerzos del centro para resolver los problemas energéticos más acuciantes a los que se enfrenta el mundo, incluyendo el nexo entre energía y agua, la fabricación avanzada, la energía nuclear, la ciberseguridad, las políticas y la supercomputación."
  ,"RecursosFoto/115.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Corlis Murray ",
  " Corlis Murray es responsable de los servicios de ingeniería de Abbott, incluidos los de regulación, garantía de calidad y seguridad global para todos los negocios de la compañía en más de 150 países.",
  " También ha estado usando su posición de poder para llevar a otros hacia adelante. En 2012, lanzó el programa de prácticas STEM de Abbott en la escuela secundaria para exponer a estudiantes de todos los orígenes a carreras tecnológicas."
  ,"RecursosFoto/116.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Paula Smith ",
  " Paula Hartley es la gerente general de los negocios de Sistemas de Misión y Rotativos de Lockheed Martin y vicepresidenta de la unidad de Soluciones Avanzadas de Productos. ",
  " Su equipo construye tecnología utilizada en comunicaciones militares, seguridad, cabinas de piloto de avión, vigilancia y armas. "
  ,"RecursosFoto/117.jpg"
);
r++;
fullData[r] = new dataBiograficos(
  " Anjul Bhambhri ",
  " Anjul Bhambhri es vicepresidenta de Cloud Platform Engineering en Adobe, donde dirige un equipo de ingeniería global de más de 300 personas. ",
  " Es responsable del servicio Cloud Platform de Adobe, que permite a los clientes de Adobe almacenar y procesar datos para ayudarles a gestionar su negocio. "
  ,"RecursosFoto/118.jpg"
);
r++;

function Datos() {
  class personas {
    //Aunque el arreglo sea unidimensional contiene datos obtenidos de una clase
    constructor(numAt, nombreC, fecha, bandera, iniciales) {
      this.numAt = numAt;
      this.nombreC = nombreC;
      this.fecha = fecha;
      this.bandera = bandera;
      this.iniciales = iniciales;
    }
    get numAtomic() {
      return this.numAt;
    }
    get nomC() {
      return this.nombreC;
    }
    get fech() {
      return this.fecha;
    }
    get nacionalidad() {
      return this.bandera;
    }
    get inic() {
      return this.iniciales;
    }
  }

  let elemento = [];
  let c = 1;
  //Datos dados de alta desde un constructor y gusrdados en un array unidimensional para la preview de la tabla
  elemento[c] = new personas(
    c,
    "Augusta de Condesa de Lovlace",
    "1815-1852",
    "Reino Unido",
    "AC"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Edith Clarke",
    "1883-1959",
    "Estados Unidos",
    "EC"
  );
  c++;
  elemento[c] = new personas(c, "Hedwig Eva ", "1914-2000", "Austria", "HE");
  c++;
  elemento[c] = new personas(
    c,
    "Betty Snyder",
    "1917-2001",
    "Estados Unidos",
    "BS"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Jean Jeannings",
    "1924-2011",
    "Estados Unidos",
    "JJ"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Kathleen McNulty",
    "1921-2006",
    "Estados Unidos",
    "KM"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Marlyn Wescoff",
    "1922-2008",
    "Estados Unidos",
    "MW"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Ruth Litchterman",
    "1924-1986",
    "Estados Unidos",
    "RL"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Frances Bilas",
    "1922-2012",
    "Estados Unidos",
    "FB"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Joan Elizabeth",
    "1917-1996",
    "Reino Unido",
    "JE"
  );
  c++;
  elemento[c] = new personas(c, "Angela Ruiz", "1895-1975", "España", "AR");
  c++;
  elemento[c] = new personas(c, "Rosa Politzer", "1905-1977", "Hungria", "RP");
  c++;
  elemento[c] = new personas(
    c,
    "Grace Murray",
    "1906-1992",
    "Estados Unidos",
    "GM"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Jean E. Sammet",
    "1928-2017",
    "Estados Unidos",
    "JE"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Karen Sparck",
    "1935-2007",
    "Estados Unidos",
    "KS"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Mary Kenneth",
    "1913-1985",
    "Estados Unidos",
    "MK"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Margaret Hamilton",
    "1936",
    "Estados Unidos",
    "MH"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Evelyn Berezin",
    "1925-2018",
    "Estados Unidos",
    "EB"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Erna Schneider",
    "1926",
    "Estados Unidos",
    "ES"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Shirley Ann Jackson",
    "1946",
    "Estados Unidos",
    "SA"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Frances Elizabeth",
    "1932-2020",
    "Estados Unidos",
    "FE"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Radia Perlman",
    "1951",
    "Estados Unidos",
    "RP"
  );
  c++;
  elemento[c] = new personas(c, "Carol Shaw", "1955", "Estados Unidos", "CS");
  c++;
  elemento[c] = new personas(
    c,
    "Jude Milhon",
    "1939-2003",
    "Estados Unidos",
    "JM"
  );
  c++;
  elemento[c] = new personas(c, "Lynn Conway", "1938", "Estados Unidos", "LC");
  c++;
  elemento[c] = new personas(c, "Stephanie Shirley", "1933", "Alemania", "SS");
  c++;
  elemento[c] = new personas(c, "Mary Allen", "1937", "Estados Unidos", "MA");
  c++;
  elemento[c] = new personas(c, "Katie Bouman", "1989", "Estados Unidos", "KB");
  c++;
  elemento[c] = new personas(c, "Marisol Alarcon", "", "Chile", "MA");
  c++;
  elemento[c] = new personas(
    c,
    "Adele Goldberg",
    "1945",
    "Estados Unidos",
    "AG"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Kathleen Booth",
    "1922-2022",
    "Reino Unidos",
    "KB"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Emily Roebling",
    "1843-1903",
    "Estados Unidos",
    "ER"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Helen Augusta",
    "1840-1922",
    "Estados Unidos",
    "HA"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Stephanie Louise",
    "1923-214",
    "Estados Unidos",
    "SL"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Katherine Coleman",
    "1918-2020",
    "Estados Unidos",
    "KC"
  );
  c++;
  elemento[c] = new personas(c, "Amy Shira", "1986", "Canada", "AS");
  c++;
  elemento[c] = new personas(c, "Kamilah Tylor", "", "Estados Unidos", "KT");
  c++;
  elemento[c] = new personas(
    c,
    "Kimberly Bryant",
    "1967",
    "Estados Unidos",
    "KB"
  );
  c++;
  elemento[c] = new personas(c, "Ruth Rivera", "1927-1959", "Mexico", "RR");
  c++;
  elemento[c] = new personas(c, "Patricia Camarena", "", "Mexico", "PC");
  c++;
  elemento[c] = new personas(
    c,
    "Evangelina Villegas",
    "1924-2017",
    "Mexico",
    "EV"
  );
  c++;
  elemento[c] = new personas(c, "Fernanda Campa", "1940-2019", "Mexico", "FC");
  c++;
  elemento[c] = new personas(
    c,
    "Yoloxochitl Bustamante",
    "1942",
    "Mexico",
    "YB"
  );
  c++;
  elemento[c] = new personas(c, "Laura Huerta", "1913-2000", "Mexico", "LH");
  c++;
  elemento[c] = new personas(c, "Maria Sevilla", "", "Mexico", "MS");
  c++;
  elemento[c] = new personas(c, "Guadalupe Vargas", "", "Mexico", "GV");
  c++;
  elemento[c] = new personas(c, "Maribel Miceli ", "", "Mexico", "MM");
  c++;
  elemento[c] = new personas(c, "Verónica Flores ", "", "Mexico", "VF");
  c++;
  elemento[c] = new personas(c, "Lorena Rojas ", "", "Mexico", "LR");
  c++;
  elemento[c] = new personas(c, " Clara O’Farrell", "", "Argentina", "CO");
  c++;
  elemento[c] = new personas(c, "María Salazar ", "", "Mexico", "MS");
  c++;
  elemento[c] = new personas(c, " Isaura Fuentes", "", "Mexico", "IF");
  c++;
  elemento[c] = new personas(c, " Paula Figueroa ", "", "Mexico", "PF");
  c++;
  elemento[c] = new personas(c, " Julie Roberge", "", "Canadiense", "JR");
  c++;
  elemento[c] = new personas(c, " Mayra Beatriz ", "", "Mexico", "MG");
  c++;
  elemento[c] = new personas(c, "Eva Ramón", "", "Mexico", "ER");
  c++;
  elemento[c] = new personas(
    c,
    "Concepción Mendizábal ",
    "Muerte 1985",
    "Mexico",
    "CM"
  );
  c++;
  elemento[c] = new personas(c, "Laura Cuevas ", "", "Mexico", "LC");
  c++;
  elemento[c] = new personas(c, " Ángela Alessio ", "", "Mexico", "AA");
  c++;
  elemento[c] = new personas(c, "Francisca Cruz ", "", "Mexico", "FC");
  c++;
  elemento[c] = new personas(c, "Dalia Carolina ", "", "Mexico", "DC");
  c++;
  elemento[c] = new personas(c, " Jenifer Avellaneda", "", "Mexico", "JA");
  c++;
  elemento[c] = new personas(c, "Alejandra Chávez ", "", "Mexico", "AC");
  c++;
  elemento[c] = new personas(c, " Roxana Morton", "", "Mexico", "RM");
  c++;
  elemento[c] = new personas(c, " Ariana Talamantes", "", "Mexico", "AT");
  c++;
  elemento[c] = new personas(c, "Alexandra Cortés", "", "Mexico", "AC");
  c++;
  elemento[c] = new personas(c, "Esperanza Romero", "", "Mexico", "ER");
  c++;
  elemento[c] = new personas(c, "Sandra Pascoe", "", "Mexico", "SP");
  c++;
  elemento[c] = new personas(c, "Carmen Félix", "", "Mexico", "CF");
  c++;
  elemento[c] = new personas(c, "Julieta Fierro ", "", "Mexico", "JF");
  c++;
  elemento[c] = new personas(c, " Diana Trujillo", "", "Colombia", "DT");
  c++;
  elemento[c] = new personas(c, "Aracely Quispe", "", "Peru", "AQ");
  c++;
  elemento[c] = new personas(c, "Bertha Jiménez", "", "Ecuador", "BJ");
  c++;
  elemento[c] = new personas(c, " Griselda Hernández", "", "Mexico", "GH");
  c++;
  elemento[c] = new personas(c, "Lesli Ortega ", "", "Mexico", "LO");
  c++;
  elemento[c] = new personas(
    c,
    "Maria das Graças ",
    "1953-Hoy",
    "Brasil",
    "MF"
  );
  c++;
  elemento[c] = new personas(
    c,
    "Luz Patricia",
    "",
    "Republica dominicana",
    "LC"
  );
  c++;
  elemento[c] = new personas(c, "Oliva González", "", "España", "LC");
  c++;
  elemento[c] = new personas(
    c,
    "Odeyda Alcántara",
    "",
    "Republica Dominicana",
    "OA"
  );
  c++;
  elemento[c] = new personas(c, "Valentina Muñoz", "", "Chile", "VM");
  c++;
  elemento[c] = new personas(
    c,
    "Idelisa Bonelly",
    "",
    "Republica dominicana",
    "IB"
  );
  c++;
  elemento[c] = new personas(c, "África Flores", "", "Guatemala", "AF");
  c++;
  elemento[c] = new personas(c, "Kathrin Barboza", "", "Bolivia", "KB");
  c++;
  elemento[c] = new personas(c, "Natasha Bloch", "", "Colombia", "AF");
  c++;
  elemento[c] = new personas(c, "Sandra López Vergès", "", "Panameña", "SL");
  c++;
  elemento[c] = new personas(c, "Ana Inés Zambrana", "", "Uruguay", "AI");
  c++;
  elemento[c] = new personas(c, "Carol Leung", "", "China", "CL");
  c++;
  elemento[c] = new personas(c, "Meredith Westafer", "", "EUA", "MW");
  c++;
  elemento[c] = new personas(c, " Tanya Lattner", "", "EUA", "TL");
  c++;
  elemento[c] = new personas(c, "Krysta Svore", "", "EUA", "KS");
  c++;
  elemento[c] = new personas(c, "Sylvia Acevedo", "", "EUA", "SA");
  c++;
  elemento[c] = new personas(c, "Erica Baker", "", "Alemana", "EB");
  c++;
  elemento[c] = new personas(c, "Wiratni Budhijanto", "", "Indonesia", "WB");
  c++;
  elemento[c] = new personas(c, "Karen Casella", "", "EUA", "KC");
  c++;
  elemento[c] = new personas(c, "Caitlin Kalinowski", "", "Alemania", "CK");
  c++;
  elemento[c] = new personas(c, "Justyna Zander", "", "Polonia", "JZ");
  c++;
  elemento[c] = new personas(c, "Judy Priest", "", "EUA", "JP");
  c++;
  elemento[c] = new personas(c, " Yael Garten", "", "EUA", "YG");
  c++;
  elemento[c] = new personas(c, "Deb Liu", "", "China", "DL");
  c++;
  elemento[c] = new personas(c, "Sophia Velastegui", "", "Corea del sur", "SV");
  c++;
  elemento[c] = new personas(c, "Li Fan", "", "Corea del sur", "LF");
  c++;
  elemento[c] = new personas(c, "Aanchal Gupta", "", "India", "AG");
  c++;
  elemento[c] = new personas(c, "Sandy Carter", "", "EUA", "SC");
  c++;
  elemento[c] = new personas(c, "Reshma Shetty", "", "Inglaterra", "RS");
  c++;
  elemento[c] = new personas(c, "Prachi Gupta", "", "India", "PG");
  c++;
  elemento[c] = new personas(c, "Julie Larson", "", "EUA", "JL");
  c++;
  elemento[c] = new personas(c, "Lily Chang", "", "China", "LC");
  c++;
  elemento[c] = new personas(c, "Renee James", "", "EUA", "RJ");
  c++;
  elemento[c] = new personas(c, "Kathy Winter", "", "EUA", "KW");
  c++;
  elemento[c] = new personas(c, "Corinne Yu", "", "Hong Kong", "CY");
  c++;
  elemento[c] = new personas(c, "Joy Chik", "", "Hong Kong", "JC");
  c++;
  elemento[c] = new personas(c, "Yanbing Li", "", "Hong Kong", "YL");
  c++;
  elemento[c] = new personas(c, " Carol Zierhoffer", "", "Alemania", "CZ");
  c++;
  elemento[c] = new personas(c, "Elissa Murphy", "", "EUA", "EM");
  c++;
  elemento[c] = new personas(c, "Noël Bakhtian", "", "Rusia", "NB");
  c++;
  elemento[c] = new personas(c, "Corlis Murray", "", "Rusia", "CM");
  c++;
  elemento[c] = new personas(c, "Paula Smith ", "", "EUA", "PS");
  c++;
  elemento[c] = new personas(c, "Anjul Bhambhri", "", "Indonesia", "AB");
  c++;

  //Impresion de datos desde el arreglo unidimensional
  for (let i = 1; i < 119; i++) {
    document.getElementById(i).innerHTML = elemento[i].numAtomic;
    document.getElementById("NombreC" + i).innerHTML = elemento[i].nomC;
    document.getElementById("Masa" + i).innerHTML = elemento[i].fech;
    document.getElementById("Bandera" + i).innerHTML = elemento[i].nacionalidad;
    document.getElementById("Na" + i).innerHTML = elemento[i].inic;
  }
}
function generalData(cookie) {
  document.getElementById("namaeCompleto").innerHTML =
    fullData[cookie].nameComplete;
  document.getElementById("bioData").innerHTML =
    fullData[cookie].dataBiographics;
  document.getElementById("rewards").innerHTML = fullData[cookie].logross;
  let ruta = fullData[cookie].photo;
  document.getElementById("img").innerHTML = '<img src="' + ruta + '">';
}

function dataRandom() {
  class datoGlobito {
    //Creamos nustros getters y setters para cada dato con su respectivo constructor
    constructor(DatoGlobito) {
      this.DatoGlobito = DatoGlobito;
    }
    get datito() {
      return this.DatoGlobito;
    }
  }
  let raD = 0;
  let randomData = [];
  randomData[raD] = new datoGlobito(
    "La palabra ingeniería proviene del latín ingenium, que significa ingenio o talento, y ingeniare, que significa diseñar o idear."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería civil es una de las disciplinas de ingeniería más antiguas, y se remonta a los tiempos de las antiguas civilizaciones egipcias y romanas."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "El primer programa de ingeniería acreditado en los Estados Unidos fue establecido en la Universidad de Norwich en 1819."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "El ingeniero civil John Smeaton es considerado el padre de la ingeniería civil moderna debido a sus innovadoras técnicas de construcción, como el uso de mortero hidráulico."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería aeroespacial es una de las disciplinas de ingeniería más complejas, ya que requiere un conocimiento profundo de la física, la mecánica y la aerodinámica."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería genética es una rama emergente de la ingeniería que utiliza técnicas de biología molecular para manipular y modificar genes en organismos vivos."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de materiales es una disciplina de ingeniería que se enfoca en el estudio de las propiedades de los materiales y su aplicación en el diseño y fabricación de dispositivos y sistemas."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería eléctrica es una de las disciplinas de ingeniería más amplias, y abarca una amplia gama de temas, desde la electrónica hasta la generación y distribución de energía eléctrica."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "El ingeniero civil y arquitecto francés Gustave Eiffel es conocido por diseñar la Torre Eiffel, una de las estructuras más icónicas del mundo."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de software es una disciplina de ingeniería que se enfoca en el diseño y desarrollo de sistemas y aplicaciones informáticas, utilizando técnicas de programación y metodologías de desarrollo de software."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería química es una de las disciplinas de ingeniería más versátiles, ya que se aplica en la fabricación de productos químicos, alimentos, medicamentos, materiales y energía."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería biomédica es una disciplina de ingeniería que se enfoca en el diseño y desarrollo de dispositivos y sistemas médicos, como prótesis, equipos de diagnóstico y terapias avanzadas."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería nuclear es una rama de la ingeniería que se enfoca en la aplicación de la energía nuclear para la producción de energía eléctrica y la investigación científica."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería ambiental es una disciplina de ingeniería que se enfoca en la protección del medio ambiente y la sostenibilidad, y aborda problemas como la gestión de residuos, la contaminación del aire y del agua, y el cambio climático."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería mecánica es una de las disciplinas de ingeniería más antiguas y amplias, y se enfoca en el diseño, fabricación y mantenimiento de sistemas mecánicos y maquinaria."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería geotécnica es una rama de la ingeniería civil que se enfoca en el comportamiento y las propiedades de los suelos y rocas, y su aplicación en la construcción de estructuras y cimentaciones."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería industrial es una disciplina de ingeniería que se enfoca en la optimización de procesos y sistemas, y aborda problemas como la eficiencia, la productividad y la seguridad en la fabricación y la industria."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de telecomunicaciones es una disciplina de ingeniería que se enfoca en el diseño y desarrollo de sistemas de comunicación, como redes de telefonía, sistemas de transmisión de datos y sistemas de televisión."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de sistemas es una disciplina de ingeniería que se enfoca en el diseño y desarrollo de sistemas complejos, y aborda problemas como la integración de tecnologías, la gestión de proyectos y la toma de decisiones."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería robótica es una rama emergente de la ingeniería que se enfoca en el diseño y desarrollo de robots y sistemas autónomos, y su aplicación en la industria, la medicina y la exploración espacial."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de petróleo es una rama de la ingeniería que se enfoca en la exploración, extracción y procesamiento de hidrocarburos, y su aplicación en la producción de energía y materiales."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería estructural es una disciplina de ingeniería que se enfoca en el diseño y análisis de estructuras, como puentes, edificios y torres, para garantizar su estabilidad, seguridad y durabilidad."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de sistemas de energía renovable es una disciplina de ingeniería que se enfoca en el diseño y desarrollo de sistemas de energía renovable, como la energía solar, eólica y geotérmica."
  );
  raD++;
  randomData[raD] = new datoGlobito(
    "La ingeniería de seguridad informática es una disciplina de ingeniería que se enfoca en la protección de sistemas informáticos y redes de comunicaciones contra amenazas externas e internas."
  );
  let max = 25;
  let min = 1;
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  alert(randomData[random].datito);
}
