import {objectType} from '@nexus/schema'

export const ImageCat = objectType({
    name: 'ImageCat',
    definition(t) {
        t.model.id()
        t.model.url()
    }
})