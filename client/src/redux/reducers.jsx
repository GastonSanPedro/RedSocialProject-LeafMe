import {
  AUTH_USER,
  CLEAN_AUTH_USER,
  CREATE_USER_POST,
  GET_MY_USER,
  GET_POSTS,
  SINGLE_POST,
  POST_COMMENT,
  POST_REACTION,
  CLEAN_SINGLE_POST,
  GET_USER,
  GET_USERS,
  CREATE_USER,
  LOG_OUT,
  POST_USER,
  SEARCH_POST,
  SEARCH_USER,
  CHANGE_DATA_PROFILE,
  ADD_FRIEND,
  REPORT_POST,
  DELETE_POST,
  GET_FRIENDS,
  GET_FOLLOWERS,
  DELETE_FRIENDS,
  GET_FRIENDS_POSTS,
  SEARCH_FRIENDS,
  CREATE_PAYMENT,
  SET_PREMIUM,
  BLOCK_USER,
  DELETE_ACCOUNT,
  GET_USERS_DELETED,
  POST_REACTION_POST,
  TRENDING_POSTS,
  RESTORE_POST,
  RESTORE_USER,
  CLEAN_SEARCHFRIEND
} from './action';

const initialState = {
  allUsers: [],
  users: [],
  user: [],
  myUser: [],
  posts: [],
  singlePost: [],
  auth: {
    auth: '',
  },
  searchFriends: [],
  searchUser: [],
  searchPost: [],
  uploadedImage: [],
  friends: [],
  friendsPosts: [],
  followers: [],
  payment: [],
  usersDeleted: [],
  trendingPosts: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_MY_USER:
      return {
        ...state,
        myUser: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SINGLE_POST:
      return {
        ...state,
        singlePost: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        singlePost: action.payload,
      };
    case POST_REACTION_POST:
      return {
        ...state,
      };
    case CLEAN_SINGLE_POST:
      return {
        ...state,
        singlePost: action.payload,
      };
    case POST_USER:
      return {
        ...state,
      };
    case CREATE_USER_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        myUser: {
          ...state.myUser,
          posts: [...state.myUser.posts, action.payload],
        },
      };
    case CREATE_USER:
      return {
        ...state,
        myUser: action.payload,
      };
    case AUTH_USER:
      return {
        ...state,
        auth: action.payload,
        myUser: action.payload.user,
      };
    case CLEAN_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
        myUser: [],
      };
    case LOG_OUT:
      return {
        ...state,
        auth: action.payload,
        myUser: [],
      };
    case SEARCH_USER:
      return {
        ...state,
        searchUser: action.payload,
      };
    case SEARCH_POST:
      return {
        ...state,
        searchPost: action.payload,
      };
    case CHANGE_DATA_PROFILE:
      return {
        ...state,
        myUser: action.payload,
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: action.payload.friendsUser,
        user: action.payload.anyUserWithoutFriend,
        myUser: action.payload.myUser
      };
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };
    case SEARCH_FRIENDS:
      return {
        ...state,
        searchFriends: action.payload,
      };
    case DELETE_FRIENDS:
      return {
        ...state,
        friends: action.payload.friendsUser,
        user: action.payload.anyUserWithNewFriend,
        myUser: action.payload.myUser
      };
    case GET_FRIENDS_POSTS:
      return {
        ...state,
        friendsPosts: action.payload,
      };
    case REPORT_POST:
      return {
        ...state,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: action.payload,
        myUser: {
          ...state.myUser,
          posts: [...state.myUser.posts],
        },
      };
    // case GET_FRIENDS_POSTS:
    //   return {
    //     ...state,
    //     posts: action.payload,
    //   };
    case CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_PREMIUM:
      return {
        ...state,
      };
    case BLOCK_USER:
      return {
        ...state,
        users: action.payload
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        auth: action.payload,
        myUser: [],
      };
    case GET_USERS_DELETED:
      return {
        ...state,
        usersDeleted: action.payload,
      };
    case TRENDING_POSTS:
      return {
        ...state,
        trendingPosts: action.payload,
      };
    case RESTORE_POST:
      return {
        ...state,
        posts: action.payload
      };
    case RESTORE_USER:
      return {
        ...state,
        users: action.payload
      };
      case CLEAN_SEARCHFRIEND:
        return {
          ...state,
          searchFriends: action.payload
        };
    default:
      return state;
  }
}
