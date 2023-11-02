import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const { _id, name, catagory, supplier, quantity, photo } = useLoaderData();

    const handleUpdateCoffe = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const catagory = form.catagory.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const updatedCoffe = { name, catagory, supplier, photo, quantity };

        fetch(`http://localhost:5000/coffe/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCoffe)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    return Swal.fire({
                        title: 'success',
                        text: 'Coffe Info updated ',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }

    return (
        <div  >
            <h2 className="text-purple-500 text-2xl text-center py-10 font-extrabold">Add a coffe</h2>
            <div className="flex items-center justify-center">
                <form onSubmit={handleUpdateCoffe}>
                    <div className=" ">
                        <div className="form-control  max-w-xs">
                            <label className="label">
                                <span className="label-text">Coffe name</span>

                            </label>
                            <input type="text" placeholder="Type here" defaultValue={name} className="input input-bordered input-primary w-full max-w-xs" name="name" id="name" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantiy</span>

                            </label>
                            <input type="number" defaultValue={quantity} placeholder="avilable quantity" className="input input-bordered input-primary w-full max-w-xs" name="quantity" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>

                            </label>
                            <input type="text" defaultValue={supplier} placeholder="Supplier name" className="input input-bordered input-primary w-full max-w-xs" name="supplier" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Catagroy</span>

                            </label>
                            <input type="text" defaultValue={catagory} placeholder="catagory" className="input input-bordered input-primary w-full max-w-xs" name="catagory" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo URL</span>

                            </label>
                            <input type="text" defaultValue={photo} placeholder="Photo" className="input input-bordered input-primary w-full max-w-xs" name="photo" />
                        </div>
                    </div>
                    <input className="btn btn-clock text-center w-full" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffe;