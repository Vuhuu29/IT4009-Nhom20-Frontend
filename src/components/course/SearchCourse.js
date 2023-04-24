import React, { useState, useEffect, Component } from 'react'
import {
  Image, Container, Row, Col, Card, Button
} from 'react-bootstrap';
import axios from 'axios'
import SearchIcon from "@material-ui/icons/Search";
import '../../style/css/menu/searchbar.css'
import '../../style/css/menu/coursepage.css'
import { useHistory, useLocation } from 'react-router';
export default function SearchCourse() {
  const [searchinput, setSearchInput] = useState('');
  const location = useLocation();
  const history = useHistory();
  const [listcoursesearch, setListCourseSearch] = useState([]);
  const [wordsearch,setWordSearch]= useState(location.state);
  const [input, setInput] = useState('http://localhost:8080/searchCourse/' + wordsearch);
  useEffect(() => {

    const fetchDataCourseSearch = async () => {
      await fetch(input)
        .then((res) => res.json())
        .then((data) => {
          setListCourseSearch(data);
          console.log(data);
        })
        .catch((err) => console.log(err));

    }
    fetchDataCourseSearch();
  }, [])
  return (
    <div>
      <Image src={"./khoahoc2.png"} style={{ width: "100%", height: "50%" }} />
      <Container style={{ paddingRight: "6%", paddingLeft: "6%", backgroundColor: "#fdeeee", paddingTop: "4%" }}>
        <div className="search" style={{ float: 'right', height: '40px' }}>
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Nhập tên khóa học"
              onChange={(e => { setSearchInput(e.target.value)})}
            />
            <Button
              variant="outline-danger"
              style={{ height: "33px", padding: "0px 5px" }}
              onClick={() => {
                history.push({
                  pathname: '/search-course',
                  search : searchinput,
                  state: searchinput
                })
                window.location.reload(false)
              }}  >
              <SearchIcon style={{ color: "red" }} /> 
            </Button>
          </div>
        </div>
        <div style={{float:'left'}}>Kết quả tìm kiếm của '{wordsearch}'</div>
        <div style={{ marginTop: '40px' }}>
          {listcoursesearch.map((data) => (
            < Row >
              <Col>
              <div className="card-course" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <a  href={'/course-'+data.title} ><img src={data.avatar} className="card-img" /></a>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href={'/course-'+data.title}  className="card-title"><strong>{data.title}</strong></a>
                                <p className="card-sub">Bắt đầu từ {data.time_start} đến {data.time_end}</p>
                                <div className="card-text"><p>{data.about} </p> </div>
                                <p className="read-more">
                                  <a 
                                  href={'/course-'+data.title} >Xem tiếp ➤</a></p>
                            </div>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>))
          }   </div>
      </Container >
    </div >
  )

}