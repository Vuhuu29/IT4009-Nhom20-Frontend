import React, { useState } from 'react';
import { Image, Tab, Container, Row, Col, Tabs
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function happyFarm(params) {
    return (
        <div style={{paddingRight: "6%", paddingLeft: "6%",color: "#000", textAlign: "left"}}>
        <div style={{backgroundColor:"#fdeeee"}}>
            <p>Dream&Do Happy Farm là một nông trại nhỏ nằm trên một quả đồi, địa hình dốc thoai thoải thuộc địa phận xã Tiến Xuân, huyện Thạch Thất, Hà Nội. Nơi diễn ra khóa học Survival Kid, trại hè Green Leaders Camp kể từ tháng 1 năm 2017.
            </p>
            <p>Dream&Do Garden thừa hưởng nhiều đặc điểm khí hậu giao thoa giữa đồng bằng và miền núi, nằm ngay cạnh một con suối nhỏ hiền hòa. Các hoạt động trong khoá học được thiết kế dựa trên không gian xanh mát của nông trại.
            </p>
            <p>Dream&Do Garden thừa hưởng nhiều đặc điểm khí hậu giao thoa giữa đồng bằng và miền núi, nằm ngay cạnh một con suối nhỏ hiền hòa. Các hoạt động trong khoá học được thiết kế dựa trên không gian xanh mát của nông trại.
            </p>
            <Image src={"./happyfarm1.jpg"} style ={{width: "100%", paddingBottom: "3%"}}/>
            <Image src={"./happyfarm2.jpg"} style ={{width: "100%", paddingBottom: "3%"}}/>
            <p>Cách trung tâm Hà Nội 35km theo hướng Đại Lộ Thăng Long, học sinh chỉ mất 40 phút di chuyển đến Dream&Do Garden, điều này để đảm bảo thời gian di chuyển cũng như sức khoẻ của các con khi tham gia khoá học.
            </p>
            <p>Với đặc điểm đa dạng về địa hình và văn hóa, Dream&Do Garden là điểm đến rất thích hợp để trẻ học tập và thực hành các kỹ năng và bồi dưỡng nhận thức về bản thân. Các bố mẹ hoàn toàn có thể yên tâm cho con thỏa sức vui đùa và trải nghiệm tại Dream&Do Garden.
            </p>
            <Image src={"./happyfarm3.png"} style ={{width: "100%", paddingBottom: "3%"}}/>
            <Image src={"./happyfarm4.jpg"} style ={{width: "100%", paddingBottom: "3%"}}/>

        </div>      
        </div>)}