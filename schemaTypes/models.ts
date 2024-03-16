import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'models',
  title: 'Models',
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
