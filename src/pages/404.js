import React from "react"
import { Link } from 'gatsby';

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="notFound flex-center">
      <h1>404 ERROR! PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>

      <Link to="/">Return to home</Link>
    </section>
  </Layout>
)

export default NotFoundPage
