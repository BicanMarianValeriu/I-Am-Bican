import React from "react";
import ReactSVG from "react-svg";
import clock from "./../../assets/svg/clock-o.svg";
import banknote from "./../../assets/svg/banknote.svg";
import website from "./../../assets/svg/website.svg";
import money from "./../../assets/svg/get-money.svg";

const icons = { clock, banknote, website, money };

const Meta = props => {
  const { date_gmt, date_human, acf } = props;
  const { meta } = acf;
  var count = meta ? parseInt(meta.cost) : 0;
  var money = [...Array(count)];
  money = money.map((val, i) => (
    <ReactSVG
      className="portfolio__cost-svg"
      key={i}
      src={icons.banknote}
      svgClassName="svg-icon svg-icon--cost"
    />
  ));

  var website = `<a target="_blank" href="${
    meta ? meta.website : "#"
  }">Live Site</a>`;

  return (
    <div className="portfolio__meta">
      <span className="portfolio__meta-item" title="Live url">
        <ReactSVG
          className="portfolio__meta-label"
          src={icons.website}
          svgClassName="svg-icon svg-icon--portfolio-meta"
        />
        <span
          className="portfolio__website"
          dangerouslySetInnerHTML={{ __html: website }}
        />
      </span>
      <span className="portfolio__meta-item" title="Cost range">
        <ReactSVG
          className="portfolio__meta-label"
          src={icons.money}
          svgClassName="svg-icon svg-icon--portfolio-meta"
        />
        <span className="portfolio__cost">{count > 0 ? money : "Free"}</span>
      </span>
      <span className="portfolio__meta-item" title="Went live on:">
        <ReactSVG
          className="portfolio__meta-label"
          src={icons.clock}
          svgClassName="svg-icon svg-icon--portfolio-meta"
        />
        <time className="portfolio__date" dateTime={date_gmt}>
          {date_human}
        </time>
      </span>
    </div>
  );
};

export default Meta;
