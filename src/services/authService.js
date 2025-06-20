
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}login/`, {
      email,
      password
    });

const data = response.data;

const { user, token } = data;

localStorage.setItem('access_token', token.access);
localStorage.setItem('refresh_token', token.refresh);
localStorage.setItem('user_id', user.id);
localStorage.setItem('email', user.email);
localStorage.setItem('is_faculty', user.is_faculty);
localStorage.setItem('is_recruiter', user.is_recruiter);

    return user;
  } catch (error) {
    throw error.response?.data || { detail: 'Login failed' };
  }
};
  

export const getUserRole = () => {
  return {
    isAuthenticated: !!localStorage.getItem('access_token'),
    isFaculty: localStorage.getItem('is_faculty') === 'true',
    isRecruiter: localStorage.getItem('is_recruiter') === 'true',
  };
};


export const registerFaculty = async (formData) => {
  try {
    const data = new FormData();
    data.append('first_name', formData.firstName);
    data.append('last_name', formData.lastName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('work_preference', formData.workPreference);
    data.append('resume', formData.resume);
    data.append('transcripts', formData.transcripts);
    data.append('is_faculty', true);

    const response = await axios.post(`${API_BASE_URL}faculty/register/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Faculty registration failed' };
  }
};

export const registerRecruiter = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}recruiter/register/`, {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      college: formData.college,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Recruiter registration failed' };
  }
};