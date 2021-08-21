import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <h5>
          <Link to="/about">about</Link>
        </h5>
      </nav>
      </>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className="content-extend">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>, Custom by Toki - Karen Carnaval
      </footer>
    </div>
  )
}

export default Layout
