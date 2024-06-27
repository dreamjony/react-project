import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const EditJsonServer = () => {
  const { id } = useParams();
  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  };

  const { data, isFetched } = useQuery({
    queryKey: ["getSingleProduct"],
    queryFn: getProduct,
  });

  
 const { register, handleSubmit, formState: { errors }, reset } = useForm();
 useEffect(() => {
   reset ({
     name: data?.name,
     price: data?.price,
     description: data?.description
   });
 }, [data, isFetched, reset]);

  const onSubmit = async (data) => {
    const updateProduct = await axios.put(
      `http://localhost:3000/products/${id}`,
      data
    );
    if (updateProduct) {
      console.log("Product updated successfully");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Product Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter product name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter product price"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter product description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJsonServer;
