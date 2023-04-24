import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import LoginRegisterScreen from './screens/LoginRegisterScreen';
import HomePage from './screens/user/HomePage';
import CoursePage from './screens/user/CoursePage';
import AboutUsPage from './screens/user/AboutUsPage';
import EventPage from './screens/user/eventpage/EventPage';
import ContactPage from './screens/user/ContactPage';
import JobPage from './screens/user/JobPage';
import BlogPage from './screens/user/BlogPage';
import StudentPage from './screens/student/StudentPage';
import AdminPage from './screens/admin/AdminPage';
import TeacherPage from './screens/teacher/TeacherPage';
import Admin from './screens/admin/Admin';
import ChangePassword from './screens/teacher/ChangePassword'
import RateStudent from './screens/teacher/RateStudent'
import ViewClass from './screens/teacher/ViewClass'
import ClassTeacher from './screens/teacher/ClassTeacher'
import ManageProfile from './screens/teacher/ManageProfile'
import ManageCourse from './screens/admin/ManageCourse';
import ManageStudent from './screens/admin/ManageStudent';
import ManageTeacher from './screens/admin/ManageTeacher';
import ManageEvent from './screens/admin/ManageEvent';
import CreateEvent from './screens/admin/CreateEvent';
import CreateCourse from './screens/admin/CreateCourse';
import CreateTeacher from './screens/admin/CreateTeacher';
import ManageClass from './screens/admin/ManageClass';
import CourseComponent from './components/course/CourseComponent'
import SearchCourse from './components/course/SearchCourse'
import GreenKidCamp from "./screens/student/Course/GreenKidCamp";
import ClassComponent from "./components/course/ClassComponent"
import history from './history'
const Routes = () => (
  <div className="content" style={{paddingTop:55}}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginRegisterScreen} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/event" component={EventPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/job" component={JobPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/teacher" component={TeacherPage} />
        <Route path="/admin1" component={Admin} />
        <Route path="/change-password" component={ChangePassword}/>
        <Route path="/class" component={ViewClass}/>
        <Route path="/class-teacher" component={ClassTeacher}/>
        <Route path="/rate-student" component={RateStudent}/>
        <Route path="/manage-profile" component={ManageProfile}/>
        <Route path="/manage-class" component={ManageClass}/>
        <Route path="/manage-course" component={ManageCourse} />
        <Route path="/manage-teacher" component={ManageTeacher} />
        <Route path="/manage-student" component={ManageStudent} />
        <Route path="/manage-event" component={ManageEvent} />
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/create-teacher" component={CreateTeacher} />
        <Route path="/create-course" component={CreateCourse} />
        <Route path="/create-class" component={ManageClass} />
        <Route path="/course-" component={CourseComponent}/>
        <Route path="/search-course" component={SearchCourse}/>
        <Route path="/course-GreenKidCamp" component={GreenKidCamp}/>
        <Route path="/create-class" component={ManageClass} />
        <Route path="/class-" component={ClassComponent}/>
      </Switch>
    </Router>
  </div>
);

export default Routes;
