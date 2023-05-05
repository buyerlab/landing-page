import React from 'react';

const Timeline = () => {
    const events = [
        {
            date: '2023-01',
            title: 'UI migration from mobile app, start frontend & backend development',
        },
        {
            date: '2023-02',
            title: 'First adjustment finished based on user testing',
        },
        {
            date: '2023-02',
            title: 'Created and deploy database for production use',
        },
        {
            date: '2023-03',
            title: 'First MVP done',
        },
        {
            date: '2023-04',
            title: 'Made adjustments based on user feedback and finished development',
        },
    ];

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-10 md:py-20">
                    <div className="w-full mx-auto text-center">
                        <h2 className="h2 mb-4">Project Timeline</h2>
                        <div className="flex flex-col gap-12 md:flex-row justify-between mx-4" data-aos="fade-right">
                            {events.map((event, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <span className="bg-gray-300 rounded-full h-6 w-6 mb-2"></span>
                                    <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                                    <span className="text-gray-500 text-sm">{event.date}</span>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:block border-t-2 border-gray-300 w-full mt-8 mx-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
