import React from 'react';

const CompanyPage: React.FC = () => {
    // Add the content for your company page here
    // Use Tailwind classes for styling
    return (
        <section id="company-details" className="pt-[4vh] px-[5%] xl:px-40 min-h-[60vh]"> {/* Example padding/min-height */}
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-8">Rappich Consulting AB</h1>
            <p className="text-center text-lg mb-4">
                Consulting services in HR & IT.
            </p>
            {/* Add more detailed content about your company */}
            <div className='text-justify'>
                <p>
                    [Details about the company's mission, services, focus areas...]
                </p>
                <h2 className='text-2xl font-semibold mt-6 mb-2'>Services</h2>
                <ul className='list-disc ml-6'>
                    <li>HR Strategy Implementation</li>
                    <li>Process Optimization (HR & IT)</li>
                    <li>Recruitment Technology Consulting</li>
                    <li>[Other Services...]</li>
                </ul>
            </div>
        </section>
    );
};

export default CompanyPage;