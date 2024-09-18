import React from "react";
import { useParams } from "react-router-dom";
import "./Site.css";

const Site = () => {
  const { id } = useParams();
  return (
    <div className="row justify-content-center p-4 text-center w-100 site-page p-0 m-0">
      <p className="projects-name fs-3">
        {id === "football"
          ? "FootBall Reservation Website"
          : "Smart Edu Services Website"}{" "}
      </p>
      {id === "football" ? (
        <>
          <iframe
            className="col-10 col-md-6 m-1 youtube"
            width="560"
            height="615"
            src="https://www.youtube.com/embed/M4WOYiHOilM?si=ja8NbrlzLHug51SH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="col-10 col-md-5 m-1 youtube"
            width="560"
            height="615"
            src="https://www.youtube.com/embed/6jqNhGNdAmU?si=jS5tsDBgo0f-zVQG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </>
      ) : (
        <iframe
          className="col-10 m-1 youtube"
          width="560"
          height="615"
          src="https://www.youtube.com/embed/4QDIhYkorYc?si=l56o570YE73-JLEX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Site;
