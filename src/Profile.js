import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Profile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [uploadError, setUploadError] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        setUploadError(null); 

        try {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                () => {
                    
                },
                (error) => {
                    console.error("Upload error:", error);
                    setUploadError(error.message);
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        console.log("Download URL:", downloadURL);
                        setProfilePicture(downloadURL);
                    } catch (finalError) {
                        console.error("Error getting download URL:", finalError);
                        setUploadError(finalError.message);
                    }
                }
            );

        } catch (error) {
            console.error("General upload error:", error);
            setUploadError(error.message);
        }
    };

    return (
        <div>
            <h2>Update Profile Picture</h2>
            <input type="file" onChange={handleImageUpload} />

            {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}

            {profilePicture && (
                <img src={profilePicture} alt="Profile Picture" width="200" />
            )}
        </div>
    );
};

export default Profile;