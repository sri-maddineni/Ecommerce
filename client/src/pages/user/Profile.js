import React from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import UserMenu from "./UserMenu";

const Profile = () => {
    return (
        <>
            <>
                <Header />
                <div className="row m-3">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h3>Profile</h3>
                    </div>
                </div>
                <Footer />
            </>
        </>
    );
};

export default Profile;
