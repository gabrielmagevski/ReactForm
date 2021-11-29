import React from "react";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";

import Progress from '../ProgressBar/Progress';

import './style.scss';
import '../../styles/global.scss';

import { useNavigate } from 'react-router-dom';

export const Result = (props) => {
    const navigate = useNavigate();
    const {state} = useStateMachine(updateAction);

    function handleComeBack() {
        navigate('/')
    }

    return (
        <>
            <div id="result">
                <div className="content-boals">
                    <div className="boals">1</div>
                    <div className="boals">2</div>
                    <div className="boals current">3</div>
                </div>
                <div>
                    <Progress value={100}/>
                </div>
                <div className="bg-grey">
                    <h1 className="title">Obrigado por comprar em nossa loja!</h1>
                    <h2 className="subtitle">Volte sempre</h2>

                    <button className="button" onClick={() => {handleComeBack()}}>Voltar</button>
                </div>
            </div>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    );
};

export default Result
