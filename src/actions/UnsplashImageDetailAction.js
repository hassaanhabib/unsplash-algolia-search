export const SAVE_IMAGE_OBJECT = "SAVE_IMAGE_OBJECT";

export const saveImageData = async (imageData, dispatch) => {
  try {
    dispatch({
      type: SAVE_IMAGE_OBJECT,
      payload: {
        loading: true,
        data: imageData,
      },
    });
  } catch (error) {}
};
