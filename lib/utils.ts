import fs from 'fs'
import path from 'path'

export const writeImages = async (files: any | null | undefined, offset = 0) => {
  return await Promise.all(
    files ?
      files
        .map(
          async (file: any, ind: number) => {
            const { createReadStream, filename, mimetype } = await file
            if (!filename) {
              throw Error('Invalid file Stream')
            } else if (filename && mimetype.startsWith('image')) {
              const readStream = createReadStream(filename)
              const pos = ind + offset
              const name = `${String(Date.now())}${filename}`
              readStream
                .pipe(fs.createWriteStream(path.join(__dirname, '../uploads/', name)))
                .on('close', () => {
                })
              return { pos, name }
            }
          }
        ) : []
  )
}

export const deleteImagesByFilenames = async ( imgsFileNames: string[] ) => {
  await Promise.all(
    imgsFileNames &&
    imgsFileNames
      .map(
        async (file: string) => {
          if (!file) {
            throw Error('No file Name')
          }
          fs.unlink(path.join(__dirname, '../uploads/' + file), (err) => {
            if (err) console.log(err)
          })
        }
      )
  )
}
