---
title: 开始菜单搜索卡死：一次 Windows 排障记录
date: 2026-05-27
updated: 2026-05-27
categories:
  - 疑难杂症
tags:
  - Windows
  - 排障
---

## 环境

- 设备：OMEN by HP Gaming Laptop 16-wf0xxx
- 系统：Windows 11 专业版，版本号 25H2，操作系统版本 26200.7840
- 体验包：Windows 功能体验包 1000.26100.291.0
- 安装日期：2026/2/7

## 现象

系统原来是 Windows 11 家庭版，切换到专业版之后，开始菜单搜索有概率直接卡死，点击无反应。

## 尝试一：关掉搜索的各类开关

做法：设置 → 隐私和安全性 → 搜索，关闭「在历史记录中搜索」「显示搜索要点」「搜索我的账户」等四项开关。

结果：**没用，还是卡死。**

参考：[win11 开始菜单搜索卡死，点击无反应 - Microsoft Q&A](https://learn.microsoft.com/zh-cn/answers/questions/5631895/win11)

## 尝试二：重置搜索应用、重建索引、检查系统文件

1. 重新注册 Windows 搜索应用：

```powershell
Get-AppXPackage -AllUsers -Name Microsoft.Windows.Search | ForEach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}
# 重新注册 Windows 搜索应用
```

完成后重启计算机。

2. 重建搜索索引：控制面板 → 搜索「索引选项」→ 高级 → 「索引设置」选项卡 → 重建。

3. 检查系统文件完整性：

```powershell
sfc /scannow
# 扫描和修复系统文件
Dism /Online /Cleanup-Image /RestoreHealth
# 部署映像服务和管理工具
# 对当前正在运行的操作系统进行操作
# 清理和修复系统映像
```

结果：**在步骤 1 结束、进行步骤 2 的过程中，问题不再出现。**

但一段时间后又复发了——具体触发场景是在搜索里找一个没安装的 App（Music），点了商店推荐的应用时。

参考：[windows 搜索界面卡死 - Microsoft Q&A](https://learn.microsoft.com/zh-cn/answers/questions/5774194/windows)

## 尝试三：等系统更新

后来 Windows 更新了开始菜单，这个问题似乎就解决了。

## 一点感想

这次排查的收获不是那几条命令，而是发现问题的边界：**关掉所有能关的开关都没用，说明不是配置问题；重新注册搜索应用就恢复了，说明是应用本身的状态坏了。** 有了这个判断，后面再遇到同类问题，就不用再从头猜一遍。

顺带记一条还没解决的：同一台机器偶发无端黑屏重启，暂时归为硬件层面的通病嫌疑，等再出现、并且有空的时候走售后。
