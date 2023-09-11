import Experiment from '../models/Experiment'

export const initializeExperiments = async (): Promise<void> => {
  try {
    // Count Documents
    const count: number = await Experiment.estimatedDocumentCount()

    // check for existing experiments
    if (count > 0) {
      await Experiment.deleteMany()
    }

    // Create experiments
    await Promise.all([
      new Experiment({
        expNumber: 1,

        title: 'Experimento No. 1 - Atrapemos el agua',

        description:
          '¿Sabes por qué la ciencia es importante? La ciencia es como un gran detective que nos ayuda a descubrir cosas nuevas sobre el mundo que nos rodea. Aprender ciencia es divertido y te hace más inteligente. ¿Quién sabe, tal vez tú seas el próximo científico famoso que descubra algo nuevo y sorprendente sobre el mundo! Por eso te invito a que comiences a aprender con nuestro primer experimento "Atrapando el agua".',

        procedure:
          'Toma la jeringa y corre el émbolo hacia atrás. Luego, sumerge la jeringa en agua. Después, corre el émbolo hacia delante y verás burbujas, las cuales corresponden al aire atrapado que sale. Luego, corre el émbolo hacia atrás y verás cómo el agua se introduce en la jeringa debido a la succión. De esta forma, podrás atrapar un líquido.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/lwI3UhZdsuc',
          'https://youtube.com/embed/Xq4jIDCZfY0'
        ],

        thumbnail: 'images/ImagenExperimento1.png'
      }).save(),

      new Experiment({
        expNumber: 2,

        title: 'Experimento No. 2 - Tomando Muestras',

        description:
          'Tomar muestras es una de las tareas más comunes que debe desarrollar un científico, muchas veces éstas se toman de sustancias líquidas como el agua.',

        procedure:
          'No hace falta que para poder atrapar un líquido en la jeringa debas sumergirla, puedes tomar una manguera de caucho e introducir la punta de la jeringa en un extremo de esta, luego puedes introducir el otro extremo de la manguera en el líquido, si mueves el émbolo hacia delante y luego hacia atrás, verás como el líquido nuevamente llena la jeringa. En este momento estás realizando un paso importante de toda investigación "tomar muestras".',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/0EwtQ7E7ijc',
          'https://youtube.com/embed/CDcKxvJMVmY'
        ],

        thumbnail: 'images/ImagenExperimento2.png'
      }).save(),

      new Experiment({
        expNumber: 3,

        title: 'Experimento No. 3 - Tensión Superficial',
        description: '',

        procedure:
          'Tomamos una de las tapas de la caja petri, con ayuda de un clip el cual deformamos para dar forma de pie, introducimos con mucho cuidado otros clips en el agua de manera que floten (recordemos que el acero de los clips es más denso que el agua). Cuando tengamos los clips flotando, agregamos unas gotas de jabón líquido (con ayuda del gotero) y observamos que de repente los clips se hunden. Sobre la superficie del agua se forma una fuerza que trata de mantener unida a las moléculas del agua, y en lo posible evita romperse, logrando sostener cosas muy livianas, a esta fuerza se le llama tensión superficial.Pero cuando agregamos jabón, esta fuerza se reduce permitiendo que el clip se hunda.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/N4xxpDlEUjE',
          'https://youtube.com/embed/mWUozSxs82U'
        ],

        thumbnail: 'images/ImagenExperimento3.png'
      }).save(),

      new Experiment({
        expNumber: 4,

        title: 'Experimento No. 4 - El Agua que Sube',

        description: '',

        procedure:
          'Tomamos un plato plástico y dentro de él, colocamos los clips en forma de cruz, en la mitad de ellos ponemos la vela, luego con mucha delicadeza agregamos agua dentro del plato teniendo cuidado de que no se muevan los clips, encendemos la vela y colocamos el vaso plástico boca abajo sobre los clips, y nos podemos dar cuenta de que el agua asciende dentro del vaso plástico y finalmente la vela se apaga.Dentro del vaso queda atrapado oxígeno, el cual debido a la llama se quema produciendo otro gas llamado C02, éste ocupa menos volumen y por lo tanto queda un espacio disponible que se llena por el agua.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/4Ah1eAB3u1I',
          'https://youtube.com/embed/QuhwtZqj_oo'
        ],

        thumbnail: 'images/ImagenExperimento4.png'
      }).save(),

      new Experiment({
        expNumber: 5,

        title: 'Experimento No. 5 - Desviando el Agua',

        description:
          'El agua posee en su interior partículas cargadas eléctricamente, las cuales pueden hacer que un chorro de agua se desvíe.',

        procedure:
          'Toma nuevamente la barra y frótala contra un paño de seda, acércala a un chorro de agua, este debe ser muy fino, para obtenerlo, abre la llave y ciérrala lentamente hasta que se obtenga un punto en el cual el agua casi gotea. Acerca la barra de ebonita y observa cómo el chorro de agua cambia un poco su dirección. Esto se debe a que la carga eléctrica que adquiere la ebonita es del signo contrario que el de algunas partículas disueltas en el agua (iones) y la atrae, forzando al agua a cambiar de dirección.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/UpiC-pVZrS4',
          'https://youtube.com/embed/7F0TcdncCCA'
        ],

        thumbnail: 'images/ImagenExperimento5.png'
      }).save(),

      new Experiment({
        expNumber: 6,

        title: 'Experimento No. 6 - Sacando la Moneda',

        description: '',

        procedure:
          'Colocamos una pequeña cantidad de agua en el plato, e introducimos la moneda de tal forma que quede sumergida, el reto es sacar la moneda sin mojarse.Para hacer  esto colocamos  los clips dentro del platón en posición de cruz, separados de tal manera que el vaso de precipitados se pueda colocar boca abajo encima de ellos, pero antes se coloca la vela pequeña y se enciende, luego se coloca el vaso boca abajo, cubriendo la vela y verás como el agua asciende dentro del vaso desocupando el plato y dejando la moneda libre para poderla coger.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/Vqzb8AMVTcQ',
          'https://youtube.com/embed/kb_5EFrhBOY'
        ],

        thumbnail: 'images/ImagenExperimento6.png'
      }).save(),

      new Experiment({
        expNumber: 7,

        title: 'Experimento No. 7 - Capilaridad',

        description:
          'Alguna vez has visto que al agua suba por un tubo, por sí sola, seguramente no pero aunque te parezca increíble esto si sucede. Los líquidos experimentan una fuerza de ascenso por un tubo cuando este es demasiado delgado, esto se debe a una propiedad llamada tensión superficial.',

        procedure:
          'Llena el vaso plástico de agua (agrega un poco de agua coloreada para que el experimento se vea mejor), toma el tubo capilar y sumerge aproximadamente la mitad en el agua, en forma simultánea introduce el pitillo de vidrio que es más grueso, y observa cómo se forma un nivel de agua dentro de cada tubo, que están por encima del nivel del agua del vaso. Este sistema de ascenso de líquidos es el mismo que utilizan las plantas para tomar.Si observas con cuidado notarás que por el tubo más delgado (capilar), es mayor el nivel del agua. Entre más grueso el tubo menor altura alcanza el agua.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/Uh35hfwmimI',
          'https://youtube.com/embed/YHjfdBQwXcE'
        ],

        thumbnail: 'images/ImagenExperimento7.png'
      }).save(),

      new Experiment({
        expNumber: 8,

        title: 'Experimento No. 8 - Probando la Existencia del Aire',

        description:
          'El aire es una sustancia gaseosa, todas sus moléculas están libres y se mueven constantemente, además son muy pequeñas, por esto no lo podemos ver, pero si podemos probar que existe y que ocupa un espacio como todas las demás cosas.',

        procedure:
          'Toma el vaso plástico y llénalo de agua, toma el tubo de ensayo e introduce en él un trozo de papel, luego sumerge el tubo de ensayo boca abajo dentro del vaso si te es posible casi todo, ¿que crees que le va a suceder al papel? ¿se mojará?Finalmente sacamos el tubo de ensayo, extraemos el papel de su interior y observamos, se encuentra seco o húmedo?',

        images: ['images/Agua.png', 'images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/HR9EoScjd1A',
          'https://youtube.com/embed/W-loDwrtQY4'
        ],

        thumbnail: 'images/ImagenExperimento8.png'
      }).save(),

      new Experiment({
        expNumber: 9,

        title: 'Experimento No. 9 - Atrapemos el Aire',

        description: '',

        procedure:
          'Toma el globo que viene en el equipo y pídele a alguien que te ayude a inflarlo y observa con cuidado, el globo se infla porque la persona que sopla está introduciendo aire en él. Toma el globo inflado por la boca, sosteniéndolo con los dedos y sepáralos lentamente, sentirás como una corriente de aire sale de él, como si fuera viento; esto se debe a que las paredes del globo expulsan el aire con una fuerza que se llama presión.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/6ubMkdhCrtQ',
          'https://youtube.com/embed/eFsYVrCpvEI'
        ],

        thumbnail: 'images/ImagenExperimento9.png'
      }).save(),

      new Experiment({
        expNumber: 10,

        title: 'Experimento No. 10 - Desplazando Aire',

        description:
          'El aire está compuesto por nitrógeno, oxígeno, dióxido de carbono y muchos otros gases en menor proporción. Aunque no lo veamos, el aire ocupa volumen al igual que todos los gases.',

        procedure:
          'Toma el vaso plástico y llénalo de agua, luego sumerge el tubo de vidrio boca abajo dentro del vaso, tapando el extremo superior del tubo con el dedo, nuevamente el agua se desplaza debido al aire atrapado en el tubo. Quita lentamente el dedo de la parte superior del tubo y verás cómo el agua comienza a ascender, debido a que el aire puede escapar por la abertura superior y le deja espacio libre al agua. Luego coloca el dedo en la parte superior y saca el tubo. El agua queda atrapada dentro de este debido a que la presión atmosférica no la deja escapar.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/T38f4VVLTuU',
          'https://youtube.com/embed/G05luNOADMc'
        ],

        thumbnail: 'images/ImagenExperimento10.png'
      }).save(),

      new Experiment({
        expNumber: 11,

        title: 'Experimento No. 11 - Impulso del Aire',

        description: '',

        procedure:
          'Amarramos un hilo largo de una puntilla que previamente instalamos o apuntillamos en la pared, para esto necesitas ayuda de un adulto para que no te vayas a lastimar los dedos, luego de que tengas una de las dos puntas del hilo amarrada, introduce la otra dentro del pitillo plástico, y templando el hilo la amarras a otra puntilla para que te quede suspendido el hilo, ahora inflas el globo y con ayuda de la cinta adhesiva lo pegas al pitillo plástico, finalmente vas a tomar el globo por la boca (por donde se introduce el aire) y lo liberas, y observa que sucede.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/vQsi_iPm13U',
          'https://youtube.com/embed/BYoVQQ1ns7c'
        ],

        thumbnail: 'images/ImagenExperimento11.png'
      }).save(),

      new Experiment({
        expNumber: 12,

        title: 'Experimento No. 12 - Presión Atmosférica',

        description:
          'Siempre hemos hablado de que el aire a nuestro alrededor transmite una fuerza que se llama presión atmosférica, pero desde que nacemos la sentimos y estamos tan acostumbrados a ella que no notamos sus efectos en forma directa. En este experimento trataremos de mostrar una de sus consecuencias.',

        procedure:
          'Llena el tubo de ensayo con agua, hasta el borde, luego coloca un trozo de papel sobre este de tal manera que se humedezca y voltea el tubo de ensayo sosteniendo con la mano siempre el papel.Si quitas la mano, el papel no se cae y el agua se mantiene adentro.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/LXbLsbdsSHw',
          'https://youtube.com/embed/220aNPVesvs'
        ],

        thumbnail: 'images/ImagenExperimento12.png'
      }).save(),

      new Experiment({
        expNumber: 13,

        title: 'Experimento No. 13 - Principio de Bernoulli',

        description:
          'Qué niño no se ha preguntado ¿cómo vuelan los aviones? A simple vista no parece tan sencillo ya que un avión es un objeto grande y pesado, este experimento te ayudará a comprender un poco como sucede esto.',

        procedure:
          'Toma una hoja de papel entre tus dedos y déjala que descuelgue hacia abajo, luego sopla por encima de la hoja y verás como ésta se levanta. Esto se debe a que al soplar se induce una corriente de aire por encima de la hoja. El principio de Bernoulli dice que a mayor velocidad menor presión, por lo tanto la presión por encima de la hoja se hace menor que la presión por debajo, resultando una fuerza hacia arriba que la levanta.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/6pzFKvl5hOY',
          'https://youtube.com/embed/YZWQH2bk_sM'
        ],

        thumbnail: 'images/ImagenExperimento13.png'
      }).save(),

      new Experiment({
        expNumber: 14,

        title: 'Experimento No. 14 - El Aire Está en Todas Partes',

        description:
          'Cuando miras una roca parece que simplemente es roca pura y no posee nada en su interior, pero en realidad puede tener pequeñas cantidades de aire en su interior, esto sucede con muchos materiales que poseen pequeños huecos o poros, a estos materiales se les llaman porosos.',

        procedure:
          'Si tomas un material poroso, como roca o un terrón de azúcar y lo introduces dentro del vaso plástico, verás como aparecen unas pequeñas burbujas alrededor del objeto, esto se debe a que el aire está en todas partes y penetra los espacios más pequeños, este mismo sale lentamente de los poros del objeto para darle paso al líquido.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/vFe4WjR0wKY',
          'https://youtube.com/embed/j2sRyNtiaJk'
        ],

        thumbnail: 'images/ImagenExperimento14.png'
      }).save(),

      new Experiment({
        expNumber: 15,

        title: 'Experimento No. 15 - Patrones de medida',

        description:
          'Una de las labores más importantes de los científicos es medir. Para eso se necesitan de unos patrones de medida que son los utilizados para comparar magnitudes. Por ejemplo, el metro es el patrón de medida de longitud, y se compara un objeto con este, para saber cuánto mide',

        procedure:
          'Antiguamente se utilizaban patrones de medidas como la palma y el pie, vamos a tratar de reconstruir estas prácticas. Toma la regla y mide la palma de tu mano, extendiendo los dedos (midiendo desde la punta del dedo anular a la muñeca. Anota cuanto mide, ahora mide la palma de otros dos compañeros y anota cuanto miden. A la medida que acabas de tomar la vamos a llamar palma. lLas palmas tuyas y las de tus amigos son igual de grandes? ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/8_KqTAsVkuU',
          'https://youtube.com/embed/fIsnSmR17hg'
        ],

        thumbnail: 'images/ImagenExperimento15.png'
      }).save(),

      new Experiment({
        expNumber: 16,

        title: 'Experimento No. 16 - Medidas indirectas',

        description: '',

        procedure:
          'Toma la regla y mide la longitud de una hoja de papel y anota este valor. Ahora trata de medir el espesor de la hoja. Seguramente es muy delgada y no lo puedes medir con la regla. Toma un cuaderno de 80 o 100 hojas (lo importante es que sepas cuantas hojas tiene) y mide el espesor del cuaderno, toma la lectura en milímetros. El resultado que te dio, divídelo entre el número de hojas y así sabrás cuánto mide el espesor de la hoja.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/CrRvdpL6Ilg',
          'https://youtube.com/embed/2EE-NuG4bu0'
        ],

        thumbnail: 'images/ImagenExperimento16.png'
      }).save(),

      new Experiment({
        expNumber: 17,

        title: 'Experimento No. 17 - Medición de volúmen',

        description: '',

        procedure:
          'Toma la jeringa plástica y agrega un mililitro de agua a un tubo de ensayo, luego agrega otro mililitro y así sucesivamente hasta que llenes el tubo de ensayo lCuántas veces tuviste que hacerlo? Este último número te dirá cuál es el volumen del tubo de ensayo en mililitros. Ahora agrega el agua del tubo de ensayo al vaso de precipitados, y repite el procedimiento varias veces, hasta llenar el vaso de precipitados lCuántas veces lo hiciste? Multiplica las veces que vertiste agua de la jeringa al tubo, por las veces que lo hiciste del tubo al vaso y tendrás el volumen del vaso en mililitros. ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/tTMA25wMmWE',
          'https://youtube.com/embed/I50XvRCiiAI'
        ],

        thumbnail: 'images/ImagenExperimento17.png'
      }).save(),

      new Experiment({
        expNumber: 18,

        title: 'Experimento No. 18 - Densímetro',

        description:
          'Cuando un cuerpo flota dentro de un líquido, parte de sí mismo queda sumergido, que tanto se sumerge depende de que tan denso sea el líquido. ',

        procedure:
          'Toma el tubo de ensayo y coloca dentro de este la limadura de hierro (aproximadamente la cuarta parte) o puedes utilizar elementos metálicos pequeños como puntillas y tornillos. Sumerge el tubo en el vaso plástico y agrega más objetos hasta que el tubo flote por la mitad, luego coloca el tapón de caucho. Si colocas ahora el tubo en otro líquido, por ejemplo aceite de cocina notarás que se hunde más que cuando se colocó en agua lo cual indica que el aceite es menos denso. Si llegase a hundirse menos, indica que es más denso que el agua.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/_ocKYX7QGg8',
          'https://youtube.com/embed/gcEbhykhn5M'
        ],

        thumbnail: 'images/ImagenExperimento18.png'
      }).save(),

      new Experiment({
        expNumber: 19,

        title: 'Experimento No. 19 - Magnetismo',

        description:
          'Los imanes atraen a materiales ferrosos solamente (que contengan hierro), los más comunes son el hierro y el acero ',

        procedure:
          'Coloca limadura de hierro sobre una hoja de papel, ubica el imán por debajo de estos dos y deslízalo, verás cómo las limaduras se mueven de un sitio a otro siguiendo siempre al imán, esto se debe a que el magnetismo lo afecta al hierro generando una fuerza de atracción . ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/EeW1pkcbjes',
          'https://youtube.com/embed/J7ARn9bADSk'
        ],

        thumbnail: 'images/ImagenExperimento19.png'
      }).save(),

      new Experiment({
        expNumber: 20,

        title: 'Experimento No. 20 - Campos magneticos',

        description:
          'Los imanes poseen polaridad, es decir sus extremos no son iguales, uno es polo positivo y otro polo negativo. En este equipo se encuentra un imán circular.',

        procedure:
          'Coloca la limadura de hierro dentro de la caja plástica transparente (trata de que la cantidad sea pequeña y quede bien esparcida así se observa mejor el fenómeno), luego acerca el imán de tal manera que los polos se acerquen a la limadura, podrás ver como las limaduras se acercan entre sí, dando una configuración de líneas. ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/1CI2qrGyNA0',
          'https://youtube.com/embed/1Rl9icDVUA8'
        ],

        thumbnail: 'images/ImagenExperimento20.png'
      }).save(),

      new Experiment({
        expNumber: 21,

        title: 'Experimento No. 21 - Magnetismo inducido',

        description:
          'Hasta ahora hemos dicho que los imanes pueden atraer a los materiales ferrosos, estos últimos a su vez se pueden convertir parcialmente en elementos magnéticos cuando un imán está cerca. ',

        procedure:
          'coloca un poco de limadura de hierro sobre el papel y con una mano sostén un tornillo de tal manera que quede a una distancia de medio centímetro aproximadamente del hierro. Luego, con la otra mano acerca el imán a la cabeza del tornillo, ¿Qué puedes observar? ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/tfPEOySqaIg',
          'https://youtube.com/embed/LE-RyGPGxNM'
        ],

        thumbnail: 'images/ImagenExperimento21.png'
      }).save(),

      new Experiment({
        expNumber: 22,

        title: 'Experimento No. 22 - Magnetización permanente',

        description:
          'El hierro también puede adquirir una magnetización permanente si se encuentra bajo el efecto de un campo magnético durante un largo tiempo.',

        procedure:
          'Envuelve el tornillo y el imán en el papel y guárdalos en un lugar seguro por dos o tres días, luego sepáralos, toma el tornillo y colócalo sobre la limadura de hierro, ¿Qué sucede? ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/l0mB1Wy8eKA',
          'https://youtube.com/embed/OMwa_D6t2TI'
        ],

        thumbnail: 'images/ImagenExperimento22.png'
      }).save(),

      new Experiment({
        expNumber: 23,

        title: 'Experimento No. 23 - Construccion de una brújula',

        description: '',

        procedure:
          'Tomamos al alfiler, los colocamos junto con el imán y los guardamos en un sitio al menos 24 horas, luego vamos a investigar que le sucedió.Tomamos el alfiler y lo colocamos sobre un trozo de papel, luego colocamos el trozo de papel sobre agua (contenida en la caja petri) y observamos, el alfiler se orienta como lo haría una brújula ya que éste se convirtió en un imán, podemos probar sacándolo y metiéndolo varias veces en agua para estar seguros de su orientación. Si acercamos un imán externo al alfiler, se reorienta buscando alinearse con el campo magnético del imán. Con lo anterior podemos deducir que el alfiler se comporta como un imán, es decir quedo magnetizado. Así se construye una brújula. ',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/5_vKP0hAIis',
          'https://youtube.com/embed/_EuUL6t7v6U'
        ],

        thumbnail: 'images/ImagenExperimento23.png'
      }).save(),

      new Experiment({
        expNumber: 24,

        title: 'Experimento número 24. Electrostática 1',

        description:
          'Cuando un cuerpo que no es  conductor (plástico o caucho por ejemplo) se frota contra un paño de seda, las cargas eléctricas (electrones) saltan de un lado a otro quedando los objetos cargados eléctricamente y pueden atraer a otros.',

        procedure:
          'Infla el globo, amarra su extremo para que el aire no se salga y frótalo contra tu cabello o contra un trozo de lana o de seda. Luego coloca sobre una mesa unos trozos muy pequeños de papel, y acerca el globo. Los trozos de papel, saltan y se adhieren al globo, debido a que este quedó cargado eléctricamente y atrae a las cargas opuestas que están dentro del papel.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/KgdoAxkluyY',
          'https://youtube.com/embed/6NbBNPafDNQ'
        ],

        thumbnail: 'images/ImagenExperimento24.png'
      }).save(),

      new Experiment({
        expNumber: 25,

        title: 'Experimento número 25. Barra Electrostática',

        description:
          'La barra electrostática está fabricada de resina sintética, tiene la propiedad que si se frota contra una seda, lana o cabello se carga eléctricamente así como lo hacen otros materiales no conductores (plástico, caucho, etc.)',

        procedure:
          'Toma la barra y frótala contra un paño de seda, lana o cabello, luego acércala a los mismos trozos de papel que utilizaste en el experimento anterior. ¿Qué sucede? Nuevamente los trozos de papel, saltan y se adhieren a la barra, debido a que esta quedó cargada eléctricamente y atrae a las cargas opuestas que están dentro del papel.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/wqyz_vlLkPE',
          'https://youtube.com/embed/wQZtzPrMWMc'
        ],

        thumbnail: 'images/ImagenExperimento25.png'
      }).save(),

      new Experiment({
        expNumber: 26,

        title: 'Experimento número 26. Péndulo Electrostático',

        description: '',

        procedure:
          'Con ayuda de una aguja (si puedes pídele a un adulto que te colabora para evitar punzones) perfora las esferas de icopor y amárralas con hilo de tal  manera que queden separadas una distancia de 100 cm aproximadamente (cada una en un extremo del hilo).Con ayuda de algún soporte sostén el hilo desde su centro de tal forma que las esferas descuelguen y queden unidas. Infla el globo, amarra su extremo y frótalo contra tu cabello o un trozo de seda. Acerca lentamente el globo ¿Qué le sucede a las esferas?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/9cOKUWGSFlg',
          'https://youtube.com/embed/DRfxMSym99g'
        ],

        thumbnail: 'images/ImagenExperimento26.png'
      }).save(),

      new Experiment({
        expNumber: 27,

        title: 'Experimento número 27. Péndulo Extraño',

        description: '',

        procedure:
          'Toma una de las esferas de icopor y amárrala a un trozo de hilo de unos 50 cm aproximadamente, puedes hacerlo con ayuda de una aguja, luego envuelve la esfera en un poco de papel aluminio y finalmente amarra el hilo de algún punto fijo de tu casa de tal forma que la esfera quede libremente suspendida. Luego infla el globo y acércalo lentamente a la esfera ¿Qué sucede? ¿la esfera es atraída o rechazada?.Luego permite que el globo toque por un instante la esfera y observa nuevamente que sucede. ¿La esfera es atraída o rechazada?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/T3cxieIHwcA',
          'https://youtube.com/embed/znf6oqedkqc'
        ],

        thumbnail: 'images/ImagenExperimento27.png'
      }).save(),

      new Experiment({
        expNumber: 28,

        title: 'Experimento número 28. Corriente Eléctrica',

        description: '',

        procedure:
          'Tomamos el montaje de lámpara y le colocamos el bombillo, ajustándolo muy bien; al porta pilas le colocamos las dos pilas revisando que estén bien ubicadas así: tomamos el caimán, lo abrimos y lo ajustamos con cuidado en una de las terminales (tornillo) de forma que no se vaya a soltar; Imagínate que el porta pilas es un tanque de agua y los cables son tuberías, así que cuando el agua llega a la lámpara necesita volver a regresar de donde salió, entonces si el camino de la tubería no regresa a donde salió el circuito se llama Circuito Abierto ya que solo existe una conexión y el agua "imaginaria" llega solamente hasta el bombillo, y para que pueda regresar de donde salió realizamos la otra conexión y observamos lo que se produce: el bombillo se enciende, la corriente sale del porta pilas, atraviesa el cable rojo, enciende el bombillo y regresa por el contacto negro a la batería.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/GG517EvbQP4',
          'https://youtube.com/embed/AP84hksY6wU'
        ],

        thumbnail: 'images/ImagenExperimento28.png'
      }).save(),

      new Experiment({
        expNumber: 29,

        title: 'Experimento número 29. Circuito en Serie',

        description: '',

        procedure:
          'Primero tomamos una de las lámparas y nuestro juego de pilas instaladas en el portapilas, y encendemos la bombilla, observamos con atención la intensidad de la luz. Después colocamos la segunda lámpara en medio del montaje que tenemos, pero nuestro objetivo es encender las dos lámparas con la misma fuente (como sucede en nuestras casa al tener varios bombillos en diferentes partes) así que vamos a hacer lo siguiente: tomamos el primer caimán del portapilas lo conectamos a la primer lámpara, para que la corriente siga le conectamos un segundo caimán a la misma lámpara pero esta vez el otro extremo se conectara a la otra lámpara para que la corriente siga este camino que estamos creando, finalmente, para poder cerrar el circuito vamos a conectar el portapila a la segunda lámpara y observamos que sucede, los dos bombillos encienden pero con una intensidad o un brillo menor.Por qué sucede esto? porque cada pila proporciona 1.5 V para un total de 3V que es el Voltaje total, como las lámparas funcionan con 3V cada una en el momento en el que las conecto juntas en forma de Serie (porque la corriente tiene que pasar por una lámpara y luego por la otra) el voltaje se va a repartir entre las dos bombillas dejándole a cada una un voltaje de 1.5V.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/yVGRxZd_t3o',
          'https://youtube.com/embed/lHurw74hfDA'
        ],

        thumbnail: 'images/ImagenExperimento29.png'
      }).save(),

      new Experiment({
        expNumber: 30,

        title: 'Experimento número 30. Circuito en Paralelo',

        description: '',

        procedure:
          'Primero, tomamos los dos montajes de lámparas y los conectamos entre ellos, manteniendo la misma forma y sin desconectar nada, vamos a agregar a una de las lámparas un caimán del porta pilas y adicionamos la fuente conectándola a la misma lámpara y al otro borne. Si observamos con atención el recorrido de la corriente, podemos ver que sale por el primer caimán del portapilas y cuando llega a la primera lámpara se distribuye en la primera y segunda lámpara, vuelve a reunirse en el segundo caimán que se dirige hacia el portapilas.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/ChXzHFz2efc',
          'https://youtube.com/embed/S6wM5r3ddbo'
        ],

        thumbnail: 'images/ImagenExperimento30.png'
      }).save(),

      new Experiment({
        expNumber: 31,

        title: 'Experimento número 31. LED',

        description: '',

        procedure:
          'Tomamos el porta pilas y lo vamos a conectar al diodo led, que es el bombillo pequeño de color rojo, conectando los caimanes del porta pilas a los tornillos que se encuentran a lado y lado del led rojo, y observa ¿enciende? Luego vamos a intercambiar los caimas y nuevamente observamos si enciende o no.Como podemos ver en una ocasión prende y en la otra no, esto es debido a que es un diodo y solo permite el paso de la corriente en una sola dirección, con la diferencia que cuando permite su paso emite luz, de ahí deriva el nombre led (DIODO EMISOR DE LUZ) en inglés light-emitting diode.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/aIgBLtQSirM',
          'https://youtube.com/embed/ZsBt5ojVDYY'
        ],

        thumbnail: 'images/ImagenExperimento31.png'
      }).save(),

      new Experiment({
        expNumber: 32,

        title: 'Experimento número 32. Resistencia Eléctrica',

        description: '',

        procedure:
          'Tomamos el porta pilas con las pilas instaladas y lo conectamos a la lámpara, luego tomamos un cable caimán y conectamos la lámpara a uno de los extremos de una de las resistencias (hay 3 diferentes), finalmente conectamos el otro extremo de la resistencia al porta pilas y observa.La lámpara puede encender normal, con menos brillo o no encender, el resultado dependerá del valor de la resistencia.En conclusión, una resistencia es un dispositivo electrónico que limita el paso de la corriente y las hay de muchos valores unas permiten que pase poca corriente y otras que pase mucha.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/fxaimWjurCg',
          'https://youtube.com/embed/Ya7EXLwPsUI'
        ],

        thumbnail: 'images/ImagenExperimento32.png'
      }).save(),

      new Experiment({
        expNumber: 33,

        title: 'Experimento número 33. Fotocelda',

        description: '',

        procedure:
          'Tomamos el porta pilas con las pilas instaladas y lo conectamos la fotocelda (ver figura), luego conectamos la fotocelda a una de las terminales de la lámpara y la otra terminal de la lámpara se conecta al porta pilas, y observa el bombillo, ¿enciende?Colocamos el dedo sobre la fotocelda y observamos que pasa.Una fotocelda es una resistencia que cambia su valor dependiendo de si le llega más luz o no, en un caso permite el paso de la corriente y en el otro no.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/BS7h4HmOToQ',
          'https://youtube.com/embed/BS7h4HmOToQ'
        ],

        thumbnail: 'images/ImagenExperimento33.png'
      }).save(),

      new Experiment({
        expNumber: 34,

        title: 'Experimento número 34. Carrera de Latas',

        description: '',

        procedure:
          'Tomamos la lata de gaseosa y la colocamos sobre una mesa lisa con la superficie perfectamente horizontal y que no tenga obstáculos, luego frotamos el globo y lo acercamos lentamente a la lata sin tocarlo, notarás que la lata trata de acercarse al globo, en ese instante debes desplazar el globo tratándolo de alejar de la lata y notarás que ésta sigue rodando siguiendo siempre al globo.¿Qué sucede si dejas que el globo toque la lata y luego nuevamente lo acercas?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/kgNbcc0aeKM',
          'https://youtube.com/embed/LAG5NkVJOSE'
        ],

        thumbnail: 'images/ImagenExperimento34.png'
      }).save(),

      new Experiment({
        expNumber: 35,

        title: 'Experimento número 35. Disolución',

        description:
          'Muchas veces agregamos una sustancia sólida dentro de un líquido y algunas veces desaparece, en realidad sus moléculas se sueltan para esparcirse dentro del líquido, como éstas son muy pequeñas el ojo no las puede ver.',

        procedure:
          'Coloca en el tubo de ensayo aproximadamente la mitad de agua, colócalo y agrega un poco de sal y agita con el pitillo de vidrio. Verás cómo desaparece la sal, pero en realidad no lo hace. Simplemente las moléculas de la sal se descomponen en unas partículas más pequeñas llamadas iones, que se confunden con las del agua y se hacen invisibles.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/gGfss1HqvX4',
          'https://youtube.com/embed/_AknvDvd6qQ'
        ],

        thumbnail: 'images/ImagenExperimento35.png'
      }).save(),

      new Experiment({
        expNumber: 36,

        title: 'Experimento número 36. Ácidos y Bases.',

        description:
          'Siempre que escuchamos la palabra ácido, pensamos en cosas irritantes y peligrosas. No siempre es así, tanto, que dentro de nuestros alimentos básicos se encuentran muchos ácidos, en estas prácticas aprenderás a reconocerlos.',

        procedure:
          'Llena el vaso plástico de agua hasta la mitad, agrega cinco gotas de blanqueador (se lo puedes pedir a tu mamá), luego tres gotas del indicador, el agua cambia su color a púrpura debido a que se agrega una sustancia básica, ahora agrega unas gotas de jugo de limón. ¿Qué le sucede al agua?Cuando se agrega una sustancia básica, esta tiene unas partículas llamadas iones que reaccionan con el indicador, produciendo una nueva sustancia de color muy vivo, de esta manera puedes saber si un líquido es básico o no, pero si después se agrega el ácido la reacción química se regresa y el agua vuelve a su color natural.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/1kLgIuELkbo',
          'https://youtube.com/embed/rISly74dKK0'
        ],

        thumbnail: 'images/ImagenExperimento36.png'
      }).save(),

      new Experiment({
        expNumber: 37,

        title: 'Experimento número 37. Cromatografía',

        description: '',

        procedure:
          'Llena el vaso plástico de alcohol, puedes usar alcohol industrial o antiséptico, luego corta una tira de papel filtro y coloca una pequeña mancha de tinta (esfera o marcador). Coloca el agitador sobre el vaso en forma transversal, luego coloca la tira de papel sobre el agitador de tal manera que una punta quede sumergida en el alcohol. ¿Qué sucede después de varias horas?El alcohol asciende por el papel, hasta la mancha y arrastra sus componentes, de tal manera que se separan, podrás ver diferentes tonalidades de manchas, cada tono corresponde a una sustancia diferente.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/bJ72bzlgVfE',
          'https://youtube.com/embed/s20anQWE1dw'
        ],

        thumbnail: 'images/ImagenExperimento37.png'
      }).save(),

      new Experiment({
        expNumber: 38,

        title: 'Experimento número 38. Conductores de la Corriente Eléctrica',

        description: '',

        procedure:
          'Tomamos el montaje de lámpara y le ajustamos el bombillo; luego al porta pilas le colocamos las pilas, cuando esté listo vamos a utilizar los cables terminales y vamos a conectar uno de ellos en el portalámparas, si conectamos el otro caimán podremos ver que la bombilla se enciende y se cierra el circuito; si utilizamos otro cable y lo unimos a la lámpara podemos realizar la conexión entre los dos cables permitiendo que la corriente pase por el primer caimán, encienda la bombilla, pase por el segundo caimán, se trasmita por el tercer caimán y vuelva a regresar a la batería haciendo un circuito cerrado, si soltamos los dos caimanes el circuito nuevamente se encontrara abierto porque no hay paso de corriente. Ahora, vamos a utilizar diferentes materiales para poder hacer el paso de orriente entre los dos caimanes: primero vamos a utilizar un trozo de plástico y lo unimos con los dos caimanes haciendo un puente entre ellos, y observamos lo que pasa, el bombillo no enciende, lo que nos hace pensar que este material no permite el paso de la corriente así que lo llamamos un "mal conductor". Luego vamos a utilizar un elemento diferente, como unas tijeras por ejemplo, si colocamos cada caimán en la zona metálica de las tijeras veremos como el bombillo enciende, lo que nos quiere decir que este material si permite el paso de la corriente eléctrica así que lo llamamos "conductor"; podemos probar con diferentes materiales y observar cuales son buenos o malos conductores.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/dnYM2X3HSeI',
          'https://youtube.com/embed/gyof7nS7CGg'
        ],

        thumbnail: 'images/ImagenExperimento38.png'
      }).save(),

      new Experiment({
        expNumber: 39,

        title: 'Experimento número 39. Líquidos También Conducen Corriente',

        description: '',

        procedure:
          'Tomamos el montaje de lámpara que hemos realizado anteriormente y lo conectamos al porta pilas y observamos que el bombillo enciende, luego vamos a tomar un caimán y lo conectamos a la lámpara de forma que el circuito nos quede abierto (si unimos los caimanes el circuito se cierra y la bombilla enciende). Ahora vamos a tomar el vaso de precipitado con la mitad de agua y lo colocamos en medio de los dos caimanes que están entre el porta pilas y la lámpara, en los caimanes colocamos una puntilla en cada uno, y las vamos a introducir en el agua sin que se toquen las puntillas; cómo podemos ver el bombillo no se enciende, es decir que el agua no es un buen conductor.Ahora vamos a agregar poco a poco sal al agua y observamos lo que sucede a medida que aumentamos la cantidad de sal, la bombilla enciende lentamente. Convertimos el agua en un conductor de corriente debido a una reacción que se desarrolla en su interior, existen líquidos que permiten el paso de corriente y se llaman electrolítos.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/RVZMzXT0QXs',
          'https://youtube.com/embed/QKE2eDhLATA'
        ],

        thumbnail: 'images/ImagenExperimento39.png'
      }).save(),

      new Experiment({
        expNumber: 40,

        title: 'Experimento número 40. A Veces Conduce y a Veces No',

        description: '',

        procedure:
          'Realizamos el montaje para encender el bombillo que hemos realizado anteriormente y probamos que el bombillo encienda perfectamente. Ahora vamos a agregar a nuestro montaje un diodo, soltamos una de los caimanes de la lámpara y lo conectamos al diodo y el extremo libre del porta pilas lo conectamos al otro extremo del diodo. Observemos que pasa, ¿la lámpara enciende?, ahora cambiemos la posición del diodo, intercambiando los caimanes que se conectan a él, y nuevamente observamos, ¿la lámpara enciende? Como podemos ver el diodo a veces se comporta como buen conductor y a veces como mal conductor, a este tipo de materiales se les llama semiconductores, porque en ciertas condiciones permite el paso de la corriente y en otras no.Si observamos detenidamente el diodo, podremos ver que tiene una franja pequeña de color plateado que nos indica en qué dirección se dirige la corriente, es decir cuando la franja está conectada al polo positivo de las pilas (rojo), la corriente circula.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/QsxsyPg7-ws',
          'https://youtube.com/embed/HDWYHa8e9rI'
        ],

        thumbnail: 'images/ImagenExperimento40.png'
      }).save(),

      new Experiment({
        expNumber: 41,

        title: 'Experimento número 41. Flotación',

        description: '',

        procedure:
          'A veces los cuerpos son tan livianos que la fuerza de empuje del agua es suficiente para sostenerlos como en el caso de la bola de icopor, si la colocas dentro del vaso con agua, flota; pero si colocas la moneda se hunde debido a que la fuerza de empuje del agua no es suficientemente grande para sostenerla.Cuando un cuerpo flota se dice que es menos denso que el agua y cuando se hunde es más denso que el agua. Prueba con otros elementos y clasifícalos como más densos o menos densos que el agua.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/Dd-rO1BL0G8',
          'https://youtube.com/embed/BFlmBPdTa5E'
        ],

        thumbnail: 'images/ImagenExperimento41.png'
      }).save(),

      new Experiment({
        expNumber: 42,

        title: 'Experimento número 42. Estabilidad',

        description: '',

        procedure:
          'Muchas veces necesitamos que los cuerpos floten en el agua guardando cierta posición, por ejemplo los barcos siempre deben flotar con la cubierta hacia arriba. Toma el tubo de ensayo plástico vacío y colócalo en posición vertical dentro del vaso de precipitados lleno de agua, ¿logra mantener su posición vertical?, ahora llénalo de limadura de hierro, aproximadamente una cuarta parte y trata de colocarlo nuevamente en posición vertical dentro del agua ¿qué sucede?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/y2nVSxxsAXg',
          'https://youtube.com/embed/yzDv6_PEWR0'
        ],

        thumbnail: 'images/ImagenExperimento42.png'
      }).save(),

      new Experiment({
        expNumber: 43,

        title: 'Experimento número 43. Sifón',

        description: '',

        procedure:
          'Toma el vaso plástico y llénalo de agua, coloca un extremo de la manguera dentro de él, y el otro extremo a un nivel más bajo que el vaso, coloca debajo un recipiente cualquiera y aspira aire por la manguera, cuando sientas que el agua va a salir, coloca el extremo de la manguera en el tubo y verás cómo el agua pasa del vaso a la manguera. Así pasan líquidos de un recipiente a otro cuando estos no se pueden mover.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/E81kt-i0d_Q',
          'https://youtube.com/embed/FmmIHFkYLvU'
        ],

        thumbnail: 'images/ImagenExperimento43.png'
      }).save(),

      new Experiment({
        expNumber: 44,

        title: 'Experimento número 44. Prensa Hidraúlica',

        description: '',

        procedure:
          'Toma las dos jeringas vacías. Llena una jeringa de agua y vacía la otra (sin aire); luego conéctalas entre sí con ayuda de la manguera de caucho. Si presionas el pistón de la jeringa con agua, se moverá el pistón de la jeringa vacía, debido a que la presión que ejerces sobre el líquido se transmite a todos los puntos, haciendo que empuje el segundo pistón. Este es el principio de Pascal y el aparato montado se llama prensa hidráulica.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/G7hIjIKb7Zo',
          'https://youtube.com/embed/jIQvRbtF9m4'
        ],

        thumbnail: 'images/ImagenExperimento44.png'
      }).save(),

      new Experiment({
        expNumber: 45,

        title: 'Experimento número 45. Prensa Neumática',

        description: '',

        procedure:
          'Vacía las jeringas, deja una con el pistón totalmente al fondo y la otra con el pistón afuera. Conéctalas entre sí con la manguera. Presiona la que contiene aire y verás como el otro pistón se mueve hacia fuera, nuevamente se aplica el principio de Pascal pero se tiene una prensa neumática, porque en este caso el fluido utilizado es aire.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/R5gdSzlSBCU',
          'https://youtube.com/embed/nmH0WNCWWD0'
        ],

        thumbnail: 'images/ImagenExperimento45.png'
      }).save(),

      new Experiment({
        expNumber: 46,

        title: 'Experimento número 46. Caida Libre',

        description: '',

        procedure:
          'Toma la hoja de papel con una mano y con la otra el tapón y déjalas caer desde una misma altura.¿Cuál llega primero al suelo?, luego, arruga la hoja de papel y suéltala nuevamente a la vez con el tapón. ¿Qué pasa? En el segundo caso la hoja de papel cae al tiempo con el tapón, debido a que al arrugarla se elimina la resistencia que ofrece el aire a su movimiento. El principio que dice que todos los cuerpos caen a la misma velocidad independientemente de su masa fue descubierto por Galileo Galilei.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/XBU_8aAAHWc',
          'https://youtube.com/embed/Lx53RO0wJfE'
        ],

        thumbnail: 'images/ImagenExperimento46.png'
      }).save(),

      new Experiment({
        expNumber: 47,

        title: 'Experimento número 47. Ludión',

        description:
          'En este experimento fabricarás un singular aparato que sirve para poner a prueba la inteligencia de las personas al preguntarles ¿por qué?',

        procedure:
          'Llena la botella de agua hasta el borde, luego recoge una pequeña cantidad de agua en el gotero y sumérgelo en el agua, si el gotero se hunde, saca un poco de agua y prueba nuevamente hasta que flote. Luego tapa la botella con el tapón con pitillo, conecta la jeringa y el pitillo con ayuda de la manguera (en el momento de conectar la jeringa debe estar con el émbolo atrás). ¿Qué sucede si presionas la jeringa?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/9INLJ9p8HIg',
          'https://youtube.com/embed/H77DxEkgrHc'
        ],

        thumbnail: 'images/ImagenExperimento47.png'
      }).save(),

      new Experiment({
        expNumber: 48,

        title: 'Experimento número 48. Vasos Comunicantes',

        description: '',

        procedure:
          'Quítale los pistones o émbolos a las jeringas y conecta la manguera a las bocas decada una, luego coloca las jeringas en posición vertical una al lado de la otra con la boca hacia abajo. Agrega agua por una de las jeringas, esta viajará por la manguera hasta la otra jeringa y los niveles de agua se igualarán.Si mueves una de las dos jeringas hacia arriba y hacia abajo muy lentamente, ¿Qué le sucede al agua?El nivel de agua se moverá de tal forma que siempre será igual en las dos mangueras (a la misma altura), a este principio se le llaman vasos comunicantes.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/chBAwrLMToQ',
          'https://youtube.com/embed/mjudu-Ro81s'
        ],

        thumbnail: 'images/ImagenExperimento48.png'
      }).save(),

      new Experiment({
        expNumber: 49,

        title: 'Experimento número 49. Vidrio',

        description:
          'Uno de los materiales más importantes usados en el laboratorio es el vidrio, ya que es transparente, duradero y resistente. El vidrio se moldea a través del calor para obtener diferentes formas; esto lo puedes probar con el siguiente experimento.',

        procedure:
          'El vidrio es una de las materias primas más utilizadas por el hombre, tiene la propiedad de deformarse por el calor. Toma un tubo capilar y acerca un extremo a la llama, verás como esta se pone de color amarilla y el capilar se cierra debido a que el vidrio se funde. Ahora con mucho cuidado toma el tubo y coloca la llama en el centro, cuando esta se ponga amarilla podrás doblarlo.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/vDvJOB811fE',
          'https://youtube.com/embed/qHRkyZFpTlY'
        ],

        thumbnail: 'images/ImagenExperimento49.png'
      }).save(),

      new Experiment({
        expNumber: 50,

        title: 'Experimento nùmero 50. Evaporación Solar',

        description:
          'El sol es una gran fuente de energía, parte de ella nos llega en forma de calor que se puede aprovechar de muchas maneras. En este caso la usaremos para evaporar sustancias.',

        procedure:
          'Con ayuda del gotero agrega  1ml (la segunda marca de bajo hacia arriba) de agua en la caja Petri y un 1 mi de agua en el tubo de ensayo. Utiliza la pinza de madera para sostener el tubo de ensayo y dejarlo vertical, coloca ambos recipientes al sol (preferiblemente hacerlo en un día soleado) y observa cómo va evaporándose el agua. ¿Dónde desaparece primero? Seguramente desaparece primero en la caja Petri de plástico, debido que posee una mayor área de exposición. A mayor área de exposición, recibe más calor y más rápido evapora.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/cZf6jhY9mvc',
          'https://youtube.com/embed/GCIOw7Wuvmw'
        ],

        thumbnail: 'images/ImagenExperimento50.png'
      }).save(),

      new Experiment({
        expNumber: 51,

        title: 'Experimento número 51. Energía Solar',

        description: '',

        procedure:
          'El sol es una fuente inagotable de energía. Si colocamos la lupa en un día soleado sobre el papel térmico, veremos cómo se oscurece debido a la acción del calor generado por los rayos del sol que se concentran sobre su superficie. Si comenzamos a correr la lupa hacia arriba y hacia abajo hasta obtener un punto luminoso de papel, verás cómo se quema debido a que la energía que le llega es tanta, que genera la combustión. Debes tener cuidado de no tratar de hacer esto sobre tu piel, te podrías quemar.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/6BZlQbwV4Q4',
          'https://youtube.com/embed/0UQu6VFpqDM'
        ],

        thumbnail: 'images/ImagenExperimento51.png'
      }).save(),

      new Experiment({
        expNumber: 52,

        title: 'Experimento número 52. Mezclas y Soluciones',

        description: '',

        procedure:
          'Algunas veces mezclamos dos líquidos y parece que se convirtieran en uno solo, a esta mezcla se le llama solución. En un tubo de ensayo agrega un mililitro de agua y otro de alcohol y observa (usa el gotero). ¿Puedes diferenciar el alcohol del agua? Desocupa este tubo y ahora agrega un mililitro de agua y uno de aceite. ¿Puedes diferenciar a simple vista el aceite del agua?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/e5dKlGNT0dE',
          'https://youtube.com/embed/SBXklh2vvuc'
        ],

        thumbnail: 'images/ImagenExperimento52.png'
      }).save(),

      new Experiment({
        expNumber: 53,

        title: 'Experimento número 53. Separación Magnética',

        description:
          'Aprovechando la habilidad que tiene un imán de atraer materiales ferrosos, se pueden utilizar en los procesos de reciclado para separar el hierro y el acero de otros materiales.',

        procedure:
          'Coloca sobre una hoja de papel los dos componentes, hierro y aserrín y mézclalos entre sí. Luego coloca el imán por debajo del papel y deslízalo suavemente, observarás como el hierro es arrastrado pero el aserrín no. Puede suceder que un poco de aserrín quede atrapado entre las partículas de hierro, para tal fin coloca el imán nuevamente por debajo y arrástralo otra vez, así logras dejar en el camino las partículas de aserrín y logras que el hierro quede más puro.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/ShUslhEP2M8',
          'https://youtube.com/embed/YlilFsiJi08'
        ],

        thumbnail: 'images/ImagenExperimento53.png'
      }).save(),

      new Experiment({
        expNumber: 54,

        title: 'Experimento número 54. La Fase que Desaparece',

        description: '',

        procedure:
          'Procedimiento: Toma un tubo de ensayo y agrega 10 gotas de los siguientes líquidos en ese orden: agua, aceite y alcohol, notarás como aparecen tres capas bien definidas, luego toma el tubo entre los dedos (arriba y abajo, tapándolo) y agítalo vigorosamente y observa, cuantas fases aparecen después (cuenta las capas).',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/7yY9Aj5_eMs',
          'https://youtube.com/embed/sBUcjA5Ba1k'
        ],

        thumbnail: 'images/ImagenExperimento54.png'
      }).save(),

      new Experiment({
        expNumber: 55,

        title: 'Experimento número 55. Submarino de Aceite',

        description: '',

        procedure:
          'Toma un tubo de ensayo y agrega 1 gota de aceite teniendo mucho cuidado de que no pegue en el borde del tubo para que no escurra, lo que importa es que la gota llegue directamente al fondo. Luego agrega unas 20 gotas de alcohol etílico, estas si las puedes aplicar inclinando un poco el tubo para que escurra por la pared.Si agregas una gota de alcohol la gota desciende un poco, si agregamos una gota de agua, la gota de aceite asciende.Esto se debe a que la densidad del medio cambia, el alcohol es menos denso que el aceite y el agua lo es más, al agregar alcohol la densidad de la mezcla de alcohol agua desciende y viceversa.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/iGPtoy7OesI',
          'https://youtube.com/embed/M5VV38wKiLg'
        ],

        thumbnail: 'images/ImagenExperimento55.png'
      }).save(),

      new Experiment({
        expNumber: 56,

        title: 'Experimento número 56. Distancia Focal',

        description: '',

        procedure:
          'Coloca la lupa sobre un papel, si es posible a la luz del sol y comienza a correr la lupa hacia arriba y hacia abajo. Cuando se genere un punto luminoso debes medir con ayuda de la regla la distancia entre la lupa y el papel. A esta distancia se le llama distancia focal y es una propiedad muy especial de las lentes, entre menor sea la distancia focal mayor será el aumento que logras al ver a través de la lente.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/IDGAVzDivmw',
          'https://youtube.com/embed/OizzIcLbMdg'
        ],

        thumbnail: 'images/ImagenExperimento56.png'
      }).save(),

      new Experiment({
        expNumber: 57,

        title: 'Experimento número 57. Imágenes Reales',

        description:
          'Cuando vas al cine y vez una imagen sobre el telón, a esta imagen se le llama imagen real, porque se puede recoger sobre una superficie blanca, lo que no pasa con la imagen que puedes ver en el espejo.',

        procedure:
          'Utiliza una vela encendida, coloca una hoja de papel al frente de ella, si te es posible apaga la luz, ya que en la oscuridad  este experimento se puede observar mejor. Coloca la lupa entre la vela y el papel y comienza a correr esta última hacia delante y hacia atrás, hasta que se forma la imagen de la vela sobre el papel, esta imagen debe ser bien definida. La imagen que se obtiene de esta forma (recogida sobre una pantalla) se llama imagen real y es el tipo de imagen que se obtiene en el cine.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/8i1e00I71J8',
          'https://youtube.com/embed/VskWhnmqQxw'
        ],

        thumbnail: 'images/ImagenExperimento57.png'
      }).save(),

      new Experiment({
        expNumber: 58,

        title: 'Experimento número 58. Refracción',

        description:
          'La luz presenta unas propiedades que en muchos  casos nos pueden engañar. Cuando miras un objeto en el fondo de la piscina, realmente no se encuentra en la posición en que tus ojos la ven.',

        procedure:
          'Llena el vaso plástico de agua hasta la mitad, coloca la barra de ebonita dentro del vaso y obsérvala desde un costado. Podrás ver cómo la barra de ebonita aparentemente se quiebra al entrar al agua, esto se debe a un fenómeno de la luz llamado refracción que hace que la luz se desvíe cuando pasa de una sustancia a otra. Solamente es una ilusión óptica ya que si sacas la barra, esta se encuentra perfectamente recta.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/W0HSMdtzN2E',
          'https://youtube.com/embed/oG5DRmhDK3I'
        ],

        thumbnail: 'images/ImagenExperimento58.png'
      }).save(),

      new Experiment({
        expNumber: 59,

        title: 'Experimento número 59. Ilusión Óptica',

        description:
          'Este ejercicio es una ilusión óptica producida por los efectos de la refracción.',

        procedure:
          'Primero vamos a colocar el vaso sobre la moneda y verifica que puedas verla desde arriba, luego ubícate en una posición en diagonal, es decir corre un poco la cabeza hacia  atrás, ahora observamos lo que le pasa a la moneda a medida que vamos llenando el vaso con agua ¿La puedes ver? Muy seguramente no, debido a que la refracción desvía los rayos de luz que vienen desde la moneda hacia nuestro ojo, si nos ubicamos en la parte superior veremos que la moneda se encuentra aún en el mismo sitio.Ahora vamos a realizar una variación de este experimento, colocamos 1 moneda en el fondo del vaso sin agua y otra debajo del vaso, y nuevamente llenamos el vaso con agua lentamente. Observa nuevamente que sucede, una de las monedas desaparece y la otra se continua viendo, si prestamos atención nos daremos cuenta que la moneda que se encuentra debajo del vaso es la que no se ve y la que está adentro es la que sí se puede observar.',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/pQmVj2wt5CY',
          'https://youtube.com/embed/aeaCRhFlGs8'
        ],

        thumbnail: 'images/ImagenExperimento59.png'
      }).save(),

      new Experiment({
        expNumber: 60,

        title: 'Experimento número 60. Lente de Agua',

        description:
          'Las lentes no solamente se fabrican en vidrio, simplemente se necesita un material que sea transparente a la luz y se le pueda dar forma esférica. Se pueden construir lentes con plástico y también con agua, como lo verás en este experimento.',

        procedure:
          'Llena el tubo de ensayo con agua y coloca un tapón de caucho, procura que te quede en el interior la menor cantidad de aire posible, ya que aparecerá una burbuja que molesta un poco la visión. Coloca el tubo acostado sobre algún texto impreso y fíjate en las palabras que se ven a través del tubo ¿Qué les sucede?',

        images: ['images/TuboEnsayo.png', 'images/VasoPrecipitado.png'],

        videos: [
          'https://youtube.com/embed/7I4nhPmigWw',
          'https://youtube.com/embed/NC6fpMOCOpY'
        ],

        thumbnail: 'images/ImagenExperimento60.png'
      }).save()
    ])
  } catch (error) {
    console.error(error)
  }
}
