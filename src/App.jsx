import { useEffect, useState } from "react"

import Navbar from "./Components/Navbar.jsx/Navbar"
import Hero from "./Components/Hero/Hero"
import Category from "./Components/Category/Category"
import Category2 from "./Components/Category/Category2"
import Services from "./Components/Services/Services"
import Banner from "./Components/Banner/Banner"
import Products from "./Components/Products/Products"
import Blogs from "./Components/Blogs/Blogs"
import Partners from "./Components/Partners/Partners"
import Footer from "./Components/Footer/Footer"
import Popup from "./Components/Popup/Popup"
import Aos from "aos";
import "aos/dist/aos.css";

import headphone from "./assets/hero/headphone.png"
import smartWatch2 from "./assets/category/smartwatch2-removebg-preview.png"

const BannerData = {
  discout: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  Title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37"
}
const BannerData2 = {
  discout: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartWatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  Title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2DCC6F"
}
const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)
  const handleOrderPopUp = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  },[])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopUp={handleOrderPopUp} />
    </div>
  )
}

export default App
