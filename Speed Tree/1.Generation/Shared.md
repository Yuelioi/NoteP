共享属性

![[../../ASSETS/Pasted image 20220416161242.png]]

**Shared**

![[../../ASSETS/Pasted image 20220416111419.png]]

Pass：不知道

Boundaries 边界

First/Last：边界点

Clip：后续节点超过该范围，会被删除。

Rotation：旋转（跟 roll 效果一样？

Position：位置（

Size scalar：整体缩放

sink：下沉。与父级交界处垂直移动

pruning：修剪树枝。通过绘制曲线，决定区域是否有分叉

Extend parent：拓展父节点

- None：不扩展
- Any：扩展所有父节点
- split1：扩展父节点第 1 个分割点
- split2：扩展父节点第 2 个分割点
- skinny：扩展瘦弱处
- Fat：扩展肥胖处
- Break Only：只扩展中断处
- Bottom：扩展底部

Click place：不知道

Knockout：淘汰。控制整体数量。比如 4 叉 x 4 ，选择 0.5 。现在可能是 3 2 2 1 = 4x4x0.5 = 8

Force Containers：强制包括。只在某节点创建/不在某节点创建

Masks：贴图，只在贴图内创建

