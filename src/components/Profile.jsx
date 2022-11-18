import React from 'react';
import { styles } from '../constants';
import { camera } from "../assets"

const Profile = () => {
    const [profileData, setProfileData] = React.useState({
        emailAddress: "",
        fullName: "",
        phoneNumber: "",
        profileImage: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProfileData((prev) => {
            return {...prev, [name]: value}
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleImageSelect = (event) => {
        const array = event.target.files;
        const arrayFiles = Array.from(array);

        const url = URL.createObjectURL(arrayFiles[0]);
        setProfileData((prev) => {
            return {...prev, profileImage: url}
        });
    }

    return (
        <div className='px-6 py-4'>
            <p className='text-sm opacity-50'>Setup, view, and edit your personal information.</p>

            <form className='mt-8' onSubmit={handleSubmit}>
                <span className='my-5 block'>
                    <div className={profileData.profileImage === "" ? "rounded-full w-[150px] h-[150px] bg-gray-600" : "hidden"}></div>
                    <img src={profileData.profileImage} alt="" className={profileData.profileImage === "" ? "hidden" : "rounded-full w-[150px] h-[150px]" }/>
                    <input type="file" accept="image/*" id="image-selector" className='hidden' onChange={handleImageSelect}/>
                    <label htmlFor="image-selector" className='flex item-center px-2 py-2 rounded-full block w-fit bottom-9 left-[100px] bg-white relative'>
                        <img src={camera} alt="" className='w-4 h-4' />
                    </label>
                </span>

                <span className='my-5 block'>
                    <label htmlFor="fullName" className='text-sm block mb-2'>Full name</label>
                    <input type="text" className={`${styles.inputBox} w-3/4 px-3`} name="fullName" placeholder='Enter your full name' value={profileData.fullName} onChange={handleChange} />
                </span>

                <span className='my-5 block'>
                    <label htmlFor="emailAddress" className='text-sm block mb-2'>Email Address</label>
                    <input type="text" className={`${styles.inputBox} w-3/4 px-3`} name="emailAddress" placeholder='Enter new password' value={profileData.emailAddress} onChange={handleChange} />
                </span>

                <span className='my-5 block'>
                    <label htmlFor="phoneNumber" className='text-sm block mb-2'>Phone Number</label>
                    <input type="text" className={`${styles.inputBox} w-3/4 px-3`} name="phoneNumber" placeholder='Enter phone number' value={profileData.phoneNumber} onChange={handleChange}/>
                </span>

                <div className='flex justify-end w-3/4'>
                    <input type="submit" className={`${styles.button}`} value="Save Changes" />
                </div>
            </form>
        </div>
    )
}

export default Profile;