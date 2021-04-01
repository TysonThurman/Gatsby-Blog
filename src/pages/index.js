import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithubAlt } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey, What's Up <FaGithubAlt /></h1>
    <p>Welcome to the blog</p>
  </Layout>
)

export default IndexPage
