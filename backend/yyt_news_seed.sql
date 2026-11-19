-- 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-- 科技新闻表初始化脚本（同 yyt_database.md 记录 3）

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
