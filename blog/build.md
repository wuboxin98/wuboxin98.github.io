好，我们直接走**可落地版本**。
目标：**30分钟内上线一个可访问的 Markdown 个人网站。**

我给你一套工程师视角的标准流程，默认你用 Mac + Node。

---

# 🚀 方案一：VitePress + GitHub Pages 完整实操

## 第一步：准备环境

确认本地有：

```bash
node -v
npm -v
```

建议 Node ≥ 18

没有就去装 Node。

---

# 🏗 第二步：创建 VitePress 项目

### 1️⃣ 创建目录

```bash
mkdir boxin-blog
cd boxin-blog
```

### 2️⃣ 初始化

```bash
npm init -y
npm install -D vitepress
```

### 3️⃣ 初始化 VitePress

```bash
npx vitepress init
```

会问你：

* Site title → `Boxin`
* Description → `Agent Engineer Notes`
* Theme → 默认
* Use TypeScript → yes
* Add search → yes

完成后目录结构类似：

```
.
├── docs
│   ├── index.md
│   └── .vitepress
```

---

# ▶ 第三步：本地运行

```bash
npm run docs:dev
```

打开：

```
http://localhost:5173
```

现在你已经有一个 Markdown 网站了。

你改 `docs/index.md`，浏览器自动刷新。

---

# ✍ 写第一篇文章

新建文件：

```
docs/agent/skill.md
```

写：

```md
# 什么是 Agent Skill

## 核心定义

Skill 是对工具能力的抽象封装。

## 示例

- function
- tool
- skill
```

然后改 `docs/index.md`：

```md
# Boxin 的技术博客

- [Agent Skill](./agent/skill.md)
```

你就能点进去。

---

# 🌍 第四步：部署到 GitHub

## 1️⃣ 创建 GitHub 仓库

去 GitHub：

New Repository

名字建议：

```
boxin-blog
```

或者：

```
boxin.github.io
```

（第二种更干净）

---

## 2️⃣ 关联远程仓库

```bash
git init
git add .
git commit -m "init blog"
git branch -M main
git remote add origin https://github.com/你的用户名/boxin-blog.git
git push -u origin main
```

---

# ⚙ 第五步：配置自动部署（关键）

创建文件：

```
.github/workflows/deploy.yml
```

内容：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 18

      - run: npm install
      - run: npm run docs:build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

**⚠️ 重要提示：路径配置**

上面的配置假设 VitePress 配置文件在 `docs/.vitepress/` 目录下。如果你的项目结构是：

```
.
├── .vitepress/     # 配置在根目录
├── index.md
└── blog/
```

那么需要将 `path` 改为：

```yaml
path: .vitepress/dist
```

---

# ⚡ 第六步：开启 GitHub Pages

进入仓库：

Settings → Pages

Build and deployment：

Source 选择：

```
GitHub Actions
```

保存。

---

# 🎉 等 1~2 分钟

访问：

```
https://你的用户名.github.io/boxin-blog/
```

如果仓库叫：

```
你的用户名.github.io
```

访问：

```
https://你的用户名.github.io
```

---

# 🎨 优化网站外观

修改 VitePress 配置文件（根据你的项目结构选择）：

```
.vitepress/config.mts        # 如果在根目录
或
docs/.vitepress/config.ts    # 如果在 docs 目录
```

**⚠️ 重要：配置 base 路径**

如果你的仓库名不是 `你的用户名.github.io`，而是其他名字（如 `boxin-blog`），**必须**配置 base 路径，否则样式会丢失：

```ts
export default {
  base: '/boxin-blog/',  // 👈 必须添加，格式：/仓库名/
  title: "Boxin",
  description: "Agent Engineer Notes",
  themeConfig: {
    nav: [
      { text: 'Agent', link: '/agent/skill' }
    ],
    sidebar: [
      {
        text: 'Agent',
        items: [
          { text: 'Skill', link: '/agent/skill' }
        ]
      }
    ]
  }
}
```

如果仓库名就是 `你的用户名.github.io`，则**不需要**设置 base。

---

# 🔥 进阶（可选）

* 买域名 → 绑定
* 加评论（giscus）
* 加统计（Google Analytics）
* 自动生成目录
* 写博客模板

---

# 🧠 给你的一个提醒

你是做 agent 开发的。

不要把博客当展示页。
把它当你的：

* 知识仓库
* 思考记录
* 技术影响力放大器

哪怕一周一篇。

一年之后差距会非常大。

---

如果你愿意，我可以下一步：

* 给你设计一个专门适合“Agent 工程师”的博客结构
* 或带你做一个带 AI Demo 的个人站

你想往“技术输出”方向，还是“个人品牌 + 机会捕捉”方向走？
