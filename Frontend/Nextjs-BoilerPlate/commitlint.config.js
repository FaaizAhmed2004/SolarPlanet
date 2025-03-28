export const extends = ['@commitlint/config-conventional'];
export const rules = {
  'header-max-length': [0, 'always', 100],
  'type-enum': [
    2,
    'always',
    [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
    ],
  ],
  'subject-case': [2, 'always', 'sentence-case'],
};
