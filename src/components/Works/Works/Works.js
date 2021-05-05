import ParticlesBg from 'particles-bg';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Container } from 'react-bootstrap';
import city from '../../../images/works/city-travels.png';
import uefa from '../../../images/works/uefa.png';
import doob from '../../../images/works/doob.png';
import Navbar from '../../Shared/Navbar/Navbar';
import WorkCard from './WorkCard';
import Footer from '../../Shared/Footer/Footer';

const works = [
    {
        id: 1,
        name: 'City Travels',
        image: city,
        desc: "User can take different services, and track the state of services, pay online.",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js"],
        repo: 'https://github.com/SakibNoman/Refresh-Painting-Client',
        live: 'https://city-travels.netlify.app/'
    },
    {
        id: 2,
        name: 'UEFA Champions League',
        image: uefa,
        desc: 'User can buy products and see their ordered history.Admin can add products',
        tools: ["React.js", "Node.js", "API", "JavaScript", "Netlify"],
        repo: 'https://github.com/SakibNoman/Gents-Glamor-Client',
        live: 'https://uefa-football.netlify.app/'
    },
    {
        id: 3,
        name: 'The Spirit of digital agency',
        image: doob,
        desc: 'User can rent different transport as their need, search place.Firebase Authentication',
        tools: ["HTML5", "CSS3", "Bootstrap5"],
        repo: 'https://github.com/Faruk-Ahmed12/Doob',
        live: 'https://faruk-ahmed12.github.io/Doob/'
    }
]

const Works = () => {
    return (
        <section>
            <Navbar></Navbar>
                    <Container className="mt-5 pt-5 pt-md-0 mt-md-0" >
            <h2 className="text-center text-white" >Portfolios</h2>
            <QueueAnim type="scale" className="row justify-content-center my-5" >
                {
                    works.map(each => <WorkCard key={each.id} info={each} ></WorkCard>)
                }
            </QueueAnim>
            <ParticlesBg type="polygon" bg={true} />
        </Container>
        <Footer></Footer>
        </section>
    );
};

export default Works;