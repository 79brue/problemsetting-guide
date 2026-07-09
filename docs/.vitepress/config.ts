import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'M(IT)^2 Problemsetting Guide',
  description: 'Guide for preparing and testing M(IT)^2 problems',
  base: '/problemsetting-guide/',

  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
      { text: 'Problem Basics', link: '/problem-basics/' },
      { text: 'Polygon Manual', link: '/polygon/' },
      { text: 'Setter Manual', link: '/setter/' },
      { text: 'Tester Manual', link: '/tester/' },
      { text: 'Reference', link: '/reference/' }
    ],

    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Home', link: '/' }
        ]
      },
      {
        text: 'Problem Basics',
        items: [
          { text: 'Overview', link: '/problem-basics/' }
        ]
      },
      {
        text: 'Polygon Manual',
        items: [
          { text: 'Overview', link: '/polygon/' }
        ]
      },
      {
        text: 'Setter Manual',
        items: [
          { text: 'Overview', link: '/setter/' },
          { text: 'Statement and Specification', link: '/setter/statement' },
          { text: 'Subtasks and Scoring', link: '/setter/subtasks' },
          { text: 'Validator', link: '/setter/validator' },
          { text: 'Sample Tests', link: '/setter/samples' },
          { text: 'Checker', link: '/setter/checker' },
          { text: 'Main Correct Solution', link: '/setter/mcs' },
          { text: 'Initial Tests', link: '/setter/initial-tests' },
          { text: 'Full Test Data', link: '/setter/full-tests' }
        ]
      },
      {
        text: 'Tester Manual',
        items: [
          { text: 'Overview', link: '/tester/' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Overview', link: '/reference/' }
        ]
      }
    ]
  }
})