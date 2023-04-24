import React, {Component} from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap/esm";
import {Link} from 'react-router-dom'
class StudentPieceofCourse extends Component{
    render(){
        return(
            <Card style={{ width: '17rem' }}>
                <Link to={this.props.href}><Card.Img variant="top" src={this.props.src} /></Link>

                <Card.Body>
                    <Card.Title><Link to={this.props.href}>{this.props.title}</Link></Card.Title>
                    <Card.Text>
                        {this.props.p}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default StudentPieceofCourse;