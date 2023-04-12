import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useAnimations } from "./useAnimations";
import ReactFullpage from "@fullpage/react-fullpage";

const Homepage = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const {
    control1,
    control2,
    control3,
    control4,
    control5,
    control6,
    control7,
    control8,
    control9,
    control10,
    control11,
    control12,
    control13,
    control14,
    control15,
  } = useAnimations();

  const animationVariant = {
    visible: { opacity: 1, transition: { duration: 0.9 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const scrollAnimation = async () => {
      if (isInView1) {
        await control1.start("visible");
        await control2.start("visible");
        await control3.start("visible");
        await control4.start("visible");
        await control5.start("visible");
      } else {
        await control1.start("hidden");
        await control2.start("hidden");
        await control3.start("hidden");
        await control4.start("hidden");
        await control5.start("hidden");
      }
    };
    scrollAnimation();
  }, [isInView1, control1, control2, control3, control4, control5]);

  useEffect(() => {
    const scrollAnimation = async () => {
      if (isInView2) {
        await control6.start("visible");
        await control7.start("visible");
        await control8.start("visible");
        await control9.start("visible");
        await control10.start("visible");
      } else {
        await control6.start("hidden");
        await control7.start("hidden");
        await control8.start("hidden");
        await control9.start("hidden");
        await control10.start("hidden");
      }
    };
    scrollAnimation();
  }, [isInView2, control6, control7, control8, control9, control10]);

  useEffect(() => {
    const scrollAnimation = async () => {
      if (isInView3) {
        await control11.start("visible");
        await control12.start("visible");
        await control13.start("visible");
        await control14.start("visible");
        await control15.start("visible");
      } else {
        await control11.start("hidden");
        await control12.start("hidden");
        await control13.start("hidden");
        await control14.start("hidden");
        await control15.start("hidden");
      }
    };
    scrollAnimation();
  }, [isInView3, control11, control12, control13, control14, control15]);

  return (
    <section>
      <ReactFullpage
        scrollingSpeed={500}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <main className="section" id="slide1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="upper text-center">
                        <motion.h2
                          ref={ref1}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control1}
                        >
                          Model S
                        </motion.h2>
                        <motion.p
                          ref={ref1}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control2}
                        >
                          Online Order for <a href="/#">Touchless Delivery</a>
                        </motion.p>
                      </div>
                      <div className="lower text-center">
                        <div>
                          <motion.a
                            className="btn1"
                            href="/#"
                            ref={ref1}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control3}
                          >
                            CUSTOM ORDER
                          </motion.a>
                          <motion.a
                            className="btn2"
                            href="/#"
                            ref={ref1}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control4}
                          >
                            EXISTING INVENTORY
                          </motion.a>
                        </div>
                        <div>
                          <motion.a
                            className="arrow"
                            href="/#"
                            ref={ref1}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control5}
                            onClick={() => fullpageApi.moveSectionDown()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <main className="section" id="slide2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="upper text-center">
                        <motion.h2
                          ref={ref2}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control6}
                        >
                          Model Y
                        </motion.h2>
                        <motion.p
                          ref={ref2}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control7}
                        >
                          Online Order for <a href="/#">Touchless Delivery</a>
                        </motion.p>
                      </div>
                      <div className="lower text-center">
                        <div>
                          <motion.a
                            className="btn1"
                            href="/#"
                            ref={ref2}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control8}
                          >
                            CUSTOM ORDER
                          </motion.a>
                          <motion.a
                            className="btn2"
                            href="/#"
                            ref={ref2}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control9}
                          >
                            EXISTING INVENTORY
                          </motion.a>
                        </div>
                        <div>
                          <motion.a
                            className="arrow"
                            href="/#"
                            ref={ref2}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control10}
                            onClick={() => fullpageApi.moveSectionDown()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <main className="section" id="slide3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="upper text-center">
                        <motion.h2
                          ref={ref3}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control11}
                        >
                          Model 3
                        </motion.h2>
                        <motion.p
                          ref={ref3}
                          variants={animationVariant}
                          initial="hidden"
                          animate={control12}
                        >
                          Online Order for <a href="/#">Touchless Delivery</a>
                        </motion.p>
                      </div>
                      <div className="lower text-center">
                        <div>
                          <motion.a
                            className="btn1"
                            href="/#"
                            ref={ref3}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control13}
                          >
                            CUSTOM ORDER
                          </motion.a>
                          <motion.a
                            className="btn2"
                            href="/#"
                            ref={ref3}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control14}
                          >
                            EXISTING INVENTORY
                          </motion.a>
                        </div>
                        <div>
                          <motion.a
                            className="arrow"
                            href="/#"
                            ref={ref3}
                            variants={animationVariant}
                            initial="hidden"
                            animate={control15}
                            onClick={() => fullpageApi.moveSectionDown()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </section>
  );
};

export default Homepage;
