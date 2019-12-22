import React, {useState} from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SponserRoll from "../components/SponserRoll";
import PartnerRoll from "../components/PartnerRoll";

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  firstEvent,
  secondEvent,
  thirdEvent,
  sponserList,
  partnerList,
  setIsShow,
  isShow,
  setModalData
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
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen main-bg-color box-main-color"
          style={{
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {heading}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen main-bg-color box-main-color"
          style={{
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
      <div className="column" style={{ position: "relative" }}>
        <div
            style={{ position: "absolute", zIndex: 10 }}
            className="has-text-white-ter"
          >
          {firstEvent.title} <br/>
          {firstEvent.title_kr} <br/>
          {firstEvent.date} <br/>
          {firstEvent.description}
        </div>
        <Img
          fluid={firstEvent.firstEventImage.image.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="column" style={{ position: "relative" }}>
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="has-text-white-ter"
        >
          {secondEvent.title} <br/>
          {secondEvent.title_kr} <br/>
          {secondEvent.date}
          {secondEvent.description}
        </div>
        <Img
          fluid={secondEvent.secondEventImage.image.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="column" style={{ position: "relative" }}>
        <div
          style={{ position: "absolute", zIndex: 10 }}
          className="has-text-white-ter"
        >
          {thirdEvent.title} <br/>
          {thirdEvent.title_kr} <br/> 
          {thirdEvent.date} <br/>
          {thirdEvent.description}
        </div>
        <Img
          fluid={thirdEvent.thirdEventImage.image.childImageSharp.fluid}
        ></Img> 
      </div>
    </div>
    {/* Partner */}
    <div>
      <section className="section section-bg-color">
        <div className="container">
          <div className="content">
            <PartnerRoll count={6} setIsShow={setIsShow} isShow={isShow} setModalData={setModalData}></PartnerRoll>
          </div>
        </div>
      </section>
    </div>  
    {/* Sponser */}
    <div>
      <section className="section section-bg-color">
        <div className="container">
          <div className="content">
            <SponserRoll count={6} setIsShow={setIsShow} isShow={isShow} setModalData={setModalData}></SponserRoll>
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
    title_kr: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    firstEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  secondEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    secondEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  thirdEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    date: PropTypes.string, 
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
  const [isShow, setIsShow] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    subName: '',
    establishmentYear: '',
    slogan: '',
    introduction: '',
    location: '',
    email: '',
    logo: '',
    dept: ''
  });
  console.log('modalData is', modalData)

  return (
    <Layout isShow={isShow} setIsShow={setIsShow} modalData={modalData}>
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
        setIsShow={setIsShow}
        isShow={isShow}
        setModalData={setModalData}
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
          title_kr
          date
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
          title_kr
          date
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
          title_kr
          date
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
`;
