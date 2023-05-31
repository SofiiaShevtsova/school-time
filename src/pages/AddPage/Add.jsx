import { useState } from 'react';

import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from '@material-tailwind/react';
import FormStudent from '../../components/StudentRegister/StudentRegisterForm';


const data = [
   {
      label: 'Students',
      value: 'students',
      desc: <FormStudent />,
   },

   {
      label: 'Teacher',
      value: 'teacher',
      desc: (
         <div className="flex flex-col w-72 gap-6"></div>
      ),
   },
   {
      label: 'Admin',
      value: 'admin',
      desc: (
         <div className="flex flex-col w-72 gap-6"></div>
      ),
   },
];

const Add = () => {
   const [activeTab, setActiveTab] =
      useState('students');
   return (
      <>
         <h2>
            Сторінка для адміна щоб додати
            вчителля учня змінити графік занять і
            т.д буде містити вкладені маршрути
         </h2>
         <Tabs
            value="students"
            orientation="vertical"
         >
            <TabsHeader className="w-32 p-0 border-r-gray-700 border-2 mr-10">
               {data.map(({ label, value }) => (
                  <Tab
                     key={value}
                     value={value}
                     onClick={() =>
                        setActiveTab(value)
                     }
                     className={
                        activeTab === value
                           ? 'cursor-pointer'
                           : 'text-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer'
                     }
                  >
                     {label}
                  </Tab>
               ))}
            </TabsHeader>
            <TabsBody>
               {data.map(({ value, desc }) => (
                  <TabPanel
                     key={value}
                     value={value}
                     className="py-0"
                  >
                     {desc}
                  </TabPanel>
               ))}
            </TabsBody>
         </Tabs>
      </>
   );
};

export default Add;
