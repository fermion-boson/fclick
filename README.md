# fclick
  For js : click, double-click, long-press, etc.
  对元素进行单击、双击和长按等操作
  
# function/功能
  1. 同一个元素简单的单击、双击和长按功能
  2. 也可以在初始化时用getElementsByClassName传递一个元素组

# note/注意
  1. 将元素初始化后，元素内的文本将不可选择
  2. 元素将默认变成手型鼠标
  
#  Example/例子
```
var fc=new fclick(document.getElementsByClassName('block'));
fc.single(function(e){
    //单击
    //e为event元素
    //e.target可以获取被点击的元素
    //e.clientX可以获取鼠标X轴位置，Y轴同理
    console.log("single"+e.clientX);
})
fc.double(function(e){
    //双击
    console.log("double"+e.target.getAttribute("id"));
})
fc.longPress(function(e){
    //长按
    console.log("longPress"+e.target.getAttribute("id"));
})
```

