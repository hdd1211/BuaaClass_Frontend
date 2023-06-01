import type { Course, CourseList, Review, ReviewList, User, UserList } from '@/api/model/model';
import { request } from '@/utils/request';

const Api = {
  CourseList: '/admin/catalog/get_course',
  CourseByName: '/admin/catalog/get_by_name',
  CourseById: '/admin/catalog/get_by_id',
  CourseByType: '/admin/catalog/get_by_type',
  AddCourse: '/admin/catalog/add_course',
  AddBatch: '/admin/catalog/add_batch ',
  DeleteCourse: '/admin/catalog/del_course',
  DeleteBatch: '/admin/catalog/del_batch ',
  ReviewList: '/admin/review/get_review',
  ReviewById: '/admin/review/get_by_id',
  ReviewByStatus: '/admin/review/get_by_status',
  ReviewByCourse: '/admin/review/get_by_course',
  DeleteReview: '/admin/catalog/del_review',
  UserList: '/admin/user/get_user',
  UserById: '/admin/user/get_by_id'
};

export function getCourseList() {
  return request.get<CourseList>({
    url: Api.CourseList,
  });
}

export function getCourseByName(name) {
  return request.get<CourseList>({
    url: Api.CourseByName,
    params: name,
  });
}

export function getCourseById(id) {
  return request.get<CourseList>({
    url: Api.CourseById,
    params: id,
  });
}

export function getCourseByType(type) {
  return request.get<CourseList>({
    url: Api.CourseByType,
    params: type,
  });
}

export function addCourse(course) {
  return request.post<CourseList>({
    url: Api.AddCourse,
    params: course,
  });
}
export function addBatch(coursebatch) {
  return request.post<CourseList>({
    url: Api.AddBatch,
    params: coursebatch,
  });
}

export function deleteCourse(course) {
  return request.delete<CourseList>({
    url: Api.DeleteCourse,
    params: course,
  });
}

export function deleteBatch(coursebatch) {
  return request.delete<CourseList>({
    url: Api.DeleteBatch,
    params: coursebatch,
  });
}

export function getReviewList() {
  return request.get<ReviewList>({
    url: Api.ReviewList,
  });
}

export function getReviewById(id) {
  return request.get<ReviewList>({
    url: Api.ReviewById,
    params: id,
  });
}

export function getReviewByStatus(status) {
  return request.get<ReviewList>({
    url: Api.ReviewByStatus,
    params: status,
  });
}

export function getReviewByCourse(course_id) {
  return request.get<ReviewList>({
    url: Api.ReviewByCourse,
    params: course_id,
  });
}

export function getUserList() {
  return request.get<UserList>({
    url: Api.UserList,
  });
}

export function getUserById(id) {
  return request.get<UserList>({
    url: Api.UserById,
    params: id,
  });
}

