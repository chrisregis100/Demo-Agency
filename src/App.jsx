import { Button } from "antd";
import PlayIcon from "./assets/icons/playIcon";
import ArrowRigth from "./assets/icons/ArrowRigth";

import forbesIcon from "../public/forbes.png"
import Header from "./components/Header";
import imageHero from '../public/image-hero.png'
import netflix from '../public/netflix.png'
import sej from "../public/esj-logo.png"
import amazon from "../public/amazon.png"
import enterprise from "../public/entre-logo.png"
import projet1 from "../public/project1.png"
import projet2 from "../public/project2.png"
import projet3 from "../public/project3.png"
import projet4 from "../public/project4.png"
import projet5 from "../public/project5.png"
import projet6 from "../public/project6.png"
import cible from "../public/cible.png"
import icon1 from '../public/div-icon1.png'
import icon2 from '../public/div-icon2.png'
import blog1 from '../public/blog1.png'
import blog2 from '../public/blog2.png'
import blog3 from '../public/blog3.png'
import blog4 from '../public/blog4.png'
import  facebook from '../public/facebook-icon.png'
import linkedin from '../public/linkedin-icon.png'
import twitter from '../public/tweeter-icon.png'
import youtube from '../public/youtubbe-icon.png'
import ImageFooter from '../public/image-footer1.png'
import ImageFooter2 from '../public/image-footer2.png'






