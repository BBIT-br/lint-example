import {getFileNameByStack, readOriginalLintFile} from './index'
import path from 'path';

describe('File tests', () => {

  describe('getFileNameByStack', () => {
    test('REACT_JS', () => {
      const fileName = getFileNameByStack('REACT_JS');
      expect(fileName).toContain(path.join('react','js'));
    });

    test('REACT_TS', () => {
      const fileName = getFileNameByStack('REACT_TS');
      expect(fileName).toContain(path.join('react','ts'));
    });

    test('JDK_8', () => {
      const fileName = getFileNameByStack('JDK_8');
      expect(fileName).toBe('INVALID_OPTION');
    });

    test('empty', () => {
      const fileName = getFileNameByStack('');
      expect(fileName).toBe('INVALID_OPTION');
    });

    test('undefined', () => {
      const fileName = getFileNameByStack(undefined);
      expect(fileName).toBe('INVALID_OPTION');
    });
  });

  describe('readFile', () => {
    test('REACT_JS', () => {
      const fileContent = readOriginalLintFile('REACT_JS');
      expect(fileContent).toBeDefined();
      expect(fileContent.length).toBe(1516);
    });

    test('REACT_TS', () => {
      const fileContent = readOriginalLintFile('REACT_TS');
      expect(fileContent).toBeDefined();
      expect(fileContent.length).toBe(2614);
    });

    test('JDK_8', () => {
      const fileContent = readOriginalLintFile('JDK_8');
      expect(fileContent).toBeUndefined();
    });

    test('empty', () => {
      const fileContent = readOriginalLintFile('');
      expect(fileContent).toBeUndefined();
    });

    test('undefined', () => {
      const fileContent = readOriginalLintFile(undefined);
      expect(fileContent).toBeUndefined();
    });
  })

})
