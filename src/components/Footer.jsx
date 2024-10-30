import  facebook from '../../public/facebook-icon.png'
import linkedin from '../../public/linkedin-icon.png'
import twitter from '../../public/tweeter-icon.png'
import youtube from '../..//public/youtubbe-icon.png'
import ImageFooter from '../../public/image-footer1.png'
import ImageFooter2 from '../../public/image-footer2.png'
function Footer() {

  return (
    <footer className=" px-10 mt-10 lg:px-[250px] bg-gradient-to-r from-[#ffe5e5] via-[#f5fffe] to-[#fff4e5]">
    <div className=" text-[#e71d36] text-[65px] font-bold ">DeMo.</div>
    <section className="flex-col flex md:flex-row justify-center md:justify-around gap-4">
      <div className="flex flex-col">
        <p className="text-lg w-[368px]">
          Find Best SEO has ranked PageTraffic among the top 10 SEO
          companies for 2024
        </p>
        <div className="flex icons gap-4 mt-10">
          <a href="facebook">
            <img src={facebook} alt="icon-facebook" />
          </a>
          <a href="linkedin">
            <img src={linkedin} alt="linkedin-icon" />
          </a>
          <a href="twitter">
            <img src={twitter} alt="tweeter-icon" />
          </a>
          <a href="youtube">
            <img src={youtube} alt="youtube-icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-green font-bold text-2xl">COMPANY</h1>
        <a href="#" className="mt-4">
          About
        </a>
        <a href="">Services</a>
        <a href="">Press</a>
        <a href="">Ressources</a>
        <a href="">Blog</a>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-green font-bold text-2xl">LATEST NEWS</h1>
        <div className="w-[315px] h-[100px] flex  ">
          <img
            src={ImageFooter}
            className="h-[100px] w-[100px] rounded-lg  "
            alt="image-footer"
          />
          <div className="flex flex-col px-2 py-1 gap-1 text-sm ">
            <h1 className="text-lg">Per Click Management</h1>
            <p>PageTraffic is premier Search Engine Marketing (SEM) .</p>
            <span className="flex items-center gap-4">
              <span className="rounded-full h-4 w-4 bg-primary"></span>
              <p className="text-primary ">15 April 2023</p>
            </span>
          </div>
        </div>
        <div className="w-[315px] h-[100px] flex  ">
          <img
            src={ImageFooter2}
            className="h-[100px] w-[100px] rounded-lg  "
            alt="image-footer"
          />
          <div className="flex flex-col px-2 py-1 gap-1 text-sm ">
            <h1 className="text-lg">Per Click Management</h1>
            <p>PageTraffic is premier Search Engine Marketing (SEM) .</p>
            <span className="flex items-center gap-4">
              <span className="rounded-full h-4 w-4 bg-primary"></span>
              <p className="text-primary ">15 April 2023</p>
            </span>
          </div>
        </div>
      </div>
    </section>
    <div className="flex items-center justify-between md:text-lg text-sm mt-5 py-5">
      <p className="w-[300px] md:w-full">
        © 2024 DeMo insurance inc. Patent Pending All Rights Reserved
      </p>
      <span className="flex items-center font-semibold gap-2">
        <p className="text-green">Privacy</p>
        <span className="bg-[#000000] h-5 border border-r "></span>
        <p>Terms of services</p>
      </span>
    </div>
  </footer>
  )
}

export default Footer