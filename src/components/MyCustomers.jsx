import React, {useState} from 'react';
import { noCustomer } from '../assets';
import UserData from './UserData';
import {styles} from '../constants/index';

const details = ["Customer name", "Email", "No of Orders", "Location", "Total amount spent", "Action"];

const MyCustomers = () => {
    // State to store the customers gotten from the API
    const [customers, setCustomers] = useState([]);

    // Function to update the state to the next five or so customer details gotten from the API.
    const handleNext = () => {
        setCustomers((prev) => {
            return prev = [0, 2, 3];
        });
    }

    const handleCustomerSearch = (searchValue) => {
        // Logic for searching for a specific transaction history by setting the transaction history state to the data gotten from the API following the users prompt.
        // alert(searchValue);
    }

    return (
        <div>
            <p className={`${styles.componentHeader}`}>My Customers</p>
            <UserData type={"Customer"} image={noCustomer} handleSearch={handleCustomerSearch} infoHead={details} data={customers} children={Children} handleNext={handleNext}></UserData>
        </div>
    )
}


const Children = ({id, name, email, noOfOrders, location, amount}) => {
    return (
        <div className="flex justify-between">
            <p className='text-xs my-auto'>{id}</p>
            <p className='text-xs my-auto'>{name}</p>
            <p className='text-xs my-auto'>{email}</p>
            <p className='text-xs my-auto'>{noOfOrders}</p>
            <p className='text-xs my-auto'>{location}</p>
            <p className='text-xs my-auto'>{amount}</p>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className='w-4 h-4 fill-slate-400'><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>
            </span>
        </div>
    )
};
export default MyCustomers;