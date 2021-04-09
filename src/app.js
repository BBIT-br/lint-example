/* eslint-disable no-console */
import {join} from 'path'
import {exec} from 'child_process';

import {createFile, readFile} from './utils/file'
// import {REACT_JS} from './stack/keys'
import {REACT_JS_DEPS} from './stack/react'

const installDeps = (targetFolder, allDeps) => {
  exec(`cd ${targetFolder} && npm install && npm install ${allDeps} --save-dev`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const execute = () => {
  const args = process.argv;

  if (args.length < 4) {
    console.log('Required two args:\n\t1° - target folder\n\t2° - tech stack')
    return;
  }

  const targetFolder = args[2];
  const stack = args[3];

  installDeps(targetFolder, REACT_JS_DEPS.join(' '));
  const contentLint = readFile(stack);
  createFile(join(targetFolder, '.eslintrc.json'), contentLint);
}

execute();

