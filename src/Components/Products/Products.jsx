import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"

// import images
import img1 from "../../assets/product/p-1.jpg"
import img2 from "../../assets/product/p-2.jpg"
import img3 from "../../assets/product/p-3.jpg"
import img4 from "../../assets/product/p-4.jpg"
import img5 from "../../assets/product/p-5.jpg"
import img6 from "../../assets/product/p-9.jpg"
import img7 from "../../assets/product/p-7.jpg"

const productsData = [
    {
        id: 1,
        image : img1,
        title: "Boat Headphone",
        price: 120,
        aosDelay: "0"
        },
        {
            id: 2,
            image : img2,
            title: "Rocky Mountain",
            price: 420,
            aosDelay: "200"
        },
        {
            id: 3,
            image : img3,
            title: "Goggles",
            price: 320,
            aosDelay: "400"
        },
        {
            id: 4,
            image : img4,
            title: "Printed",
            price: 220,
            aosDelay: "600"
        },
]
const productsData2 = [
    {
        id: 1,
        image : img5,
        title: "Boat Headphone",
        price: 120,
        aosDelay: "0"
        },
        {
            id: 2,
            image : img6,
            title: "Rocky Mountain",
            price: 420,
            aosDelay: "200"
        },
        {
            id: 3,
            image : img7,
            title: "Goggles",
            price: 320,
            aosDelay: "400"
        },
        {
            id: 4,
            image : img5,
            title: "Printed",
            price: 220,
            aosDelay: "600"
        },
]

const Products = () => {
    return (
        <div>
            <div className=" container">
                {/* Header section  */}
                <Heading title="Our Products"
                    subtitle={"Explore Our Products"} />
                {/* Body Section  */}
                <ProductCard data={productsData}/>
                <ProductCard data={productsData2}/>
            </div>
        </div>
    )
}

export default Products
