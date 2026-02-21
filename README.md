# 穿堂风Simona personal site (Next.js App Router)

极简个人网站骨架，基于 Next.js + TypeScript + Tailwind CSS，全部页面从 `/content/site.ts` 读取内容。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 静态导出（GitHub Pages）

项目已配置：

- `output: "export"`
- `trailingSlash: true`
- `basePath` 与 `assetPrefix` 由 `NEXT_PUBLIC_BASE_PATH` 控制

### basePath 配置规则

- 根域名仓库（`username.github.io`）：
  - `NEXT_PUBLIC_BASE_PATH=""`
- 子路径仓库（`username.github.io/<repo>`）：
  - `NEXT_PUBLIC_BASE_PATH="/<repo>"`

本仓库的 workflow 会自动判断并设置该环境变量。

## GitHub Pages 设置

1. 进入仓库 `Settings` -> `Pages`
2. 在 `Build and deployment` 中选择 `GitHub Actions`
3. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署 `out/`

## 路由

- `/`
- `/podcasts`
- `/newsletter`
- `/book`
- `/projects`
- `/talk`
