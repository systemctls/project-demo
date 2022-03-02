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
        'https://cdn.jsdelivr.net/gh/systemctls/learn_fish@3.33.0/js/fish-desktop-all.min.js',
        'https://cdn.jsdelivr.net/gh/systemctls/learn_fish@3.33.0/js/fish-desktop-require.min.js'
        // 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'
      ],
      css: ['https://cdn.jsdelivr.net/gh/systemctls/learn_fish@3.33.0/css/fish-desktop-default.css'],
    }
  }
}