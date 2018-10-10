# 网易云复盘：云计算前端这一年（AngularJS粉慎入）

本文由[网易云](https:https://www.163yun.com/?tag=M_zhihu_32400742) 发布

作者：赵雨森

2017年的前端已然没有剧烈的变动，但发展势头仍然不减。语言、标准、框架和库逐渐稳定和完善，各团队再也不用花大把精力放在造轮子上，而更多的是去积累所需的组件库、开发合适的工具以及整合自己的解决方案。

我们云计算技术部前端开发组也不例外，在与云计算其他组一起度过了网易云基础服务（网易蜂巢）去年的快速发展期之后，现在的主要目标已经转为**如何更好地加快迭代效率、提升用户体验、提高网页性能**。针对这个目标，我们组在这一年中对前端技术、工作模式、技术积累等方面做了整体的优化与演进。

## 前端技术

## 技术选型

![](https://pic3.zhimg.com/v2-bf11c774c4a8877df38b08083041f3d5_b.jpg)

年初，在调研和讨论市面上的各个框架之后，我们决定**抛弃老的 _NEJ+Regular+MCSS_ 架构，改用 _Webpack+Vue+PostCSS+CSSModules_ 架构**。

![](https://pic4.zhimg.com/v2-3b49f4a6a8f0470862c68cd6fa1f0f41_b.jpg)

主要从以下这些方面考虑：

*   开发效率（Webpack的热更新 + Vue组件的局部热更新 > 传统开发模式的手动刷新）
*   性能问题（Vue的依赖管理 < Regular的脏检查）
*   潜在 bug（Vue的单向流 < 数据流向不明确的双向绑定，CSSModules局部class < 传统CSS全局class）
*   框架流行度（Webpack+Vue+PostCSS > NEJ+Regular+MCSS）
*   学习曲线（Vue < NEJ+Regular）
*   文档完善性（Webpack+Vue+PostCSS > NEJ+Regular+MCSS）
*   社区支持（Webpack+Vue+PostCSS > NEJ+Regular+MCSS）
*   ...

以下两张表是我们针对各个框架的调研结果，放出来供大家参考：

![](https://pic4.zhimg.com/v2-e752fec5ce87a5073afbf7c0bcaf165f_b.jpg)![](https://pic3.zhimg.com/v2-4b1597663b187086887f73b2b1d913ab_b.jpg)

目前除了网易云基础服务控制台正在迁移架构之外，后来开发的系统如域名系统、运营平台、专属云管理平台等均已采用新的架构方案。

## 组件库

为了减少开发成本、保证各项目用户体验的一致性，我们根据设计组制定的规范，实现了一套独立的组件库——CloudUI。

![](https://pic2.zhimg.com/v2-d675e30d2657fae739db130d58dc0e8e_b.jpg)

目前 CloudUI 已包含 50 多个组件、3 套主题，实现完善度达到 80%，业务覆盖率达到 75%，同时支持了多个云计算项目。

![](https://pic4.zhimg.com/v2-ed5f2ce2d369d4e420a524b70820332b_b.jpg)

经过几个月的实践，我们已经练就一套成熟的迭代流程，能够快速响应、快速开发、快速发布，并且能输出细致的 ChangeLog：

<div>

    v0.1.25修复：- 移除对`u-modal`组件增加`heading`属性和样式修改，- 修复`u-table-view`组件在`display`值为`none`的情况下，显示错乱问题增强：- 更新组件`u-line-chart`样式，增加到20种不同颜色线段和超出设置默认线段颜色

</div>

## 全栈化

![](https://pic4.zhimg.com/v2-96635c917f3d56bb3fcd7736bae67dc1_b.jpg)

今年我们组在全栈方面做了一些实践与积累，团队逐渐向全栈化发展，一部分组员侧重于对传统前端中多端的研究以及与设计师进行深度合作，另一部分组员侧重于研究 Node.js 全栈开发模式。

![](https://pic3.zhimg.com/v2-d806a3d7e2a42734831ea1e10b45b441_b.jpg)

下半年我们采用 Vue+Koa 的架构重构了域名系统，并积累了一套相应的工具模板与实践经验。

## 工具链

根据前面的一系列技术选型与实践方案，我们研发了相应的一系列工具。

## 前端方面

*   集成构建工具
*   icon-font-loader
*   svg-classic-sprite-loader
*   vue-multifile-loader
*   vue-markdown-html-loader

## 后端方面

*   集成开发工具
*   工程模板与核心包
*   由 JSDoc 注释根据生成 Swagger 接口文档

## 测试与监控

为了保证业务的代码质量与运行的稳定性，我们从两个维度做了相应工作：

*   给网易云基础服务控制台的主要模块添加了 e2e 测试，录制 UIRecorder 脚本并添加到持续集成。
*   产品接入 APM，进行前端的性能统计与错误统计。

![](https://pic3.zhimg.com/v2-78d8b4137a9eb6dc6169114ffb9d908c_b.jpg)

## 工作模式

为了提高整个团队的技术实力、加强每个组员的技术深度，我们在工作模式上也做一定调整。由以前每个人的单一业务线改为业务+技术两条线。业务线需要技术线来提升质量与效率，技术线也离不开业务线的实践和经验。

![](https://pic4.zhimg.com/v2-6278e60f59d743848b30a575e1ade214_b.jpg)

## 学习分享

关于团队内的知识积累与学习分享问题，我们也渐渐摸出了一些套路：

*   利用 GitLab 的 MergeRequest，双人结队 CodeReview
*   两周一次的前端组分享
*   与周边部门的合作交流
*   图书管理机制

## 总结

在这一年里，我们组承担了不少项目，肩负了更多的责任。

在这一年里，我们完成了技术的转型与积累，已经摆好姿态去迎接明年新的挑战。

在这一年里，我们还没有做太多的技术输出。一大波我们组的文章即将到来，咱们网易前端技术大会再见~

* * *

## 最后祭出我们的大杀器

![](https://pic2.zhimg.com/v2-43f548e29cf26033b730c7e0357314a2_b.jpg)

**相关阅读**：

[网易蜂巢（网易云基础服务）的工业化前端架构](https:http://blog.163yun.com/archives/759)

了解 **网易云** ：

网易云官网：[https://www.163yun.com/](https:https://www.163yun.com/?tag=M_zhihu_32400742)

新用户大礼包：[https://www.163yun.com/gift](https:https://www.163yun.com/gift?tag=M_zhihu_32400742)

网易云社区：[https://sq.163yun.com/](https:https://sq.163yun.com/?tag=M_zhihu_32400742)