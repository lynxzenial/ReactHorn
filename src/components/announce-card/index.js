import React from 'react';

export default class AnnouncementCard extends React.Component {
    
    render() {
        return (
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundPositionY:"top",backgroundImage:"url('https://wallpaperaccess.com/full/1544274.jpg')"}}>
                    <div className="bg-gray-800 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">{this.props.title}</h2>
                            <p className="mt-2 text-gray-300">{this.props.description}</p>
                        </div>
                    </div>
            </div>
        )
    }
}