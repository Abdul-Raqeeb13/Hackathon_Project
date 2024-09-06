import React from 'react';
import './AdminSideBar.css';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";

export default function AdminSideBar() {
    return (
        <>
            <div className="sidebarContainer">
                <div className="profile"></div>
                <div className="linksContainer">
                    <span>
                        <AiOutlineDashboard size='25px' color='black' />
                        <Link className='links' to={'/admin/about'}>About</Link>
                    </span>
                    <span>
                        <AiOutlineDashboard size='25px' color='black' />
                        <Link className='links' to={'/admin/about'}>About</Link>
                    </span>
                    <span>
                        <AiOutlineDashboard size='25px' color='black' />
                        <Link className='links' to={'/admin/about'}>About</Link>
                    </span>
                    <span>
                        <AiOutlineDashboard size='25px' color='black' />
                        <Link className='links' to={'/admin/about'}>About</Link>
                    </span>
                </div>
            </div>
        </>
    );
}
