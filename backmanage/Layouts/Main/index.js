import React from 'react';

import Header from '../../components/Header/index';

import SideBar from '../../components/SideBar/index';

import './index.css';

class Main extends React.Component {

    render() {

        return (
            <div className="main-wrap" >
                <SideBar />
                <div className="content">
                    <Header />
                    <div className="main_wrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;
