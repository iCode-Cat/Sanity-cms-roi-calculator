export default {
  name: 'input',
  title: 'Form Inputs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'required',
      title: 'required',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'placeholder',
      title: 'placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'defaultState',
      title: 'detault statename',
      description: 'get given answers from user',
      type: 'string',
    },
  ],
};
