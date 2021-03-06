import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import { AdGrid } from '../../styles'
class Home extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("hi from home")
  }
  
  render() {
    return (
      <div>
        <Advertisment ad={this.props.mainAd} fullSize={true} handleClick={this.handleClick}/>
        <p>current value: {this.props.currentValue}</p>
        <AdGrid>
          {this.props.sideAds && this.props.sideAds.map((ad) => <Advertisment ad={ad} key={ad.id}/>)}
        </AdGrid>
        <p>current top ad value: {this.props.currentTopAdValue}</p>
      </div>
    )
  }
}
export default withMediaMask(Home)
