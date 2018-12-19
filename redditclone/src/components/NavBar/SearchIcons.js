import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'


library.add(faAngleDoubleUp)
library.add(faChartBar)
library.add(faToggleOn)


class SearchIcons extends React.Component {
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <div className="searchIcons">
            <span><FontAwesomeIcon icon ="angle-double-up" /></span>
            <span><FontAwesomeIcon icon ="chart-bar" /></span>
            <span><FontAwesomeIcon icon ="toggle-on" /></span>
            </div>
        )
    }
}

export default SearchIcons;