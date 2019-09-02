import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Underconstruction = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "underconstruction.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}


export default Underconstruction
