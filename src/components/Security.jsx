import React from 'react';
import { styles } from '../constants';

const Security = () => {
    const [securityData, setSecurityData] = React.useState({
        emailAddress: "",
        password: "",
        changePassword: "",
        repeatPassword: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSecurityData((prev) => {
            return {...prev, [name]: value}
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='px-6 py-4'>
            <p className='text-sm opacity-50'>Manage your account security here.</p>

            <form className='mt-5' onSubmit={handleSubmit}>
                <span className='my-5 block'>
                    <label htmlFor="emailAddress" className='text-sm block mb-2'>Account Email Address</label>
                    <input type="text" className={`${styles.inputBox} w-3/4 px-3`} name="emailAddress" placeholder='Enter Email Address' value={securityData.emailAddress} onChange={handleChange} />
                </span>

                <span className='my-5 block'>
                    <label htmlFor="password" className='text-sm block mb-2'>Password</label>
                    <input type="password" className={`${styles.inputBox} w-3/4 px-3`} name="password" placeholder='Enter password' value={securityData.password} onChange={handleChange} />
                </span>

                <span className='my-5 block'>
                    <label htmlFor="changePassword" className='text-sm block mb-2'>Change password</label>
                    <input type="password" className={`${styles.inputBox} w-3/4 px-3`} name="changePassword" placeholder='Enter new password' value={securityData.changePassword} onChange={handleChange} />
                </span>

                <span className='my-5 block'>
                    <label htmlFor="repeatPassword" className='text-sm block mb-2'>Repeat new password</label>
                    <input type="password" className={`${styles.inputBox} w-3/4 px-3`} name="repeatPassword" placeholder='Enter new password' value={securityData.repeatPassword} onChange={handleChange}/>
                </span>

                <div className='flex justify-end w-3/4'>
                    <input type="submit" className={`${styles.button}`} value="Save Changes" />
                </div>
            </form>
        </div>
    )
}

export default Security;