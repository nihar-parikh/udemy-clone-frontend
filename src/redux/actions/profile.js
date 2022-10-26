import { server } from '../store';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileStart' });

    const { data } = await axios.put(
      `${server}/me/updateProfile`,
      {
        name,
        email,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfileSuccess', payload: data.message });
    // dispatch({ type: 'loadUserSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};

export const updateProfileImage = formdata => async dispatch => {
  try {
    dispatch({ type: 'updateProfileImageStart' });

    const { data } = await axios.put(
      `${server}/me/updateProfileImage`,
      formdata,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },

        withCredentials: true,
      }
    );

    dispatch({ type: 'updateProfileImageSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileImageFail',
      payload: error.response.data.message,
    });
  }
};

export const changePassword =
  (oldPassword, newPassword, confirmNewPassword) => async dispatch => {
    try {
      dispatch({ type: 'changePasswordStart' });

      const { data } = await axios.put(
        `${server}/password/update`,
        { oldPassword, newPassword, confirmNewPassword },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true, //bcoz we are using cookies
        }
      );

      dispatch({ type: 'changePasswordSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'changePasswordFail',
        payload: error.response.data.message,
      });
    }
  };

export const forgotPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgotPasswordStart' });

    const { data } = await axios.post(
      `${server}/password/forgot`,
      { email },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true, //bcoz we are using cookies
      }
    );

    dispatch({ type: 'forgotPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'forgotPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (resetToken, newPassword, confirmNewPassword) => async dispatch => {
    try {
      dispatch({ type: 'resetPasswordStart' });

      const { data } = await axios.put(
        `${server}/password/reset/${resetToken}`,
        { newPassword, confirmNewPassword },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true, //bcoz we are using cookies
        }
      );

      dispatch({ type: 'resetPasswordSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'resetPasswordFail',
        payload: error.response.data.message,
      });
    }
  };

export const addToPlayList = courseId => async dispatch => {
  try {
    dispatch({ type: 'addToPlayListStart' });

    const { data } = await axios.post(
      `${server}/addToPlayList`,
      {
        courseId,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true, //bcoz we are using cookies
      }
    );

    dispatch({ type: 'addToPlayListSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addToPlayListFail',
      payload: error.response.data.message,
    });
  }
};

export const removeFromPlayList = courseId => async dispatch => {
  try {
    dispatch({ type: 'removeFromPlayListStart' });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removeFromPlayList?courseId=${courseId}`,
      config
    );

    dispatch({ type: 'removeFromPlayListSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'removeFromPlayListFail',
      payload: error.response.data.message,
    });
  }
};
