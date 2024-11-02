import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffe = ({ coffe, user, setuser }) => {
    const { _id, name, quantity, Supplier, Photo } = coffe
    // console.log(Photo);


    const hendledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            const remining = user.filter(c => c._id !== id)
                            setuser(remining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    return (
        <div>
            <div className="card card-side bg-[#F4F3F0] shadow-xl">
                <figure>
                    <img src={Photo} alt={name} />
                </figure>
                <div className="flex justify-between w-full m-4">
                    <div>
                        <p>Name: {name}</p>
                        <p>Supplier: {Supplier}</p>
                        <p>Price: {quantity} Taka</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group flex flex-col space-y-3">
                            <button className="btn btn-secondary">VIEW</button>
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-secondary">EDIT</button>
                            </Link>
                            <button className="btn btn-secondary" onClick={() => hendledelete(_id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffe;