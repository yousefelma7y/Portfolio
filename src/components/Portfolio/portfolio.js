import { React, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import "./portfolio.css";

import { BsGithub } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Portfolio = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.2, bounce: 0.3 },
      });
      animation2.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw" });
      animation2.start({ x: "10vw" });
    }
  }, [inView]);

  const projects = [
    {
      id: 10,
      name: "Toyagator",
      class: "projects Toyagator-proj col-md-3 col-sm-5 col-9",
      website: "https://toyagator.com/",
      // github: "https://github.com/yousefelma7y/Mla3b-APP",
    },
    {
      id: 11,
      name: "Gym System",
      class: "projects Gym-proj col-md-3 col-sm-5 col-9",
      website: "https://elz3lan-gym.vercel.app/",
      // github: "https://github.com/yousefelma7y/Mla3b-APP",
    },
    {
      id: 9,
      name: "FootBall Reservation",
      class: "projects FootBall-proj col-md-3 col-sm-5 col-9",
      website: "https://ml3b-masr.vercel.app/",
      github: "https://github.com/yousefelma7y/Mla3b-APP",
    },
    {
      id: 8,
      name: "Roots Industrial Solutions",
      class: "projects Roots-proj col-md-3 col-sm-5 col-9",
      website: "https://roots-industrial-solutions.vercel.app/",
      github: "https://github.com/yousefelma7y/roots-industrial-solutions",
    },
    {
      id: 7,
      name: "Smart Edu Services",
      class: "projects Smart-proj col-md-3 col-sm-5 col-9",
      website: "/smart",
      github: "https://github.com/MohamedElHamzawy/task-based-system",
    },
    {
      id: 6,
      name: "CTA Company Website",
      class: "projects cta-proj col-md-3 col-sm-5 col-9",
      website: "https://cta-programming.netlify.app/",
      github: "https://github.com/yousefelma7y/cta-project",
    },
    {
      id: 5,
      name: "Freelansing Services",
      class: "projects Freelansing-proj col-md-3 col-sm-5 col-9",
      website: "https://freelance-services.netlify.app/",
      github: "https://github.com/yousefelma7y/freelance-services",
    },
    {
      id: 4,
      name: "Movies Lights Out",
      class: "projects Movies-proj col-md-3 col-sm-5 col-9",
      website: "https://movies-lights-out.netlify.app/",
      github: "https://github.com/yousefelma7y/Movie-app",
    },
    {
      id: 3,
      name: "The Programmers",
      class: "projects Programmers-proj col-md-3 col-sm-5 col-9",
      website: "https://the-programmers.netlify.app/",
      github: "https://github.com/yousefelma7y/programmers",
    },
    {
      id: 2,
      name: "Smart School",
      class: "projects School-proj col-md-3 col-sm-5 col-9",
      website: "https://new-dawn-school.netlify.app/",
      github: "https://github.com/yousefelma7y/NewDawnSchool",
    },
    {
      id: 1,
      name: "Ecommerce Souq",
      class: "projects Ecommerce-proj col-md-3 col-sm-5 col-9",
      website: "https://ecommerce-souq.netlify.app/",
      github: "https://github.com/yousefelma7y/eCommerce",
    },
  ];

  return (
    <div
      ref={ref}
      className="portfolio-page justify-content-center text-center  w-100"
      id="portfolio"
    >
      <motion.h1 animate={animation} className="fw-bold pt-5">
        My Portfolio
      </motion.h1>
      <Row className="justify-content-center mt-5 w-100">
        {projects.map((projects) => (
          <motion.div
            animate={animation2}
            whileHover={{ y: -10 }}
            key={projects.id}
            className={projects.class}
          >
            <p className="overlay p-2 ">
              <p className="projects-name text-white fs-3 ">{projects.name}</p>
              <span className="mt-5 ">
                <Button
                  variant="danger"
                  className=" m-1"
                  onClick={() => window.open(projects.website, "_blank")}
                >
                  <AiOutlineSelect /> VIEW WEBSITE
                </Button>
                <Button
                  variant="success"
                  className="  m-1"
                  onClick={() => window.open(projects.github, "_blank")}
                >
                  <BsGithub /> GITHUB
                </Button>
              </span>
            </p>
          </motion.div>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
