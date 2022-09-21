目录说明

![[../../_Config/Attatchment/Pasted image 20220510192948.png]]

ab：压力测试

![[../../_Config/Attatchment/Pasted image 20220510193752.png]]

httpd -M 查看加载目录
httpd -t 测试配置文件是否生效


修改配置文件 需要重启 apache

DocumentRoot:
ServerName localhost
Listen 8080


hosts 文件：127.0.0.1       localhost

安装 apache：https://blog.csdn.net/weixin_43727933/article/details/115210770
安装 server：https://blog.csdn.net/lxhjh/article/details/33297535


加载 php （配置文件）并指定 php 工作（以 php 后缀的文件）

LoadModule php7_module "D:/php/php7/php7apache2_4.dll"
AddType application/x-httpd-php .php

PHP


