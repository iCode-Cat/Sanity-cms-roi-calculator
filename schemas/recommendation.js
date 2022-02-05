export default {
  name: 'recommendation',
  title: 'Recommendation',
  type: 'object',
  fields: [
    {
      name: 'showButton',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'active',
      title: 'is Active?',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'barLeft',
      title: 'Saving Bar Left',
      type: 'string',
    },
    {
      name: 'barRight',
      title: 'Saving Bar Right',
      type: 'string',
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tabs',
          title: 'tabs',
          fields: [
            {
              name: 'tabname',
              title: 'Tabname',
              type: 'string',
            },

            {
              name: 'active',
              title: 'is Active?',
              type: 'boolean',
            },
            {
              name: 'cards',
              title: 'Cards',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'cards',
                  title: 'Cards',
                  fields: [
                    {
                      name: 'readTime',
                      title: 'readTime',
                      type: 'string',
                    },
                    {
                      name: 'frequency',
                      title: 'frequency',
                      type: 'string',
                    },
                    {
                      name: 'icon',
                      title: 'icon',
                      type: 'string',
                    },
                    {
                      name: 'iconBgColor',
                      title: 'iconBgColor',
                      type: 'string',
                    },
                    {
                      name: 'title',
                      title: 'title',
                      type: 'string',
                    },
                    {
                      name: 'href',
                      title: 'href',
                      type: 'string',
                    },
                    {
                      name: 'hrefTitle',
                      title: 'hrefTitle',
                      type: 'string',
                    },
                    {
                      name: 'readmore',
                      title: 'readmore',
                      type: 'boolean',
                    },
                    {
                      name: 'content',
                      title: 'content',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
