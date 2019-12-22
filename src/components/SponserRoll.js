import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ALL_COUNT = Number.MAX_VALUE;

class SponserRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, idx) => {
            if (idx < count)
              return (
                <div className="is-parent column is-4-desktop is-6-mobile" key={post.id}>
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
                      <p className="post-meta" onClick={() => {setIsShow(true); setModalData(post.frontmatter);}}>
                          {post.frontmatter.name}
                        <span> &bull; </span>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </header>
                    <span>
                      {post.excerpt}
                      <br />
                      <br />
                    </span>
                    <div className="button" onClick={() => {setIsShow(true); setModalData(post.frontmatter);}}>
                      웹페이지
                    </div>
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

export default ({ count, setIsShow, setModalData }) => (
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
                subName
                dept
                establishmentYear
                slogan
                introduction
                location
                email
                homepage
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
    render={data => <SponserRoll data={data} count={count || ALL_COUNT} setIsShow={setIsShow} setModalData={setModalData} />}
  />
);
