export default function RoomView(props) {
    return (
    <div className={"m-5 p-2 " + props.room.status} style={{background: '#FFF5EE', boxShadow: 'rgba(0, 0, 0, 0.34) 0px 5px 20px -17px', position: 'relative', width: '90%'}}>
        <div className="d-flex flex-row" style={{fontSize: 20}}>
            {props.room.name}
            <div className="ms-auto d-flex align-items-center" style={{fontSize: 14}}>
                <img src='./person.svg'  className="me-1"/>
                {((props.room.num) ? props.room.num : "--") + '/' + ((props.room.max_user) ? props.room.max_user : "--")}
            </div>
        </div>

        <div className="col mt-2 px-2" style={{fontSize: 14}}>

            <div className="row mb-1" style={{border: '1px solid #000', padding: 5}}>
                <div className="col d-flex align-items-center" style={{borderRight: '1px solid #000'}}>
                    <img src="./person-bounding-box.svg"  className="me-1"/>
                    {(props.room.renter) ? props.room.renter : "--"}
                </div>
                <div className="col d-flex align-items-center">
                    <img src="./telephone.svg"  className="me-1"/>
                    {(props.room.renter_phone) ? props.room.renter_phone : "--"}
                </div>
            </div>

            <div className="row mb-1" style={{border: '1px solid #000', padding: 5}}>
                <div className="col d-flex align-items-center" style={{borderRight: '1px solid #000'}}>
                    <img src="./current-dollar.svg"  className="me-1"/>
                    {props.room.cost + " Đồng / Tháng"}
                </div>
                <div className="col d-flex align-items-center">
                    <img src="./arrow-repeat.svg"  className="me-1"/>
                    {props.room.cycle}
                </div>
            </div>

            <div className="row mb-1" style={{border: '1px solid #000', padding: 5}}>
                <div className="col d-flex align-items-center" style={{borderRight: '1px solid #000'}}>
                    <img src="./file-earmark-text.svg" className="me-1"/>
                    {props.room.start_time}
                </div>

                <div className="col d-flex align-items-center">
                    <img src="./file-earmark-x.svg" className="me-1"/>
                    {props.room.end_time}
                </div>
            </div>

            <div className="row mb-1" style={{border: '1px solid #000', padding: 5}}>
                <div className="col d-flex align-items-center" style={{borderRight: '1px solid #000'}}>
                    
                    <img src="./journal-text.svg" className="me-1"/>
                    {props.room.state1}
                </div>
                <div className="col d-flex align-items-center">
                    
                    <img src="./journal-check.svg" className="me-1"/>    
                    {props.room.state2}
                </div>
            </div>

        </div>
    </div>
    )
}