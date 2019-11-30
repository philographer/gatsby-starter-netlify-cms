import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ALL_COUNT = Number.MAX_VALUE;

class SponserRoll extends React.Component {
  render() {
    const { data, count } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, idx) => {
            if (idx < count)
              return (
                <div className="is-parent column is-6" key={post.id}>
                  <article
                    className={`blog-list-item tile is-child box notification`}
                  >
                    <header>
                      {post.frontmatter.logo ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.logo,
                              alt: `featured image thumbnail for post ${post.name}`
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.name}
                        </Link>
                        <span> &bull; </span>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </header>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              );
            else return false;
          })}
      </div>
    );
  }
}

SponserRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  count: Number
};

export default ({ count }) => (
  <StaticQuery
    query={graphql`
      query SponserRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "sponser-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                name
                templateKey
                date(formatString: "MMMM DD, YYYY")
                logo {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SponserRoll data={data} count={count || ALL_COUNT} />}
  />
);
