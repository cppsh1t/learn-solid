import { Graph as XGraph } from "@antv/x6";

function Graph() {
  XGraph.registerNode("custom-node", {
    inherit: "rect",
    width: 100,
    height: 40,
    markup: [
      {
        tagName: "rect",
        selector: "body",
      },
      {
        tagName: "image",
        selector: "img",
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
        fill: "#fff",
        rx: 6,
        ry: 6,
      },
      img: {
        "xlink:href":
          "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
        width: 16,
        height: 16,
        x: 12,
        y: 12,
      },
    },
  }, true);
  let container: HTMLDivElement | undefined;
  const content = <div ref={container}>nothing now</div>;
  const graph = new XGraph({
    container: container,
    width: 1400,
    height: 800,
    panning: true,
    mousewheel: true,
    background: {
      color: "#1f1f1f",
    },
    grid: {
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#434242", // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: "#434242", // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  });
  // graph.addNode({
  //   shape: "rect",
  //   x: 100,
  //   y: 40,
  //   width: 100,
  //   height: 40,
  // });
  const source = graph.addNode({
    shape: 'custom-node', // 可以直接使用上面注册过的 shape
    x: 40,
    y: 40,
    label: 'hello',
  })

  const target = graph.addNode({
    shape: 'custom-node',
    x: 160,
    y: 180,
    label: 'world',
  })

  graph.addEdge({
    source,
    target,
    attrs: {
      line: {
        stroke: '#fff',
        strokeWidth: 3,
        targetMarker: null 
      },
    },
  })

  graph.centerContent()
  return content;
}

export default Graph;
