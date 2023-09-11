import License from '../models/License'

export const createLicenses = async (): Promise<void> => {
  try {
    // Count Documents
    const count = await License.estimatedDocumentCount()

    // check for existing licenses
    if (count > 0) return

    // Create licenses
    const values = await Promise.all([
      new License({ licenseCode: 'WIL3VS3I9F0HENVU', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'WIL3VS3I9F0HENVA', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'MEEMBNVYZLL5H1PX', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'AWQBO1P0YQCO5BR2', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: '1X1I923PCH9VVYH1', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'ZLG393UV2VQE67YJ', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'EHTN0PRAPF44XY8F', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'KPS7N58IJK8IHZ2T', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'PTTW1SYI6HH6UK00', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'CAFB15NU58FC90F2', course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'LA0nSL39yJN9xZdP', role: 1, course: '6493265f5028737ead7ba14f' }).save(),
      new License({ licenseCode: 'CifdIz0YN2iBDImL', role: 2 }).save()
    ])

    console.log(values)
  } catch (error) {
    console.error(error)
  }
}
