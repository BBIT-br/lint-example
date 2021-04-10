/* eslint-disable no-console */
import path from 'path'
import {exec} from 'child_process';

import {createFile, readOriginalLintFile} from './utils/file'
import {getAllDepsByKey, isValidKey} from './utils/keys';

const installDeps = (targetFolder, stack) => {
  const allDeps = getAllDepsByKey(stack);

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

  if (isValidKey(stack)) {
    installDeps(targetFolder, stack);
    const lintContent = readOriginalLintFile(stack);
    const fileName = path.join(targetFolder, '.eslintrc.json');
    createFile(fileName, lintContent);
  }

}

execute();
