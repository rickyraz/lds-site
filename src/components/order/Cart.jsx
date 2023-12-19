import { useAddItem, useCart } from "@/store/useCart";
import useFormStore from "@/store/useFormStore";
import { Router, useNavigate, Link } from "@tanstack/react-router";

import Loader from "@/components/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductPublic } from "@/components/order/config_public";
import { filter } from "lodash";

import { Suspense, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function Cart() {
  const { register, handleSubmit, watch, errors, setValue } = useForm(); // Tambahkan inisialisasi useForm
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductTotalPrice, setSelectedProductTotalPrice] = useState(0); // Tambahkan state ini
  const [isProductSelected, setIsProductSelected] = useState(false);

  console.log(
    `default.code and totall harga`,
    selectedProduct?.default_code || "",
    selectedProductTotalPrice
  );

  const [selectedProductId, setSelectedProductId] = useState("");

  const {
    isLoading,
    error,
    data: publicProduct,

    isSuccess,
  } = useQuery({
    queryKey: ["publicProduct"],
    queryFn: () => getProductPublic(),
  });

  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;

  const dataProduct = publicProduct?.data?.product_param_data || [];

  const targetIds = [39, 42, 43];
  const filteredData = filter(dataProduct, (obj) => {
    return targetIds.includes(obj.id);
  });

  console.log("dataProduct", dataProduct);
  console.log("publicProduct", publicProduct);
  console.log("filteredData", filteredData);

  return (
    <div className="h-screen bg-white">
      <div className="py-12">
        <div className="max-w-5xl mx-auto bg-slate-50 shadow-md rounded-lg  md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-3xl font-semibold ">Review</h1>

                  <div className="flex justify-between  mt-6 pt-6">
                    <div className="flex  items-center">
                      <div className="flex flex-col ">
                        <select
                          name="default_code"
                          value={selectedProductId}
                          onChange={(e) => handleProductChange(e)}
                          className="block w-full py-3 px-3 mb-6 text-sm text-sky-800 bg-slate-50  rounded-md border-2 border-sky-500 font-medium focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 "
                        >
                          <option value="">Choose Your Plan</option>
                          {filteredData.map((product) => {
                            const displayName = product.display_name
                              .replace(/\[.*?\]/, "")
                              .trim();
                            return (
                              <option key={product.id} value={product.id}>
                                {displayName}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="flex-col justify-end items-end text-end text-xs">
                      <span className=" font-medium">
                        {selectedProduct?.price}
                      </span>

                      <div>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 px-1 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 text-xs"
                        >
                          {/* <option selected>Choose a country</option> */}
                          <option value="US">1 Month</option>
                          {/* <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option> */}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-16 pt-6 border-t">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2"></i>
                      <Link to="../../">
                        <span className="text-md  font-medium text-sky-400">
                          Kembali
                        </span>
                      </Link>
                    </div>

                    {/* <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
                          {" "}
                          $24.90
                        </span>
                      </div> */}
                  </div>
                </div>
                <div className=" p-5 bg-sky-600 rounded overflow-visible">
                  <div className="flex">
                    <span className="text-xl font-medium text-gray-100 block pb-3">
                      Order Price
                    </span>
                  </div>
                  <div className="flex justify-between  pt-4 border-b pb-2">
                    <h3 className="text-xs text-white">Subtotal</h3>
                    <p className="text-xs text-white">Rp. 210,000</p>
                  </div>
                  <div className="flex justify-between pt-4 border-b pb-2">
                    <h3 className="text-xs text-white">PPN@ 11.00%</h3>
                    <p className="text-xs text-white">Rp. 23,100</p>
                  </div>

                  <div className="flex-col justify-end items-end text-end my-5 pt-4 py-6 bg-white pr-4 ">
                    <h3 className="text-2xl font-bold text-sky-950">
                      Rp. 233.100
                    </h3>
                    <p className="text-xs text-slate-700 ">Amount Due Today</p>
                  </div>

                  <a href="/order/company-profile-2">
                    <button className="h-12 w-full bg-sky-800 rounded focus:outline-none text-white hover:bg-sky-900 flex justify-center items-center">
                      <span>Lanjut</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
