import { Box } from "@chakra-ui/react"
import SidebarWithHeader from "../components/Sidebar-Navbar/SideBar"
import { UserSettings } from "../components/UserSettings/UserSettings"
import UserPics from "../components/UserSettings/UserPics"
import { useSelector } from "react-redux"
import NavbarSerch from "../components/NavbarSearch/NavbarSearch"
import { useEffect, useState } from "react"
import {  RiUserSettingsLine, RiHistoryLine } from 'react-icons/ri'
import {IoStatsChartOutline} from 'react-icons/io5'
import UserBio from "../components/UserSettings/UserBio"
import { setIn } from "formik"



const Settings = () =>{
   
   const myUser =  useSelector(state => state.myUser)
   const friends = useSelector((state)=> state.friends)
   const myFollowers = useSelector((state) => state.followers)
   const users = useSelector((state) => state.users)
   const [state, setState ] = useState('users')

   
   const NAV_ITEMS = [
      {
         label: 'User',
         icon: <RiUserSettingsLine/>,
         onClick: () => {
           setState('users')}
       },
      //  {
      //      label: 'Posts',
      //      icon: <IoStatsChartOutline/>,
      //      onClick: () => {
      //        setState('posts')
      //      }
      //    },
      //  {
      //    label: 'Payments',
      //    icon: <RiHistoryLine/>,
      //    onClick: () => {
      //      setState('images')}
      //  }  
    ]
    
    const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    image: '',
    fullName: `${myUser.firstName} ${myUser.lastName}`,
    bio: '',
  })

  return (
    <>
    <SidebarWithHeader myUser={myUser} friends={friends} myFollowers={myFollowers}/>
    <Box
      pos={'absolute'}
      left={'0%'}
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      height={'86vh'}
      mt={'5.4%'}
      ml={'16%'}
      bg={'whitesmoke'}>
    <NavbarSerch NAV_ITEMS={NAV_ITEMS}/> 
    <Box display={'flex'} flexDir={'row'}>
      <UserPics 
      myUser={myUser} 
      inpu={input} 
      setInput={setInput} />
      <UserSettings 
      input={input} 
      setInput={setInput}
      myUser={myUser} 
      users={users}/>
    </Box>
    <UserBio 
    myUser={myUser}
    input={input} 
    setInput={setInput}/>
    </Box>
    </>
  )
}

export default Settings