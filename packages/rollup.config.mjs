import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import DtsPlugin from "rollup-plugin-dts";

export default [
  {
    input: './index.ts',
    output: [
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        name: 'starport'
      }
    ],

    plugins: [
      typescript(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react']
      }),
      terser({
        compress: {
          drop_console: true
        }
      })
    ],
  },
  {
    input: './index.ts',
    output: [
      {
        file: 'dist/es/index.js',
        format: 'es'
      }
    ],

    plugins: [
      typescript(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react']
      }),
      terser({
        compress: {
          drop_console: true
        }
      })
    ],
  },
  {
    input: './index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs'
      }
    ],

    plugins: [
      typescript(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react']
      }),
      commonjs(),
      terser({
        compress: {
          drop_console: true
        }
      })
    ],

  }
]