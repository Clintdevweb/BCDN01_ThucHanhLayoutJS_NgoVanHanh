import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import HeaderComponent from './HeaderComponent'
import Item from './Item'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
               {/* Header */}
                    <HeaderComponent />
                {/* Banner */}
                    <Banner />
                {/* Item */}
                    <Item />
                {/* Footer */}
                    <Footer />
            </div>
        )
    }
}
