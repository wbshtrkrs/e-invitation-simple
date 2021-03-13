import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Home/action'
import './home.scss'
import data from '../../data/data.json'
import { Fade, Zoom } from 'react-reveal';
import HeadShake from 'react-reveal/HeadShake';
// import Navbar from '../../components/layout/Navbar'
// import Carousel from '../../components/carousel/carousel'

import{
    foto1, foto2, foto3, foto4, foto5
} from '../../asset'

const Home = (props) => {

    useEffect(() => {
        return () => {
            
        }
    }, [])

    return(
        <div>
            <div className="container font-a-b-i">
                <h1>{data.header.title}</h1>
            </div>
            <div className="banner">
                <img
                    className="image"
                    src={foto1}
                    loading="lazy"
                />
            </div>
            <div className="couple">
                <div className="bride-groom font-a-b">
                    <Fade left>
                        <h1>{data.couple.groomName}</h1>
                        <h3 className="font-m-r">{data.couple.groom}</h3>
                    </Fade>
                </div>
                <Zoom><h3 className="sign font-a-b">&</h3></Zoom>
                <div className="bride-groom font-a-b">
                    <Fade right>
                        <h1>{data.couple.brideName}</h1>
                        <h3 className="font-m-r">{data.couple.bride}</h3>
                    </Fade>
                </div>
            </div>
            <div className="container-content font-m-r">
                <Fade top>
                    <h3>{data.couple.desription}</h3>
                    <h1 className="font-m-b">{data.moment.holyMatrimonyDate}</h1>
                    <h3>{data.moment.holyMatrimonyTime} for Holy Matrimony & {data.moment.receptionTime} for Reception</h3>
                </Fade>
            </div>
            <Zoom>
                <div className="image-content-container">
                        <div className="image-content">
                            <img
                                className="image"
                                src={foto2}
                                loading="lazy"
                            />
                        </div>
                        <div className="image-content">
                            <img
                                className="image"
                                src={foto3}
                                loading="lazy"
                            />
                        </div>
                        <div className="image-content">
                            <img
                                className="image"
                                src={foto4}
                                loading="lazy"
                            />
                        </div>
                </div>
            </Zoom>
            <div className="container-content font-m-r">
                <Fade top><h1>Live Streaming</h1></Fade>
            </div>
            <div className="cotainer-video">
                <iframe
                    className="video"
                    src="https://www.youtube.com/embed/KM1jkox1QSI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowFullScreen">
                </iframe>
            </div>
            <div className="container-quote font-m-m">
                <HeadShake  >
                    <h1>{data.couple.quotation1}</h1>
                </HeadShake>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Home: state.Home
})
const mapDispatchToProps = {
    ...actions
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);