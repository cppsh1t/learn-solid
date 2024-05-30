import { Shape as OriginShape, type Node } from "@antv/x6";
import { HTML } from "@antv/x6/lib/shape/html";
import { JSX } from "solid-js";
import { render } from 'solid-js/web';

type SolidShapeConfig = Node.Properties & {
  shape: string;
  component: () => JSX.Element;
  effect?: (keyof Node.Properties)[];
  inherit?: string;
};

export function register(config: SolidShapeConfig) {
  const ele = document.createElement('div')
  render(config.component, ele)
  const htmlConfig = { ...config };
  htmlConfig["html"] = () => {
    return ele;
  };
  OriginShape.HTML.register(htmlConfig as unknown as HTML.HTMLShapeConfig);
}
