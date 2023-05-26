const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false
  },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };

    // Like post
    case "LIKE_POST":
      return {...state, posts: [...state.posts, state.posts.map((post) => {
        return {...post, likes: [...post.likes, action.data]}
      })] }
    case "UNLIKE_POST":
      return {...state, posts: [...state.posts, state.posts.map((post) => {
        return {...post, likes: [...post.likes.filter((personId) => personId!==action.data)]}
      })] }
    default:
      return state;
  }
}

export default postReducer