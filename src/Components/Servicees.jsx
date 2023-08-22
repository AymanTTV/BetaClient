import React from "react";
import { useQuery } from 'react-query';
import { GetAllService } from '../api/Service';

export default function Services() {
  // Query data
  const { data, isLoading, isError } = useQuery('services', GetAllService);

  // Array of services received from the API data
  const services = data ? data.data : [];

  return (
    <>
      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container m-auto px-6">
          <h1 className="mb-8 text-center text-3xl font-bold text-black">Services BetaHouse Could Offer</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error fetching services...</p>
          ) : (
            <ul className="grid place-content-center sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <li className="flex" key={service._id}>
                  <div className="px-4 text-5xl font-extralight text-[#00df98]">{index + 1}.</div>
                  <div>
                    <div className="text-xl font-bold text-[#00df98]">{service.Title}</div>
                    <p className="max-w-xs py-2 text-sm text-gray-600">{service.Description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
