-- 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-- 图文列表表初始化脚本（同 yyt_database.md 记录 4）

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
