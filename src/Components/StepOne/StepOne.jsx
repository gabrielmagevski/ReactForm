import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";
import {withRouter} from '../../routes/withRouter';

import Progress from '../ProgressBar/Progress';

import './style.scss'
import '../../styles/global.scss'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const StepOne = (props) => {
    const navigate = useNavigate();
    
    const schema = yup.object().shape({
        Nome: yup.string().min(2, "Minimo 2 caracteres").required("Nome é obrigatório"),
        Sobrenome: yup.string().min(2, "Minimo 2 caracteres").required("Sobrenome é obrigatório"),
      });

      const {register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {actions, state} = useStateMachine({updateAction});
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.navigate('./stepTwo');
    };

    return (
        <div id="stepOne">

            <div className="content-boals">
                <div className="boals current">1</div>
                <div className="boals">2</div>
                <div className="boals">3</div>
            </div>
            
            <div>
                <Progress value={33.33}/>
            </div>


            <form className="form"
                onSubmit={
                    handleSubmit(onSubmit)
            }>
                <h5>Dados pessoais</h5>
                <label>
                    <input placeholder="Nome" {...register('Nome', { required: true })}/>
                    <p className="error">{errors.Nome?.message}</p>
                </label>
                <label>
                    <input placeholder="Sobrenome"{...register('Sobrenome', { required: true })}/>
                    <p className="error">{errors.Sobrenome?.message}</p>
                </label>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default withRouter(StepOne);
