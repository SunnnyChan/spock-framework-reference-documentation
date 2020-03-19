// .vuepress/config.js
module.exports = {
  title: 'Spock Framework Reference Doc 中文翻译',  // 设置网站标题
  description : "",
  base : '/spock-framework-reference-documentation/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],

    sidebar: [
      {
        title: 'Spock Reference',   // 必要的
        path: '/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}
