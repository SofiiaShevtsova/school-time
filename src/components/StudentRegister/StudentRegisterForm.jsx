import {
   Button,
   Input,
   Typography,
} from '@material-tailwind/react';
// ------------------for api delete in prodaction----------------------------
import axios from 'axios';

// --------------------------------------------------------------------------

const FormStudent = () => {
   return (
      <div className="flex flex-col w-72 gap-6">
         <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={async (event) => {
               event.preventDefault();
               const formData = new FormData(
                  event.currentTarget,
               );
               const user = {};
               formData.forEach((value, name) => {
                  user[name] = value;
               });
               const {
                  schoolClass,
                  fatherName,
                  fatherPhone,
                  fatherSurname,
                  healthGroup,
                  motherName,
                  motherPhone,
                  motherSurname,
                  nickName,
                  password,
                  userName,
                  userSurname,
                  birthdayDate,
               } = user;

               const userForRegister = {
                  nickName,
                  password,
                  userName: `${userName} ${userSurname}`,
                  subscription: 'student',
                  birthdayDate,
                  healthGroup,
                  schoolClass,
                  parent: {
                     mother: `${motherName} ${motherSurname}`,
                     father: `${fatherName} ${fatherSurname}`,
                  },
                  contacts: [
                     `mother: ${motherPhone}`,
                     `father: ${fatherPhone}`,
                  ],
               };

               const { data } = await axios.post(
                  'http://localhost:3000/api/users/register',
                  userForRegister,
               );
               console.log(data);
            }}
         >
            <div>
               <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-4 font-medium"
               >
                  Student
               </Typography>

               <Input
                  type="text"
                  label="Name"
                  name="userName"
               />
               <Input
                  type="text"
                  label="Surname"
                  name="userSurname"
               />
               <label htmlFor="birthdayDate">
                  Birthday date
               </label>
               <input
                  type="date"
                  name="birthdayDate"
                  min="2000-01-01"
                  max={new Date()}
               ></input>
               <label htmlFor="schoolClass">
                  Class
               </label>
               <select
                  name="schoolClass"
                  className="w-70 border-gray-700 border-2"
               >
                  <option
                     value="1-A"
                     className="w-70"
                  >
                     1-A
                  </option>
                  <option
                     value="1-B"
                     className="w-70"
                  >
                     1-B
                  </option>
                  <option
                     value="2-A"
                     className="w-70"
                  >
                     2-A
                  </option>
                  <option
                     value="2-B"
                     className="w-70"
                  >
                     2-B
                  </option>
                  <option
                     value="3-A"
                     className="w-70"
                  >
                     3-A
                  </option>
               </select>
               <label htmlFor="healthGroup">
                  Health Group
               </label>
               <select
                  name="healthGroup"
                  className="w-70 border-gray-700 border-2"
               >
                  <option
                     value="A"
                     className="w-70"
                  >
                     A
                  </option>
                  <option
                     value="B"
                     className="w-70"
                  >
                     B
                  </option>
                  <option
                     value="C"
                     className="w-70"
                  >
                     C
                  </option>
               </select>

               <Input
                  label="NickName"
                  name="nickName"
               />
               <Input
                  label="Password"
                  name="password"
               />
            </div>
            <div>
               <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-4 font-medium"
               >
                  Mather
               </Typography>

               <Input
                  type="text"
                  label="Name"
                  name="motherName"
               />
               <Input
                  type="text"
                  label="Surname"
                  name="motherSurname"
               />
               <Input
                  type="text"
                  label="Phone"
                  name="motherPhone"
               />
            </div>

            <div>
               <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-4 font-medium"
               >
                  Father
               </Typography>

               <Input
                  type="text"
                  label="Name"
                  name="fatherName"
               />
               <Input
                  type="text"
                  label="Surname"
                  name="fatherSurname"
               />
               <Input
                  type="text"
                  label="Phone"
                  name="fatherPhone"
               />
            </div>
            <Button
               type="submit"
               className="text-black border-gray-700 border-2"
            >
               Submit
            </Button>
         </form>
      </div>
   );
};

export default FormStudent;
