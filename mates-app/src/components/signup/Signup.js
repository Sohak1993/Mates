import React, { Component } from 'react'
import { useForm } from 'react-hook-form'


function Signup() {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
        mode : 'onTouched'
    })
    const onSubmit = data => {
        
    }

    console.log(errors)

    return(
        <>                  
            <div className="m-auto w-25 min-vh-100 d-flex flex-column justify-content-center ">
                <h2 className="d-flex">Connexion</h2>
                {isSubmitSuccessful && <div className="alert alert-success">Merci pour votre inscription</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="has-validation">
                        <label htmlFor="username" className="form-label">Pseudo</label>
                        <input type="text" className="form-control" id="username" {...register("username", {required: true})}></input>
                        {errors.username && <span style={{color: "red"}}>Vous devez entrer un nom d'utilisateur</span>}
                    </div>
                    <div> 
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" id="password" {...register("password", {required: true})}></input>
                        {errors.password && <span style={{color: "red"}}>Vous devez entrer un mot de passe</span>}
                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-3">Envoyer</button>
                </form>
            </div>
        </>
    )
} 
export default Signup