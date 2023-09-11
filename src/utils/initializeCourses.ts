import Course from '../models/Course'

export const createCourses = async (): Promise<void> => {
  try {
    // Count Documents
    const count = await Course.estimatedDocumentCount()

    // check for existing licenses
    if (count > 0) return

    // Create licenses
    const values = await Promise.all([
      new Course({ name: 'ingesoft 1' }).save()
    ])

    console.log(values)
  } catch (error) {
    console.error(error)
  }
}
