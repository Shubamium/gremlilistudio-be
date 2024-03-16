import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'models_price',
  title: 'Models Pricing',
  type: 'document',
	fields:[
		defineField({
			name:'title',
			type:'string',
		}),
		defineField({
			name:'price',
			type:'string',
		}),
		defineField({
			name:'includes',
			type:'array',
			of:[{
				type:'string'
			}]
		}),
		defineField({
			name:'addons',
			type:'array',
			of:[{
				type:'object', fields:[
					defineField({
						name:'title',
						type:'string',
					}),
					defineField({
						name:'price',
						type:'string',
					})
				]
			}]
		}),
		defineField({
			name:'extra',
			title:'Extra Info Button',
			description:'(optional)',
			type:'object',
			fields:[
				defineField({
					name:'button',
					type:'string',
				}),
				defineField({
					name:'image',
					type:'image'
				})
			]
		})
	]

})
