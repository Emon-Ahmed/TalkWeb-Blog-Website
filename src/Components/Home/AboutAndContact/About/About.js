import React from 'react';
import aman from "./aman.jpg";
import emon from "./emon.jpg";
import sohag from "./sohag.jpg";
import yeaSaleh from "./yeaSaleh.jpg";
import "./About.css";
import { Container, Figure } from 'react-bootstrap';

const About = () => {
    //this is a comment
    return (
        <Container>
            <h1 className='text-center'>About Us</h1>

            {/* Developers section */}
            <section>
                <h3 >Developers</h3>

                <div className='images d-lg-flex text-center' >
                    {/* <figure>
                        <img src={aman} alt="Trulli" style="width:100%"/>
                            <figcaption>Md. Amanullah</figcaption>
                    </figure> */}
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={emon}
                        />
                        <Figure.Caption>
                            Emon Ahmed
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={sohag}
                        />
                        <Figure.Caption>
                            Mahmudul Hasan Shohag
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={yeaSaleh}
                        />
                        <Figure.Caption>
                            Yea Saleh
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={aman}
                        />
                        <Figure.Caption>
                            Md. Amanullah Parvez
                        </Figure.Caption>
                    </Figure>

                </div>
            </section>


            {/* About paragraph */}

            <p>This a blog website where we love writting about web development. Latest technologies and updates are our primary focus along with critical issues and basics of Web Development.</p>
            
            <p>We also have a store where you can buy stuff according to your need.</p>

        </Container>
    );
};

export default About;