import React, { Component } from "react";
import Helmet from "react-helmet";
import AboutMe from "../sections/home/about-me";
import AboutExperience from "../sections/home/experience";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const meta = {
      title: "WordPress/React Developer",
      canonical: "http://www.iambican.com/"
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>{meta.title}</title>
          <link rel="canonical" href={meta.canonical} />
        </Helmet>
        <div id="content" className="content">
          <AboutMe />
          <AboutExperience />
        </div>
      </React.Fragment>
    );
  }
}
