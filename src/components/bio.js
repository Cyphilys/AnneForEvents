import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import { List, Avatar, Divider } from "antd"

const Bio = () => (
  <StaticQuery
    query={
      graphql`
        query {
          site {
            siteMetadata {
              pdg,
              bio,
              pdgImage
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Divider>Qui sommes-nous ?</Divider>
        <List.Item style={{paddingLeft: "50px", paddingRight: "50px"}}>
          <List.Item.Meta
            avatar={
              <Avatar
                size={82}
                src={data.site.siteMetadata.pdgImage}
              />
            }
            title={<Link to="/about">{data.site.siteMetadata.pdg}</Link>}
            description={<p>{data.site.siteMetadata.bio}</p>}
          />
        </List.Item>
      </>
    )}
  />

)

export default Bio
