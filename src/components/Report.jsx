import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Select from "react-select";

const Report = () => {
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    startDate: "",
    endDate: "",
    paymentMethod: "",
    search: "",
  });
  const [categories, setCategories] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const REPORT_API = "http://localhost:5000/api/reports";
  const CATEGORY_API = "http://localhost:5000/api/categories";
  const PAYMENT_METHOD_API = "http://localhost:5000/api/payment-methods";

  useEffect(() => {
    // Fetch categories and payment methods on component mount
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(CATEGORY_API);
        const paymentMethodResponse = await axios.get(PAYMENT_METHOD_API);

        setCategories(categoryResponse.data);
        setPaymentMethods(paymentMethodResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, selectedOption) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  const fetchReport = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(REPORT_API, {
        params: {
          startDate: filters.startDate,
          endDate: filters.endDate,
          type: filters.type,
          category: filters.category,
          paymentMethod: filters.paymentMethod,
          search: filters.search,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      setError("Error fetching report data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filter categories based on selected type
  const categoryOptions = filters.type
    ? categories
        .filter(
          (category) =>
            category.type.toLowerCase() === filters.type.toLowerCase()
        )
        .map((category) => ({
          value: category._id,
          label: category.name,
        }))
    : categories.map((category) => ({
        value: category._id,
        label: category.name,
      }));

  const typeOptions = [
    { value: "credit", label: "Credit" },
    { value: "debit", label: "Debit" },
  ];

  const paymentMethodOptions = paymentMethods.map((method) => ({
    value: method._id,
    label: method.name,
  }));

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={` bg-purple-900 text-white h-screen text-[14px] w-60 transition-width duration-300`}>
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1  flex flex-col ">
        {/* Navbar */}
        <div className="bg-purple-900 text-white px-4 py-2 flex justify-end items-center ">
          <button className=" font-bold ">logout</button>
        </div>

        {/* Content Area */}

        <div className="flex-1  p-4 bg-gray-200">
          <div className="mx-auto max-w-7xl mt-10 bg-purple-900 shadow ">
            <div className="grid md:grid-cols-9 p-5 gap-5 max-w-7xl">
              <div className="col-span-2">
                <label className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">
                  From{" "}
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">
                  To
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">
                  Payment Method
                </label>
                <Select
                  options={paymentMethods}
                  value={filters.paymentMethod}
                  onChange={(selectedOption) =>
                    handleSelectChange("paymentMethod", selectedOption)
                  }
                  placeholder="Select Payment Method"
                  isClearable
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Transaction Type
                </label>
                <Select
                  options={typeOptions}
                  value={typeOptions.find(
                    (option) => option.value === filters.type
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("type", selectedOption)
                  }
                  placeholder="Select Type"
                  isClearable
                  isSearchable
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">
                  Account Head
                </label>
                <Select
                  options={categoryOptions}
                  value={categoryOptions.find(
                    (option) => option.value === filters.category
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("category", selectedOption)
                  }
                  placeholder="Select Category"
                  isClearable
                  isSearchable
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium mb-1">
                  Search Remarks
                </label>
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleInputChange}
                  placeholder="Search by remarks"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="col-span-1 gap-10 flex items-center justify-center mt-7">
                <button
                  onClick={fetchReport}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
                  {loading ? "Loading..." : "View"}
                </button>
              </div>
              <svg
                className="w-[30px] h-[30px]  fill-white"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
              </svg>
            </div>
          </div>
          {/* Transactions Table */}
          {error && <div className="text-red-500 mt-4">{error}</div>}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remarks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id} className="bg-white border-b">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.category.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.paymentMethod.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.remarks || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ${transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
