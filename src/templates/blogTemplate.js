import React from "react"
import Layout from "../components/layout"

const BlogTemplate = ({ pageContext }) => {
  const { title, date, content } = pageContext

  return (
    <Layout>
      <main>
        <h1>{title}</h1>
        <p>{date}</p>
        <div>{content}</div>
      </main>
    </Layout>
  )
}

export default BlogTemplate
