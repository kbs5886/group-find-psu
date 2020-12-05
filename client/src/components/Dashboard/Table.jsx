import React, {useEffect, useState} from "react";
import Row from "./Row";
import axios from 'axios';

const Table = (props) => {
    const data = props.data;

    return (
        <>
            <div className="antialiased">
                <div className="md:mx-24 mx-4">
                    <div className="py-8">
                        <div className=" py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow  rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Group Name
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Owner
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Created at
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Tags
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Requirements
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Contact
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Row
                                            name="Basketball Club"
                                            owner="Jake Jack"
                                            role="COACH"
                                            date="20 October, 2020"
                                            tags="Sports"
                                            category="Clubs"
                                            required="N/A"
                                            profile="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                            contact="jake@example.com"
                                       />
                                        <Row
                                            name="Social Media Website"
                                            owner="Blake Blowman"
                                            role="EDITOR"
                                            date="10 October, 2019"
                                            tags="React"
                                            category="Tech"
                                            required="JavaScript/Python"
                                            profile="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                            contact="+1 999 888 7777"
                                        />
                                        <Row
                                            name="Chat Application - iOS"
                                            owner="Dana Moore"
                                            role="DEVELOPER"
                                            date="05 September, 2020"
                                            tags="Swift"
                                            category="Tech"
                                            required="React Native/Swift"
                                            profile="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                            contact="GroupMe: @Moore"
                                        />
                                        <Row
                                            name="Tennis Group"
                                            owner="Alonzo Cox"
                                            role="STUDENT"
                                            date="14 May, 2020"
                                            tags="Tennis"
                                            category="Sports"
                                            required="N/A"
                                            profile="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                            contact="Snapchat: @Alonzo"
                                        />
                                        {data.length > 0 && data.map(d => 
                                            <Row name={d.name} owner="Test" role="N/A" 
                                            tags={d.tags} category={d.category} date={convertDate(d.createdAt)} required={d.requirements} contact={d.contact} />
                                            ) }
                                    </tbody>
                                </table>
                                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const convertDate = (s) => {
    const date = new Date(s);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return date.getDay()-1 + " " + months[date.getMonth()] + ", " + date.getFullYear(); 
}


export default Table;
