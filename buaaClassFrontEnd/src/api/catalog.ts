import type { Course, CourseList, Review, ReviewList, User, UserList } from '@/api/model/model';
import { request } from '@/utils/request';

const Api = {
  CourseList: '/admin/catalog/get_course',
  CourseByName: '/admin/catalog/get_course_by_name',
  CourseById: '/admin/catalog/get_course_by_id',
  ReviewList: '/admin/review/get_review',
  UserList: '/admin/review/get_user'
};

export function getCourseList() {
  return request.get<CourseList>({
    url: Api.CourseList,
  });
}

export function getCourseByName(name: string) {
  return request.get<Course>({
    url: Api.CourseByName,
    params: name,
  });
}

export function getCourseById() {
  return request.get<Course>({
    url: Api.CourseById,
  });
}

export function getReviewList() {
  return request.get<ReviewList>({
    url: Api.ReviewList,
  });
}

export function getUserList() {
  return request.get<UserList>({
    url: Api.UserList,
  });
}
