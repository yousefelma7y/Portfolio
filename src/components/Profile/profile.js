import React from "react";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion";

import "./profile.css";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const Profile = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      percentage: 90,
    },
    {
      id: 2,
      name: "React js",
      percentage: 95,
    },
    {
      id: 3,
      name: "Vue js",
      percentage: 50,
    },
    {
      id: 4,
      name: "Redux",
      percentage: 85,
    },
    {
      id: 5,
      name: "HTML",
      percentage: 90,
    },
    {
      id: 6,
      name: "CSS",
      percentage: 90,
    },
    {
      id: 7,
      name: "Tailwind",
      percentage: 95,
    },
    {
      id: 8,
      name: "Bootstrap",
      percentage: 90,
    },
    {
      id: 9,
      name: "WordPress Plugins",
      percentage: 80,
    },
  ];
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

  return (
    <Row ref={ref} className="w-100 justify-content-center" id="resume">
      <div className="col-md-5 col-12  ">
        <motion.h1 animate={animation} className="p-5">
          My <span className="fw-bold">Profile</span>
        </motion.h1>
        <div className="profile-list m-5">
          <motion.div animate={animation} className="profile-items row ">
            <span className="col-xl-3 col-6 fw-bold">Name </span>
            <span className="col-xl-4 col-6"> Yousef Elmahy </span>
          </motion.div>
          <motion.div animate={animation} className="profile-items row">
            <span className="col-xl-3 col-6 fw-bold">Birthday</span>
            <span className="col-xl-3 col-6">7/11/2000 </span>
          </motion.div>
          <motion.div animate={animation} className="profile-items row">
            <span className="col-xl-3 col-6 fw-bold">Address</span>
            <span className="col-xl-3 col-6"> Egypt </span>
          </motion.div>
          <motion.div animate={animation} className="profile-items row">
            <span className="col-xl-3 col-6 fw-bold">Phone</span>
            <span className="col-xl-3 col-6">01022361568 </span>
          </motion.div>
          <motion.div animate={animation} className="profile-items row">
            <span className="col-xl-3 col-6 fw-bold">Email</span>
            <span className="col-xl-3 col-sm-6  email">
              {" "}
              yousefelmahy7112000@gmail.com{" "}
            </span>
          </motion.div>
        </div>
      </div>
      <div className="col-md-5 col-12 p-5 m-5">
        <motion.h1 animate={animation2}>
          <span className="fw-bold"> Some </span> Skills
        </motion.h1>

        {skills.map((skill) => (
          <Row className=" profile-skills " key={skill.id}>
            <motion.span animate={animation2} className="col-6 p-3">
              {skill.name}
            </motion.span>
            <motion.span animate={animation2} className="col-6 p-3 text-center">
              {skill.percentage}%
            </motion.span>
            <div className="parent col-12">
              <span style={{ width: `${skill.percentage}%` }}></span>
            </div>
          </Row>
        ))}
      </div>
    </Row>
  );
};

export default Profile;
