window.onload = function () {  //等待页面其他资源加载完成，在执行js代码
  //获取dom元素
  //头部dom元素
  var headerLiNodes = document.querySelectorAll('#header li');
  var headerUpNodes = document.querySelectorAll('#header li .up');
  
  //逻辑代码
  
  //初始化时第一个upnode宽度为100%
  headerUpNodes[0].style.width = '100%';
  
  //给所有li绑定点击事件
  for (var i = 0; i < headerLiNodes.length; i++) {
    //给所有的li添加下标属性
    headerLiNodes[i].index = i;
    headerLiNodes[i].onclick = function () {
      //将所有的upnodes宽度设置为0
      for (var j = 0; j < headerUpNodes.length; j++) {
        headerUpNodes[j].style.width = '';  //不会添加相应的行内样式
      }
      //将当前点击的upnode宽度设置为100%
      //this代表当前被点击的li元素
      headerUpNodes[this.index].style.width = '100%';
    }
  }

}