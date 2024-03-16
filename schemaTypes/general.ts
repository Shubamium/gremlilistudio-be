import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
			description:"Set the active one as 'main'", 
      type: 'string',
    }),
		defineField({
			name:'home',
			title:'Home',
			type:'object',
			fields:[
				defineField({
					name: 'intro',
					title: 'Intro Text',
					type: 'string',
				}),
				defineField({
					name: 'notice',
					title: 'Notice Text',
					type: 'array',
					of:[
						{type:'block'}
					]
				}),
				defineField({
					name:'commission',
					title:'Commission Text',
					type:'text',
				}),
			]
		}),
		defineField({
			name:'contact',
			title:'Contact Text',
			type:'text',
		}),
		defineField({
			name:'direct_contact',
			title:'Direct Contact Text',
			type:'text',
		}),
		defineField({
			name:'footer',
			title:'Footer Text',
			type:'string',
		}),
		defineField({
			name:'section_desc',
			title:'Section Description',
			type:'object',
			fields:[
				defineField({
					name:'graphics_desc',
					title:'Graphics Description',
					type:'text',
				}),
				defineField({
					name:'models_desc',
					title:'Models Description',
					type:'text',
				}),
				defineField({
					name:'adoptable_desc',
					title:'Adoptables Description',
					type:'text',
				})
			]
		})
	
  ],
})
