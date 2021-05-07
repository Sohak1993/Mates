import { useForm } from 'react-hook-form'
import matesApi from './../../config/api.mates'

function Login() {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
        mode : 'onTouched'
    })
    const onSubmit = data => {
        matesApi.post('/login', {
            email : data.email,
            password : data.password
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        })
    }

    console.log(errors)

    return(
        <>                  
            <div className="m-auto w-25 min-vh-100 d-flex flex-column justify-content-center ">
                <h2 className="d-flex">Connexion</h2>
                {isSubmitSuccessful && <div className="alert alert-success">Bienvenue</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="has-validation">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="text" className="form-control" id="email" {...register("email", {required: true})}></input>
                        {errors.email && <span style={{color: "red"}}>Vous devez entrer un nom d'utilisateur</span>}
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
export default Login