import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id,name,chef,supplier,taste,category,details,photo}=coffee;
     const handleUpdateCoffee=event=>{
            event.preventDefault();
            const form=event.target;
            const name=form.name.value;
            const chef=form.chef.value;
            const supplier=form.supplier.value;
            const taste=form.taste.value;
            const category=form.category.value;
            const details=form.details.value;
            const photo=form.photo.value;
            const updatedCoffee={name,chef,supplier,taste,category,details,photo};
    
            console.log(updatedCoffee);
    
    
            fetch(`http://localhost:5000/coffees/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(updatedCoffee),
    
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'successs!',
                        text: 'Coffee Update successfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            }
     return (
        <div className='bg-[#F4F3F0] m-3 p-5'>
            <h1 className='text-5xl text-center font-bold'>Update New Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Coffee Name</label>
                    <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>Chef</label>
                    <input type="text" name="chef" placeholder="chef" defaultValue={chef} className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Supplier</label>
                    <input type="text" name="supplier" placeholder="Supplier" defaultValue={supplier} className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>taste</label>
                    <input type="text" name="taste" defaultValue={taste} placeholder="taste" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Category</label>
                    <input type="text" defaultValue={category}  name='category' placeholder="Category" className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>Details</label>
                    <input type="text" defaultValue={details} name='details' placeholder="Details" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="">
                    <div className=" form-control w-full">
                    <label className='label'>Photo</label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo url" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="mt-4">
                    <div className=" form-control w-full ">
                    <button className='btn'>Update coffee Details</button>
                    </div>
                </div>
            
            </form>

        </div>
    );
};

export default UpdateCoffee;