export default function App() {
  
  return (
    <>
      <section className="  relative bg-[#fdfffc] ">
    <Header/>
        <main>
          <section className="flex px-4 lg:px-[250px] w-full items-center justify-between bg-gradient-to-r from-[#ffe5e5] via-[#f5fffe] to-[#fff4e5]">
            <div className="flex flex-col gap-4 lg:gap-10 ">
              <h1 className="text-[35px] lg:text-[65px] mt-8 font-semibold ">
                BEST <span className="text-primary">MARKETING</span> COMPANY
              </h1>
              <p className="md:text-2xl text-xs font-medium ">
                # MARKETING Services Agency in USA & UK
              </p>
              <div className="text-lg md:text-xl">
                <p>
                  if you&apos; looking for the best SEO company for your
                  business,
                </p>
                <p> PageTrafic in the perfect choice</p>
              </div>
              <div className="flex items-center md:gap-10 gap-5 lg:mt-4 mt-10 ">
                <Button className="bg-primary rounded-xl h-10 px-8 text-lg border-none hover:bg-primary text-[#ffff] ">
                  Get Start
                </Button>
                <span className="flex gap-4 items-center">
                  <button className="rounded-full text-[#ffff] p-2 bg-primary text-white">
                    <PlayIcon />
                  </button>
                  <a href="" className="text-primary text-lg underline">
                    Watch Video
                  </a>
                </span>
              </div>
            </div>
            <div>
              <img
                src={imageHero}
                className="lg:w-[494.47px] md:w-[300px] md:h-[450px] lg:h-[691px]"
                alt="image fond"
              />
            </div>
          </section>
          <section className="mt-10 px-5 lg:mx-[250px] " id="services">
            <h1 className="md:text-[45px] mb-4 text-2xl font-bold text-center">
              Our Work featured on
            </h1>
            <div className="logo md:flex  grid grid-cols-2 items-center shadow-lg  mt-8 justify-between gap-2">
              <img src={forbesIcon} alt="image-forbes" />
              <img src={netflix} alt="netflix logo" />
              <img src={sej} alt="esj-logo" />
              <img src={amazon} alt="amazon-logo" />
              <img src={enterprise} alt="entre-magazine-logo" />
            </div>
          </section>
          <section className="lg:flex px-6 mx-auto lg:mx-[250px]  mt-16">
            <section className="mt-10 flex flex-col justify-around lg:w-1/2 mx-auto md:w-3/4">
              <h1 className="md:text-[35px] text-xl font-bold text">
                HOW PAGETRAFIC CREATES HYPER BUSINESS GROWTH
              </h1>
              <p className="text-lg my-4">
                PageTraffic offers top-notch SEO and digital marketing
                solutuions to help you rank hight on search results, connect
                with
              </p>
              <div className="flex flex-col div-cible mt-4">
                <div>
                  <img
                    src={cible}
                    alt="cible"
                    className="cible"
                  />
                  <p>Page Traffic offers to-notch SEO and digital </p>
                </div>
                <div>
                  <img
                    src={cible}
                    alt="cible"
                    className="cible"
                  />
                  <p>Page Traffic offers to-notch SEO and digital </p>
                </div>
                <div>
                  <img
                    src={cible}
                    alt="cible"
                    className="cible"
                  />
                  <p>Page Traffic offers to-notch SEO and digital </p>
                </div>
                <div>
                  <img
                    src={cible}
                    alt="cible"
                    className="cible"
                  />
                  <p>Page Traffic offers to-notch SEO and digital </p>
                </div>
                <div>
                  <img
                    src={cible}
                    alt="cible"
                    className="cible"
                  />
                  <p>Page Traffic offers to-notch SEO and digital </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <span className="flex flex-col">
                  <p className="text-primary lg:text-[35px] text-[25px]">
                    1.9k
                  </p>
                  <p>Total Audience</p>
                </span>
                <span className="flex flex-col">
                  <p className="text-green lg:text-[35px] text-[25px] ">5.7k</p>
                  <p>Complete Project</p>
                </span>
              </div>
              <span>
                <Button className="bg-green h-12 w-32 mt-4 text-white">
                  Explore Now
                </Button>
              </span>
            </section>
            <section className="lg:grid grid-cols-2 lg:gap-4 mt-6 flex md:flex-row flex-col items-center mb-3 mx-auto justify-center gap-10">
              <div className="flex flex-col gap-5">
                <div className="h-[330px] w-[270px] flex flex-col gap-4 border px-10 py-5 border-primary rounded-[25px] ">
                  <div className="w-[100px] h-[100px] bg-primary/25 px-4 py-4 rounded-lg ">
                    <img src={icon1} alt="icon1" />
                  </div>
                  <h1 className="text-[26px] font-semibold ">I Want Leads</h1>
                  <p className="text-lg">
                    Looking to get higher ROI by impoving website
                  </p>
                  <a href="more" className="text-primary">
                    View more
                  </a>
                </div>
                <div className="h-[330px] w-[270px] flex flex-col gap-4 border px-10 py-5 border-green rounded-[25px] ">
                  <div className="w-[100px] h-[100px] bg-green/25 px-4 py-4 rounded-lg ">
                    <img src={icon2} alt="icon1" />
                  </div>
                  <h1 className="text-[26px] font-semibold ">I Want Leads</h1>
                  <p className="text-lg">
                    Looking to get higher ROI by impoving website
                  </p>
                  <a href="more" className="text-green">
                    View more
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-5 lg:mt-12">
                <div className="h-[330px] w-[270px] flex flex-col gap-4 border px-10 py-5 border-green rounded-[25px] ">
                  <div className="w-[100px] h-[100px] bg-green/25 px-4 py-4 rounded-lg ">
                    <img src={icon2} alt="icon1" />
                  </div>
                  <h1 className="text-[26px] font-semibold ">I Want Leads</h1>
                  <p className="text-lg">
                    Looking to get higher ROI by impoving website
                  </p>
                  <a href="more" className="text-green">
                    View more
                  </a>
                </div>
                <div className="h-[330px] w-[270px] flex flex-col gap-4 border px-10 py-5 border-primary rounded-[25px] ">
                  <div className="w-[100px] h-[100px] bg-primary/25 px-4 py-4 rounded-lg ">
                    <img src={icon1} alt="icon1" />
                  </div>
                  <h1 className="text-[26px] font-semibold ">I Want Leads</h1>
                  <p className="text-lg">
                    Looking to get higher ROI by impoving website
                  </p>
                  <a href="more" className="text-primary">
                    View more
                  </a>
                </div>
              </div>
            </section>
          </section>
          <section className="flex px-6 flex-col gap-6 items-center lg:px-[250px]" id="Portfolio">
            <h1 className="text-center text-[35px] font-bold ">
              Our Portfolio
            </h1>
            <div className="links flex md:text-lg text-[16px] font-semibold justify-center md:gap-4 gap-2 my-4 items-center text-center">
              <a href="link">All</a>
              <a href="link">Website Design</a>
              <a href="link">Mobile App</a>
              <a href="link">Design Branding</a>
              <a href="link">UI/UX</a>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4  projects">
              <img src={projet1} alt="projet 1" />
              <img src={projet2} alt="projet 2" />
              <img src={projet3} alt="projet 3" />
              <img src={projet4} alt="projet 4" />
              <img src={projet5} alt="projet 5" />
              <img src={projet6} alt="projet 6" />
            </div>
            <Button className="bg-green h-12 w-32 mt-4 text-white">
              Explore Now
            </Button>
          </section>
          <section className="mt-10 px-4 lg:px-[250px]">
            <h1 className="text-center text-[35px] font-bold ">
              See Our Blog Post
            </h1>
            <div className="mt-8 lg:grid grid-cols-2 flex flex-col items-center gap-10">
              <div className="md:w-[559px] flex items-center gap-3 border border-primary rounded-xl ">
                <img
                  src={blog1}
                  alt=""
                  className="h-[249px] w-[201px] "
                />
                <div className="flex flex-col px-4 gap-4">
                  <p>19 Feb, 2022 By Admin</p>
                  <h2 className="text-xl font-semibold">UI/UX design Tips</h2>
                  <p>
                    Promotion Worle has once placed PageTraffic among the Top
                  </p>
                  <span className="flex items-center gap-5 text-primary">
                    <a href="#">Read more</a>
                    <ArrowRigth />
                  </span>
                </div>
              </div>
              <div className="md:w-[559px] flex items-center gap-3 border border-green rounded-xl ">
                <img
                  src={blog2}
                  alt=""
                  className="h-[249px] w-[201px] "
                />
                <div className="flex flex-col px-4 gap-4">
                  <p>19 Feb, 2022 By Admin</p>
                  <h2 className="text-xl font-semibold">UI/UX design Tips</h2>
                  <p>
                    Promotion Worle has once placed PageTraffic among the Top
                  </p>
                  <span className="flex items-center gap-5 text-primary">
                    <a href="#">Read more</a>
                    <ArrowRigth />
                  </span>
                </div>
              </div>
              <div className="md:w-[559px] flex items-center gap-3 border lg:border-green border-primary rounded-xl ">
                <img
                  src={blog3}
                  alt=""
                  className="h-[249px] w-[201px] "
                />
                <div className="flex flex-col px-4 gap-4">
                  <p>19 Feb, 2022 By Admin</p>
                  <h2 className="text-xl font-semibold">UI/UX design Tips</h2>
                  <p>
                    Promotion Worle has once placed PageTraffic among the Top
                  </p>
                  <span className="flex items-center gap-5 text-primary">
                    <a href="#">Read more</a>
                    <ArrowRigth />
                  </span>
                </div>
              </div>
              <div className="md:w-[559px] flex items-center gap-3 border lg:border-primary border-green rounded-xl ">
                <img
                  src={blog4}
                  alt=""
                  className="h-[249px] w-[201px] "
                />
                <div className="flex flex-col px-4 gap-4">
                  <p>19 Feb, 2022 By Admin</p>
                  <h2 className="text-xl font-semibold">UI/UX design Tips</h2>
                  <p>
                    Promotion Worle has once placed PageTraffic among the Top
                  </p>
                  <span className="flex items-center gap-5 text-primary">
                    <a href="#">Read more</a>
                    <ArrowRigth />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <footer className=" mt-10 lg:px-[250px] bg-gradient-to-r from-[#ffe5e5] via-[#f5fffe] to-[#fff4e5]">
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
    </>
  );
}
