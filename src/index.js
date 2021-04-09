const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

const DEPS = [
  'eslint',
  'prettier',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
]

const createFile = (fileName, content) => {
  fs.writeFileSync(fileName, content);
}

const readFileLint = (stack) => {
  if (stack === 'REACT_JS') {
    const fileName = path.join(__dirname, 'stack', 'react', '.eslintrc.json');
    const file = fs.readFileSync(fileName);
    return file.toString();
  } else {
    return 'TS';
  }
}

const installDeps = () => {
  DEPS.forEach((dep) => {
    exec(`npm install --dev ${dep}`, (error, stdout, stderr) => {
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

  })
}

installDeps();

const content = readFileLint('REACT_JS')
createFile(path.join(__dirname,'.eslintrc.json'), content)

