import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const { aboutYaml, careerYaml, projectsYaml, certificationsYaml } = data

  return (
    <Layout>
      <header>
        <h1>{aboutYaml.name}</h1>
        <p>{aboutYaml.contact}</p>
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>{aboutYaml.bio}</p>
        </section>
        <section id="career">
          <h2>Career</h2>
          <div>
            {careerYaml.career.map((item, index) => (
              <div key={index}>
                <h3>{item.position} at {item.company}</h3>
                <p>{item.duration}</p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div>
            {projectsYaml.projects.map((project, index) => (
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
            {certificationsYaml.certifications.map((cert, index) => (
              <div key={index}>
                <h3>{cert.name}</h3>
                <p>{cert.authority}</p>
                <p>{cert.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutYaml {
      name
      contact
      bio
    }
    careerYaml {
      career {
        position
        company
        duration
        details
      }
    }
    projectsYaml {
      projects {
        title
        description
      }
    }
    certificationsYaml {
      certifications {
        name
        authority
        date
      }
    }
  }
`

export default IndexPage
