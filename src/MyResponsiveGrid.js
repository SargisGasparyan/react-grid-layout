import { Responsive, WidthProvider } from "react-grid-layout";
import React from 'react'
const ResponsiveGridLayout = WidthProvider(Responsive);

export class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layout = [
        { i: "a", x: 0, y: 0, w: 4, h: 1 },
        { i: "b", x: 4, y: 0, w: 4, h: 1 },
        { i: "c", x: 8, y: 0, w: 4, h: 1 },
        
      ];
    return (
      <ResponsiveGridLayout
        className="layout"
        isDragable={true}
         isResizable={true}
        layouts={this.layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
            <div key="3">3</div>
            <div key="1">1</div>
            <div key="2">2</div>
      </ResponsiveGridLayout>
    );
  }
}