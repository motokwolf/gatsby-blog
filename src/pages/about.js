import * as React from "react"
import { graphql } from "gatsby"
import imga from "../images/1.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"





const About = ({ data, location }) => {

    const siteTitle = data.site.siteMetadata.title

    return (
    <>
    <Layout location={location} title={siteTitle}>
      <Seo title="About me" />
      <h1>About this project</h1>

        <h2> Hello! I'm Toki! </h2>

        <img src={imga} alt="Header Design"/>

        <p> I'm a 2D and 3D artist living on Toronto Canada. Passionated about art, comics and animation I wish to create beautiful art and tell interesting stories.
        This is a art project blog.
        </p>
    </Layout>
        
    </>
    )}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`