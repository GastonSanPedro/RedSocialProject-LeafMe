import React, { useEffect, useState } from 'react';
import { Box, Avatar,Button, Input } from '@chakra-ui/react';

const ProfileDetail = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log({user})
  const [canEdit, setCanEdit] = React.useState(false)
  const [firstName, setFirstName] = React.useState(user.firstName)
  const [lastName, setLastName] = React.useState(user.lastName)
  const [email, setEmail] = React.useState(user.email)
  const [bio, setBio] = React.useState(user.bio) //aca deberia inicializarlo con User.bio para que traiga si es que tiene algo

  useEffect(()=>{
  },[canEdit])

  const editDataProfile = () => {
    setCanEdit(true);
  };


  const changeData =()=>{
    //aca deberia dispatchar una accion que se conecte con el patch del user y lo cambie
    setCanEdit(false)
  }

  const handleInputFirstNameChange = (e)=>{
    setFirstName(e.target.value)
  }
  const handleInputLastNameChange=(e)=>{
    setLastName(e.target.value)
  }
  
  const handleInputEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  const handleInputBioChange=(e)=>{
    setBio(e.target.value)
  }
  

  return (
    <>
      <Box
        ml={10}
        mt={5}
        p={7}
        w="70%"
        display={'flex'}
        backgroundColor={'#ECEAEA'}
      >
        <Avatar
          size="xl"
          name="usuario"
          src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105171/126078877-vector-design-of-avatar-and-dummy-symbol-set-of-avatar-and-image-stock-vector-illustration-.jpg?fj=1"
        />
        <Box ml={8} w="90%" display={"flex"} flexDirection={"column"}>
          <section style={{display:"flex"}}>
          <h4>First name:</h4>
          {canEdit? <Input
              name="firsName"
              type="text"
              value={firstName}
              onChange={(e) => {
                handleInputFirstNameChange(e);
              }}
            /> : <p>{firstName}</p>}
          
          </section>
          <section style={{display:"flex"}}>
          <h4>LastName:</h4> 
          {canEdit? <Input
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {
                handleInputLastNameChange(e);
              }}
            /> : <p>{lastName}</p>}
          </section>
          <section style={{display:"flex"}}>
          <h4>Email:</h4>
          {canEdit? <Input
              name="email"
              type="text"
              value={email}
              onChange={(e) => {
                handleInputEmailChange(e);
              }}
            /> : <p>{email}</p>}
          </section>
          {(canEdit || bio.length > 0) && 
          <section style={{display:"flex"}}>
          <h4>Bio:</h4>
          {canEdit? <Input
              name="bio"
              type="text"
              value={bio}
              onChange={(e) => {
                handleInputBioChange(e);
              }}
            /> : <p>{bio}</p>}
          </section>
          }
          <section>
            <Button colorScheme={'green'} mt={2} w="20%" onClick={editDataProfile}>Editar</Button>
            {canEdit && <Button colorScheme={'green'} mt={2} w="20%" onClick={changeData}>Guardar</Button>}
          </section>
        </Box>
      </Box>
    </>
  );
};
//prueba
export default ProfileDetail;