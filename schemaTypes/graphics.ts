import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'graphics',
  title: 'Graphics',
  type: 'document',
	fields:[
		defineField({
			name:'data',
			type:'art',
		})
	],
	preview:{
		select:{
			title:'data.category',
		}
	}
})
