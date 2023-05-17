export interface CourseList {
  list: Array<Course>;
}
export interface Course {
  name: string;
  id: string;
  department: string;
  credit: string;
  teacher: string;
}

export interface ReviewList {
  list: Array<Review>;
}
export interface Review {
  id: string;
  user_id: string;
  time:Date;
  agree_cnt:number;
  disagree_cnt:number;
  course_id: string;
  teacher_id: string;
  semester:string;
  rating_total:number;
  rating_quality:number;
  rating_workload:number;
  rating_assessment:number;
  title:string;
  text:string;
  status:number;
}

export interface UserList {
  list: Array<User>;
}
export interface User {
  id: string;
  user_name: string;
  password: string;
  agree_reviews: Array<string>;
  disagree_reviews: Array<string>;
  reviews: Array<string>;
}
