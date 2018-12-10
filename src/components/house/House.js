import React, { Component } from 'react'
import { Link } from 'gatsby'

import './house.css'

class House extends Component {
  render() {
    return (
      <Link to={'/house/' + this.props.houseId} className="house">
        <div className="house__image">
          <img src={this.props.image} alt={this.props.title}/>
        </div>
        <div className="house__info">
          <div className="house__title">{this.props.title}</div>
          <div className="house__business-type">{this.props.businessType}</div>
          <div className="house__price">{this.props.businessType === 'Сдача' ? this.props.price + ' руб./мес.' : this.props.price + ' руб.'}</div>
        </div>
      </Link>
    )
  }
}

export default House
