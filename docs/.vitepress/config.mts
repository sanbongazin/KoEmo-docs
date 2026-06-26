import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'VoxEmo ドキュメント',
  description: '声から感情を読み取り、VRChatアバターの表情に反映するギミック',
  base: '/VoxEmo-docs/',

  head: [
    ['link', { rel: 'icon', href: '/VoxEmo-docs/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'VoxEmo',

    nav: [
      { text: 'ホーム', link: '/' },
      { text: '導入ガイド', link: '/guide/getting-started' },
      { text: 'FAQ', link: '/faq' },
      { text: '対応状況', link: '/compatibility' },
    ],

    sidebar: [
      {
        text: '導入ガイド',
        items: [
          { text: 'はじめに', link: '/guide/getting-started' },
          { text: 'セットアップ', link: '/guide/setup' },
          { text: 'キャリブレーション', link: '/guide/calibration' },
          { text: 'アバターへの組み込み', link: '/guide/avatar-setup' },
        ],
      },
      {
        text: 'リファレンス',
        items: [
          { text: '仕組みと技術情報', link: '/reference/how-it-works' },
          { text: '動作要件', link: '/reference/requirements' },
          { text: '対応アバター・ギミック', link: '/compatibility' },
        ],
      },
      {
        text: 'サポート',
        items: [
          { text: 'よくある質問 (FAQ)', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sanbongazin/VoiceEmo' },
    ],

    footer: {
      message: 'VoxEmo — あなたの声に表情がつくギミック',
      copyright: 'Copyright © 2025 sanbongazin',
    },

    editLink: {
      pattern: 'https://github.com/sanbongazin/VoxEmo-docs/edit/main/docs/:path',
      text: 'このページを編集する',
    },

    search: {
      provider: 'local',
    },

    outline: {
      label: 'このページの内容',
      level: [2, 3],
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },

    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切替',
    darkModeSwitchTitle: 'ダークモードに切替',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップに戻る',
  },
})
