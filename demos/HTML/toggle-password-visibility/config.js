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
        'https://unpkg.com/jquery@3.6.0/dist/jquery.js'
        // 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'
      ],
      css: [],
    }
  }
}