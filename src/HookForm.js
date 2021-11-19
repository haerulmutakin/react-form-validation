const HookForm = () => {
    return ( 
        <div>
            <h1>Sign Up Form</h1>
            <form>
                <div className="form-group">
                    <label className="label-required">Username</label>
                    <input
                        type="text"
                        name="username"
                    />
                </div>
                <div className="form-group">
                    <label className="label-required">Email</label>
                    <input
                        type="text"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label className="label-required">Password</label>
                    <input
                        type="password"
                        name="password"
                    />
                </div>
                <div className="form-group">
                    <label className="label-required">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                    />
                </div>
                <div className="form-group">
                    <input
                        id="agreement"
                        type="checkbox"
                        name="agreement"
                        />
                    <label htmlFor="agreement" className="label-required">I agree to Terms of Services</label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default HookForm;