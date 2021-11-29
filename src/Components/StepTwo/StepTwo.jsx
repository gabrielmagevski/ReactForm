import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";
import {withRouter} from '../../routes/withRouter';

import './style.scss'

import Progress from '../ProgressBar/Progress';
import '../../styles/global.scss'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const StepTwo = (props) => {
    const navigate = useNavigate();
    
    const schema = yup.object().shape({
        ccNome: yup.string().min(2, "Minimo 2 caracteres").required("Nome Impresso no Cartão é obrigatório"),
        numeroDoCartao: yup.number().min(16, "Minimo 16 caracteres").required("Cartão é obrigatório!"),
        validade: yup.number().min(4, "Minimo de 4 caracteres").required("Validade é obrigatória!"),
        Cvv: yup.number().min(3, "Minimo 3 caracteres").required("CVV é obrigatório!"),
        Cpf: yup.number().min(11, "Minimo 11 caracteres").required("CPF é obrigatório!"),
        dataDeNascimento: yup.number().min(8, "Minimo 8 caracteres").required("Data de nascimento é obrigatório"),
      });

      const {register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {actions, state} = useStateMachine({updateAction});
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.navigate('./result');
    };


    return (
        <div id="stepTwo">

            <div className="content-boals">
                <div className="boals">1</div>
                <div className="boals current">2</div>
                <div className="boals">3</div>
            </div>
            <div>
                <Progress value={66.66}/>
            </div>

            <form className="form"
                onSubmit={
                    handleSubmit(onSubmit)
            }>
                <h5>Dados de pagamento</h5>
                <label>
                    <input placeholder="Nome no cartão" {...register('ccNome', { required: true })}/>
                    <p className="error">{errors.ccNome?.message}</p>
                </label>
                <label>
                    <input placeholder="Nº do cartão"type="number" {...register('numeroDoCartao', { required: true })}/>
                    <p className="error">{errors.numeroDoCartao?.message}</p>
                </label>
                <label>
                    <input placeholder="Validade --/--" type="number" {...register('validade', { required: true })}/>
                    <p className="error">{errors.validade?.message}</p>
                </label>
                <label>
                    <input placeholder="CVV"type="number" {...register('Cvv', { required: true })}/>
                    <p className="error">{errors.Cvv?.message}</p>
                </label>
                <label>
                    <input placeholder="CPF do titular"type="number" {...register('Cpf', { required: true })}/>
                    <p className="error">{errors.Cpf?.message}</p>
                </label>
                <label>
                    <input placeholder="Data de nascimento --/--/----"type="number" {...register('dataDeNascimento', { required: true})}/>
                    <p className="error">{errors.dataDeNascimento?.message}</p>
                </label>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default withRouter(StepTwo);
