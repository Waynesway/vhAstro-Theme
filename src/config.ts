export default {
  Title: 'Wayne的博客',
  Site: 'https://orzorg.eu.org',
  Subtitle: '就是我的一些笔记',
  Description: '我是一个LINUX的小白，主要记录下我的一些折腾的过程。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  Author: 'Wayne',
  Motto: '机会留给有准备的人.',
  Avatar: 'https://img.orzorg.eu.org/v2/jv0cvXe.jpeg',
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    { text: '朋友', link: '/links', icon: '/assets/images/svg/Navs/links.svg' },
    { text: '动态', link: '/talking', icon: '/assets/images/svg/Navs/talking.svg' },
    { text: '昔日', link: '/archives', icon: '/assets/images/svg/Navs/archives.svg' },
    { text: '留言', link: '/message', icon: '/assets/images/svg/Navs/message.svg' },
    { text: '关于', link: '/about', icon: '/assets/images/svg/Navs/about.svg' },
    { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: '/assets/images/svg/Navs/link.svg' },
  ],
  // 侧边栏个人网站
  WebSites: [
    { text: 'Github', link: 'https://github.com', icon: '/assets/images/svg/WebSites/github.svg' },
    { text: '韩小韩API', link: 'https://baidu.com', icon: '/assets/images/svg/WebSites/api.svg' },
    { text: '每日热榜', link: 'https://', icon: '/assets/images/svg/WebSites/hot.svg' },
    { text: '骤雨重山图床', link: 'https://img.orzorg.eu.org', icon: '/assets/images/svg/WebSites/img.svg' },
    { text: 'HanAnalytics', link: 'https://baidu.com', icon: '/assets/images/svg/WebSites/analytics.svg' },
  ],
  // Cover 使用绝对路径
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  CreateTime: '2021-09-01',
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://tools-api.vvhan.com',
    'https://pagead2.googlesyndication.com',
    'https://lf9-cdn-tos.bytecdntp.com',
    'https://registry.npmmirror.com',
    'https://npm.elemecdn.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://meting-dd.2333332.xyz/api',
  // 评论组件 Twikoo
  Twikoo: { envId: 'https://twikoo.vvhan.com/.netlify/functions/twikoo' },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-xxxxxx',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
}
