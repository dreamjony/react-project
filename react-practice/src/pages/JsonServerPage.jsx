import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import JsonServer from "../Component/JsonServer";
import { useForm } from "react-hook-form";


const JsonServerPage = () => {

    const getProduct = async () => {
        const {data} = await axios.get('http://localhost:3000/products');
        return data;
    }

    const {data, isFetched, refetch} = useQuery ({queryKey: ['getProduct'], queryFn: getProduct});
    console.log(data);

    
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        const addProduct = await axios.post('http://localhost:3000/products', data);
        if (addProduct) {
            refetch();
            reset();
        }     
    }




    return (
        <div className="container max-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h2 className="text-center text-4xl py-5">Add Product</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Product Name" className="w-full p-2 border-2 border-grey-300 rounded-lg mb-4" {...register('name', {required: true})}/>
                    <input type="text" placeholder="Product Price" className="w-full p-2 border-2 border-grey-300 rounded-lg mb-4" {...register('price', {required: true})}/>
                    <div className="mb-4">
                        <textarea className="w-full p-2 border-2 border-grey-300 rounded-lg"
                        placeholder="Product Description" {...register('description',{
                            required: {
                                value: true,
                                message: 'Product description is required'
                            },
                            minLength: {
                                value: 10,
                                message: 'Product description must be at least 10 characters'
                            }
                        })} id=""></textarea>
                    </div>
                    {errors.description && <p className="text-red-500"> {errors.description.message} </p>}
                    <button className="w-full p-2 bg-blue-500 text-white rounded-lg">Add Product</button>
                </form>
            </div>
            {isFetched && (
                <div>
                    <h2 className="text-center text-4xl py-5">Product Data</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((product) => (
                            <JsonServer 
                            key={product.id} 
                            name={product.name} 
                            price={product.price}
                            id={product.id}
                            className="bg-white p-4 rounded-lg shadow-md"                              
                            />
                        ))}
                    </div>

                </div>
            ) }
        </div>
    );
};

export default JsonServerPage;