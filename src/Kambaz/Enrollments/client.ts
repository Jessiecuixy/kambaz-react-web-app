import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollCourse = async (enrollment: any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/users/${enrollment.user}/courses/${enrollment.course}`);
  return response.data;
};

export const unenrollCourse = async (enrollment: any) => {
  const response = await axios.delete(`${REMOTE_SERVER}/api/users/${enrollment.user}/courses/${enrollment.course}`);
  return response.data;
};
