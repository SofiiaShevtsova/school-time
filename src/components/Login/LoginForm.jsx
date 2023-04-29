// import { useDispatch } from 'react-redux';
import {
   ErrorMessage,
   Field,
   Form,
   Formik,
} from 'formik';
// import { logInUser } from 'redux/operationPhonebook';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
   login: Yup.string()
      .min(2, 'Must min 2')
      .max(25, 'Must max 25')
      .required('Required'),

   password: Yup.string()
      .min(2, 'Must min 2')
      .max(25, 'Must max 25')
      .required('Required'),
});

const Login = () => {
   //    const dispatch = useDispatch();
   return (
      <>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
               </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <Formik
                  initialValues={{
                     login: ``,
                     password: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, actions) => {
                     console.log(values);
                     // const user = {
                     //    email: values.email.trim(),
                     //    password: values.password.trim(),
                     // };
                     // dispatch(logInUser(user));
                     // actions.setSubmitting(false);
                     // actions.resetForm();
                  }}
               >
                  {(props) => (
                     <Form className="space-y-6">
                        <div>
                           <label
                              htmlFor="login"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Login
                           </label>
                           <div className="mt-2">
                              <Field
                                 name="login"
                                 type="text"
                                 className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              {props.errors
                                 .email && (
                                 <ErrorMessage id="feedback">
                                    {
                                       props
                                          .errors
                                          .email
                                    }
                                 </ErrorMessage>
                              )}
                           </div>
                        </div>

                        <div>
                           <div className="flex items-center justify-between">
                              <label
                                 htmlFor="password"
                                 className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                 Password
                              </label>
                              <div className="text-sm">
                                 <a
                                    href="/"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                 >
                                    Forgot
                                    password?
                                 </a>
                              </div>
                           </div>
                           <div className="mt-2">
                              <Field
                                 name="password"
                                 type="password"
                                 className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              {props.errors
                                 .password && (
                                 <ErrorMessage id="feedback">
                                    {
                                       props
                                          .errors
                                          .password
                                    }
                                 </ErrorMessage>
                              )}
                           </div>
                        </div>

                        <div>
                           <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                           >
                              Sign in
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </div>
      </>
   );
};

export default Login;
