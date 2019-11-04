import React from 'react';
import { TabButton } from './Tabs.styled';
import { useTabReducer } from '../store';

export const Tab = ({ id, label }) => {
    const { state, dispatch } = useTabReducer();
    const [startTransition] = React.useTransition();
    const setHighlightedTab = () => dispatch({
        type: "selectTab",
        selectedTab: id
    });

    const setVisibleTab = () => dispatch({
        type: "showTab",
        visibleTab: id
    })
    const handleTabClick = () => {
        startTransition(() => {
            setHighlightedTab();
            setVisibleTab();
        })
    }
    return (
    <TabButton
        isSelected={id === state.selectedTab}
        onClick={handleTabClick}
    >
        {label}
    </TabButton>
    )
}