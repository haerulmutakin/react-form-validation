import { useForm } from 'react-hook-form';

const HookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    return ( 
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <div className="form-group">
                    <label className="label-required">Username</label>
                    <input
                        type="text"
                        {...register('username', {
                            required: 'This field is required',
                            maxLength: {value: 5, message: 'Exceeded maximum length'}
                        })}
                    />
                    {errors.username && <div className="error">{errors.username.message}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Email</label>
                    <input
                        type="text"
                        {...register('email', {
                            required: 'This field is required'
                        })}
                    />
                    {errors.email && <div className="error">{errors.email.message}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'This field is required'
                        })}
                    />
                    {errors.password && <div className="error">{errors.password.message}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Confirm Password</label>
                    <input 
                        type="password"
                        {...register('confirmPassword', {
                            required: 'This field is required'
                        })}
                    />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
                </div>
                <div className="form-group">
                    <input
                        id="agreement"
                        type="checkbox"
                        {...register('agreement', {
                            required: 'This field is required'
                        })}
                        />
                    <label htmlFor="agreement" className="label-required">I agree to Terms of Services</label>
                    {errors.agreement && <div className="error">{errors.agreement.message}</div>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default HookForm;