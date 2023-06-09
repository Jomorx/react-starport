import typescript from 'rollup-plugin-typescript2';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import DtsPlugin from "rollup-plugin-dts";

export default [
  {
    input: './index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'es'
      }
    ],

    plugins: [
      typescript(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react']
      }),
    ],
    
  },
]