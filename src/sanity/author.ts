import {defineType , defineField , defineArrayMember} from 'sanity'


export default defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'AuthorName'
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Bio'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'AuthorImage',
            options:{
                hotspot: true
            }
        })
    ]
})