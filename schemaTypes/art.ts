import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'art',
  title: 'art',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      title: 'Category Name',
      type: 'string',
    }),
		defineField({
      name: 'desc',
      title: 'Category Description',
      type: 'text',
    }),
		defineField({
			name:'imageList',
			title:'Image List',
			type:'array',
			of:[
				{type:'image'}
			]
		}),
		defineField({
			name:'pricing',
			title:'Pricing',
			type:'array',
			of:[
				{type:'object',fields:[
					defineField({
						name:'name',
						type:'string',
					}),
					defineField({
						name:'price',
						type:'string',
					})
				]}
			]
		}),
		defineField({
			name:'display',
			title:'Display Type',
			type:'number',
			initialValue:0,
			options:{
				list:[
					{title:'Square',value:0},
					{title:'Auto Slide',value:1},
					{title:'Portrait',value:2}
					
				]
			},
			validation:(rule) => rule.min(0).max(2).required()
		})
	
  ],

})
