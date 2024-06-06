type Vector3 = {
  x: number
  y: number
  z: number
}

type Fingerprint = any

type FaceDetails = {
  walkable: boolean //此面是否允许行走
  connectorId: number //ConnectorID,相同的ConnectorID才可以相连
  fingerprint: Fingerprint //指纹,通过mesh顶点计算得到vector4数组,用以批量生成ConnectorID
  excludedNeighbours: ModulePrototype[] //想要排除在外的邻近模块原型
}

type ModulePrototype = {
  probability: number //被随机选取的概率,求熵时也需要用到
  spawn: boolean //是否可用
  faces: FaceDetails[] //6个朝向
}

type Moudle = any

type MouduleSet = any

type Slot = {
  position: Vector3 //位置
  modules: MouduleSet //可选的模块集合
  moduleHeath: number[][] //6个方向,可选模块对应的Health,Health为0时,表示不可选取
  map: Map<unknown, unknown> //地图的引用
  module: Moudle //最终选取的模块
  collapsed: boolean //是否已坍缩
}

function WaveFunctionCollapse() {
  return <div></div>
}

export default WaveFunctionCollapse
