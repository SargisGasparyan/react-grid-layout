import GridLayout from "react-grid-layout";
import React from 'react'
export class MyFirstGrid extends React.Component {
  render() {
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
          a
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
          b
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          c
        </div>
        <div key="d" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          d
        </div>
        <div key="e" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          e
        </div>
      </GridLayout>
    );
  }
}