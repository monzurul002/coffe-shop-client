import Swal from "sweetalert2";

const AddCoffe = () => {
    const handleAddCoffe = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const catagory = form.catagory.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const newCoffe = { name, catagory, supplier, photo, quantity };

        fetch("http://localhost:5000/coffe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffe)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    return Swal.fire({
                        title: 'success',
                        text: 'Data has been set to database',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }
    return (
        <div >
            <h2 className="text-purple-500 text-2xl font-extrabold">Add a coffe</h2>

            <form onSubmit={handleAddCoffe}>
                <div className="md:flex ">
                    <div className="form-control md:w-1/2 max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffe name</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" name="name" id="name" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantiy</span>

                        </label>
                        <input type="number" placeholder="avilable quantity" className="input input-bordered input-primary w-full max-w-xs" name="quantity" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>

                        </label>
                        <input type="text" placeholder="Supplier name" className="input input-bordered input-primary w-full max-w-xs" name="supplier" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Catagroy</span>

                        </label>
                        <input type="text" placeholder="catagory" className="input input-bordered input-primary w-full max-w-xs" name="catagory" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo URL</span>

                        </label>
                        <input type="text" placeholder="Photo" className="input input-bordered input-primary w-full max-w-xs" name="photo" />
                    </div>
                </div>
                <input className="btn btn-clock text-center w-full" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddCoffe;