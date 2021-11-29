import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import '../../styles/auth.scss';

const schema = yup.object({
  Name: yup.string().required(),
  LastName: yup.string().required(),
  Age: yup.number().positive().integer().required(),
}).required();


export function SingleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  return (

    <div id="page-auth">

      <h1>Validation</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name")}
          label="Name"
        />
        <p className="error">{errors.Name?.message}</p>

        <input
          {...register("LastName")}
          label="Last Name" />
        <p className="error">{errors.LastName?.message}</p>

        <input
          type="number"
          {...register("Age")}
          label="Age"
        />
        <p className="error">{errors.Age?.message}</p>
        <div>
          <button className="button" type="submit">Send</button>
        </div>
      </form>
    </div>


  );
}


