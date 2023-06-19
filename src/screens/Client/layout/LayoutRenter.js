
import { Outlet, Link } from "react-router-dom";
import NarBarRenter from "./NavbarRenter";


const LayoutRenter = () => {

    return (
        <>
            <div style={{ overflowY: 'hidden' }}>
                <NarBarRenter />
                <div className="container" style={{ display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh' }}>
                    <div className="d-flex rounded-1 flex-column" style={{ backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );

}

export default LayoutRenter;