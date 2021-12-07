import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import { Cryptocurrencies, News } from "./";
import { useGetCryptosQuery } from '../services/cryptoApi';



const {Title} = Typography;
const HomePage = props => {

    const { data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    const coins = data?.data?.coins;


    if (isFetching) return '...Loading';

    console.log(data)
    return (
        <>
            <Title level={2} className="heading" >
                GlobalCrypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
                </Col>
            </Row>
            <div className="home-header-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies"> Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified={true}/>
            <div className="home-header-container">
                <Title level={2} className="home-title">Later Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news"> Show More</Link></Title>
            </div>
            <News coins={coins} simplified={true}/>
        </>
    );
};

export default HomePage;
