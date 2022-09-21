Vue.set(vm._data.student.hobby,1,"学习")
Vue.set(vm._data.student,"name","张三")

vm.$set()...


Vue检测所有层次的数据

通关setter检测

检测数据是否变化
- 修改原来的数据方法
- 追加更新模板

修改数组方法
- 7大封装的api
- Vue.set() 或者 vm.$set()

set不能用于根数据以及vm


let v = document.querySelector("iframe")
let bvid = v.src
let bPage = 
https://player.bilibili.com/player.html?aid=714648475&bvid=BV1vX4y137Dp&cid=311299390&page=1&high_quality=1'

<div class="video_real"><iframe src="https://www.bilibili.com/blackboard/html5player.html?bvid=BV12W411x7df&amp;p=1" allowfullscreen="allowfullscreen"></iframe></div>