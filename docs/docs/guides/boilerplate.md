# 脚手架

alita 官方提供了一个脚手架 ，可以轻松快速创建一个项目：

```bash
pnpx create-alita@next
```

这个命令会安装 `create-alita` 脚手架并自动运行，运行后提供了两个可选项可以选择：

1. Pick Npm Client - 选择 Npm 客户端

你可以从以下几个选项中选择习惯的 Node 依赖管理工具：

- [npm](https://www.npmjs.com/)
- [cnpm](https://github.com/cnpm/cnpm)
- [tnpm](https://web.npm.alibaba-inc.com/)
- [yarn](https://yarnpkg.com/)
- [pnpm](https://pnpm.io/) (alita 官方推荐)

2. Pick Npm Registry - 选择 Npm 源

- [npm](https://www.npmjs.com/)
- [taobao](https://npmmirror.com/)

选择后会自动生成一个最基本的 alita 项目，并根据选中的客户端和镜像源安装依赖：

```text
.
├── assets
│    └── yay.jpg
├── layouts
│    ├── index.less
│    └── index.tsx
├── node_modules
├── package.json
├── pages
│    ├── docs.tsx
│    └── index.tsx
├── pnpm-lock.yaml
├── tsconfig.json
└── typings.d.ts
```

这样就一键完成 alita 项目的初始化了。
