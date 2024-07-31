import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div>
        {children}
        <footer>
          <p>&copy; 2024 Ronny Ardi</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
