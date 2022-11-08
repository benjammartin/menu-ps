import { createElement, Fragment, FunctionComponent } from "react";
import { INavigation } from "type/navigation";

type NavZoneProps = {
  components: any;
  navigation: any;
  className?: string;
};

export const PrismicNavigation = ({ components, navigation }: NavZoneProps) => {
  const RenderComponent = (item: INavigation): JSX.Element => {
    const Component = components[item.component] as FunctionComponent<any>;
    return createElement(
      Component,
      { key: item.id, ...item.data },
      item.items?.map((item) => RenderComponent(item))
    );
  };
  return <Fragment>{RenderComponent(navigation)}</Fragment>;
};
