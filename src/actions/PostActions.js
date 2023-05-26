import * as PostsApi from '../api/PostRequests';

export const timelinePost = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.timelinePost(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

export const like = (id, data) => async(dispatch) =>{
  dispatch({type: "LIKE_POST", data: id})
  PostsApi.like(id, data)
}
export const unlike = (id, data) => async(dispatch) =>{
  dispatch({type: "UNLIKE_POST", data: id})
  PostsApi.like(id, data)
}
