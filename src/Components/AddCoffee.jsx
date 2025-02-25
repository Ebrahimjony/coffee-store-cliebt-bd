import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newCoffee={name,chef,supplier,taste,category,details,photo};

        console.log(newCoffee);


        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(newCoffee),

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'successs!',
                    text: 'Coffee add successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        }
    return (
        <div className='bg-[#F4F3F0] m-3 p-5'>
            <h1 className='text-5xl text-center font-bold'>Add New Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Coffee Name</label>
                    <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>Chef</label>
                    <input type="text" name="chef" placeholder="chef" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Supplier</label>
                    <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>taste</label>
                    <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="md:flex">
                    <div className=" form-control w-1/2 mr-5">
                    <label className='label'>Category</label>
                    <input type="text" name='category' placeholder="Category" className="input input-bordered w-full  " />
                    </div>
                    <div className=" form-control w-1/2">
                    <label className='label'>Details</label>
                    <input type="text" name='details' placeholder="Details" className="input input-bordered w-full  " />
                    </div>
                </div>
                <div className="">
                    <div className=" form-control w-full">
                    <label className='label'>Photo</label>
                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full  " />
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

export default AddCoffee;