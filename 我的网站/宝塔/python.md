https://www.daniao.org/13786.html
https://blog.csdn.net/qq_36564503/article/details/122910412

## 查看位置

PYTHON 位置 :/ www/server/panel/pyenv/bin
查看全部位置: ps -aux|grep python

## 切换python版本

### 一次性

pyenv versions

![[../../ASSETS/Pasted image 20220906154552.png]]

pyenv shell 3.8.5
cd
python -V

### 永久

```shell
修改 /etc/profile 最后一行
把 /www/server/panel/pyenv/bin/ 放最前面
export PATH=/www/server/panel/pyenv/bin/:$PATH:$GOBIN:$GOPKG:$GOPATH/bin

再次查看 已经在最前面了
source /etc/profile
echo $PATH
```

![[../../ASSETS/Pasted image 20220906173139.png]]

## 切换安装源

```shell
# 临时切换 
pip install 插件名 -i https://pypi.douban.com/simple/
# 永久切换
pip config set global.index-url https://pypi.python.org/simple
```


-  https://pypi.mirrors.ustc.edu.cn/
- https://pypi.python.org/simple
- https://pypi.tuna.tsinghua.edu.cn/simple
- https://mirrors.aliyun.com/pypi/simple/
- https://pypi.mirrors.ustc.edu.cn/simple/
- https://pypi.hustunique.com/
- https://pypi.sdutlinux.org/ 
- https://pypi.douban.com/simple/


## 虚拟环境

以下作废 直接用python项目管理器

---


```shell
pip install virtualenv
pip install virtualenvwrapper
```
创建

cd 主目录(不需要新建项目目录)

```c
cd /www/python/mybot
创建: virtualenv nonebotP

进入: source nonebotP/bin/activate
退出: deactivate
```



