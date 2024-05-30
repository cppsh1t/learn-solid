import { Shape as OriginShape, type Node } from "@antv/x6";
import { HTML } from "@antv/x6/lib/shape/html";
import { JSX } from "solid-js";

type SolidShapeConfig = Node.Properties & {
  shape: string;
  component: () => JSX.Element;
  effect?: (keyof Node.Properties)[];
  inherit?: string;
};

export function register(config: SolidShapeConfig) {
  let root: HTMLDivElement | undefined;
  const nest = <div ref={root}>{config.component()}</div>;
  const htmlConfig = { ...config };
  htmlConfig["html"] = () => {
    return root;
  };
  OriginShape.HTML.register(htmlConfig as unknown as HTML.HTMLShapeConfig);
}
