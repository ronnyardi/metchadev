import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const { contentYaml, allCareerYaml } = data
  // const { allProjectsYaml, allCertificationsYaml } = data
  return (
    <Layout>
      <header>
        <h1>{contentYaml.name}</h1>
        <p>{contentYaml.contact}</p>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>{contentYaml.bio}</p>
        </section>
        {<section id="career">
          <h2>Career</h2>
          <div>
            {allCareerYaml.nodes[0].career.map((item, index) => (
              <div key={index}>
                <h3>{item.position} at {item.company}</h3>
                <p>{item.duration}</p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>
        /* <section id="projects">
          <h2>Projects</h2>
          <div>
            {allProjectsYaml.nodes.map((project, index) => (
              <div key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="certifications">
          <h2>Certifications</h2>
          <div>
            {allCertificationsYaml.nodes.map((cert, index) => (
              <div key={index}>
                <h3>{cert.name}</h3>
                <p>{cert.authority}</p>
                <p>{cert.date}</p>
              </div>
            ))}
          </div>
        </section> */}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlogsYaml {
      nodes {
        content
        date
        title
      }
    }
    contentYaml {
      name
      contact
      bio
    }
    allCareerYaml {
      nodes {
        career {
          company
          details
          duration
          position
        }
      }
    }
  }

`

export default IndexPage
