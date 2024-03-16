import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'adoptables',
  title: 'Adoptables',
  type: 'document',
	fields:[
		defineField({
			name:'name',
			type:'string',
		}),
		defineField({
			name:'isAdopted',
			title:'Adopted?',
			type:'boolean',
		}),

		defineField({
			name:'image',
			type:'image',
		}),
		defineField({
			name:'includes',
			type:'array',
			of:[
				{type:'object',fields:[
					defineField({
						name:'title',
						description:'(optional)',
						type:'string',
					}),
					defineField({
						name:'description',
						type:'string',
					})
				],
				preview:{
					select:{
						title:'description'
					}
				}
			}
			]
		}),
		defineField({
			name:'price',
			type:'string',
		}),
	],

})
