import React from 'react'
import UserSinglePost from '../components/UserSinglePost/UserSinglePost'
import Navbar from '../components/navbar/Navbar';
import CreatePost from '../components/CreatePost/CreatePost';
import { HStack, VStack } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers } from '../redux/actions';
import FriendsContainer from '../components/Friends/FriendsContainer';
import UserCard from '../components/UserCard/UserCard';
import { useResolvedPath } from 'react-router-dom';
import { useScroll } from 'framer-motion';
import { isJSDocNullableType } from 'typescript';

// let users =[]



const Feed = () => {

    const dispatch = useDispatch()

    const allUsers = useSelector((state) => state.users)
    const allPosts = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    // if(allUsers.length > 1){
    //     users = allUsers
    // }

    // if(users.length > 1){
    //     console.log(users)
    // }

    return (
        <>

            <Navbar />
            <HStack >
                <VStack>
                    <CreatePost />
                    <HStack >
                        <UserSinglePost />
                        <UserSinglePost />
                    </HStack>
                </VStack>
                <VStack>
                    <UserCard />
                    {allUsers.length > 1 ?
                    <FriendsContainer
                    allUsers = {allUsers}
                     /> : null}
                </VStack>
            </HStack>
        </>
    )
}

export default Feed


{/* <div className={container}>
                        {currentPokemons && currentPokemons.map((e) => {
                            return (
                                <Card
                                    name={e.name}
                                    img={e.img}
                                    id={e.id}
                                    types={e.types}
                                />
                            )
                        })
                        }
                    </div> */}