import { FiCornerUpRight } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiFolderPlus } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiTriangle } from "react-icons/fi";
import { FiOctagon } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import React from 'react';
import './Menus.css';
import { } from "react-icons/fi";

const Menus = () => {
    return (
        <div>
            <div className="container">

                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <button className="menu-button">



                                <FiCornerUpRight />Share</button>
                        </li>
                        <li className="menu-item">

                            <button className="menu-button">
                                <FiEdit2 />Rename</button>
                        </li>
                    </ul>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <button className="menu-button menu-button--black">

                                <FiCircle />No status

                                <FiChevronRight />
                            </button>
                            <ul className="menu-sub-list">
                                <li className="menu-item"><button className="menu-button menu-button--orange">
                                    <FiSquare />
                                    Needs review</button>
                                </li>
                                <li className="menu-item"><button className="menu-button menu-button--purple">


                                    <FiOctagon />
                                    In progress
                                </button>
                                </li>
                                <li className="menu-item">
                                    <button className="menu-button menu-button--green">

                                        <FiTriangle />
                                        Approved
                                    </button>
                                </li>
                                <li className="menu-item"><button className="menu-button menu-button--black menu-button--checked">

                                    <FiCircle />

                                    No status <FiCheck />




                                </button></li>
                            </ul>
                        </li>
                        <li className="menu-item"><button className="menu-button">
                            <FiLink />Copy Link Address</button></li>
                        <li className="menu-item"><button className="menu-button"> <FiFolderPlus />Move to</button></li>



                        <li className="menu-item"><button className="menu-button"> <FiCopy />Copy to</button>
                        </li>

                        <li className="menu-item"><button className="menu-button">
                            <FiLock />Make Private</button></li>

                        <li className="menu-item"><button className="menu-button">
                            <FiDownload />Download</button></li>
                    </ul>
                    <ul className="menu-list">
                        <li className="menu-item"><button className="menu-button menu-button--delete">
                            <FiTrash2 />Delete</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menus;