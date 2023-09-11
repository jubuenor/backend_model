import Chapter from '../models/Chapter'

export const initializeChapters = async (): Promise<void> => {
  try {
    // Count Documents
    const count: number = await Chapter.estimatedDocumentCount()

    // check for existing chapters
    if (count > 0) {
      await Chapter.deleteMany()
    }

    // Create chapters
    await Promise.all([
      new Chapter({
        chapterNumber: 1,
        chapterTitle: 'Capítulo 1 - Agua',
        chapterImg: 'images/Icono1.png',
        experimentsNumber: [1, 2, 3, 4, 5, 6, 7]
      }).save(),
      new Chapter({
        chapterNumber: 2,
        chapterTitle: 'Capítulo 2 - Aire',
        chapterImg: 'images/Icono2.png',
        experimentsNumber: [8, 9, 10, 11, 12, 13, 14]
      }).save(),
      new Chapter({
        chapterNumber: 3,
        chapterTitle: 'Capítulo 1 - Medición',
        chapterImg: 'images/Icono3.jpg',
        experimentsNumber: [15, 16, 17, 18]
      }).save(),
      new Chapter({
        chapterNumber: 4,
        chapterTitle: 'Capítulo 4 - Magnetismo',
        chapterImg: 'images/Icono4.jpg',
        experimentsNumber: [19, 20, 21, 22, 23]
      }).save(),
      new Chapter({
        chapterNumber: 5,
        chapterTitle: 'Capítulo 5 - Electricidad',
        chapterImg: 'images/Icono5.png',
        experimentsNumber: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
      }).save(),
      new Chapter({
        chapterNumber: 6,
        chapterTitle: 'Capítulo 6 - Electricidad',
        chapterImg: 'images/Icono6.png',
        experimentsNumber: [35, 36, 37, 38, 39, 40]
      }).save(),
      new Chapter({
        chapterNumber: 7,
        chapterTitle: 'Capítulo 7 - Quimica Básica',
        chapterImg: 'images/Icono7.png',
        experimentsNumber: [41, 42, 43, 44, 45, 46, 47, 48]
      }).save(),
      new Chapter({
        chapterNumber: 8,
        chapterTitle: 'Capítulo 8 - Calor',
        chapterImg: 'images/Icono8.png',
        experimentsNumber: [49, 50, 51]
      }).save(),
      new Chapter({
        chapterNumber: 9,
        chapterTitle: 'Capítulo 9 - Separacion de sustancias',
        chapterImg: 'images/Icono9.png',
        experimentsNumber: [52, 53, 54, 55]
      }).save(),
      new Chapter({
        chapterNumber: 10,
        chapterTitle: 'Capítulo 10 - Luz e imagenes',
        chapterImg: 'images/Icono10.png',
        experimentsNumber: [56, 57, 58, 59, 60]
      }).save()
    ])
  } catch (error) {
  }
}
