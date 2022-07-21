import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLinkText, siteTitle} from './layout.module.css'
// import MyComponent from '../components/my-component'

const Layout = ({pageTitle, children}) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("Title is " + data.site.siteMetadata.title)

  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}> <Link to = "/">Home</Link> </li>
          <li className={navLinkItem}><Link to = "/about">About</Link></li>
          <li className={navLinkItem}><Link to = "/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        {/* <MyComponent></MyComponent> */}
      </main>
    </div>
  )
}

export default Layout