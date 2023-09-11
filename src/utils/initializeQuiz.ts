import Quiz from '../models/Quiz'

export const initializeQuiz = async (): Promise<void> => {
  try {
    const count: number = await Quiz.estimatedDocumentCount()
    if (count > 0) {
      await Quiz.deleteMany({})
    }
    await Promise.all([
      new Quiz({
        expNumber: 1,

        questions: [
          {
            questionNumber: 1,
            question:
              'Con base al experimento anterior, ¿inicialmente cuando corres el émbolo hacia atrás que sustancia entra?',
            answers: [
              {
                answerNumber: 0,
                answer: 'Agua'
              },
              {
                answerNumber: 1,
                answer: 'Aire'
              },
              {
                answerNumber: 2,
                answer: 'Vacío'
              }
            ],
            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'Después de sumergir la jeringa en el agua y empujar el émbolo hacia adelante, las burbujas que salen son de:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aire'
              },
              {
                answerNumber: 1,

                answer: 'Vacío'
              },
              {
                answerNumber: 2,

                answer: 'Agua'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'Luego, cuando corro finalmente el émbolo hacia atrás, ¿qué sustancia entra a la jeringa?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Vacío'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'Durante el proceso del experimento, la jeringa contiene:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Inicialmente Agua y despues aire'
              },
              {
                answerNumber: 1,

                answer: 'Inicialmente Aire y después aire'
              },
              {
                answerNumber: 2,

                answer: 'Inicialmente Aire y después agua'
              },
              {
                answerNumber: 3,

                answer: 'Inicialmente Agua y después agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Cuando la jeringa está llena de agua y tapas la parte inferior de la jeringa con el dedo y tratas de comprimir el émbolo que le sucede a este',

            answers: [
              {
                answerNumber: 0,

                answer: 'Baja'
              },
              {
                answerNumber: 1,

                answer: 'No baja'
              },
              {
                answerNumber: 2,

                answer: 'Baja lentamente'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 2,

        questions: [
          {
            questionNumber: 1,

            question:
              'La muestra que se va a tomar con la jeringa es una sustancia:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Solida'
              },
              {
                answerNumber: 1,

                answer: 'Liquida'
              },
              {
                answerNumber: 2,

                answer: 'Gasesosa'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: '¿Para que se deben tomar muestras?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Para hacer pruebas de laboratorio'
              },
              {
                answerNumber: 1,

                answer: 'Para ocupar el tiempo'
              },
              {
                answerNumber: 2,

                answer: 'para hacer deporte'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              '¿Que tipo de muestra se puede tomar con el procedimento usado en este experimento?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Trazo de roca del suelo'
              },
              {
                answerNumber: 1,

                answer: 'Muestra de aire de la atmosfera'
              },
              {
                answerNumber: 2,

                answer: 'Muestra de agua de un rio'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'Tomar muestras, es una tarea que hace:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un cientifico'
              },
              {
                answerNumber: 1,

                answer: 'Un deportista'
              },
              {
                answerNumber: 2,

                answer: 'Un pintor'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Cuando introduces un extremo de la manguera en el vaso con agua y mueves el émbolo hacia adelante, lo que inicialmente sale de la jeringa es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Burbujas de aire'
              },
              {
                answerNumber: 1,

                answer: 'Burbujas de agua'
              },
              {
                answerNumber: 2,

                answer: 'Burbujas de caucho'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 3,

        questions: [
          {
            questionNumber: 1,

            question: 'La sustancia que aplicas con el gotero es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Solucion de jabón'
              },
              {
                answerNumber: 2,

                answer: 'Aire'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'La sustancia que se encuentra dentro de la caja petri es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Solucion de jabón'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'Los clips estan fabricados de acero, el acero es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mas liviano que el agua'
              },
              {
                answerNumber: 1,

                answer: 'Mas pesado que el agua'
              },
              {
                answerNumber: 2,

                answer: 'Igual de pesado que el agua'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              'La fuerza que hace que el clip no se hunda en un principio se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gravedad'
              },
              {
                answerNumber: 1,

                answer: 'Tension superficial'
              },
              {
                answerNumber: 2,

                answer: 'Peso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: '¿Que efecto hace la solucion de jabon sobre el agua',

            answers: [
              {
                answerNumber: 0,

                answer: 'Ninguno'
              },
              {
                answerNumber: 1,

                answer: 'Aumenta la tension superficial'
              },
              {
                answerNumber: 2,

                answer: 'Reduce la tension superficial'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 4,

        questions: [
          {
            questionNumber: 1,

            question:
              'Cuando encendemos la vela ocurre un proceso quimico llamado:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Combustión'
              },
              {
                answerNumber: 1,

                answer: 'Evaporación'
              },
              {
                answerNumber: 2,

                answer: 'Destilación'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question:
              'Durante el proceso de combustión que le sucede al oxigeno:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se convierte en aire'
              },
              {
                answerNumber: 1,

                answer: 'Se convierte en CO2'
              },
              {
                answerNumber: 2,

                answer: 'No le ocurre nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'El CO2 que se obtiene cuando el oxigeno hace combustión, ocupa:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mas espacio que el oxigeno'
              },
              {
                answerNumber: 1,

                answer: 'Menos espacio que el oxigeno'
              },
              {
                answerNumber: 2,

                answer: 'El mismo espacio que el oxigeno'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              'Como el CO2 ocupa menos espacio que el oxigeno, el agua:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cambia de color'
              },
              {
                answerNumber: 1,

                answer: 'Sale del vaso'
              },
              {
                answerNumber: 2,

                answer: 'No le ocurre nada'
              },
              {
                answerNumber: 3,

                answer: 'Entra al vaso'
              }
            ],

            correctAnswers: 3
          },
          {
            questionNumber: 5,

            question: 'La vela se apaga por que :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se acaba la vela'
              },
              {
                answerNumber: 1,

                answer: 'Se acaba el CO2'
              },
              {
                answerNumber: 2,

                answer: 'Se acaba el oxigeno'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 5,

        questions: [
          {
            questionNumber: 1,

            question:
              'Para que la barra plastica se carge electroestaticamente, debes:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Soplarla'
              },
              {
                answerNumber: 1,

                answer: 'Frotarla'
              },
              {
                answerNumber: 2,

                answer: 'Mojarla'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'El chorro de agua de este experimento debe ser:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Grueso'
              },
              {
                answerNumber: 1,

                answer: 'Muy grueso'
              },
              {
                answerNumber: 2,

                answer: 'Muy delgado'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'Las particulas cargadas que tiene el agua se llaman:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atomos'
              },
              {
                answerNumber: 1,

                answer: 'Moleculas'
              },
              {
                answerNumber: 2,

                answer: 'Iones'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              '¿Que pasa con el chorro de agua cuando acercamos la barra cargada?',

            answers: [
              {
                answerNumber: 0,

                answer: 'No pasa nada'
              },
              {
                answerNumber: 1,

                answer: 'Se acerca a la barra'
              },
              {
                answerNumber: 2,

                answer: 'Se aleja de la barra'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Este experimento demuestra que el agua tiene:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Moleculas pesadas'
              },
              {
                answerNumber: 1,

                answer: 'Particulas cargadas electricamente'
              },
              {
                answerNumber: 2,

                answer: 'Aire en su interior'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 6,

        questions: [
          {
            questionNumber: 1,

            question: 'El reto de este experimento es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Desaparecer la moneda'
              },
              {
                answerNumber: 1,

                answer: 'Sacar la moneda sin mojarse'
              },
              {
                answerNumber: 2,

                answer: 'Mojar la moneda'
              },
              {
                answerNumber: 3,

                answer: 'derretir la moneda'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: '¿Para que colocamos los clips?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Para sostener la moneda'
              },
              {
                answerNumber: 1,

                answer: 'Para sostener la vela'
              },
              {
                answerNumber: 2,

                answer: 'Para sostener el vaso'
              },
              {
                answerNumber: 3,

                answer: 'Para sostener el plato'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: '¿Para que encendemos la vela?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Para calentar la moneda'
              },
              {
                answerNumber: 1,

                answer: 'Para evaporar el agua'
              },
              {
                answerNumber: 2,

                answer: 'Para ver mejor'
              },
              {
                answerNumber: 3,

                answer: 'Para que el oxigeno haga combustion'
              }
            ],

            correctAnswers: 3
          },
          {
            questionNumber: 4,

            question:
              'Cuando el oxigeno hace combustión, el gas que esta dentro del vaso:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Reduce su volumen'
              },
              {
                answerNumber: 1,

                answer: 'Aumenta su volumen'
              },
              {
                answerNumber: 2,

                answer: 'Mantiene su volumen igual'
              },
              {
                answerNumber: 3,

                answer: 'Se escapa del vaso'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'Que le sucede al agua dentro del vaso?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Sube'
              },
              {
                answerNumber: 1,

                answer: 'Baja'
              },
              {
                answerNumber: 2,

                answer: 'No le pasa nada'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 7,

        questions: [
          {
            questionNumber: 1,

            question:
              'El proceso por el cual un liquido ascinende por tubos muy delgados se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Capilaridad'
              },
              {
                answerNumber: 1,

                answer: 'Densidad'
              },
              {
                answerNumber: 2,

                answer: 'Evaporacion'
              },
              {
                answerNumber: 3,

                answer: 'Movimiento liquido'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Entre mas delgado sea el tubo el agua debe: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Subir menos'
              },
              {
                answerNumber: 1,

                answer: 'Subir lo mismo'
              },
              {
                answerNumber: 2,

                answer: 'Subir mas'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'El nivel del agua es mas alto en :',

            answers: [
              {
                answerNumber: 0,

                answer: 'El tubo mas grueso'
              },
              {
                answerNumber: 1,

                answer: 'el tubo mas delgado'
              },
              {
                answerNumber: 2,

                answer: 'Es igual en ambos tubos'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'Elg agua coloreada se usa para :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hacer que el agua sea mas pesada'
              },
              {
                answerNumber: 1,

                answer: 'Hacer que el agua sea mas liviana'
              },
              {
                answerNumber: 2,

                answer: 'Ver mejor el nivel del agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'El sistema de capilaridad lo usan :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Los animales para respirar'
              },
              {
                answerNumber: 1,

                answer: 'Las plantas para tomar liquidos'
              },
              {
                answerNumber: 2,

                answer: 'Las aves para volar'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 8,

        questions: [
          {
            questionNumber: 1,

            question:
              'Si separas tus manos como si fueras a dar un aplauso, en la mitad de los dos hay :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Vapor de agua'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'El aire es una sustancia :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gaseosa'
              },
              {
                answerNumber: 1,

                answer: 'Liquida'
              },
              {
                answerNumber: 2,

                answer: 'Solida'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Al terminar el experimento, el papel :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se moja'
              },
              {
                answerNumber: 1,

                answer: 'No se moja'
              },
              {
                answerNumber: 2,

                answer: 'Se quema'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'La razon por el cual el papel no se moja es  :',

            answers: [
              {
                answerNumber: 0,

                answer: 'El agua es muy pesada y no puede subir'
              },
              {
                answerNumber: 1,

                answer: 'dentro del tubo hace mucha calor'
              },
              {
                answerNumber: 2,

                answer: 'El aire no deja entrar el agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'En este experimento se demuestra que:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El aire no moja'
              },
              {
                answerNumber: 1,

                answer: 'El agua no moja'
              },
              {
                answerNumber: 2,

                answer: 'El aire ocupa un espacio'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 9,

        questions: [
          {
            questionNumber: 1,

            question: 'Si inflas el globo en su interior hay:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aire'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Saliba'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Para que el aire pueda entrar al globo este debe :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Expandirse'
              },
              {
                answerNumber: 1,

                answer: 'Encojerse'
              },
              {
                answerNumber: 2,

                answer: 'Nada'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'Si despues de haber inflado el globo le amarro la boca para que el aire no salga y lo suelto, el globo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'flota'
              },
              {
                answerNumber: 1,

                answer: 'Asciende'
              },
              {
                answerNumber: 2,

                answer: 'Cae'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'La fuerza que ejercen las paredes del globo para expulsar el aire se llama :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Presion'
              },
              {
                answerNumber: 1,

                answer: 'Tensión'
              },
              {
                answerNumber: 2,

                answer: 'Gravedad'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'Cuando estoy inflando el globo, si suelto la boca del globo el aire:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Sale'
              },
              {
                answerNumber: 1,

                answer: 'Entra'
              },
              {
                answerNumber: 2,

                answer: 'permanece quieto'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 10,

        questions: [
          {
            questionNumber: 1,

            question: 'El aire esta compuesto de:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Oxigeno y agua'
              },
              {
                answerNumber: 1,

                answer: 'Agua y nitrogeno'
              },
              {
                answerNumber: 2,

                answer: 'Oxigeno y nitrogeno'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question:
              'Cuando sumergo el tubo de vidrio con la parte superior tapada :',

            answers: [
              {
                answerNumber: 0,

                answer: 'El agua entra ocupando todo el tubo'
              },
              {
                answerNumber: 1,

                answer: 'El agua no entra'
              },
              {
                answerNumber: 2,

                answer: 'El agua entra ocupando parte del tubo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Al levantar el dedo cuando el tubo esta dentro del agua:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El agua entra y llena todo el tubo'
              },
              {
                answerNumber: 1,

                answer: 'El agua no entra'
              },
              {
                answerNumber: 2,

                answer:
                  'El agua entra e iguala el nivel dentro del tubo y el vaso'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'Al colocar el dedo por ultima vez en la parte superior del tubo y retirarlo, el agua que esta dentro dle tubo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cae'
              },
              {
                answerNumber: 1,

                answer: 'No cae'
              },
              {
                answerNumber: 2,

                answer: 'Sube mas por el tubo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Para que el agua pueda entrar al tubo se necesita :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Que el tubo este tapado en la parte superior'
              },
              {
                answerNumber: 1,

                answer: 'Que el tubo este abierto en la parte superior'
              },
              {
                answerNumber: 2,

                answer: 'Que el agua este caliente'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 11,

        questions: [
          {
            questionNumber: 1,

            question: 'Para unir el globo al pitillo plastico usamos :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hilo'
              },
              {
                answerNumber: 1,

                answer: 'Cinta'
              },
              {
                answerNumber: 2,

                answer: 'Pegante'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'Cuando inflas el globo, la sustancia que se introduce es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Sino se suelta el globo despues de inflado, el aire tiende a :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Salir'
              },
              {
                answerNumber: 1,

                answer: 'Entrar'
              },
              {
                answerNumber: 2,

                answer: 'No pasa nada'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Cuando soltamos el extremo del globo por donde soplamos, que le sucede al globo y al pitillo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se quedan quietos'
              },
              {
                answerNumber: 1,

                answer: 'Retroceden'
              },
              {
                answerNumber: 2,

                answer: 'Avanzan'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'La razón por la cual el globo avanza es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Por que el aire que sale empuja hacia adelante'
              },
              {
                answerNumber: 1,

                answer:
                  'Por que el aire dentro del globo es mas liviano que el aire externo'
              },
              {
                answerNumber: 2,

                answer: 'Porque los objetos tiende a caer cuando se sueltan'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 12,

        questions: [
          {
            questionNumber: 1,

            question: 'La presion atmosferiaca es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'La fuerza que hace el suelo hacia arriba'
              },
              {
                answerNumber: 1,

                answer: 'La fuerza con que los objetos caen'
              },
              {
                answerNumber: 2,

                answer: 'El peso del aire que esta encima de nuestro'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Para que el experimento funcione el tubo debe :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Llenarse de agua hasta la mitad'
              },
              {
                answerNumber: 1,

                answer: 'Llenarse de agua completamente'
              },
              {
                answerNumber: 2,

                answer: 'Estar vacio'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Cuando colocamos el papel sobre el tubo este debe estar en que poscion :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Vertical hacia arriba'
              },
              {
                answerNumber: 1,

                answer: 'Vertical hacia abajo'
              },
              {
                answerNumber: 2,

                answer: 'Horizontal'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Cuando quito la mano del papel, este:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cae'
              },
              {
                answerNumber: 1,

                answer: 'No cae'
              },
              {
                answerNumber: 2,

                answer: 'Se mueve hacia un lado'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'La fuerza que sostiente el agua dentro del tubo es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Peso'
              },
              {
                answerNumber: 1,

                answer: 'Densidad'
              },
              {
                answerNumber: 2,

                answer: 'Presion atmosferica'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 13,

        questions: [
          {
            questionNumber: 1,

            question: 'El principio de Bernoulli explica :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Por que caen los objetos'
              },
              {
                answerNumber: 1,

                answer: 'Por que flotan los objetos'
              },
              {
                answerNumber: 2,

                answer: 'Por que vuelan los aviones'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Para que la hoja se eleve debes:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Soplar aire por encima'
              },
              {
                answerNumber: 1,

                answer: 'Soplar aire por debajo :'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'La fuerza que hace que el papel se eleve se llama :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Presion atmosferica'
              },
              {
                answerNumber: 1,

                answer: 'Peso'
              },
              {
                answerNumber: 2,

                answer: 'Sustentacion'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'Segun el principio de Bernoulli a mayor velocidad del aire, hay :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mayor presion'
              },
              {
                answerNumber: 1,

                answer: 'Menor presion'
              },
              {
                answerNumber: 2,

                answer: 'igual presion'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'En el ala de un avion el aire tiene mayor velocidad en ',

            answers: [
              {
                answerNumber: 0,

                answer: 'La cara interior'
              },
              {
                answerNumber: 1,

                answer: 'La cara superior'
              },
              {
                answerNumber: 2,

                answer: 'Es igual en ambas caras'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 14,

        questions: [
          {
            questionNumber: 1,

            question:
              'Cuando un material tiene muchos huecos o poros, estos poros se llenan de :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Vacio'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'A los materiales que tienen muchos orificios pequeños se les llaman :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Solidos'
              },
              {
                answerNumber: 1,

                answer: 'Porosos'
              },
              {
                answerNumber: 2,

                answer: 'Gaseosos'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Cuando metemos un material poroso en agua el aire que esta en los poros tienede a:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Entrar'
              },
              {
                answerNumber: 1,

                answer: 'Se queda en el poro'
              },
              {
                answerNumber: 2,

                answer: 'Salir'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'Cual de los siguientes elementos es poroso :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Moneda'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Terron de azucar'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Cuando las burbujas de aire salen del materiaal poroso y este se encuentra en agua, las burbujas :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Suben'
              },
              {
                answerNumber: 1,

                answer: 'Bajan'
              },
              {
                answerNumber: 2,

                answer: 'Se quedan quietas'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 15,

        questions: [
          {
            questionNumber: 1,

            question:
              'Una de las labores más importantes de los cientificos es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Dibujar'
              },
              {
                answerNumber: 1,

                answer: 'Cantar'
              },
              {
                answerNumber: 2,

                answer: 'Medir'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Para hacer una medicion, lo que debemos hacer es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Restar'
              },
              {
                answerNumber: 1,

                answer: 'Comparar'
              },
              {
                answerNumber: 2,

                answer: 'Sumar'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Para comparar magnitudes necesitamos:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Patrones de medida'
              },
              {
                answerNumber: 1,

                answer: 'Manos'
              },
              {
                answerNumber: 2,

                answer: 'Luz'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'La magnitud que se mide en este experimento es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Temperatura'
              },
              {
                answerNumber: 1,

                answer: 'Longitud'
              },
              {
                answerNumber: 2,

                answer: 'Masa'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              '¿Por que la palma de la mano no es un buen patron de medida?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Por que tienen muchos dedos'
              },
              {
                answerNumber: 1,

                answer:
                  'Por que las palmas de las manos son diferentes en cadad persona'
              },
              {
                answerNumber: 2,

                answer: 'Por que algunos tienen las uñas largas '
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 16,

        questions: [
          {
            questionNumber: 1,

            question:
              'En eset experimento el elemento para hacer la medicion es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Palma de la mano'
              },
              {
                answerNumber: 1,

                answer: 'Jeringa'
              },
              {
                answerNumber: 2,

                answer: 'Regla'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question:
              'El espesor de una hoja de papel es muy dificil de medir porque:',

            answers: [
              {
                answerNumber: 0,

                answer: 'La regla es muy corta'
              },
              {
                answerNumber: 1,

                answer: 'La hoja es muy delgada'
              },
              {
                answerNumber: 2,

                answer: 'La hoja es muy gruesa'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'la distancia entre dos lineas seguidas de la regla se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Centimetro'
              },
              {
                answerNumber: 1,

                answer: 'Milimetro'
              },
              {
                answerNumber: 2,

                answer: 'Metro'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'Para medir el espesor de una hoja debes :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Tomar una sola hoja'
              },
              {
                answerNumber: 1,

                answer: 'Tomar dos hojas unidas'
              },
              {
                answerNumber: 2,

                answer: 'Tomar muchas hojas unidas'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'Para saber el espesor de una sola hoja debes:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Multiplicar la medidad por el numero de hojas'
              },
              {
                answerNumber: 1,

                answer: 'Dividir la medidda entre el numero de hojas'
              },
              {
                answerNumber: 2,

                answer: 'Sumar la Medida al numero de hojas'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 17,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento se va a medir:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El espesor'
              },
              {
                answerNumber: 1,

                answer: 'El volumen'
              },
              {
                answerNumber: 2,

                answer: 'La masa'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'La jeringa permite medir',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mililitros'
              },
              {
                answerNumber: 1,

                answer: 'Litros'
              },
              {
                answerNumber: 2,

                answer: 'Galones'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Con ayuda de la jeringa medimos el volumen de :',

            answers: [
              {
                answerNumber: 0,

                answer: 'El tubo de ensayo'
              },
              {
                answerNumber: 1,

                answer: 'El vaso de precipitado'
              },
              {
                answerNumber: 2,

                answer: 'Ambos'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Un litro tiene :',

            answers: [
              {
                answerNumber: 0,

                answer: '10 mililitros'
              },
              {
                answerNumber: 1,

                answer: '100 mililitros'
              },
              {
                answerNumber: 2,

                answer: '1000 mililitros'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Para medir el volumen del vaso de precipitado , que operación matematica debes hacer:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Suma'
              },
              {
                answerNumber: 1,

                answer: 'Resta'
              },
              {
                answerNumber: 2,

                answer: 'Multiplicaion'
              },
              {
                answerNumber: 3,

                answer: 'Division'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 18,

        questions: [
          {
            questionNumber: 1,

            question: 'El elemento fabricado en este experimento se llama :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Bascula'
              },
              {
                answerNumber: 1,

                answer: 'Dinamometro'
              },
              {
                answerNumber: 2,

                answer: 'Densimetro'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'La magnitud medida en este experimento es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Masa'
              },
              {
                answerNumber: 1,

                answer: 'Volumen'
              },
              {
                answerNumber: 2,

                answer: 'Densidad'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question:
              'El hierro metálico y otros elementos metálicos se colocan para que el tubo de ensayo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se hunda'
              },
              {
                answerNumber: 1,

                answer: 'Flote'
              },
              {
                answerNumber: 2,

                answer: 'Vuele'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: '¿Quien es mas denso?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Aceite'
              },
              {
                answerNumber: 2,

                answer: 'Aire'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Entre mas se hunde el densimetro es porque el liquido es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Más denso'
              },
              {
                answerNumber: 1,

                answer: 'Menos denso'
              },
              {
                answerNumber: 2,

                answer: 'igual de denso'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 19,

        questions: [
          {
            questionNumber: 1,

            question: 'Los imanes atraen :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Materiales electricos'
              },
              {
                answerNumber: 1,

                answer: 'Materiales solidos'
              },
              {
                answerNumber: 2,

                answer: 'Materiales ferrosos'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Un material ferroso es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aluminio'
              },
              {
                answerNumber: 1,

                answer: 'Hierro'
              },
              {
                answerNumber: 2,

                answer: 'Cobre'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'La fuerza que hace el iman sobre la limadura de hierro es de:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Repulsion'
              },
              {
                answerNumber: 1,

                answer: 'Atracción'
              },
              {
                answerNumber: 2,

                answer: 'Ninguna'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              'Cuando muevo el iman de lado a lado las limaduras de hierro:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se mueven'
              },
              {
                answerNumber: 1,

                answer: 'Saltan'
              },
              {
                answerNumber: 2,

                answer: 'No les pasa nada'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Si cambio la limadura de hierro por tierra y repito el experimento que le pasará a la tierra',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se mueve'
              },
              {
                answerNumber: 1,

                answer: 'Salta'
              },
              {
                answerNumber: 2,

                answer: 'No les pasa nada'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 20,

        questions: [
          {
            questionNumber: 1,

            question: 'Las caras de un imán son :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Iguales'
              },
              {
                answerNumber: 1,

                answer: 'Diferentes'
              },
              {
                answerNumber: 2,

                answer: 'A veces iguales y a veces diferentes'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'A esta diferencia de caras se le llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Magnetismo'
              },
              {
                answerNumber: 1,

                answer: 'Polaridad'
              },
              {
                answerNumber: 2,

                answer: 'Densidad'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'La fuerza que hace un imán se llama :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Presión'
              },
              {
                answerNumber: 1,

                answer: 'Tension superficial'
              },
              {
                answerNumber: 2,

                answer: 'Fuerza magnética'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'Para este experimento colocamos la limadura de hierro en :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una hoja de papel'
              },
              {
                answerNumber: 1,

                answer: 'sobre la mesa'
              },
              {
                answerNumber: 2,

                answer: 'La caja petri plastica'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Cuando acercas lentamente el ián a la limadura de hierro que observas:',

            answers: [
              {
                answerNumber: 0,

                answer: 'No pasa nada'
              },
              {
                answerNumber: 1,

                answer: 'Se alinean algunas limaduras de hierro'
              },
              {
                answerNumber: 2,

                answer: 'Desaparece la limadura de hierro'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 21,

        questions: [
          {
            questionNumber: 1,

            question: 'Este experimento se llama: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Inducción'
              },
              {
                answerNumber: 1,

                answer: 'Magnetismo'
              },
              {
                answerNumber: 2,

                answer: 'Magmetismo inducido'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'El tornillo se convierte parcialmente en :',

            answers: [
              {
                answerNumber: 0,

                answer: 'En un objeto pesado'
              },
              {
                answerNumber: 1,

                answer: 'En un sólido'
              },
              {
                answerNumber: 2,

                answer: 'Un imán'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'Esta propiedad se llama :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Magnetismo'
              },
              {
                answerNumber: 1,

                answer: 'Ferromagnetismo'
              },
              {
                answerNumber: 2,

                answer: 'Ferroso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'ULas limaduras de hierro se colocan :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Sobre la mesa'
              },
              {
                answerNumber: 1,

                answer: 'Sobre el papel'
              },
              {
                answerNumber: 2,

                answer: 'En la caja petri plastica'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'Si cambio el tornillo por un trozo de aluminio que pasará:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El aluminio se convierte en un imán'
              },
              {
                answerNumber: 1,

                answer: 'No pasa nada'
              },
              {
                answerNumber: 2,

                answer: 'El imán atrae al trozo de aluminio'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 22,

        questions: [
          {
            questionNumber: 1,

            question:
              'La propiedad que tiene el hierro en convertirse en imán se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Magnetismo'
              },
              {
                answerNumber: 1,

                answer: 'Ferromagnetismo'
              },
              {
                answerNumber: 2,

                answer: 'Ferroso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'Para que el hierro se convierta en imán debemos dejarlo al lado de :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un imán'
              },
              {
                answerNumber: 1,

                answer: 'Un reloj'
              },
              {
                answerNumber: 2,

                answer: 'Un chorro de agua'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'El tiempo que debo dejar el hiero con el imán es de :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Unos segundos'
              },
              {
                answerNumber: 1,

                answer: 'Unos años'
              },
              {
                answerNumber: 2,

                answer: 'Unos dias'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question:
              'Si acerco el tornillo a la limadura de hierro (antes de colocarlo con el imán), la limadura :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Salta'
              },
              {
                answerNumber: 1,

                answer: 'Se mueve'
              },
              {
                answerNumber: 2,

                answer: 'No pasa nada'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Después de dejar el tornillo varios dias con el iman y acercar el tornillo a la limadura, esta :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Salta'
              },
              {
                answerNumber: 1,

                answer: 'Se mueve'
              },
              {
                answerNumber: 2,

                answer: 'No pasa nada'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 23,

        questions: [
          {
            questionNumber: 1,

            question: 'El elemento que construimos en el experimento se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Brujula'
              },
              {
                answerNumber: 1,

                answer: 'Iman'
              },
              {
                answerNumber: 2,

                answer: 'Reloj'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'El alfiler se coloca con un imán para que:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pese menos'
              },
              {
                answerNumber: 1,

                answer: 'Se magnetise'
              },
              {
                answerNumber: 2,

                answer: 'Flote'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'El papel se usa para que el alfiler :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pese menos'
              },
              {
                answerNumber: 1,

                answer: 'Se magnetise'
              },
              {
                answerNumber: 2,

                answer: 'Flote'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'A nivel magnético la tierra se comporta como una:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gran pila'
              },
              {
                answerNumber: 1,

                answer: 'Gran iman'
              },
              {
                answerNumber: 2,

                answer: 'Gran conductor electrico'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'El movimiento del alfiler cuando se acerca a un iman es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Saltar'
              },
              {
                answerNumber: 1,

                answer: 'Hundirse'
              },
              {
                answerNumber: 2,

                answer: 'Rota alineandose con el iman'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 24,

        questions: [
          {
            questionNumber: 1,

            question:
              'Para que un cuerpo se pueda cargar eléctricamente debe ser',

            answers: [
              {
                answerNumber: 0,

                answer: 'Es igual en ambos casos'
              },
              {
                answerNumber: 1,

                answer: 'Conductor'
              },
              {
                answerNumber: 2,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'La Electrostática estudia',

            answers: [
              {
                answerNumber: 0,

                answer: 'El movimiento del papel'
              },
              {
                answerNumber: 1,

                answer: 'Los electrones en reposo'
              },
              {
                answerNumber: 2,

                answer: 'El aire dentro del globo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Para que el globo se cargue eléctricamente hay que',

            answers: [
              {
                answerNumber: 0,

                answer: 'Inflarlo'
              },
              {
                answerNumber: 1,

                answer: 'Frotarlo con otro no conductor'
              },
              {
                answerNumber: 2,

                answer: 'Soplarlo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'El papel es atraído al globo debido a',

            answers: [
              {
                answerNumber: 0,

                answer: 'El peso del aire'
              },
              {
                answerNumber: 1,

                answer: 'Las cargas eléctricas en el globo'
              },
              {
                answerNumber: 2,

                answer: 'El efecto del viento'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'Si repites el experimento, ¿con cuál de los elementos dará el mismo resultado?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Varilla de Aluminio'
              },
              {
                answerNumber: 1,

                answer: 'Moneda'
              },
              {
                answerNumber: 2,

                answer: 'Peine plástico'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 25,

        questions: [
          {
            questionNumber: 1,

            question: 'La barra electrostática está fabricada con',

            answers: [
              {
                answerNumber: 0,

                answer: 'Madera'
              },
              {
                answerNumber: 1,

                answer: 'Resina sintética'
              },
              {
                answerNumber: 2,

                answer: 'Aluminio'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'Por lo tanto, la barra electrostática es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Cuando se frota la barra, ésta',

            answers: [
              {
                answerNumber: 0,

                answer:
                  'Se carga eléctricamente, No se carga eléctricamente, Se dobla'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Cuando acercas la barra cargada eléctricamente a los trozos de papel, estos',

            answers: [
              {
                answerNumber: 0,

                answer: 'Saltan a la barra'
              },
              {
                answerNumber: 1,

                answer: 'Se quedan quietos'
              },
              {
                answerNumber: 2,

                answer: 'Salen volando'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'La parte de la ciencia que estudia este fenómeno se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mecánica'
              },
              {
                answerNumber: 1,

                answer: 'Electrostática'
              },
              {
                answerNumber: 2,

                answer: 'Magnetismo'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 26,

        questions: [
          {
            questionNumber: 1,

            question: 'Las bolas de icopor son un material',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              },
              {
                answerNumber: 2,

                answer: 'A veces conductor y a veces no conductor'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'Cuando frotamos el globo, este',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se carga eléctricamente'
              },
              {
                answerNumber: 1,

                answer: 'Se encoje'
              },
              {
                answerNumber: 2,

                answer: 'No le pasa algo'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Para que el experimento funcione las bolas deben quedar',

            answers: [
              {
                answerNumber: 0,

                answer: 'A la misma altura'
              },
              {
                answerNumber: 1,

                answer: 'A diferentes alturas'
              },
              {
                answerNumber: 2,

                answer: 'No importa la altura'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'A este péndulo se le llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mágico'
              },
              {
                answerNumber: 1,

                answer: 'Magnético'
              },
              {
                answerNumber: 2,

                answer: 'Electrostático'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'Al acercar el globo cargado a las esferas, ellas se',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atraen'
              },
              {
                answerNumber: 1,

                answer: 'Alejan'
              },
              {
                answerNumber: 2,

                answer: 'No les pasa algo'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 27,

        questions: [
          {
            questionNumber: 1,

            question: 'Para este experimento, la esfera debe estar',

            answers: [
              {
                answerNumber: 0,

                answer: 'Sin recubrir'
              },
              {
                answerNumber: 1,

                answer: 'Mojada'
              },
              {
                answerNumber: 2,

                answer: 'Recubiera de aluminio'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'El aluminio es un material',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              },
              {
                answerNumber: 2,

                answer: 'A veces conductor y a veces no conductor'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Incialmente la esfera es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atraída'
              },
              {
                answerNumber: 1,

                answer: 'Rechazada'
              },
              {
                answerNumber: 2,

                answer: 'No se mueve'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Si el globo toca la esfera y luego se acera, la esfera es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atraída'
              },
              {
                answerNumber: 1,

                answer: 'Rechazada'
              },
              {
                answerNumber: 2,

                answer: 'No se mueve'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Esto sucede porque',

            answers: [
              {
                answerNumber: 0,

                answer:
                  'Parte de la carga del globo pasa al aluminio y quedan con cargas iguales'
              },
              {
                answerNumber: 1,

                answer: 'Quedan con cargas diferentes'
              },
              {
                answerNumber: 2,

                answer: 'Entra mucho viento al salón'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 28,

        questions: [
          {
            questionNumber: 1,

            question: 'La corriente eléctrica es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Paso de electrones'
              },
              {
                answerNumber: 1,

                answer: 'Paso de agua'
              },
              {
                answerNumber: 2,

                answer: 'Una fuerza de las pilas'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'En un circuito eléctrico, quienes entregan energía son',

            answers: [
              {
                answerNumber: 0,

                answer: 'Las pilas'
              },
              {
                answerNumber: 1,

                answer: 'Los bombillos'
              },
              {
                answerNumber: 2,

                answer: 'Los cables'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'En el circuito eléctrico, quienes consumen la energía son',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pilas'
              },
              {
                answerNumber: 1,

                answer: 'Bombillos'
              },
              {
                answerNumber: 2,

                answer: 'Cables'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              'En el circuito eléctrico, quienes conducen la energía son',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pilas'
              },
              {
                answerNumber: 1,

                answer: 'Bombillos'
              },
              {
                answerNumber: 2,

                answer: 'Cables'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Si soltamos un cable, el bombillo se apaga y el circuito se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cerrado'
              },
              {
                answerNumber: 1,

                answer: 'Abierto'
              },
              {
                answerNumber: 2,

                answer: 'Medio abierto'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 29,

        questions: [
          {
            questionNumber: 1,

            question:
              'En este experimento usamos dos bombillos. En este circuito la corriente pasa por',

            answers: [
              {
                answerNumber: 0,

                answer: 'Los dos bombillos'
              },
              {
                answerNumber: 1,

                answer: 'Un bombillo'
              },
              {
                answerNumber: 2,

                answer: 'Ningún bombillo'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question:
              'Si después de armar el circuito, soltamos una de las conexiones, se apagan',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un bombillo'
              },
              {
                answerNumber: 1,

                answer: 'Los dos bombillos'
              },
              {
                answerNumber: 2,

                answer: 'Ningún bombillo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'En este experimento cada bombilla consume',

            answers: [
              {
                answerNumber: 0,

                answer: '3 V'
              },
              {
                answerNumber: 1,

                answer: '1,5 V'
              },
              {
                answerNumber: 2,

                answer: '0 V'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              'La luz que emiten los bombillos en serie, comparada con un solo bombillo es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Menor'
              },
              {
                answerNumber: 1,

                answer: 'Mayor'
              },
              {
                answerNumber: 2,

                answer: 'Igual'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'El voltaje que proporcionan las pilas es',

            answers: [
              {
                answerNumber: 0,

                answer: '3 V'
              },
              {
                answerNumber: 1,

                answer: '1,5 V'
              },
              {
                answerNumber: 2,

                answer: '0 V'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 30,

        questions: [
          {
            questionNumber: 1,

            question: 'En este circuito la corriente puede llegar por',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un camino'
              },
              {
                answerNumber: 1,

                answer: 'Dos caminos'
              },
              {
                answerNumber: 2,

                answer: 'Ningún camino'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'En este circuito las pilas aportan',

            answers: [
              {
                answerNumber: 0,

                answer: '3 V'
              },
              {
                answerNumber: 1,

                answer: '1,5 V'
              },
              {
                answerNumber: 2,

                answer: '0 V'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'En este circuito cada bombillo consume',

            answers: [
              {
                answerNumber: 0,

                answer: '3 V'
              },
              {
                answerNumber: 1,

                answer: '1,5 V'
              },
              {
                answerNumber: 2,

                answer: '0 V'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Si desconectamos uno de los cables que unen las lámparas, se apagan',

            answers: [
              {
                answerNumber: 0,

                answer: 'Dos lámparas'
              },
              {
                answerNumber: 1,

                answer: 'Una lámpara'
              },
              {
                answerNumber: 2,

                answer: 'Ninguna lámpara'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'En este experimento, la corriente que sale de la pila',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pasa por ambas lámparas'
              },
              {
                answerNumber: 1,

                answer: 'Se reparte y cada parte pasa por una lámpara'
              },
              {
                answerNumber: 2,

                answer: 'No hay corriente'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 31,

        questions: [
          {
            questionNumber: 1,

            question: 'El dispositivo que emite luz se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'LED'
              },
              {
                answerNumber: 1,

                answer: 'Bombillo'
              },
              {
                answerNumber: 2,

                answer: 'Pila'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Cuando cambiamos las conexiones de la pila el LED',

            answers: [
              {
                answerNumber: 0,

                answer: 'Siempre enciende'
              },
              {
                answerNumber: 1,

                answer: 'En una posición enciende y en la otra no'
              },
              {
                answerNumber: 2,

                answer: 'Nunca enciende'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'La sigla LED traduce',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lámpara especial divergente'
              },
              {
                answerNumber: 1,

                answer: 'Luz emitida diariamente'
              },
              {
                answerNumber: 2,

                answer: 'Diodo emisor de luz'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'En este circuito quien aporta la energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pilas'
              },
              {
                answerNumber: 1,

                answer: 'LED'
              },
              {
                answerNumber: 2,

                answer: 'Cables'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'En este circuito quien consume energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pilas'
              },
              {
                answerNumber: 1,

                answer: 'LED'
              },
              {
                answerNumber: 2,

                answer: 'Cables'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 32,

        questions: [
          {
            questionNumber: 1,

            question:
              'Los dispositivos utilizados en este exaperimento se llaman',

            answers: [
              {
                answerNumber: 0,

                answer: 'Fotocelda'
              },
              {
                answerNumber: 1,

                answer: 'LED'
              },
              {
                answerNumber: 2,

                answer: 'Resistencia'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'La Resistencia es un dispositivo que',

            answers: [
              {
                answerNumber: 0,

                answer: 'Genera energía'
              },
              {
                answerNumber: 1,

                answer: 'Limita la corriente eléctrica'
              },
              {
                answerNumber: 2,

                answer: 'Enciende lámparas'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Si cambio la resistencia, la lámpara',

            answers: [
              {
                answerNumber: 0,

                answer: 'Siempre ilumina igual'
              },
              {
                answerNumber: 1,

                answer: 'Cambia la intensidad del brillo'
              },
              {
                answerNumber: 2,

                answer: 'Nunca enciende'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'En este experimento quien aporta energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lámpara'
              },
              {
                answerNumber: 1,

                answer: 'Pila'
              },
              {
                answerNumber: 2,

                answer: 'Resistencia'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'En este experimento quien consume energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lámpara y resistencia'
              },
              {
                answerNumber: 1,

                answer: 'Pilas'
              },
              {
                answerNumber: 2,

                answer: 'Cables'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 33,

        questions: [
          {
            questionNumber: 1,

            question: 'El dispositivo usado en este experimento es',

            answers: [
              {
                answerNumber: 0,

                answer: 'LED'
              },
              {
                answerNumber: 1,

                answer: 'Resistencia'
              },
              {
                answerNumber: 2,

                answer: 'Fotocelda'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'La fotocelda reacciona ante',

            answers: [
              {
                answerNumber: 0,

                answer: 'Luz'
              },
              {
                answerNumber: 1,

                answer: 'Viento'
              },
              {
                answerNumber: 2,

                answer: 'Frío'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'El LED enciende cuando la fotocelda',

            answers: [
              {
                answerNumber: 0,

                answer: 'Tiene un dedo encima'
              },
              {
                answerNumber: 1,

                answer: 'No tiene algo encima'
              },
              {
                answerNumber: 2,

                answer: 'Nunca'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'En este expeirmento quien aporta la energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pila'
              },
              {
                answerNumber: 1,

                answer: 'LED'
              },
              {
                answerNumber: 2,

                answer: 'Fotocelda'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'En este experimento quien consume energía es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pila'
              },
              {
                answerNumber: 1,

                answer: 'LED'
              },
              {
                answerNumber: 2,

                answer: 'Fotocelda'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 34,

        questions: [
          {
            questionNumber: 1,

            question: 'La lat de gaseosa esta hecha de un material',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Cuando se frota el globo este:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se descarga electricamente'
              },
              {
                answerNumber: 1,

                answer: 'Se carga electricamente'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Al acercar el globo a la lata, ¿que le sucede a la lata?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se aleja del globo'
              },
              {
                answerNumber: 1,

                answer: 'Se acerca al globo'
              },
              {
                answerNumber: 2,

                answer: 'No pasa nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'Para que la lata haga una carrera debemos: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Alejar el globo'
              },
              {
                answerNumber: 1,

                answer: 'Dejar el globo quieto'
              },
              {
                answerNumber: 2,

                answer: 'Acercar el globo a la lata'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Si dejas que el globo toque la lata y luego acercas el globo, la lata:',

            answers: [
              {
                answerNumber: 0,

                answer: 'No hace nada'
              },
              {
                answerNumber: 1,

                answer: 'Se acerca'
              },
              {
                answerNumber: 2,

                answer: 'Se aleja'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 35,

        questions: [
          {
            questionNumber: 1,

            question:
              'Cuando las moleculas de un solido desaparecen en un liquido se llama: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agitacion'
              },
              {
                answerNumber: 1,

                answer: 'Evaporacion'
              },
              {
                answerNumber: 2,

                answer: 'Disolucion'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Cuando agregas la sal en el agua y agitas, la sal:',

            answers: [
              {
                answerNumber: 0,

                answer: 'No le pasa nada'
              },
              {
                answerNumber: 1,

                answer: 'Desaparece'
              },
              {
                answerNumber: 2,

                answer: 'Se evapora'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Las particulas en las que descompone la sal se llaman',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atomos'
              },
              {
                answerNumber: 1,

                answer: 'Iones'
              },
              {
                answerNumber: 2,

                answer: 'Moleculas'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'Si probamos ahora con arena que sucede?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Desaparece'
              },
              {
                answerNumber: 1,

                answer: 'No desaparece'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Por lo tanto la arena es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Soluble'
              },
              {
                answerNumber: 1,

                answer: 'Insoluble'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 36,

        questions: [
          {
            questionNumber: 1,

            question: 'Para detectar el ácido se usa:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Indicador'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'Cuando se agrega el indicador el agua con blanqueador esta toma color:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Incolora'
              },
              {
                answerNumber: 1,

                answer: 'Blanca'
              },
              {
                answerNumber: 2,

                answer: 'Purpura'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'El color purpura debido a que la sustancia es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Acida'
              },
              {
                answerNumber: 1,

                answer: 'Neutra'
              },
              {
                answerNumber: 2,

                answer: 'Basica'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'El jugo de limon es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Acido'
              },
              {
                answerNumber: 1,

                answer: 'Neutro'
              },
              {
                answerNumber: 2,

                answer: 'Basico'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Al agregar el jugo de limon el agua se torna:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Incolora'
              },
              {
                answerNumber: 1,

                answer: 'Blanca'
              },
              {
                answerNumber: 2,

                answer: 'Purpura'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 37,

        questions: [
          {
            questionNumber: 1,

            question: 'El papel que se usa en esta practica es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Papel aluminio'
              },
              {
                answerNumber: 1,

                answer: 'Papel filtro'
              },
              {
                answerNumber: 2,

                answer: 'Papel termico'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'El liquido que se agrega en el vaso es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Alcohol'
              },
              {
                answerNumber: 2,

                answer: 'Agua con alcohol'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'El papel debe :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Tocar el alcohol'
              },
              {
                answerNumber: 1,

                answer: 'No tocar el alcohol'
              },
              {
                answerNumber: 2,

                answer: 'Quedar sumergido en el alcohol'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'La mancha en el papel filtro es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lapiz'
              },
              {
                answerNumber: 1,

                answer: 'Tiza'
              },
              {
                answerNumber: 2,

                answer: 'Tinta'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'Despues de un tiempo los componentes de la tinta',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se separan'
              },
              {
                answerNumber: 1,

                answer: 'Se mezclan'
              },
              {
                answerNumber: 2,

                answer: 'No les pasa nada'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 38,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento se estudia:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El funcionamiento de la pila'
              },
              {
                answerNumber: 1,

                answer: 'El funcionamiento del bombillo'
              },
              {
                answerNumber: 2,

                answer: 'Los conductores electricos'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Para que ele bombillo encienda debe haber:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Paso de corriente'
              },
              {
                answerNumber: 1,

                answer: 'Interrupcion de corriente'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'El trozo de plastico es :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'Poco conductor'
              },
              {
                answerNumber: 2,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'Las tijeras u otro elemento metálico son:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'Poco conductor'
              },
              {
                answerNumber: 2,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Al material que permite el paso de la corriente electrica se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'Poco conductor'
              },
              {
                answerNumber: 2,

                answer: 'No conductor'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 39,

        questions: [
          {
            questionNumber: 1,

            question:
              'En este experimento se estudia la conductividad electrica en:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Liquidos'
              },
              {
                answerNumber: 1,

                answer: 'Solidos'
              },
              {
                answerNumber: 2,

                answer: 'Gases'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'El agua pura es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              },
              {
                answerNumber: 2,

                answer: 'Poco conductor'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'A medida que se agrega mas sal le bombillo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Tiene la misma luminosidad'
              },
              {
                answerNumber: 1,

                answer: 'Disminuye la luminosidad'
              },
              {
                answerNumber: 2,

                answer: 'Aumenta la luminosidad'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'Si se tocan las puntillas el bombillo :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Enciende'
              },
              {
                answerNumber: 1,

                answer: 'No enciende'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              'Los liquidos que permiten el paso de corriente se llaman',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductores'
              },
              {
                answerNumber: 1,

                answer: 'Electrolitos'
              },
              {
                answerNumber: 2,

                answer: 'No electrolitos'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 40,

        questions: [
          {
            questionNumber: 1,

            question: 'El componente que se estudia en este experimento es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Diodo'
              },
              {
                answerNumber: 1,

                answer: 'Bombillo'
              },
              {
                answerNumber: 2,

                answer: 'Pila'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'El diodo es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Conductor'
              },
              {
                answerNumber: 1,

                answer: 'No conductor'
              },
              {
                answerNumber: 2,

                answer: 'Semiconductor'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question:
              'Para que el diodo permita el paso de la corriente la franja plateada debe estar conectada a:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Positivo'
              },
              {
                answerNumber: 1,

                answer: 'Negativa'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Un semiconductor es un elemento que :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Siempre conduce'
              },
              {
                answerNumber: 1,

                answer: 'Nunca conduce'
              },
              {
                answerNumber: 2,

                answer: 'A veces conduce y otras no conduce'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'Si la lampara no enciende debemos',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cambiar la posicion de las pilas'
              },
              {
                answerNumber: 1,

                answer: 'Cambiar la posición de los caimanes en el diodo'
              },
              {
                answerNumber: 2,

                answer: 'Usar otra bombilla'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 41,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento se estudia la fuerza de: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'La gravedad'
              },
              {
                answerNumber: 1,

                answer: 'La flotacion'
              },
              {
                answerNumber: 2,

                answer: 'El peso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'Cuando un cuerpo flota se dice que respecto al agua es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mas denso'
              },
              {
                answerNumber: 1,

                answer: 'Menos denso'
              },
              {
                answerNumber: 2,

                answer: 'Igual de denso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Cuando un cuerpo se hunde se dice que respecto al agua es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Mas denso'
              },
              {
                answerNumber: 1,

                answer: 'Menos denso'
              },
              {
                answerNumber: 2,

                answer: 'Igual de denso'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Cual de los siguientes elementos es menos denso que el agua',

            answers: [
              {
                answerNumber: 0,

                answer: 'Moneda'
              },
              {
                answerNumber: 1,

                answer: 'Tapón de caucho'
              },
              {
                answerNumber: 2,

                answer: 'Bola de icopor'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'La fuerza hace el agua sobre un cuerpo que se encuentra total o parcialmente sumergido se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Empuje'
              },
              {
                answerNumber: 1,

                answer: 'Flotacion'
              },
              {
                answerNumber: 2,

                answer: 'Peso'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 42,

        questions: [
          {
            questionNumber: 1,

            question: 'Los barcos deben flotar con: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'La cubierta hacia arriba'
              },
              {
                answerNumber: 1,

                answer: 'La cubierta hacia abajo'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question:
              'Un barco es de metal y el metal es mas denso que el agua, la razon por la que no se hunde es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Que es de metal macizo'
              },
              {
                answerNumber: 1,

                answer: 'Que en el interior hay aire'
              },
              {
                answerNumber: 2,

                answer: 'Que en el interior hay agua'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'Para que un barco sea estable el mayor peso debe estar concentrado en:',

            answers: [
              {
                answerNumber: 0,

                answer: 'La parte sumergida'
              },
              {
                answerNumber: 1,

                answer: 'La parte no sumergida'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'La limadura de hierro sirve para:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hacer el sistema mas liviano'
              },
              {
                answerNumber: 1,

                answer: 'Hacer el sistema más pesado'
              },
              {
                answerNumber: 2,

                answer: 'Hacer que el peso se concentre en la parte inferior'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'Si cambiamos el agua por aceite los resultados seran:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Iguales'
              },
              {
                answerNumber: 1,

                answer: 'Diferentes'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 43,

        questions: [
          {
            questionNumber: 1,

            question:
              'Para que el experimento funcione, el vaso plástico debe estar: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Por encima del recipiente receptor'
              },
              {
                answerNumber: 1,

                answer: 'Por debajo del recipiente receptor'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Para que el experimento funcione la manguera debe ser:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gruesa'
              },
              {
                answerNumber: 1,

                answer: 'Delgada'
              },
              {
                answerNumber: 2,

                answer: 'No importa'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'El objetivo es:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pasar el agua de un lado a otro'
              },
              {
                answerNumber: 1,

                answer: 'Llenar la manguera'
              },
              {
                answerNumber: 2,

                answer: 'llenar el vaso plastico'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Al principio el agua asciende debido a :',

            answers: [
              {
                answerNumber: 0,

                answer: 'El peso del agua'
              },
              {
                answerNumber: 1,

                answer: 'El peso del aire'
              },
              {
                answerNumber: 2,

                answer:
                  'En la parte superior de la manguera se forma un vaio que se debe llenar'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'A este mecanismo se le llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Elevador de agua'
              },
              {
                answerNumber: 1,

                answer: 'Sifón'
              },
              {
                answerNumber: 2,

                answer: 'Desague'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 44,

        questions: [
          {
            questionNumber: 1,

            question: 'Para armar la prensa las jeringas deben estar: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una con agua y la otra vacia'
              },
              {
                answerNumber: 1,

                answer: 'Las dos con agua'
              },
              {
                answerNumber: 2,

                answer: 'Las dos vacias'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'El principio que se usa en este experimento se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Principio de Arquimedes'
              },
              {
                answerNumber: 1,

                answer: 'Principio de Pascal'
              },
              {
                answerNumber: 2,

                answer: 'Principio de Prensa hidraulica'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Para accionar la prensa debes presionar la jeringa:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Que tiene agua'
              },
              {
                answerNumber: 1,

                answer: 'Que está vacia'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Para que la prensa se llame hidraulica el fluido debe ser :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aire'
              },
              {
                answerNumber: 1,

                answer: 'Vacio'
              },
              {
                answerNumber: 2,

                answer: 'Agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'La fuerza que actua en este experimento se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gravedad'
              },
              {
                answerNumber: 1,

                answer: 'Presion'
              },
              {
                answerNumber: 2,

                answer: 'Peso'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 45,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento el fluido que se usa es: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aire'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Vacio'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Para que la prensa se llame neumática debe usar:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aire'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Vacio'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question:
              'El principio que se aplica en este experimento es el de:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Pascal'
              },
              {
                answerNumber: 1,

                answer: 'Arquimedes'
              },
              {
                answerNumber: 2,

                answer: 'Bernoulli'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Cuando se presiona una de las jeringas las otras:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se encojen'
              },
              {
                answerNumber: 1,

                answer: 'Se expanden'
              },
              {
                answerNumber: 2,

                answer: 'No pasa nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'El dispositivo neumático que se construye se llama:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Gato'
              },
              {
                answerNumber: 1,

                answer: 'Elevador'
              },
              {
                answerNumber: 2,

                answer: 'Prensa'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 46,

        questions: [
          {
            questionNumber: 1,

            question: 'Al lanzar por primera vez la hoja esta debe estar: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lisa'
              },
              {
                answerNumber: 1,

                answer: 'Arrugada'
              },
              {
                answerNumber: 2,

                answer: 'Doblada'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Cuando se sueltan la hoja y el tapón deben estar :',

            answers: [
              {
                answerNumber: 0,

                answer: 'La hoja mas alto'
              },
              {
                answerNumber: 1,

                answer: 'El tapon mas alto'
              },
              {
                answerNumber: 2,

                answer: 'A la misma altura'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question:
              'Cuando se suelta por primera vez el tapon y la hoja, llega primero al suelo:',

            answers: [
              {
                answerNumber: 0,

                answer: 'El tapon'
              },
              {
                answerNumber: 1,

                answer: 'La hoja'
              },
              {
                answerNumber: 2,

                answer: 'Llegan igual'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'En la segunada parte la hoja debe estar:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Lisa'
              },
              {
                answerNumber: 1,

                answer: 'Arrugada'
              },
              {
                answerNumber: 2,

                answer: 'Doblada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'Cuando se sueltan los dos objetos la segunda vez, llega primero:',

            answers: [
              {
                answerNumber: 0,

                answer: 'La hoja'
              },
              {
                answerNumber: 1,

                answer: 'El tapón'
              },
              {
                answerNumber: 2,

                answer: 'Llegan igual'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 47,

        questions: [
          {
            questionNumber: 1,

            question:
              'El dispositivo construido en este experimento se llama: ',

            answers: [
              {
                answerNumber: 0,

                answer: 'Ludión'
              },
              {
                answerNumber: 1,

                answer: 'Submarino'
              },
              {
                answerNumber: 2,

                answer: 'Gotero'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Cuando se presiona la jeringa el gotero :',

            answers: [
              {
                answerNumber: 0,

                answer: 'Asciende'
              },
              {
                answerNumber: 1,

                answer: 'Desciende'
              },
              {
                answerNumber: 2,

                answer: 'No le pasa nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'Cuando se deja de presionar la jeringa el gotero:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Asciende'
              },
              {
                answerNumber: 1,

                answer: 'Desciende'
              },
              {
                answerNumber: 2,

                answer: 'No le pasa nada'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              'Cuando se comprime la jeringa el aire dentro del gotero:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se expande'
              },
              {
                answerNumber: 1,

                answer: 'Se comprime'
              },
              {
                answerNumber: 2,

                answer: 'No le pasa nada'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Este dispositivo lo puedes comparar con:',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un globo'
              },
              {
                answerNumber: 1,

                answer: 'Un avion'
              },
              {
                answerNumber: 2,

                answer: 'Un submarino'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 48,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento las jeringas deben estar',

            answers: [
              {
                answerNumber: 0,

                answer: 'Con pistón'
              },
              {
                answerNumber: 1,

                answer: 'Sin pistón'
              },
              {
                answerNumber: 2,

                answer: 'Una con pistón y la otra sin pistón'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'El nivel de agua en las dos jeringas es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Igual'
              },
              {
                answerNumber: 1,

                answer: 'Diferente'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'Si se mueve una de las dos jeringas, el nivel de agua en las jeringas es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Igual'
              },
              {
                answerNumber: 1,

                answer: 'Diferente'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Este principio se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Prensa hidráulica'
              },
              {
                answerNumber: 1,

                answer: 'Prensa neumática'
              },
              {
                answerNumber: 2,

                answer: 'Vasos comunicantes'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'El fluido utilizado en este experimento es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Aire'
              },
              {
                answerNumber: 2,

                answer: 'Vacío'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 49,

        questions: [
          {
            questionNumber: 1,

            question: 'El vidrio se moldea a través de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Frío'
              },
              {
                answerNumber: 1,

                answer: 'Calor'
              },
              {
                answerNumber: 2,

                answer: 'Presión'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'En este experimento el vidrio se deforma con',

            answers: [
              {
                answerNumber: 0,

                answer: 'Calor'
              },
              {
                answerNumber: 1,

                answer: 'Frío'
              },
              {
                answerNumber: 2,

                answer: 'Presión'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Si se coloca la llama en un extremo de capilar, este se',

            answers: [
              {
                answerNumber: 0,

                answer: 'Dobla'
              },
              {
                answerNumber: 1,

                answer: 'Cierra'
              },
              {
                answerNumber: 2,

                answer: 'Rompe'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'Si se coloca la llama en la mitad del capilar, este',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se dobla'
              },
              {
                answerNumber: 1,

                answer: 'Se cierra'
              },
              {
                answerNumber: 2,

                answer: 'Se rompe'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'Cuando el vidrio se calienta se vuelve',

            answers: [
              {
                answerNumber: 0,

                answer: 'Flexible'
              },
              {
                answerNumber: 1,

                answer: 'Líquido'
              },
              {
                answerNumber: 2,

                answer: 'Más pesado'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 50,

        questions: [
          {
            questionNumber: 1,

            question: 'La energía que nos llega del sol nos llega en forma de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Presión'
              },
              {
                answerNumber: 1,

                answer: 'Calor'
              },
              {
                answerNumber: 2,

                answer: 'Energía eléctrica'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'En este experimento usamos el calor del sol para',

            answers: [
              {
                answerNumber: 0,

                answer: 'Calentar el tubo de ensayo'
              },
              {
                answerNumber: 1,

                answer: 'Calentar la caja de petri'
              },
              {
                answerNumber: 2,

                answer: 'Evaporar agua'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question:
              'Los volúmenes de agua aplicados al tubo de ensayo y a la caja de petri son',

            answers: [
              {
                answerNumber: 0,

                answer: 'Iguales'
              },
              {
                answerNumber: 1,

                answer: 'Diferentes'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: '¿Dónde se evapora primero el agua?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Tubo de ensayo'
              },
              {
                answerNumber: 1,

                answer: 'Caja de petri'
              },
              {
                answerNumber: 2,

                answer: 'Se evaporan al mismo tiempo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Se evapora primero en la caja de petri porque',

            answers: [
              {
                answerNumber: 0,

                answer: 'Es más grande'
              },
              {
                answerNumber: 1,

                answer: 'Tiene mayor área de exposición'
              },
              {
                answerNumber: 2,

                answer: 'Es plástica'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 51,

        questions: [
          {
            questionNumber: 1,

            question: 'En este experimento usamos la energía',

            answers: [
              {
                answerNumber: 0,

                answer: 'Eólica'
              },
              {
                answerNumber: 1,

                answer: 'Hidráulica'
              },
              {
                answerNumber: 2,

                answer: 'Solar'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: 'Al colocar la lupa sobre el papel térmico, este se',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aclara'
              },
              {
                answerNumber: 1,

                answer: 'Oscurece'
              },
              {
                answerNumber: 2,

                answer: 'No pasa algo'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'La lupa se encarga de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Concentrar los rayos del sol'
              },
              {
                answerNumber: 1,

                answer: 'Aumentar la temperatura'
              },
              {
                answerNumber: 2,

                answer: 'Alejar los rayos de sol'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question:
              '¿Por qué no puedes hacer este experimento sobre tu piel?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Te puedes quemar'
              },
              {
                answerNumber: 1,

                answer: 'Se rompe la lupa'
              },
              {
                answerNumber: 2,

                answer: 'Se oscurece la piel'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question: 'Este experimento se debe hacer',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un día nublado'
              },
              {
                answerNumber: 1,

                answer: 'En la noche'
              },
              {
                answerNumber: 2,

                answer: 'Un día soleado'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 52,

        questions: [
          {
            questionNumber: 1,

            question: '¿Cúal es el líquido más pesado?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aceite'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'La unión de dos líquidos que forma una sola fase se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Soluto'
              },
              {
                answerNumber: 1,

                answer: 'Solvente'
              },
              {
                answerNumber: 2,

                answer: 'Disolución'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'La unión de alcohol y agua da',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una fase'
              },
              {
                answerNumber: 1,

                answer: 'Dos fases'
              },
              {
                answerNumber: 2,

                answer: 'Tres fases'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'La unión de aceite y agua da',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una fase'
              },
              {
                answerNumber: 1,

                answer: 'Dos fases'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Si los dos líquidos forman una fase, se dice que son',

            answers: [
              {
                answerNumber: 0,

                answer: 'Solubles'
              },
              {
                answerNumber: 1,

                answer: 'Insolubles'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 53,

        questions: [
          {
            questionNumber: 1,

            question:
              'En este experimento se aprovecha la propiedad que tiene el imán de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Atraer materiales ferrosos'
              },
              {
                answerNumber: 1,

                answer: 'Alejar materiales ferrosos'
              },
              {
                answerNumber: 2,

                answer: 'Calentar el hierro'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question:
              'Cuando movemos el imán, el material que es arrastrado es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hierro'
              },
              {
                answerNumber: 1,

                answer: 'Aserrín'
              },
              {
                answerNumber: 2,

                answer: 'La hoja de papel'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'El proceso realizado en este experimento se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Evaporación'
              },
              {
                answerNumber: 1,

                answer: 'Separación'
              },
              {
                answerNumber: 2,

                answer: 'Disolución'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'La separación realizada es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Magnética'
              },
              {
                answerNumber: 1,

                answer: 'Eléctrica'
              },
              {
                answerNumber: 2,

                answer: 'Térmica'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 5,

            question:
              '¿Cuál de los siguientes materiales es atraído por el imán?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aserrín'
              },
              {
                answerNumber: 1,

                answer: 'Arena'
              },
              {
                answerNumber: 2,

                answer: 'Hierro'
              }
            ],

            correctAnswers: 2
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 54,

        questions: [
          {
            questionNumber: 1,

            question: '¿En qué orden debes aplicar los líquidos?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua, aceite, alcohol'
              },
              {
                answerNumber: 1,

                answer: 'Agua, alcohol, aceite'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol, agua, aceite'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: '¿Cuáles de las sustancias forman una disolución?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua - aceite'
              },
              {
                answerNumber: 1,

                answer: 'Agua - alcohol'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol - aceite'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: '¿Cuál es el líquido más pesado?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aceite'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: '¿Cuál es el líquido más liviano?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Aceite'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: '¿Al final del experimento cuántas fases hay?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una (1) fase'
              },
              {
                answerNumber: 1,

                answer: 'Dos (2) fases'
              },
              {
                answerNumber: 2,

                answer: 'Tres (3) fases'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 55,

        questions: [
          {
            questionNumber: 1,

            question: 'La primera gota que se agrega al tubo de ensayo es de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Agua'
              },
              {
                answerNumber: 1,

                answer: 'Aceite'
              },
              {
                answerNumber: 2,

                answer: 'Alcohol'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'El segundo líquido que se agrega es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Alcohol'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Aceite'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: 'Si se agrega agua, la gota de aceite',

            answers: [
              {
                answerNumber: 0,

                answer: 'Asciende (sube)'
              },
              {
                answerNumber: 1,

                answer: 'Desciende (baja)'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Si se agrega alcohol, la  gota de aceite',

            answers: [
              {
                answerNumber: 0,

                answer: 'Asciende (sube)'
              },
              {
                answerNumber: 1,

                answer: 'Desciende (baja)'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'La gota de aceite sube y baja debido a que',

            answers: [
              {
                answerNumber: 0,

                answer: 'Cambia la densidad del medio'
              },
              {
                answerNumber: 1,

                answer: 'Se calienta el medio'
              },
              {
                answerNumber: 2,

                answer: 'Cambia la densidad del aceite'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 56,

        questions: [
          {
            questionNumber: 1,

            question: 'Este experimento se debe realizar en un día',

            answers: [
              {
                answerNumber: 0,

                answer: 'LLuvioso'
              },
              {
                answerNumber: 1,

                answer: 'Nublado'
              },
              {
                answerNumber: 2,

                answer: 'Soleado'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 2,

            question: '¿Qué movimiento se le debe hacer a la lupa?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hacia arriba y hacia abajo'
              },
              {
                answerNumber: 1,

                answer: 'Hacia un lado y hacia el otro'
              },
              {
                answerNumber: 2,

                answer: 'Rotarla'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question: '¿Qué le hace la lupa a los rayos solares?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Concentrarlos en un punto'
              },
              {
                answerNumber: 1,

                answer: 'Desviarlos'
              },
              {
                answerNumber: 2,

                answer: 'Regresarlos'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'El papel usado en este experimento es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Papel filtro'
              },
              {
                answerNumber: 1,

                answer: 'Papel aluminio'
              },
              {
                answerNumber: 2,

                answer: 'Papel normal'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question: 'El parámetro que se le mide a la lente es',

            answers: [
              {
                answerNumber: 0,

                answer: 'Diámetro de la lente'
              },
              {
                answerNumber: 1,

                answer: 'Distancia focal'
              },
              {
                answerNumber: 2,

                answer: 'Espesor del vidrio'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 57,

        questions: [
          {
            questionNumber: 1,

            question: 'La imagen que se obtiene en este experimento se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Real'
              },
              {
                answerNumber: 1,

                answer: 'Falsa'
              },
              {
                answerNumber: 2,

                answer: 'Imaginaria'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Una imagen real se puede recoger sobre',

            answers: [
              {
                answerNumber: 0,

                answer: 'La superficie del agua'
              },
              {
                answerNumber: 1,

                answer: 'La superficie de la lupa'
              },
              {
                answerNumber: 2,

                answer: 'Una superficie blanca'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 3,

            question: 'Como fuente de luz se usa',

            answers: [
              {
                answerNumber: 0,

                answer: 'Led'
              },
              {
                answerNumber: 1,

                answer: 'Linterna'
              },
              {
                answerNumber: 2,

                answer: 'Vela'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 4,

            question: 'La lupa se debe mover',

            answers: [
              {
                answerNumber: 0,

                answer: 'Hacia arriba y hacia abajo'
              },
              {
                answerNumber: 1,

                answer: 'Hacia adelante y hacia atrás'
              },
              {
                answerNumber: 2,

                answer: 'Rotarla'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question: 'Para que el experimento funcione se requiere',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un cuarto oscuro'
              },
              {
                answerNumber: 1,

                answer: 'Un cuarto iluminado'
              },
              {
                answerNumber: 2,

                answer: 'Un cuarto con poca luz'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 58,

        questions: [
          {
            questionNumber: 1,

            question:
              'El fenómeno de la luz que se estudia en este experimento se llama',

            answers: [
              {
                answerNumber: 0,

                answer: 'Reflexión'
              },
              {
                answerNumber: 1,

                answer: 'Refracción'
              },
              {
                answerNumber: 2,

                answer: 'Difracción'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question: 'La refracción es',

            answers: [
              {
                answerNumber: 0,

                answer:
                  'El cambio de dirección de la luz al pasar de un medio a otro'
              },
              {
                answerNumber: 1,

                answer: 'La formación de imágenes falsas'
              },
              {
                answerNumber: 2,

                answer: 'Doblar objetos en el agua'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'Cuando introduces la barra en el agua, se ve aparentemente',

            answers: [
              {
                answerNumber: 0,

                answer: 'Doblada'
              },
              {
                answerNumber: 1,

                answer: 'Recta'
              },
              {
                answerNumber: 2,

                answer: 'Más pequeña'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 4,

            question: 'Cuando miras un objeto en el fondo de la piscina',

            answers: [
              {
                answerNumber: 0,

                answer: 'El objeto se encuentra donde se ve'
              },
              {
                answerNumber: 1,

                answer: 'El objeto no se encuentra donde se ve'
              },
              {
                answerNumber: 2,

                answer: 'Se ve el objeto repetidas veces'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'Si cambiamos la barra plástica por una metálica, al introducirla al agua se verá',

            answers: [
              {
                answerNumber: 0,

                answer: 'Recta'
              },
              {
                answerNumber: 1,

                answer: 'Aparentemente doblada'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 59,

        questions: [
          {
            questionNumber: 1,

            question:
              'La ilusión óptica producida en este experimento se debe a',

            answers: [
              {
                answerNumber: 0,

                answer: 'Refracción'
              },
              {
                answerNumber: 1,

                answer: 'Reflexión'
              },
              {
                answerNumber: 2,

                answer: 'Densidad'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 2,

            question: 'Cuando se agrega agua al vaso, la moneda',

            answers: [
              {
                answerNumber: 0,

                answer: 'Se corre'
              },
              {
                answerNumber: 1,

                answer: 'Desaparece'
              },
              {
                answerNumber: 2,

                answer: 'Se duplica'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 3,

            question: 'En el primer experimento la moneda se debe colocar',

            answers: [
              {
                answerNumber: 0,

                answer: 'Al lado del vaso'
              },
              {
                answerNumber: 1,

                answer: 'Debajo del vaso'
              },
              {
                answerNumber: 2,

                answer: 'Dentro del vaso'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question:
              '¿Para la segunda parte del experimento cuántas monedas se deben usar?',

            answers: [
              {
                answerNumber: 0,

                answer: 'Una'
              },
              {
                answerNumber: 1,

                answer: 'Dos'
              },
              {
                answerNumber: 2,

                answer: 'Tres'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 5,

            question:
              'En la segunda parte del experimento la moneda que desaparece es la que está',

            answers: [
              {
                answerNumber: 0,

                answer: 'Debajo del vaso'
              },
              {
                answerNumber: 1,

                answer: 'Dentro del vaso'
              }
            ],

            correctAnswers: 0
          }
        ]
      }).save(),

      new Quiz({
        expNumber: 60,

        questions: [
          {
            questionNumber: 1,

            question: 'La lente que se construye en este experimento es de',

            answers: [
              {
                answerNumber: 0,

                answer: 'Vidrio'
              },
              {
                answerNumber: 1,

                answer: 'Agua'
              },
              {
                answerNumber: 2,

                answer: 'Aire'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 2,

            question:
              'Si colocamos el tubo de ensayo vacío sobre las letras, estas se ven',

            answers: [
              {
                answerNumber: 0,

                answer: 'De igual tamaño'
              },
              {
                answerNumber: 1,

                answer: 'Más grandes'
              },
              {
                answerNumber: 2,

                answer: 'Más pequeñas'
              }
            ],

            correctAnswers: 0
          },
          {
            questionNumber: 3,

            question:
              'Si colocamos el tubo de ensayo lleno de agua sobre las letras, éstas se ven',

            answers: [
              {
                answerNumber: 0,

                answer: 'De igual tamaño'
              },
              {
                answerNumber: 1,

                answer: 'Más grandes'
              },
              {
                answerNumber: 2,

                answer: 'Más pequeñas'
              }
            ],

            correctAnswers: 1
          },
          {
            questionNumber: 4,

            question: 'El tubo de ensayo con agua funciona como',

            answers: [
              {
                answerNumber: 0,

                answer: 'Un espejo'
              },
              {
                answerNumber: 1,

                answer: 'Una pantalla'
              },
              {
                answerNumber: 2,

                answer: 'Una lupa'
              }
            ],

            correctAnswers: 2
          },
          {
            questionNumber: 5,

            question:
              'Para que el experimento funcione, en el tubo debe quedar',

            answers: [
              {
                answerNumber: 0,

                answer: 'La mitad de aire'
              },
              {
                answerNumber: 1,

                answer: 'Una pequeña burbuja de aire'
              },
              {
                answerNumber: 2,

                answer: 'La mitad de agua'
              }
            ],

            correctAnswers: 1
          }
        ]
      }).save()
    ])
  } catch (error) {}
}
