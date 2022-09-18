import { Avatar, Button, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authUser, getUser, logOut } from '../../redux/actions';

const userImg =
  'https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105171/126078877-vector-design-of-avatar-and-dummy-symbol-set-of-avatar-and-image-stock-vector-illustration-.jpg?fj=1';

const UserCard = () => {
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //isUserValidate();
    dispatch(getUser(User.email));
  }, [dispatch, User.email]);

  const handleClick = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/landing-page');
  };
  // console.log(user);
  return (
    <>
      <Stack
        m={3}
        ml={0}
        display="flex"
        flexDir="column"
        w="200px"
        h="245px"
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.200"
        borderRadius="7px"
      >
        <Avatar size="xl" name="user" src={userImg} />
        <Text as="b" fontSize="sm">
          {user.firstName + user.lastName}
        </Text>
        <Button
          size="sm"
          onClick={() => {
            handleClick();
          }}
        >
          Log Out
        </Button>
      </Stack>
    </>
  );
};

export default UserCard;
