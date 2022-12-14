import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Icon,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FiUsers } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FriendCard } from './FriendCard';
import SearchFriends from './SearchFriends';
import { cleanSearchFriend } from '../../redux/action'

export default function Friends({ myUser, friends, myFollowers }) {

  const searchFriends = useSelector((state) => state.searchFriends)
  const dispatch = useDispatch()

  const [size, setSize] = useState('');
  const [input, setInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleClick = () => {
    onOpen();
  };
  const handleClose = () => {
    dispatch(cleanSearchFriend())
    onClose()
  }

  return (
    <>
      <Flex
        onClick={() => handleClick()}
        key={'friends'}
        role="group"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        w={200}
        cursor="pointer"
        _hover={{
          bg: '#8ea26f',
          color: 'white',
        }}
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={FiUsers}
        />
        {'Friends'}
      </Flex>

      <Drawer onClose={handleClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`My friends`}</DrawerHeader>
          <DrawerBody>
            <SearchFriends setInput={setInput} input={input} myUser={myUser} />
            {
              searchFriends.length > 0 ? (
                searchFriends.map((friend, index) => {
                  return (
                    <Box key={index}>
                      <FriendCard
                        image={friend?.image}
                        email={friend?.email}
                        id={friend?._id}
                        firstName={friend?.firstName}
                        lastName={friend?.lastName}
                        fullName={friend?.fullName}
                      />
                    </Box>
                  );
                })
              ):(
              <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Following
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {friends ? (
                    friends?.map((friend, index) => {
                      return (
                        <Box key={index}>
                          <FriendCard
                            image={friend?.idFriend?.image}
                            email={friend?.idFriend?.email}
                            id={friend?.idFriend?._id}
                            firstName={friend?.idFriend?.firstName}
                            lastName={friend?.idFriend?.lastName}
                            fullName={friend?.idFriend?.fullName}
                          />
                        </Box>
                      );
                    })
                  ) : (
                    <p>Follow someone</p>
                  )}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Followers
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {myFollowers ? (
                    myFollowers?.map((follower, index) => {
                      return (
                        <Box key={index}>
                          <FriendCard
                            image={follower?.image}
                            email={follower?.email}
                            id={follower?._id}
                            firstName={follower?.firstName}
                            lastName={follower?.lastName}
                            fullName={follower?.fullName}
                          />
                        </Box>
                      );
                    })
                  ) : (
                    <p>*Ruido de grillos*</p>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>)}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
