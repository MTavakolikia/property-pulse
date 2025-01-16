"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import properties from "@/properties.json";
import {
  FaCoffee,
  FaDumbbell,
  FaHandsWash,
  FaHotTub,
  FaParking,
  FaShower,
  FaTv,
  FaUtensils,
  FaWheelchair,
  FaWifi,
} from "react-icons/fa";
import { FaElevator } from "react-icons/fa6";
import { MdSecurity, MdOutdoorGrill } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";

export default function PropertyDetails({ params }) {
  const { id } = params;

  // پیدا کردن ملک بر اساس آیدی
  const property = properties.find((property) => property._id === id);

  // اگر ملک پیدا نشد، یک پیام نمایش داده شود
  if (!property) {
    return (
      <div className="text-center text-red-500 text-2xl mt-8">
        Property not found!
      </div>
    );
  }

  const {
    name,
    type,
    description,
    location,
    beds,
    baths,
    square_feet,
    amenities,
    rates,
    seller_info,
    images,
  } = property;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* تصاویر ملک با Swiper */}
      <div className="mb-8">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/images/properties/${image}`}
                alt={`Property Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* عنوان و اطلاعات اصلی */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-4">
          {location.street}, {location.city}, {location.state}{" "}
          {location.zipcode}
        </p>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* اطلاعات جزئیات ملک */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* بخش Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Type:</span> {type}
            </p>
            <p>
              <span className="font-medium">Beds:</span> {beds}
            </p>
            <p>
              <span className="font-medium">Baths:</span> {baths}
            </p>
            <p>
              <span className="font-medium">Square Feet:</span> {square_feet}
            </p>
          </div>
        </div>

        {/* بخش امکانات */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                {amenity === "Wifi" && <FaWifi className="text-blue-500" />}
                {amenity === "Free Parking" && (
                  <FaParking className="text-green-500" />
                )}
                {amenity === "Hot Tub" && (
                  <FaHotTub className="text-purple-500" />
                )}
                {amenity === "Smart TV" && <FaTv className="text-red-500" />}
                {amenity === "Coffee Maker" && (
                  <FaCoffee className="text-yellow-500" />
                )}
                {amenity === "Gym/Fitness Center" && (
                  <FaDumbbell className="text-indigo-500" />
                )}
                {amenity === "Wheelchair Accessible" && (
                  <FaWheelchair className="text-pink-500" />
                )}
                {amenity === "Elevator Access" && (
                  <FaElevator className="text-teal-500" />
                )}
                {amenity === "Full kitchen" && (
                  <FaUtensils className="text-orange-500" />
                )}
                {amenity === "Washer & Dryer" && (
                  <FaShower className="text-gray-500" />
                )}
                {amenity === "24/7 Security" && (
                  <MdSecurity className="text-slate-500" />
                )}
                {amenity === "Dishwasher" && (
                  <FaHandsWash className="text-cyan-500" />
                )}
                {amenity === "Air Conditioning" && (
                  <TbAirConditioning className="text-blue-500" />
                )}
                {amenity === "Outdoor Grill/BBQ" && (
                  <MdOutdoorGrill className="text-red-500" />
                )}
                {amenity === "High-Speed Internet" && (
                  <MdOutlineSignalWifiStatusbarConnectedNoInternet4 className="text-yellow-500" />
                )}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* بخش نرخ‌ها */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Rates</h2>
          <div className="space-y-2">
            {rates.nightly && (
              <p>
                <span className="font-medium">Nightly:</span> ${rates.nightly}
              </p>
            )}
            {rates.weekly && (
              <p>
                <span className="font-medium">Weekly:</span> ${rates.weekly}
              </p>
            )}
            {rates.monthly && (
              <p>
                <span className="font-medium">Monthly:</span> ${rates.monthly}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* اطلاعات فروشنده */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Name:</span> {seller_info.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {seller_info.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {seller_info.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
