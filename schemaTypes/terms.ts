import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'terms',
  title: 'Terms Of Service',
  type: 'document',
	fields:[
		defineField({
			name:'section',
			description:"Currently Available: 'graphics' - 'models' - 'adoptables'",
			type:'string',
		}),
		defineField({
			name:'terms',
			title:'Terms List',
			type:'array',
			of:[
				{type:'object',fields:[
					defineField({
						name:'title',
						type:'string',
					}),
					defineField({
						name:'description',
						type:'string',
					})
				]
				}
			]
		})
	],
	preview:{
		select:{
			title:'section',
		}
	}
})
