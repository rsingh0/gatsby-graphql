import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
import { gql, useQuery } from "@apollo/client"

const GET_POSTS = gql`
  query Posts {
    getPosts {
      id
      body
      createdAt
      username
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(GET_POSTS)
  
  const posts = data && data.getPosts;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
      {posts && posts.map(post => <p key={post.id}>{post.body}</p>)}
    </Layout>
  )
}
