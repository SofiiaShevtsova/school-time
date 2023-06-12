import {
   Button,
   Checkbox,
   Input,
   List,
   ListItem,
   ListItemPrefix,
   Typography,
} from '@material-tailwind/react';
// ------------------for api delete in prodaction----------------------------
import axios from 'axios';

// --------------------------------------------------------------------------

const FormTeacher = ({ admin }) => {
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
               console.log(user);
               const {
                  schoolClass,
                  healthGroup,
                  phone,
                  nickName,
                  password,
                  userName,
                  userSurname,
                  birthdayDate,
               } = user;

               const listCheckbox = [
                  ...document.querySelectorAll(
                     '.checkbox',
                  ),
               ];
               const subjects =
                  listCheckbox.reduce(
                     (array, elem, i) => {
                        if (elem.checked) {
                           array.push(elem.value);
                           return array;
                        }
                        return array;
                     },
                     [],
                  );

               const userForRegister = {
                  nickName,
                  password,
                  userName: `${userName} ${userSurname}`,
                  subscription:
                     admin.toLowerCase(),
                  birthdayDate,
                  healthGroup,
                  schoolClass,
                  contacts: [`phone: ${phone}`],
                  subjects: subjects,
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
                  variant="meddium"
                  color="blue-gray"
                  className="mb-4 font-medium"
               >
                  {admin}
               </Typography>

               <Input
                  type="text"
                  label="Name"
                  name="userName"
                  color="blue"
               />
               <Input
                  type="text"
                  label="Surname"
                  name="userSurname"
                  color="blue"
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
                  {/* Буде використано мар та відобразиться згідно списком який прийде з бека */}

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
               <Typography
                  variant="small"
                  color="green"
                  className="my-1 font-medium"
               >
                  Subjects
               </Typography>
               <List className="flex-wrap m-0 p-0">
                  {/* Буде використано мар та відобразиться згідно списком який прийде з бека */}
                  <ListItem className="p-0">
                     <label
                        htmlFor="horizontal-list-react"
                        className="px-1 py-1 flex items-center cursor-pointer"
                     >
                        <ListItemPrefix className="mr-3">
                           <Checkbox
                              id="horizontal-list-react"
                              ripple={false}
                              className="checkbox"
                              value="History"
                              color="green"
                              containerProps={{
                                 className: 'p-0',
                              }}
                           />
                        </ListItemPrefix>
                        <Typography
                           color="green"
                           className="font-medium"
                        >
                           History
                        </Typography>
                     </label>
                  </ListItem>
                  <ListItem className="p-0">
                     <label
                        htmlFor="horizontal-list-vue"
                        className="px-1 py-1 flex items-center cursor-pointer"
                     >
                        <ListItemPrefix className="mr-3">
                           <Checkbox
                              id="horizontal-list-vue"
                              ripple={false}
                              value="Math"
                              color="green"
                              className="checkbox"
                              containerProps={{
                                 className: 'p-0',
                              }}
                           />
                        </ListItemPrefix>
                        <Typography
                           color="green"
                           className="font-medium"
                        >
                           Math
                        </Typography>
                     </label>
                  </ListItem>
                  <ListItem className="p-0">
                     <label
                        htmlFor="horizontal-list-svelte"
                        className="px-1 py-1 flex items-center cursor-pointer"
                     >
                        <ListItemPrefix className="mr-3">
                           <Checkbox
                              id="horizontal-list-svelte"
                              ripple={false}
                              color="green"
                              className="checkbox"
                              containerProps={{
                                 className: 'p-0',
                              }}
                           />
                        </ListItemPrefix>
                        <Typography
                           color="green"
                           className="font-medium"
                        >
                           Music
                        </Typography>
                     </label>
                  </ListItem>
               </List>
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
               <Input
                  type="text"
                  label="Phone"
                  name="phone"
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

export default FormTeacher;
