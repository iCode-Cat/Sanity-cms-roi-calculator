export default {
  name: 'flipCard',
  title: 'Flip Cards',
  type: 'document',
  fields: [
    {
      name: 'cardFrontColor',
      title: 'Card Front Color',
      type: 'string',
    },
    {
      name: 'cardBackColor',
      title: 'Card Back Color',
      type: 'string',
    },
    {
      name: 'cardFrontIcon',
      title: 'Card Front Icon',
      type: 'image',
    },
    {
      name: 'cardFrontText',
      title: 'Card Front Text',
      type: 'string',
    },
    {
      name: 'cardBackText',
      title: 'Card Text on Flip',
      type: 'text',
    },
    {
      name: 'conditionedTagsExists',
      title: 'Conditioned Tags Exists',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    {
      name: 'conditionedTagsMissing',
      title: 'Conditioned Tags Missing',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
  ],
  preview: {
    select: {
      title: 'cardFrontText',
      media: 'cardFrontIcon',
    },
  },
};
