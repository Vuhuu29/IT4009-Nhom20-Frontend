import React, { useState } from 'react';
import { Image, Tab, Tabs
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoryDD from './AboutUs/StoryDD';
import TienTrinhPhatTrien from './AboutUs/tienTrinhPhatTrien';
import HappyFarm from './AboutUs/happyFarm';
export default function AboutUsPage(params) {
    return (
        <div>
            <h1>About Us</h1>
            <Image src={"./homepageintro1.png"} style ={{width: "100%", height: "40rem", backgroundColor:"#fdeeee"}}/>
            <Tabs defaultActiveKey="story" id="uncontrolled-tab-example" className="mb-3" >
              <Tab eventKey="story" title="DreamDo và câu chuyện về giáo dục">
                <StoryDD/>
              </Tab>
              <Tab eventKey="seederDD" title="Tiến trình phát triển của một học sinh">
                <TienTrinhPhatTrien />
              </Tab>
              <Tab eventKey="mediaDD" title="Dream&Do Happy Farm">
                <HappyFarm />
              </Tab>
            </Tabs>
        </div>
    )
}