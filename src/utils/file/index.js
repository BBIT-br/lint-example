import fs from 'fs';
import path from 'path';
import {keys} from '../keys';

const getFileNameByStack = (stack) => {
  const folderNameBase = path.join(__dirname, '..', 'stack');

  let folderName = '';

  if (stack === keys.REACT_JS) {
    folderName = path.join(folderNameBase, 'react', 'js');
  } else if (stack === keys.REACT_TS) {
    folderName = path.join(folderNameBase, 'react', 'ts');
  }

  return path.join(folderName, '.eslintrc.json')
}

export const createFile = (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

export const readFile = (stack) => {
  const fileName = getFileNameByStack(stack);

  const file = fs.readFileSync(fileName, 'utf8');
  return file.toString();
};
