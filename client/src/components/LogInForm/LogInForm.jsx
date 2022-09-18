import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Tooltip,
  Center,
  Box,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  AlertTitle,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, getUser, logOut } from '../../redux/actions';

const CreateUser = () => {
  const [show, setShow] = React.useState(false);
  const [input, setInput] = React.useState({
    email: '',
    pass: '',
  });
  const auth = useSelector((state) => state.auth);
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowClick = () => setShow(!show);
  const handleInputChange = (event) =>
    setInput({ ...input, [event.target.name]: event.target.value });
  const isError = input === ''; //true or false
  const [isValidate, setIsValidate] = React.useState(false);
  //   const mounted = useRef();
  // useEffect(() => {
  //   if (!mounted.current) {
  //     // do componentDidMount logic
  //     mounted.current = true;
  //   } else {
  //     // do componentDidUpdate logic
  //   }
  // });

  useEffect(() => {
    isUserValidate();
  }, [auth]);

  const handleSubmit = (input) => {
    dispatch(authUser(input.email, input.pass));
  };

  const isUserValidate = () => {
    if (auth.auth === true) {
      localStorage.setItem('user', JSON.stringify(auth.user));

      dispatch(logOut());
      navigate(`/profile`);
    } else if (auth.reason) {
      alert(auth.reason);
    }
  };

  return (
    <>
      <Center>
        <Box w="400px" m="60px">
          <FormControl isInvalid={isError}>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              value={input.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                name="pass"
                value={input.pass}
                pr="70px"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <InputRightElement width="70px">
                <Button h="30px" size="sm" onClick={handleShowClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {!isError ? (
            <Button
              onClick={(e) => {
                handleSubmit(input);
              }}
              mt="10px"
            >
              Log In
            </Button>
          ) : (
            <Tooltip
              label="Please complete required information"
              shouldWrapChildren
            >
              <Button isDisabled mt="10px">
                Log In
              </Button>
            </Tooltip>
          )}
        </Box>
      </Center>
    </>
  );
};

export default CreateUser;
