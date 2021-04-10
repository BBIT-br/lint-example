const REACT_JS = 'REACT_JS';
const REACT_TS = 'REACT_TS';
const RN_JS = 'RN_JS';

const REACT_JS_DEPS = [
  'eslint',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'prettier'
];

const REACT_TS_DEPS = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-config-airbnb-typescript',
  'eslint-config-prettier',
  'eslint-import-resolver-typescript',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'prettier'
];

export const keys = {REACT_JS, REACT_TS, RN_JS};

export const isValidKey = (keyWanted) => {

  const isValid = Object.values(keys).some(key => key === keyWanted);

  if (isValid) {
    return true
  } else {
    console.log(`Enter a valid stack to 2° arg:\n\t${Object.values(keys).join('\n\t')}`);
    return false;
  }
}

export const getAllDepsByKey = (key) => {
  if (key === REACT_JS) {
    return REACT_JS_DEPS.join(' ');
  }
  if (key === REACT_TS) {
    return REACT_TS_DEPS.join(' ');
  }

  return '';
}
