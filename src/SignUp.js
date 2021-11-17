import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const doSignUp = () => {
        setTimeout(() => {
            formik.setSubmitting(false);
            formik.resetForm();
        }, 2000);
    }
    const formik = useFormik({
        // inittial values
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAgreement: false
        },
        // validation schema (Yup)
        validationSchema: Yup.object({
            username: Yup.string()
                .required()
                .lowercase('Should be a lowercase'),
            email: Yup.string()
                .required()
                .email('Invalid email format'),
            password: Yup.string()
                .required()
                .min(8, 'Should more than 8 characters')
                .matches(/[a-z]/g, 'At least one lowecase')
                .matches(/[A-Z]/g, 'At least one uppercase')
                .matches(/[0-9]/g, 'At least one number')
                .matches(/^\S*$/, 'Must not contain whitespaces'),
            confirmPassword: Yup.string()
                .required()
                .oneOf([Yup.ref('password')], 'Password must match'),
            termsAgreement: Yup.bool()
                .isTrue('Field must be checked')
        }),
        // handle submit
        onSubmit: doSignUp
        
    });
    return ( 
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="label-required">Username</label>
                    <input
                        type="text"
                        name="username"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Email</label>
                    <input
                        type="text"
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Password</label>
                    <input
                        type="text"
                        name="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
                </div>
                <div className="form-group">
                    <input
                        id="agreement"
                        type="checkbox"
                        name="termsAgreement"
                        checked={formik.values.termsAgreement}
                        {...formik.getFieldProps('termsAgreement')}
                        />
                    <label htmlFor="agreement">I agree to Terms of Services</label>
                    {formik.touched.termsAgreement && formik.errors.termsAgreement && <div className="error">{formik.errors.termsAgreement}</div>}
                </div>
                <button type="submit" disabled={formik.isSubmitting}>Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;