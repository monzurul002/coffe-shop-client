import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCard = ({ coffe, coffeInfo, setCoffeInfo }) => {
    const { _id, name, catagory, supplier, quantity, photo } = coffe;
    // const {coffeInfo}=coffeInfo;

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            // eslint-disable-next-line react/prop-types
                            const reaming = coffeInfo.filter(cofe => cofe._id !== id)
                            setCoffeInfo(reaming)

                            return Swal.fire({
                                title: 'success',
                                text: 'Data has been deleted.',
                                icon: 'success',
                                confirmButtonText: 'ok'
                            })
                        }
                    })
            }
        })


    }
    return (
        <div>
            <div className="card card-side bg-base-100 p-10 m-10 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className=" flex justify-between w-full">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Quantity:{quantity}</p>
                        <p>category:{catagory}</p>
                        <p>supplier:{supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-2">
                            <button className="btn bg-green btn-active">View</button>
                            <button className="btn"><Link to={`/update/${_id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;