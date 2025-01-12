// helpful functionss
import {defineType , defineField , defineArrayMember} from 'sanity'


export default defineType({
    name:'blog',
    type:'document',
    title: 'Blog',
    fields : [
        defineField({
            name:'heading',
            type:'string',
            title:"Heading",
            validation: Rule => Rule.required().error("this field is required")
        }),

        // Slug Field
        defineField({
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'heading',
                maxLength: 95
            },
            validation: Rule => Rule.required().error("This field is required")
        }),
        defineField({
            name:'summary',
            type:'text',
            title:'Summary',
            validation: Rule => Rule.required().error("This Field is required")
        }),
        defineField({
            name:'image',
            type:'image',
            title: 'Image',
        }),
        defineField({
            name:'content',
            type:'array',
            title: 'Content',
            of: [defineArrayMember({type: 'block'})]
        }),
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{type: 'author'}]
        })
    ]
})