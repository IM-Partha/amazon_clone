import React from 'react'
import Carousel from './Carousel'
import Homepage from './Homepage'
import Carouselcategory from './Carouselcategory'
import Catouselproduct from './Catouselproduct'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
      
                <Carousel/> 
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                    <Homepage title={"We have a suprise for you "} img={"../images/home_grid_1.jpg"} link={"see terms and conditions"} />
                    <Homepage title={"Watch The Ringh of Power"} img={"../images/home_grid_2.jpg"} link={"start streming now"} />
                    <Homepage title={"Unlimited streming "} img={"../images/home_grid_3.jpg"} link={"Find out more"} />
                    <Homepage title={"More title to explore "} img={"../images/home_grid_4.jpg"} link={"Browse Kindle Unlimited"} />
                    <Homepage title={"Shop pet Supplies"} img={"../images/home_grid_5.jpg"} link={"See more"} />
                    <Homepage title={"Spring Sale "} img={"../images/home_grid_6.jpg"} link={"See the Deals"} />
                    <Homepage title={"Echo Buds"} img={"../images/home_grid_7.jpg"} link={"See more"} />
                    <Homepage title={"Family plan: 3 months free"} img={"../images/home_grid_8.jpg"} link={"Learn more"} />
                    <div className='m-3 pt-8 '>
                    <img className='xl:hidden ' src={"../images/banner_image_2.jpg"}/>
                    </div>
                </div>
                <Catouselproduct/>
                <Carouselcategory/>
                <div className='h-[200px]'>
                  <img className='h-[100%] m-auto' src={"../images/banner_image.jpg"} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Home