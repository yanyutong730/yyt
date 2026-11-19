<!--
姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-->

# yyt_database.md — 数据库变更记录

> 本文件一律追加写入，禁止覆盖已有内容。
> 每次建表、改表或插入数据后，按执行顺序追加对应 SQL 语句（含测试数据 INSERT），
> 要求仅凭本文件即可在新机器上完整重建数据库。

---

## 初始化说明

- 时间：2026-11-19 13:53
- 当前阶段仅完成项目骨架搭建，尚未创建业务表，因此暂无可执行的建表 SQL。
- 后续每次数据库变更将按执行顺序追加 SQL 语句至此文件。

---

## 记录 2

- 时间：2026-11-19 14:00
- 操作：创建项目数据库

```sql
CREATE DATABASE IF NOT EXISTS yyt_zhihu
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

---

## 记录 3

- 时间：2026-11-19 14:10
- 操作：创建科技新闻表并插入 8 条测试数据

```sql
CREATE TABLE IF NOT EXISTS yyt_tech_news (
  yyt_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '新闻编号',
  yyt_title VARCHAR(200) NOT NULL COMMENT '新闻标题',
  yyt_category VARCHAR(50) NOT NULL COMMENT '新闻分类',
  yyt_source VARCHAR(100) NOT NULL COMMENT '新闻来源',
  yyt_publish_date DATE NOT NULL COMMENT '发布日期',
  yyt_summary VARCHAR(500) NOT NULL COMMENT '内容摘要',
  yyt_link VARCHAR(300) NOT NULL COMMENT '原文链接'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO yyt_tech_news (yyt_title, yyt_category, yyt_source, yyt_publish_date, yyt_summary, yyt_link) VALUES
('国产大模型发布新一代多模态版本，推理成本下降四成', '人工智能', '科技日报', '2026-11-18', '国内团队发布新一代多模态大模型，在图像理解与长文本处理上均有提升，同时推理成本较上一代下降约四成。', 'https://example.com/news/1001'),
('全球首条 2nm 芯片量产线正式投产', '半导体', '芯观察', '2026-11-17', '全球首条 2nm 工艺芯片量产线宣布投产，官方称在同等功耗下性能提升明显，首批产品将面向高端移动设备。', 'https://example.com/news/1002'),
('我国成功发射低轨宽带通信卫星组，组网进程加速', '航天科技', '新华社', '2026-11-16', '本次发射将进一步完善低轨宽带通信星座，为偏远地区提供高速网络接入能力，组网进度符合预期。', 'https://example.com/news/1003'),
('新版自动驾驶系统通过城市道路大规模路测', '智能汽车', '汽车电子报', '2026-11-15', '新版自动驾驶辅助系统完成覆盖多城市的道路测试，复杂路口通行成功率进一步提升，下周将开放体验。', 'https://example.com/news/1004'),
('开源操作系统发布长期支持版本，适配国产处理器', '基础软件', '开源中国', '2026-11-14', '主流开源操作系统发布长期支持版本，完成了对多款国产处理器的深度适配，并提供五年安全更新。', 'https://example.com/news/1005'),
('量子计算原型机实现新的纠错里程碑', '前沿科技', '科学通报', '2026-11-13', '研究团队宣布量子计算原型机在逻辑量子比特纠错方面取得进展，错误率较此前实验下降一个数量级。', 'https://example.com/news/1006'),
('智能家居互联互通标准正式落地，跨品牌设备可联动', '物联网', '家电科技', '2026-11-12', '新版智能家居互联互通标准正式实施，支持不同品牌设备间的场景联动，用户无需更换现有设备即可升级。', 'https://example.com/news/1007'),
('数据中心液冷技术应用规模扩大，PUE 降至 1.15', '云计算', 'IDC 观察', '2026-11-11', '多家云服务商扩大液冷技术在数据中心的应用规模，实测电能使用效率降至 1.15 左右，运营成本明显下降。', 'https://example.com/news/1008');
```

---

## 记录 4

- 时间：2026-11-19 14:15
- 操作：创建图文列表表并插入 8 条测试数据（图片为 frontend/images/ 下本地 SVG）

```sql
CREATE TABLE IF NOT EXISTS yyt_image_gallery (
  yyt_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '图文编号',
  yyt_title VARCHAR(200) NOT NULL COMMENT '图文标题',
  yyt_category VARCHAR(50) NOT NULL COMMENT '图文分类',
  yyt_image VARCHAR(200) NOT NULL COMMENT '图片路径',
  yyt_description VARCHAR(500) NOT NULL COMMENT '图文简介',
  yyt_source VARCHAR(100) NOT NULL COMMENT '内容来源',
  yyt_publish_date DATE NOT NULL COMMENT '发布日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO yyt_image_gallery (yyt_title, yyt_category, yyt_image, yyt_description, yyt_source, yyt_publish_date) VALUES
('新款折叠屏手机发布，屏幕折痕进一步减轻', '智能终端', '/images/yyt_gallery_phone.svg', '新一代折叠屏手机采用改进铰链结构，屏幕折痕明显减轻，整机厚度与重量同步下降。', '数字前沿', '2026-11-18'),
('轻薄本搭载新架构处理器，续航突破 20 小时', '电脑办公', '/images/yyt_gallery_laptop.svg', '新款轻薄笔记本换用新架构低功耗处理器，官方标称续航超过 20 小时，适合移动办公场景。', '电脑报', '2026-11-17'),
('智能手表新增无创健康监测功能', '可穿戴设备', '/images/yyt_gallery_watch.svg', '智能手表迎来固件更新，新增多项无创健康指标监测，并支持更精准的运动数据识别。', '穿戴科技', '2026-11-16'),
('真无线耳机实现自适应降噪与空间音频', '影音娱乐', '/images/yyt_gallery_earbuds.svg', '新款真无线耳机支持根据环境噪声自动调整降噪强度，并带来更自然的空间音频体验。', '音频世界', '2026-11-15'),
('服务机器人进入商场承担导购与巡检任务', '机器人', '/images/yyt_gallery_robot.svg', '多台服务机器人正式在大型商场投入使用，可完成导购咨询、路线指引与夜间巡检等工作。', '机器人观察', '2026-11-14'),
('工业无人机完成高压线路自动巡检', '无人机', '/images/yyt_gallery_drone.svg', '工业级无人机搭载可见光与红外双光相机，实现输电线路的自动化巡检与缺陷识别。', '低空经济', '2026-11-13'),
('平板电脑适配手写笔新协议，延迟大幅降低', '智能终端', '/images/yyt_gallery_tablet.svg', '平板电脑通过新协议适配手写笔，书写延迟降低至毫秒级，并支持更丰富的压感笔刷。', '数字前沿', '2026-11-12'),
('轻量化 VR 头显发布，佩戴舒适度提升', '虚拟现实', '/images/yyt_gallery_vr.svg', '新一代 VR 头显采用轻量化设计与新的光学方案，长时间佩戴的舒适度得到明显改善。', '虚拟现实网', '2026-11-11');
```
