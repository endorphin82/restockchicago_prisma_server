import { objectType } from '@nexus/schema'

export const File = objectType({
  name: 'File',
  definition(t) {
    t.string('uid')
    t.string('name')
    t.string('status')
    t.string('url')
  }
})
