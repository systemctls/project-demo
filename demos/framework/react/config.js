import * as Babel from '@babel/standalone';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./script.js'),
    import('!raw-loader!./style.css'),
  ]);

  return {
    javascript: {
      code: jsCode,
      transformer: 'javascript',
      transform(code) {
        const _code = Babel.transform(code, { presets: ['es2015', 'react'] }).code;
        return _code;
      },
      visible: true,
    },

    html: {
      code: htmlCode,
      transformer: 'html',
      visible: true,
    },
    css: {
      code: cssCode,
      transformer: 'css',
    },
    foldBoxes: ['html'],
    packages: {
      js: [
        // 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js',
        // 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js',
        'https://unpkg.com/react@17.0.2/umd/react.development.js',
        'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js'
        // '//lib.baomitu.com/dat-gui/0.7.2/dat.gui.min.js',
        // '//lib.baomitu.com/babel-polyfill/7.0.0-beta.44/polyfill.min.js', // 加载Source 内容
      ],
      css: [],
    }
  }
}