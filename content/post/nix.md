+++
date = '2026-06-23T23:29:55+08:00'
draft = false
title = 'Nix'
+++

# 在 fedora 上使用 Nix

## 介绍
[Nix](https://nixos.org/) 是一个在软件包管理和系统配置方面采用独特方法的工具。官方生成使用 Nix 可以构建可重复、可声明式且可靠的系统。

## 安装
在 Fedora 上安装 Nix 上安装很容易，我这里不使用 Nix 官网提供的脚本进行安装，而是直接使用 Fedora 的包管理器进行安装，执行以下命令即可安装然后立即启动：
``` sh
sudo dnf install nix nix-daemon
sudo systemctl enable --now nix-daemon
```
检查是否安装成功，可以试试查看 Nix 的版本:
``` sh
panc@fedora ~> nix --version
nix (Nix) 2.34.7
```