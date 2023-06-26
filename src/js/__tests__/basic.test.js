import Validator from '../app';

test.each([
  ['1erts1', false],
  ['wer-rwed_wer', true],
  ['df-df_222s34', false],
  ['dfg3456a', false],
  ['qwe223dfsd_', false],
])(
  'validatename %s',
  (name, expected) => {
    expect(Validator.validateName(name)).toBe(expected);
  },
);
