import React from "react";
import aman from "./aman.jpg";
import emon from "./emon.jpg";
import sohag from "./sohag.jpg";
import yeaSaleh from "./yeaSaleh.jpg";
import { Container, Figure } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-white my-3 p-4 text-center">
      <section>
        <h3>Developers</h3>

        <div className="images d-lg-flex text-center mt-4 mb-5">
          <Figure>
            <Figure.Image width={160} height={180} alt="171x180" src={emon} />
            <Figure.Caption>Emon Ahmed</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={160} height={180} alt="171x180" src={sohag} />
            <Figure.Caption>Mahmudul Hasan Shohag</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={160}
              height={180}
              alt="171x180"
              src={yeaSaleh}
            />
            <Figure.Caption>Yea Saleh</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={160} height={180} alt="171x180" src={aman} />
            <Figure.Caption>Md. Amanullah Parvez</Figure.Caption>
          </Figure>
        </div>
      </section>
      <div className="pb-5">
        <p>
          This a blog website where we love writting about web development.
          Latest technologies and updates are our primary focus along with
          critical issues and basics of Web Development.
        </p>

        <p>
          We also have a store where you can buy stuff according to your need.
        </p>
      </div>
    </div>
  );
};

export default About;
