import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Home/action'
import './home.scss'
// import '../../asset/fonts/Montserrat-Bold.ttf';
import data from '../../data/data.json'

import Navbar from '../../components/layout/Navbar'

import{
    bg
} from '../../asset'

const Home = (props) => {
    const { setHomeLoading } = props

    useEffect(() => {
        setHomeLoading()
        return () => {
            
        }
    }, [])

    return(
        <div>
            {/* <Navbar/> */}
            <div className="container font-a-b-i">
                <h1>{data.header.title}</h1>
                <h2>{data.header.title}</h2>
                <h3>{data.header.title}</h3>
            </div>
            <div className="banner">
                Foto
            </div>
            <div className="couple">
                <div className="bride-groom font-a-b">
                    <h1>{data.couple.groomName}</h1>
                    <h3 className="font-m-r">{data.couple.groom}</h3>
                </div>
                <h3 className="sign font-a-b">&</h3>
                <div className="bride-groom font-a-b">
                    <h1>{data.couple.brideName}</h1>
                    <h3 className="font-m-r">{data.couple.bride}</h3>
                </div>
            </div>
            <div className="container-content font-m-r">
                {/* <h3>{data.couple.desription}</h3> */}
                <h3>Request the honor of your presence on their<b>Holy Matrimony and Reception virtual</b></h3>
                <h1 className="font-m-b">{data.moment.holyMatrimonyDate}</h1>
                <h3>at {data.moment.holyMatrimonyTime} AM for Holly Matrimony & {data.moment.receptionTime} PM for Reception</h3>
            </div>
            <div className="banner">
                Foto
            </div>
            <div className="container-content font-m-r">
                <h1>Live Streaming</h1>
            </div>
            <div className="banner">
                Foto
            </div>
            <div className="container-quote font-a-b-i">
                <h1>{data.couple.quotation1}</h1>
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