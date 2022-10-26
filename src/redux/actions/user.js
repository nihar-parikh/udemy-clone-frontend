import { server } from '../store';
import axios from 'axios';

export const signUp = formData => async dispatch => {
  try {
    dispatch({ type: 'signUpStart' });

    const { data } = await axios.post(`${server}/signUp`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true, //bcoz we are using cookies
    });
    dispatch({ type: 'signUpSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'signUpFailed', payload: error.response.data.message });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginStart' });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true, //bcoz we are using cookies
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFailed', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserStart' });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true, //bcoz we are using cookies
    });
    dispatch({ type: 'loadUserSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loadUserFailed', payload: error.response.data.message });
  }
};

export const logOut = () => async dispatch => {
  try {
    dispatch({ type: 'logOutStart' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true, //bcoz we are using cookies
    });
    dispatch({ type: 'logOutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logOutFailed', payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionStart' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true, //bcoz we are using cookies
    });
    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionStart' });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
