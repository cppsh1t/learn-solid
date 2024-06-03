import { For, JSX } from "solid-js";
import Counter from "../components/Counter";
import ErrorControl from "../components/ErrorControl";
import Graph from "../components/Graph";
import Sleep from "../components/Sleep";
import { Route, Router } from "@solidjs/router";
import App from "../App";
import SwitchTest from "../components/SwitchTest";
import LifeTest from "../components/LifeTest";
import Nest from "../components/Nest";
import MergeTest from "../components/MergeTest";
import SplitTest from "../components/SplitTest";
import ChildrenTest from "../components/ChildrenTest";
import TailwindTest from "../components/TailwindTest";
import UserShow from "../components/UserShow";

interface RouterConfigItem {
  url: string;
  component: () => JSX.Element;
  children?: RouterConfigItem[];
}

interface RouterConfig {
  baseUrl: string;
  children: RouterConfigItem[];
}

const routerConfig: RouterConfig = {
  baseUrl: "/learn-solid",
  children: [
    {
      url: "/",
      component: App,
    },
    {
      url: "/counter",
      component: Counter,
    },
    {
      url: "/error",
      component: ErrorControl,
    },
    {
      url: "/graph",
      component: Graph,
    },
    {
      url: "/sleep",
      component: Sleep,
    },
    {
      url: "/switch",
      component: SwitchTest
    },
    {
      url: "/life",
      component: LifeTest
    },
    {
      url: "/nest",
      component: Nest
    },
    {
      url: '/merge',
      component: MergeTest
    },
    {
      url: '/split',
      component: SplitTest
    },
    {
      url: '/children',
      component: ChildrenTest
    },
    {
      url: '/tailwind',
      component: TailwindTest
    },
    {
      url: '/usershow',
      component: UserShow
    }
  ],
};

function processRouterConfigItem(parentUrl: string, config: RouterConfigItem) {
  const arr = [] as { url: string; component: () => JSX.Element }[];
  arr.push({ url: `${parentUrl}${config.url}`, component: config.component });
  if (config.children) {
    for (const childConfig of config.children) {
      const childArr = processRouterConfigItem(
        `${parentUrl}${config.url}`,
        childConfig
      );
      arr.push(...childArr);
    }
  }
  return arr;
}

export function getRouterConfig() {
  const arr = [] as { url: string; component: () => JSX.Element }[];
  for (const childConfig of routerConfig.children) {
    const childArr = processRouterConfigItem(routerConfig.baseUrl, childConfig);
    arr.push(...childArr);
  }
  return arr;
}

export function doRouting() {
  const arr = getRouterConfig();
  return (
    <Router>
      <For each={arr}>
        {(item) => {
          console.log(`map ${item.component.name} to ${item.url}`);
          return <Route path={item.url} component={item.component}></Route>;
        }}
      </For>
    </Router>
  );
}
