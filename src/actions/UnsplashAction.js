import { searchImages } from "../api/Unsplash";

export const FETCH_IMAGES = "FETCH_IMAGES";

export const searchImagesWithKeyword = async (keywords, dispatch) => {
  dispatch({
    type: FETCH_IMAGES,
    payload: { loading: true },
  });

  try{
      const response = await searchImages(keywords);
      dispatch({
          type:FETCH_IMAGES,
          payload:{
              
          }
      })

  }catch(){

  }
};
