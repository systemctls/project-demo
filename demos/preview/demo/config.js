// config.js

const javascript = `console.log('this is a demo')`;


import * as Babel from '@babel/standalone';
import style from './style.css'
export default async () => {
  const [cssCode] = await Promise.all([
    import('!raw-loader!./style.css'),
  ]);

  return {
    javascript,
    css: {
      code: cssCode,
      transformer: 'css',
    },
    packages: {
      js: [

      ],
      css: [style],
    }

  }
}