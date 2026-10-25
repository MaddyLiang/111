# Kyu, My Universe

一部可以探索的虚构私人手机：包含锁屏、桌面、消息剧情、日历、相册、回忆、备忘录、音乐演示与设置。所有与金奎彬有关的私人关系、聊天、来电、动态及回忆均为虚构粉丝创作，不代表现实关系，也不隶属于艺人或其所属机构。

## 本地运行

1. 安装 Node.js 20 或更新版本（可从 nodejs.org 获取）。
2. 在项目文件夹打开终端，运行 `npm install`。
3. 运行 `npm run dev`，打开终端显示的本地网址体验。
4. 发布前运行 `npm run build`，生成的网站位于 `dist` 文件夹。

## GitHub Pages 部署

1. 在 GitHub 新建一个名为 `kyu-my-universe` 的公开仓库。
2. 将本文件夹中的项目文件上传到仓库，提交到 `main` 分支。
3. 打开仓库的 **Settings → Pages**，在 Build and deployment 中选择 **GitHub Actions**。
4. 等待 **Actions** 页的 Deploy to GitHub Pages 工作流完成，网站地址会显示为 `https://你的用户名.github.io/kyu-my-universe/`。
5. 如仓库名不同，请在 `vite.config.ts` 将 `/kyu-my-universe/` 改成 `/<仓库名>/` 后重新提交。用户名主页仓库（`用户名.github.io`）则将 base 改成 `/`。

## 后续替换内容

- 剧情对白及选项：`src/story/chapters.ts`。
- 壁纸：在 `src/styles.css` 修改 `.wall-one`、`.wall-two`、`.wall-three` 的 CSS 背景。
- 照片：把有权使用的素材放进 `public/assets/photos/`；当前版本以原创 CSS 纪念卡呈现，不会抓取艺人私人照片。
- 界面样式：`src/styles.css`；交互和 App 组件：`src/App.tsx`。
- 游戏进度存放在当前浏览器的本地存储，可在 Settings 导出/导入 JSON。卸载浏览器或清理网站数据前请先导出。

## 当前体验边界

这是无后端的本地演示作品。电话、天气、音乐播放均为明确标记的模拟界面，不调用真实设备电话、麦克风或天气服务；没有使用艺人音频或真实私人照片。解锁锁屏的默认密码为 `0405`。
