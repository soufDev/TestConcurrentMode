import React from 'react';
import { Tab } from './Tab';
import { TabsHeader } from "./Tabs.styled";
export const Tabs = () => {
    return (
       <TabsHeader>
            <Tab id={1} label="Summary" />
            <Tab id={2} label="Stats" />
            <Tab id={3} label="Reviews" />
       </TabsHeader>
    )
}