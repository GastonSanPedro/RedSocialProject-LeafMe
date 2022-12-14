import {
  Flex,
  Box,
  SlideFade,
  SimpleGrid,
  useDisclosure,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImgPost from './ImgPost';
import InfiniteScroll from 'react-infinite-scroll-component';

const ImgPostContainer = ({
  site,
  myUser,
  user,
  posts,
  singlePost,
  handleClickRef,
  handleDelete,
  handleRestore
}) => {
  //--------- Lógica InfiteScroll --------
  const [currentStart, setCurrentStart] = useState(0);
  const [currentEnd, setCurrentEnd] = useState(9);

  const handleClickMore = () => {
    setCurrentEnd(currentEnd + 9);
  };

  let renderPosts =
    posts?.length > 9 ? posts?.slice(currentStart, currentEnd) : posts;
 
  //------------------------------------

  // const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <InfiniteScroll
        dataLength={renderPosts?.length || 9}
        hasMore={true}
        next={() => handleClickMore()}
        loader={<Divider w="20%" m={5} />}
      >
        <Flex
          pr={'2%'}
          pl={'2%'}
          textAlign={'center'}
          justifyContent={'center'}
          direction={'column'}
          borderRadius={2}
          mt={site === 'feed' ? '0vh' : '4vh'}
        >
          <SimpleGrid 
      
          columns={{ base: 1, xl: 3 }} 
          spacing={'10'} 
          mt={2} 
          mr={'5'}>
            {renderPosts?.length !== 0 ? (
              renderPosts?.map((post, index) => {
                return (
                  <SlideFade in={onToggle} key={index} offsetY="20px">
                    <ImgPost
                      userName={
                        site === 'profile' || site === 'anyProfile'
                          ? (site === 'profile' ? myUser : user)?.userName
                          : post.author?.userName
                      }
                      fullName={
                        site === 'profile' || site === 'anyProfile'
                          ? (site === 'profile' ? myUser : user)?.fullName
                          : post.author?.fullName
                      }
                      avatar={
                        site === 'profile' || site === 'anyProfile'
                          ? (site === 'profile' ? myUser : user)?.image  
                          : post?.author?.image
                      }
                      firstName={site === 'anyProfile' 
                      ? user?.firstName
                      : post?.author?.firstName}
                      lastName={site === 'anyProfile' 
                      ? user?.lastName
                      : post?.author?.lastName}
                      image={post?.pics}
                      email={post?.author?.email}
                      authorId={post?.author}
                      description={post?.description}
                      rating={post?.rating}
                      date={post?.createdAt}
                      postId={post?._id}
                      premium={post?.premium}
                      reported={post?.reported}
                      loggedUser={myUser?._id}
                      loggedEmail={myUser?.email}
                      comments={post?.comments}
                      likes={post?.likes}
                      singlePost={singlePost}
                      site={site}
                      handleDelete={handleDelete}
                      handleRestore={handleRestore}
                    />
                  </SlideFade>
                );
              })
            ) : (
              <Box>
                {site === 'profile' ? (
                  <Text w={'40vw'} ml={'15vw'}>
                    You haven't create any posts. Click here to create your
                    first one <Button onClick={handleClickRef}>Create</Button>
                  </Text>
                ) : (
                  <Text>There are no posts yet</Text>
                )}
              </Box>
            )}
          </SimpleGrid>
        </Flex>
      </InfiniteScroll>
    </>
  );
};

export default ImgPostContainer;
