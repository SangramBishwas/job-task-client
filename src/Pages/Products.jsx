import { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxios";
import { FaStarHalfAlt } from "react-icons/fa";
const Products = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axiosPublic.get('/mobiles')
            .then(res => setPhones(res.data))
    }, [])

    phones.forEach(async (phone) => {
        const releaseDate = phone.release_date;
        const parts = await releaseDate.split('/');
        phone.release_date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
    })
    phones.sort((a, b) => b.release_date - a.release_date)
    console.log(phones)
    return (
        <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-10">Mobile Phones</h2>

            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">

                {
                    phones.map(phone => <div key={phone._id} className="card bg-base-100 w-80 h-96 shadow-xl">
                        <figure>
                            <img className="h-[64]"
                                src={phone.image} />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                            <h2 className="card-title">{phone.name}</h2>
                            <div className="flex gap-1 items-center"><FaStarHalfAlt /> <span>{phone.rating}</span></div>
                            </div>
                            <p>{phone.description.slice(0, 50)}...</p>
                            <div className="card-actions items-center justify-between">
                                <h3 className="font-bold">Price: ${phone.price}</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Products;