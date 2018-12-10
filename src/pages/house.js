import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

const SecondPage = (data) => (
  <Layout>
    <div className="house-page">
      <Link className="back" to="/"> Назад </Link>
      <div className="house-page__image">
        <img src={data.pageContext.image} alt=""/>
      </div>
      <div className="house-page__info">
        <h1 className="house-page__title">{data.pageContext.title}</h1>
        <div className="house-page__businessType">{data.pageContext.businessType}</div>
        <div className="house-page__price">{data.pageContext.businessType === 'Сдача' ? data.pageContext.price + ' руб./мес.' : data.pageContext.price + ' руб.'}</div>
      </div>
      <h3>Описание:</h3>
      <p>{data.pageContext.description}</p>
    </div>
  </Layout>
)

export default SecondPage
