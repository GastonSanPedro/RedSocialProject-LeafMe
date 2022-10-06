import { Flex, Button, Divider, Box } from '@chakra-ui/react';
import CreatePost from '../CreatePost/CreatePost';
import ImgPostContainer from '../ImgPost/ImgPostContainer';
import TextPostContainer from '../TextPost/TextPostContainer';
import { useState, useRef, useEffect } from 'react';
import NavbarSerch from '../NavbarSearch/NavbarSearch';
import { BsChatLeftText } from 'react-icons/bs';
import { RiImage2Line } from 'react-icons/ri';

export default function ContainerPost({
  site,
  email,
  myUser,
  user,
  posts,
  singlePost,
  handleDelete,
  handleRestore,
}) {
  const [typePost, setTypePost] = useState('img');
  
  const ref = useRef();
  const handleClickRef = () => {
    ref.current.focus();
  };
  const arrayUserPosts = (site) => {
    if (site === 'profile') {
      return posts?.filter((post) => post.author?._id === myUser?._id);
    }
    if (site === 'anyProfile') {
      return user?.posts;
    }
    if (site === 'search' || site === 'explore') {
      return posts;
    }
    if (site === 'feed') {
      return posts;
    }
    if (site === 'admin') {
      let reportedPosts = posts?.filter((post) => post?.reported === true);
      return reportedPosts;
    }
    if (site === 'trending') {
      return posts;
    }
  };
  const typePosts = (typePost) => {
    if (typePost === 'text') {
      let textPosts = arrayUserPosts(site)?.filter(
        (p) => p?.pics?.length === 0
      );
      return textPosts;
    } else if (typePost === 'img') {
      if (arrayUserPosts(site)?.length > 0) {
        let imagePosts = arrayUserPosts(site)?.filter(
          (p) => p?.pics?.length >= 1
        );
        return imagePosts;
      }
    }
  };

  const NAV_ITEMS = [
    {
      label: 'Images',
      icon: <RiImage2Line />,
      onClick: () => {
        setTypePost('image');
      },
    },
    {
      label: 'Text',
      icon: <BsChatLeftText />,
      onClick: () => {
        setTypePost('text');
      },
    },
  ];
  return (
    <>
      <Flex
        pl={'0%'}
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        borderRadius={2}
        mt={site === 'feed' ? '0vh' : '4vh'}
      >
        {site === 'search' ||
        site === 'admin' ||
        site === 'explore' ? null : site === 'feed' || site === 'profile' ? (
          <CreatePost
            site={site}
            email={email}
            myUser={myUser}
            createdRef={ref}
          />
        ) : (
          <Box
            p={3}
            m={3}
            mt={'4vh'}
            h={site === 'feed' ? '22vh' : '36vh'}
            w={site === 'feed' ? '100%' : '65%'}
            display={site === 'trending' ? 'none' : 'flex'}
            backgroundColor={'white'}
            mb={site === 'profile' ? '50px' : null}
          ></Box>
        )}
        {site === 'explore' ? null : <Divider />}

        <NavbarSerch NAV_ITEMS={NAV_ITEMS} />

        {typePost === 'text' ? (
          <TextPostContainer
            posts={typePosts('text')}
            site={site}
            myUser={myUser}
            user={user}
            email={email}
            singlePost={singlePost}
            handleDelete={handleDelete}
            handleRestore={handleRestore}
            handleClickRef={handleClickRef}
          />
        ) : (
          <ImgPostContainer
            posts={typePosts('img')}
            site={site}
            myUser={myUser}
            user={user}
            email={email}
            singlePost={singlePost}
            handleDelete={handleDelete}
            handleRestore={handleRestore}
            handleClickRef={handleClickRef}
          />
        )}
      </Flex>
    </>
  );
}
