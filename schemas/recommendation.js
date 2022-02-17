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
      name: 'isBarActive',
      title: 'Is Bar ( counter ) active?',
      type: 'boolean',
    },
    {
      name: 'barTitle',
      title: 'Saving Bar Title',
      type: 'string',
    },
    {
      name: 'barSubtitle',
      title: 'Saving Bar Subtitle',
      type: 'string',
    },
    {
      name: 'barImage',
      title: 'Saving Bar Image',
      type: 'string',
    },
    {
      name: 'barCard',
      title: 'Bar Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'link',
              title: 'link',
              type: 'string',
            },

            {
              name: 'BarCard',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'contentImage',
              title: 'Content Image',
              type: 'string',
            },
            {
              name: 'contentTitle',
              title: 'Content Title',
              type: 'string',
            },
            {
              name: 'contentDetails',
              title: 'Content Details',
              type: 'text',
            },
          ],
        },
      ],
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
