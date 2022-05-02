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
      <p>About child passed in zzz</p>
    </Layout>
  )
}

export default AboutPage