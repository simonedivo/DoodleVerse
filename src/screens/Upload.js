import React from 'react';
import UploadImage from '../miscellaneous/UploadImage';
import { user } from '../screens/Login';

function Upload() {

    return (
        <div>
            <h1>Upload</h1>
            <p>Username: {user.getUsername()}</p>
            {}
            <UploadImage user={user}/>           
        </div>
    );
}

export default Upload;