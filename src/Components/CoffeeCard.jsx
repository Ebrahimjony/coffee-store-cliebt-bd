
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDeleteCoffee = _id => {
        console.log(_id);
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

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coff =>{
                                coff._id !== _id;
                                setCoffees(remaining);
                            })
                            
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='mr-4'> <img src={photo} /></figure>
                <div className=" flex justify-between pt-6 w-full">
                    <div className="">
                        <h2 className="card-title">Name:{name} </h2>
                        <p>{category}</p>
                        <p>{chef}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="">
                        <div className="join join-vertical space-y-1">
                            <button className="btn">View</button>
                            <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>
                            <button
                                onClick={() => handleDeleteCoffee(_id)}
                                className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;