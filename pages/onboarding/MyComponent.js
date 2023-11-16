import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';
class MyComponent extends Component {
    components = {
        page1:Page1,
        page2:Page2,
        page3:Page3,
        page4:Page4,
        page5:Page5,
        page6:Page6,
        page7:Page7,
        page8:Page8,
        page9:Page9,
        page10:Page10,
        page11:Page11,
        page12:Page12,
        page13:Page13
    };
    render() {
       const TagName = this.components[this.props.tag || 'page1'];
       return <TagName />
    }
}
export default MyComponent;