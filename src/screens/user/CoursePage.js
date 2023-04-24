import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {
  Image, Container, Row, Col, Tab,Tabs, Button
} from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import '../../style/css/menu/searchbar.css'
import '../../style/css/menu/coursepage.css'
export default function CoursePage(params) {
  const [searchinput, setSearchInput] = useState('');
  const [listcourse, setListCourse] = useState([]);
  const [listdefaultcourse, setListDefaultCourse] = useState([]);
  const [listspecialcourse, setListSpecialCourse] = useState([]);
  const history = useHistory();
  useEffect(() => {

    const fetchDataCourse = async () => {
      await fetch('http://localhost:8080/courseAll')
        .then((res) => res.json())
        .then((data) => {
          setListCourse(data);
          console.log(data);
        })
        .catch((err) => console.log(err));

    }
    const fetchDataDefaultCourse = async () => {
      await fetch('http://localhost:8080/courseType/1')
        .then((res) => res.json())
        .then((data) => {
          setListDefaultCourse(data);
          console.log(data);
        })
        .catch((err) => console.log(err));

    }
    const fetchDataSpecialCourse = async () => {
      await fetch('http://localhost:8080/courseType/2')
        .then((res) => res.json())
        .then((data) => {
          setListSpecialCourse(data);
          console.log(data);
        })
        .catch((err) => console.log(err));

    }
    fetchDataCourse();
    fetchDataDefaultCourse();
    fetchDataSpecialCourse();
  }, [])


  return (
    <div>
      <Container style={{ paddingRight: "6%", paddingLeft: "6%", backgroundColor: "#fdeeee", paddingTop: "4%" }}>
        <div className="search" style={{ float: 'right', height: '40px' }}>
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Nhập tên khóa học"
              onChange={(e => { setSearchInput(e.target.value) })}
            />
            <Button
              variant="outline-danger"
              style={{ height: "33px", padding: "0px 5px" }}
              onClick={() => {
                history.push({
                  pathname: '/search-course',
                  search: searchinput,
                  state: searchinput
                })
              }}  >
              <SearchIcon style={{ color: "red" }} />
            </Button>
          </div>
        </div>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="all" title="Tất cả khóa học">
          <div style={{ marginTop: '40px' }}>
          {listcourse.map((data) => (
            < Row >
              <Col>
                <div className="card-course" >
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <a onClick={() => {
                        history.push({
                          pathname: '/course-',
                          search: data.title,
                          state: data
                        })
                      }} ><img src={data.avatar} className="card-img" /></a>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <a onClick={() => {
                          history.push({
                            pathname: '/course-',
                            search: data.title,
                            state: data
                          })
                        }} className="card-title"><strong>{data.title}</strong></a>
                        <p className="card-sub">Bắt đầu từ {data.time_start} đến {data.time_end}</p>
                        <div className="card-text"><p>{data.about} </p> </div>
                        <p className="read-more">
                          <a
                            onClick={() => {
                              history.push({
                                pathname: '/course-',
                                search: data.title,
                                state: data
                              })
                            }} >Xem tiếp ➤</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>))
          }   </div>
          </Tab>
          <Tab eventKey="special" title="Khóa học đặc biệt">
          <div style={{ marginTop: '40px' }}>
          {listdefaultcourse.map((data) => (
            < Row >
            <Col>
              <div className="card-course" >
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <a onClick={() => {
                      history.push({
                        pathname: '/course-',
                        search: data.title,
                        state: data
                      })
                    }} ><img src={data.avatar} className="card-img" /></a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <a onClick={() => {
                        history.push({
                          pathname: '/course-',
                          search: data.title,
                          state: data
                        })
                      }} className="card-title"><strong>{data.title}</strong></a>
                      <p className="card-sub">Bắt đầu từ {data.time_start} đến {data.time_end}</p>
                      <div className="card-text"><p>{data.about} </p> </div>
                      <p className="read-more">
                        <a
                          onClick={() => {
                            history.push({
                              pathname: '/course-',
                              search: data.title,
                              state: data
                            })
                          }} >Xem tiếp ➤</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>))
          }   </div>
          </Tab>
          <Tab eventKey="default" title="Khóa học thường" >
          <div style={{ marginTop: '40px' }}>
          {listspecialcourse.map((data) => (
            < Row >
            <Col>
              <div className="card-course" >
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <a onClick={() => {
                      history.push({
                        pathname: '/course-',
                        search: data.title,
                        state: data
                      })
                    }} ><img src={data.avatar} className="card-img" /></a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <a onClick={() => {
                        history.push({
                          pathname: '/course-',
                          search: data.title,
                          state: data
                        })
                      }} className="card-title"><strong>{data.title}</strong></a>
                      <p className="card-sub">Bắt đầu từ {data.time_start} đến {data.time_end}</p>
                      <div className="card-text"><p>{data.about} </p> </div>
                      <p className="read-more">
                        <a
                          onClick={() => {
                            history.push({
                              pathname: '/course-',
                              search: data.title,
                              state: data
                            })
                          }} >Xem tiếp ➤</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>))
          }   </div>
          </Tab>
        </Tabs>
        
      </Container >
    </div >
  )
}
