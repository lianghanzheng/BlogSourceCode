// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

// 自定义温暖色调主题
const warmTheme = {
  name: 'warm-academic',
  type: 'dark',
  colors: {
    // 基础颜色
    bg: '#2D2420',
    fg: '#F6F1DE',
    // 语法高亮
    comment: '#8B7D6B',
    keyword: '#E58E35',
    string: '#CDB245',
    number: '#D4A84B',
    function: '#A9C6B8',
    operator: '#E58E35',
    punctuation: '#F6F1DE',
    // 其他token类型映射
    'constant': '#D4A84B',
    'variable': '#F6F1DE',
    'property': '#F6F1DE',
    'parameter': '#F6F1DE',
    'class': '#A9C6B8',
    'type': '#A9C6B8',
    'namespace': '#A9C6B8',
    'tag': '#E58E35',
    'attribute': '#CDB245',
    'selector': '#E58E35',
    'id': '#D4A84B',
  },
  settings: {
    foreground: '#F6F1DE',
    background: '#2D2420',
    caret: '#E58E35',
    selection: '#E58E3533',
    selectionForeground: '#F6F1DE',
    lineHighlight: '#46332533',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#8B7D6B' }
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#E58E35' }
    },
    {
      scope: ['string', 'string.quoted', 'punctuation.definition.string'],
      settings: { foreground: '#CDB245' }
    },
    {
      scope: ['constant.numeric', 'constant.language', 'support.constant'],
      settings: { foreground: '#D4A84B' }
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#A9C6B8' }
    },
    {
      scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
      settings: { foreground: '#A9C6B8' }
    },
    {
      scope: ['variable', 'identifier', 'entity.name'],
      settings: { foreground: '#F6F1DE' }
    },
    {
      scope: ['operator', 'keyword.operator'],
      settings: { foreground: '#E58E35' }
    },
    {
      scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
      settings: { foreground: '#F6F1DE' }
    }
  ]
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    expressiveCode({
      themes: [warmTheme],
      defaultProps: {
        showLineNumbers: true,
        frame: 'code',
      },
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0',
        codeFontFamily: "'Courier Prime', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        codeFontSize: '0.9rem',
        codeLineHeight: '1.6',
        codePaddingBlock: '1.25rem',
        codePaddingInline: '1.5rem',
      }
    }),
    mdx()
  ]
});