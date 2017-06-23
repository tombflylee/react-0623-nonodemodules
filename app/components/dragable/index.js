// 必须脱离文档流
// 拖曳时：top=鼠标相对于页面顶部的高度-鼠标相对于拖曳对象顶部的高度
class Dragable {
  /**
   * 初始化
   *目标对象
   */
  constructor(target){
    this.target = target;
  }

  targetX;// 目标相对于窗口的X值
  targetY;

  _getMousePositionOfTarget(e){
    let x =
  }

  _getTargetPosition(){

  }
  /**
   * 判断目标是否脱离文档流
   */
  init(){
    this.target.getAttribute('display')
  }
}
