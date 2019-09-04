import React from "react";
import { Tab, TabBar } from "@rmwc/tabs";

// CSS
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

export default function TabList() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <TabBar
      activeTabIndex={activeTab}
      onActivate={evt => setActiveTab(evt.detail.index)}
    >
      <Tab>Recent</Tab>
      <Tab>Popular</Tab>
    </TabBar>
  );
}
