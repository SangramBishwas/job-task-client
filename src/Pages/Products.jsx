import { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxios";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
const Products = () => {
    const [phones, setPhones] = useState([]);
    const [order, setOrder] = useState('')
    const [isInput, setIsInput] = useState(false);
    const [search, setSearch] = useState('')
    useEffect(() => {
        axiosPublic.get(`/mobiles?sort=${order}&search=${search}`)
            .then(res => setPhones(res.data))
    }, [order, search])

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    }

    // phones.forEach(async (phone) => {
    //     const releaseDate = phone.release_date;
    //     const parts = await releaseDate.split('/');
    //     phone.release_date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
    // })
    // phones.sort((a, b) => b.release_date - a.release_date)
    console.log(order)
    return (
        <div>
            <div className="flex items-center justify-center gap-8 md:gap-16">
                <div className="dropdown dropdown-right dropdown-end mt-10">
                    <div tabIndex={0} role="button" className="btn m-1">Price</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => setOrder('asc')}><a>Low to High</a></li>
                        <li onClick={() => setOrder('desc')}><a>High to Low</a></li>
                    </ul>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-10">Mobile Phones</h2>
            </div>

            <form onSubmit={handleSearch} className="w-full md:w-auto md:mx-0 flex items-center">
                <label className="w-1/2 md:w-1/3 input input-bordered flex items-center gap-2 my-10 mx-auto">
                    <input onChange={() => setIsInput(true)} type="text" className="grow" name="search" placeholder="Search..." />
                    <div className="w-full md:w-1/3">
                        <button className={isInput ? "btn btn-primary md:w-[100px] ml-4 md:ml-16" : "hidden"}><IoSearch className="text-xl font-bold" /></button>
                    </div>
                </label>

            </form>
            <div className="flex justify-around items-center">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">$ Pice Range</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div><div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Category</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>IOS</a></li>
                        <li><a>Android</a></li>
                        <li><a>Windows</a></li>
                    </ul>
                </div>
                <details className="dropdown">
                    <summary className="btn m-1 text-lg flex items-center"><IoMenuSharp className="text-2xl" />Bands</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                {
                    phones.map(phone => <div key={phone._id} className="card bg-base-100 md:w-80 h-96 shadow-xl">
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