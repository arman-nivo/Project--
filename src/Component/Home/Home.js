import React from 'react';
import Bannar from '../Bannar/Bannar';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ExclusiveServices from '../ExclusiveServices/ExclusiveServices';
import ItSolution from "../ItSolution/ItSolution";
import SciFiBanner from '../SciFiBanner/SciFiBanner';
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <div id="shop">
                <ExclusiveServices ></ExclusiveServices>
            </div>
            
            <ItSolution></ItSolution>
            <SciFiBanner></SciFiBanner>
            <ClientFeedback></ClientFeedback>
        </div>
    );
};

export default Home;