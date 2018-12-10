import React from 'react'
import {graphql } from 'gatsby'

import Layout from '../components/layout'
import House from '../components/house/House'

const IndexPage = ({data}) => (
  <Layout>
    <div className="grid">
      {data.allContentfulHouse.edges.map((item, index) => {
        return (
          <div key={index} className="grid__col">
            <House
              houseId={item.node.id}
              title={item.node.title}
              businessType={item.node.businessType}
              image={item.node.image.file.url}
              price={item.node.price}/>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulHouse {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
          price
          businessType
          }
      }
    }
  }`;