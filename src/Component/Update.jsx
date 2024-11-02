import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const coffe = useLoaderData()

    const { _id, name, quantity, Supplier, Taste, Category, Details, Photo } = coffe

    const hendleUpdate = e => {
        e.preventDefault()
        const base = e.target
        const name = base.name.value
        const quantity = base.quantity.value
        const Supplier = base.Supplier.value
        const Taste = base.Taste.value
        const Category = base.Category.value
        const Details = base.Details.value
        const Photo = base.photo.value
        const user = { name, quantity, Supplier, Taste, Category, Details, Photo }
        console.log(user);

        fetch(`http://localhost:3000/coffe/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-red-500 font-extrabold text-3xl'>Update Coffe</h1>
            <form onSubmit={hendleUpdate}>
                {/* {row 1} */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>
                                Coffe Name
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' defaultValue={name} placeholder="Enter Coffe Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>
                                Available Quantity
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder=" Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* {row 2} */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>
                                Supplier
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='Supplier' defaultValue={Supplier} placeholder="Enter Coffe Supplier" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>
                                Taste
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='Taste' defaultValue={Taste} placeholder=" Enter Coffe Taste" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* row 3 */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>
                                Category
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='Category' defaultValue={Category} placeholder="Enter Coffe Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>
                                Details
                            </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='Details' defaultValue={Details} placeholder="Enter Coffe Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>
                            Photo
                        </span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name='photo' defaultValue={Photo} placeholder="Enter Photo URL" className="input input-bordered w-full " />
                    </label>
                </div>
                <input type="submit" value='Add Cofee' className='btn btn-block mt-4' style={{ backgroundColor: 'black', color: 'white' }} />
            </form>
        </div>
    );
};

export default Update;