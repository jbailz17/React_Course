import React, {Component} from 'react';

import css from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';

class Layout extends Component {

    state = {
        showSideDraw: false
    }

    sideDrawClosedHandler = () => {
        this.setState({showSideDraw: false});
    }

    sideDrawToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDraw: !prevState.showSideDraw
            }
        });
    };
    
    render () {
        return (
            <React.Fragment>
                <Toolbar drawToggleClicked={this.sideDrawToggleHandler}/>
                <SideDraw open={this.state.showSideDraw} closed={this.sideDrawClosedHandler}/>
                <main className={css.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;