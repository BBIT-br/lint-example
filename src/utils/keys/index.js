const REACT_JS = 'REACT_JS';
const REACT_TS = 'REACT_TS';
const RN_JS = 'RN_JS';
const RN_TS = 'RN_TS';
const NODE_JS = 'NODE_JS';
const NODE_TS = 'NODE_TS';

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

export const keys = {NODE_JS, NODE_TS, REACT_JS, REACT_TS, RN_JS, RN_TS};

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

  return '';
}
