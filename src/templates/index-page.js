import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  firstEvent,
  secondEvent,
  thirdEvent,
  sponserList,
  partnerList
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {heading}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div className="columns is-gapless" style={{ marginBottom: 0 }}>
      <div className="column">
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="has-text-white-ter"
        >
          유니톤
        </div>
        <Img
          fluid={firstEvent.firstEventImage.image.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="column">
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="has-text-white-ter"
        >
          프로젝트 리그
        </div>
        <Img
          fluid={secondEvent.secondEventImage.image.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="column">
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="has-text-white-ter"
        >
          네트워킹
        </div>
        <Img
          fluid={thirdEvent.thirdEventImage.image.childImageSharp.fluid}
        ></Img>
      </div>
    </div>
    {/* Partner */}
    <div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns is-multiline">
              {partnerList &&
                partnerList.map(({ node: post }) => (
                  <div className="is-parent column is-4" key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.title}`
                              }}
                            />
                          </div>
                        ) : null}
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
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
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>  
    {/* Sponser */}
    <div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns is-multiline">
              {sponserList &&
                sponserList.map(({ node: post }) => (
                  <div className="is-parent column is-4" key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.title}`
                              }}
                            />
                          </div>
                        ) : null}
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
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
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  firstEvent: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    firstEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  secondEvent: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    secondEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  thirdEvent: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    thirdEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  console.log("data is", data);
  const indexFrontmatter = data.index.frontmatter;
  const sponserList = data.sponser.edges;
  const partnerList = data.partner.edges;

  return (
    <Layout>
      <IndexPageTemplate
        image={indexFrontmatter.image}
        title={indexFrontmatter.title}
        heading={indexFrontmatter.heading}
        subheading={indexFrontmatter.subheading}
        firstEvent={indexFrontmatter.firstEvent}
        secondEvent={indexFrontmatter.secondEvent}
        thirdEvent={indexFrontmatter.thirdEvent}
        description={indexFrontmatter.description}
        intro={indexFrontmatter.intro}
        sponserList={sponserList}
        partnerList={partnerList}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        firstEvent {
          title
          description
          firstEventImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        secondEvent {
          title
          description
          secondEventImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        thirdEvent {
          title
          description
          thirdEventImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    sponser: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "sponser-post" } } }
      limit: 6
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
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
    partner: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "partner-post" } } }
      limit: 6
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
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
`;
