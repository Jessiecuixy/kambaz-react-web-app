import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollCourse = async (enrollment: any) => {
  const response = await axios.post(ENROLLMENTS_API, enrollment);
  return response.data;
};

export const unenrollCourse = async (enrollment: any) => {
  const response = await axios.delete(ENROLLMENTS_API, { data: enrollment });
  return response.data;
};
