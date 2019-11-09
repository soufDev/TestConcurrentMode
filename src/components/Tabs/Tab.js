import React from "react";
import { TabButton } from "./Tabs.styled";
import { useTabReducer } from "../store";

export const Tab = React.memo(({ id, label }) => {
  const { state, dispatch } = useTabReducer();
  const [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });
  const setHighlightedTab = () =>
    dispatch({
      type: "selectTab",
      selectedTab: id
    });

  const setVisibleTab = () =>
    dispatch({
      type: "showTab",
      visibleTab: id
    });
  const handleTabClick = () => {
    setHighlightedTab();
    startTransition(() => {
      setVisibleTab();
    });
  };
  return (
    <TabButton
      isSelected={id === state.selectedTab}
      onClick={handleTabClick}
      disabled={isPending}
    >
      {label}
    </TabButton>
  );
});
