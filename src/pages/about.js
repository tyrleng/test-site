import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

// const AboutPage = () => {
//   return (
//       <main>
//         <title>About Me</title>
//         <h1>About Me</h1>
//         <p>Hi There! I created this site with Gatsby</p>
//         <Link to = "/">Back to Home</Link>
//       </main>
//   )
// }

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>I'm not actually proud of it since its just copy paste XD</p>
    </Layout>
  )
}

export default AboutPage