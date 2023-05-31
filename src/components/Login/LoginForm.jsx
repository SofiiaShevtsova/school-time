// ------------------for api delete in prodaction----------------------------
import {
   Button,
   Card,
   Input,
   Typography,
} from '@material-tailwind/react';
import axios from 'axios';
// --------------------------------------------------------------------------
import {
   Form,
   Formik,
} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
   nickName: Yup.string()
      .min(2, 'Must min 2')
      .max(25, 'Must max 25')
      .required('Required'),

   password: Yup.string()
      .min(6, 'Must min 2')
      .max(25, 'Must max 25')
      .required('Required'),
});

const Login = () => {
   return (
         <Card
            color="transparent"
            shadow={false}
            className="sm:mx-auto sm:w-full sm:max-w-md bg-sky-200 p-10"
         >
            <Typography
               variant="h4"
               color="blue-gray"
            >
               Sing In
            </Typography>
            <Typography
               color="gray"
               className="mt-1 font-normal"
            >
               Enter your details.
            </Typography>
            <Formik
               initialValues={{
                  nickName: ``,
                  password: '',
               }}
               validationSchema={SignupSchema}
               onSubmit={async (
                  values,
                  actions,
               ) => {
                  const user = await axios.post(
                     'http://localhost:3000/api/users/login',
                     {
                        nickName:
                           values.nickName.trim(),
                        password:
                           values.password.trim(),
                     },
                  );
                  console.log(user.data);
                  actions.setSubmitting(false);
                  actions.resetForm();
               }}
            >
               {({values, handleChange})=>(<Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-col gap-6">
                     <Input
                        size="lg"
                        label="NickName"
                        name="nickName"
                        value={values.nickName}
                        onChange={handleChange}
                     />
                     <Input
                        type="password"
                        size="lg"
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                     />
                  </div>
                  <Button
                     type="submit"
                     className="bg-sky-700"
                     fullWidth
                  >
                     Sign in
                  </Button>
               </Form>)}
            </Formik>
         </Card>
   );
};

export default Login;
