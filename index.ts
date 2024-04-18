import { spawnSync } from 'child_process';
import path from "node:path"
const consolePath = path.resolve('./dependencies/java/portugol/portugol-console.jar');

const cp = spawnSync('C:\\Program Files\\Java\\jdk-17\\bin\\java.exe', [
    '-Dfile.encoding=latin1',
    '-server',
    '-Xms32m',
    '-Xmx256m',
    '-XX:MinHeapFreeRatio=5',
    '-XX:MaxHeapFreeRatio=10',
    '-XX:+UseG1GC',
    '-Dvisualvm.display.name=Portugol-Studio',
    '-jar',
    consolePath,
    "C:\\Users\\user\\Documents\\Compiler\\dependencies\\java\\portugol\\a.por"
]);
console.log(cp.stdout.toString())