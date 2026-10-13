# AMC 至善车队项目展示页

本仓库是“世界模型驱动的端到端自动驾驶闭环决策控制技术研发”的中文展示网页，基于纯 HTML、CSS 和少量 JavaScript。网页文件位于 `docs/`，可直接部署到 GitHub Pages。

## 本地预览

```powershell
python -m http.server 8000 --directory docs
```

浏览器访问 `http://localhost:8000/`。

## 修改与更新

- 页面内容：`docs/index.html`
- 页面样式：`docs/assets/css/style.css`
- 视频素材：`docs/assets/gifs/video/`
- 项目图片：`docs/assets/figures/`
- 项目文档：`docs/assets/paper/`（仅在本地保存，不上传到公开仓库）

修改后在仓库根目录执行：

```powershell
git add .
git commit -m "Update project page"
git push origin main
```

网页内容依据本地 `docs/assets/paper/` 中的参赛作品简介、项目文档与 Word 文稿整理。展示图从 Word 文稿提取；页面未把文稿中的目标指标当成已取得的实验结果。
