/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  theme: {
    color: {
      link: '#365df0',
      linkHover: '#1a38ac',
    },
    fontFamily: {
      base: '"Lato", arial',
    },
  },
  pagePerSection: true,
  title: 'Very Useful Tools to Remember',
  sections: [
    {
      name: 'Introduction',
      content: './docs/Introduction/README.md',
      sections: [
        {
          name: 'Run the project',
          content: './docs/Introduction/RunTheProject.md',
        },
        {
          name: 'Run the tests',
          content: './docs/Introduction/RunTheTests.md',
        },
        {
          name: 'Screenshots',
          content: './docs/Introduction/Screenshots.md',
        },
      ],
    },
    {
      name: 'Credits',
      content: './docs/Credits/README.md',
    },
  ],
};
