import React, { useState } from "react";
import Date from "./Date";

const Form = () => {
  const [formData, setFormData] = useState({
    code: "",
    email: "",
    apiName: "",
    brandName: "",
    manufacturer: "",
    batchNumber: "",
    batchSize: "",
    mfgDate:"",
    expiryDate:"",
    containerCode: "",
    licenseNumber: "",
    storageCondition: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      code: "",
      email: "",
      apiName: "",
      brandName: "",
      manufacturer: "",
      batchNumber: "",
      batchSize: "",
      mfgDate: "",
      expiryDate: "",
      containerCode: "",
      licenseNumber: "",
      storageCondition: "",
    });
  };
  return (
    <>
      <div className="mt-6 bg-gray-100 flex justify-start items-center alig p-6 overflow-x-hidden">
        <div className="ml-12">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-screen mb-6">
              <p htmlFor="code" className="text-gray-600 p-1 mb-2">
                Unique Product Identification code
              </p>
              <input
                id="code"
                name="code"
                type="text"
                className="w-full p-1"
                placeholder="e.g. 05DGB801402006"
                value={formData.code}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="apiName" className="text-gray-600 p-1 mb-2">
                Name of the API
              </p>
              <input
                id="apiName"
                name="apiName"
                type="text"
                className="w-full p-1"
                placeholder="e.g. CYROMAZINE"
                value={formData.apiName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="brandName" className="text-gray-600 p-1 mb-2">
                Brand Name
              </p>
              <input
                id="brandName"
                name="brandName"
                type="text"
                className="w-full p-1"
                placeholder="e.g. GUOBANG PHARMA"
                value={formData.brandName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="manufacturer" className="text-gray-600 p-1 mb-2">
                Name and Address of the manufacturer
              </p>
              <input
                type="text"
                id="manufacturer"
                name="manufacturer"
                className="w-full p-1"
                placeholder="e.g. SHANDONG GUOBANG PHARMA CO LTD, Xiangjiang Street, China"
                value={formData.manufacturer}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="batchNumber" className="text-gray-600 p-1 mb-2">
                Batch Number
              </p>
              <input
                id="batchNumber"
                name="batchNumber"
                type="text"
                className="w-full p-1"
                placeholder="e.g. 230210.2"
                value={formData.batchNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="batchSize" className="text-gray-600 p-1 mb-2">
                Batch Size
              </p>
              <input
                type="text"
                id="batchSize"
                name="batchSize"
                className="w-full p-1"
                placeholder="e.g. 987.86 Kg"
                value={formData.batchSize}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="mfgDate" className="text-gray-600 p-1 mb-2">
                Date of Manufacturing
              </p>
              <Date 
                value={formData.mfgDate}
                onChange={(value)=> setFormData({...formData, mfgDate: value})}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="" className="text-gray-600 p-1 mb-2">
                Date of expiry or retesting
              </p>
              <Date 
                value={formData.expiryDate}
                onChange={(value)=> setFormData({...formData, expiryDate: value})}

              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="containerCode" className="text-gray-600 p-1 mb-2">
                Serial Shipping Container Code
              </p>
              <input
                id="containerCode"
                name="containerCode"
                type="text"
                className="w-full p-1"
                placeholder="e.g. 2303101241222011"
                value={formData.containerCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="licenseNumber" className="text-gray-600 p-1 mb-2">
                Manufacturing license number or import license number
              </p>
              <input
                id="licenseNumber"
                name="licenseNumber"
                type="text"
                className="w-full p-1"
                placeholder="e.g. Veternary drug manufacturing license no: (2021) SYSCZZ 15339"
                value={formData.licenseNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="storageCondition" className="text-gray-600 p-1 mb-2">
                Special storage condition required if any
              </p>
              <input
                id="storageCondition"
                name="storageCondition"
                type="text"
                className="w-full p-1"
                placeholder="e.g. Store in a well-closed container, protected from light"
                value={formData.storageCondition}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-screen mb-6">
              <p htmlFor="email" className="text-gray-600 p-1 mb-2">
                Consumer Email ID
              </p>
              <input
                id="email"
                name="email"
                type="text"
                className="w-full p-1"
                placeholder="e.g. user@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <button className="hover:bg-gray-600 hover:text-white bg-sky-500 pl-4 pr-4 pt-1 pb-1 ml-1 text-cyan-50 rounded-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
