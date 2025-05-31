
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}token/`, {
      email,
      password
    });

    const data = response.data;

    // Save tokens and role info in localStorage (or cookies if preferred)
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('email', data.email);
    localStorage.setItem('is_faculty', data.is_faculty);
    localStorage.setItem('is_recruiter', data.is_recruiter);

    return data;
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
      is_recruiter: true,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Recruiter registration failed' };
  }
};