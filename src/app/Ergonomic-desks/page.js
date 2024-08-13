"use client";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { AboutAchievment, AboutStore } from "@/data/About";
import { TeamData } from "@/data/Team";
import { TopProducts } from "@/data/Products";
import { getAllPosts, getPostBySlug } from "@/utils/api";
import ProductSeven from "@/components/product/ProductSeven";
import WhyChoose from "@/components/why-choose/WhyChoose";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import ContactForm from "@/components/contact/ContactForm";
import FAQSection from "@/components/FAQSection/FAQSection";

const ErgonomicDesks = async () => {
  //   const postMeta = getPostBySlug("apple-presents-app-best-of-2020-winners", [
  //     "id",
  //     "title",
  //     "postFormat",
  //     "videoUrl",
  //     "audioFile",
  //     "cate",
  //     "featureImg",
  //     "largeImg",
  //     "gallery",
  //     "author_name",
  //     "author_img",
  //     "date",
  //     "views",
  //     "content",
  //   ]);

  const images_gallery = [
    "/images/blog/color rubber black legs.JPG",
    "/images/blog/E6 with black top.JPG",
    "/images/blog/E6 wood top.JPG",
  ];

  const video_url = "https://www.youtube.com/watch?v=CZizix2-c1A";

  const best_products = [
    {
      id: 77,
      title: "Flexo scoter1",
      thumbnail:
        "/images/product/furniture/flexo_teble/color rubber black legs.JPG",
      gallery: [
        "/images/product/furniture/product-1.png",
        "/images/product/furniture/product-2.png",
        "/images/product/furniture/product-3.png",
        "/images/product/furniture/product-4.png",
        "/images/product/furniture/product-5.png",
      ],
      pCate: "Furniture",
      cate: ["Round Table"],
      price: 80,
      salePrice: 60,
      productType: "simple",
      shortDes: {
        text: "In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.",
        listItem:
          '<li><i class="fal fa-check"></i>In stock</li><li><i class="fal fa-check"></i>Free delivery available</li><li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>',
      },
      description: {
        textDesc: [
          {
            title: "Specifications:",
            text: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.",
          },
          {
            title: "Care & Maintenance:",
            text: "Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.",
          },
        ],
        listDesc: [
          {
            icon: "/images/product/product-thumb/icon-3.png",
            title: "Easy Returns",
          },
          {
            icon: "/images/product/product-thumb/icon-2.png",
            title: "Quality Service",
          },
          {
            icon: "/images/product/product-thumb/icon-1.png",
            title: "Original Product",
          },
        ],
      },
    },
    {
      id: 78,
      title: "flexo acer",
      thumbnail:
        "/images/product/furniture/flexo_teble/color rubber white legs.JPG",
      gallery: [
        "/images/product/furniture/product-2.png",
        "/images/product/furniture/product-6.png",
        "/images/product/furniture/product-3.png",
        "/images/product/furniture/product-4.png",
        "/images/product/furniture/product-5.png",
      ],
      pCate: "Furniture",
      cate: ["Vintage Table"],
      price: 90,
      salePrice: 70,
      productType: "simple",
      shortDes: {
        text: "In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.",
        listItem:
          '<li><i class="fal fa-check"></i>In stock</li><li><i class="fal fa-check"></i>Free delivery available</li><li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>',
      },
      description: {
        textDesc: [
          {
            title: "Specifications:",
            text: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.",
          },
          {
            title: "Care & Maintenance:",
            text: "Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.",
          },
        ],
        listDesc: [
          {
            icon: "/images/product/product-thumb/icon-3.png",
            title: "Easy Returns",
          },
          {
            icon: "/images/product/product-thumb/icon-2.png",
            title: "Quality Service",
          },
          {
            icon: "/images/product/product-thumb/icon-1.png",
            title: "Original Product",
          },
        ],
      },
    },
    {
      id: 79,
      title: "flexo xr",
      thumbnail: "/images/product/furniture/flexo_teble/E6 with black top.JPG",
      gallery: [
        "/images/product/furniture/product-3.png",
        "/images/product/furniture/product-7.png",
        "/images/product/furniture/product-3.png",
        "/images/product/furniture/product-4.png",
        "/images/product/furniture/product-5.png",
      ],
      pCate: "Furniture",
      cate: ["Round Table"],
      price: 85,
      salePrice: 75,
      productType: "simple",
      shortDes: {
        text: "In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.",
        listItem:
          '<li><i class="fal fa-check"></i>In stock</li><li><i class="fal fa-check"></i>Free delivery available</li><li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>',
      },
      description: {
        textDesc: [
          {
            title: "Specifications:",
            text: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.",
          },
          {
            title: "Care & Maintenance:",
            text: "Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.",
          },
        ],
        listDesc: [
          {
            icon: "/images/product/product-thumb/icon-3.png",
            title: "Easy Returns",
          },
          {
            icon: "/images/product/product-thumb/icon-2.png",
            title: "Quality Service",
          },
          {
            icon: "/images/product/product-thumb/icon-1.png",
            title: "Original Product",
          },
        ],
      },
    },
    {
      id: 80,
      title: "flexo woodi",
      thumbnail: "/images/product/furniture/flexo_teble/E6 wood top.JPG",
      gallery: [
        "/images/product/furniture/product-4.png",
        "/images/product/furniture/product-8.png",
        "/images/product/furniture/product-3.png",
        "/images/product/furniture/product-4.png",
        "/images/product/furniture/product-5.png",
      ],
      pCate: "Furniture",
      cate: ["Arm Chair"],
      price: 105,
      salePrice: 100,
      productType: "simple",
      shortDes: {
        text: "In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.",
        listItem:
          '<li><i class="fal fa-check"></i>In stock</li><li><i class="fal fa-check"></i>Free delivery available</li><li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>',
      },
      description: {
        textDesc: [
          {
            title: "Specifications:",
            text: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.",
          },
          {
            title: "Care & Maintenance:",
            text: "Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.",
          },
        ],
        listDesc: [
          {
            icon: "/images/product/product-thumb/icon-3.png",
            title: "Easy Returns",
          },
          {
            icon: "/images/product/product-thumb/icon-2.png",
            title: "Quality Service",
          },
          {
            icon: "/images/product/product-thumb/icon-1.png",
            title: "Original Product",
          },
        ],
      },
    },
  ];
  return (
    <>
      <HeaderFive headerSlider />
      <main className="main-wrapper">
        {/* Breadcrumb */}
        <Breadcrumb activeItem="Ergonomic Desks" title="Ergonomic Desks" />

        {/* סקשיין מוצרים נבחרים */}
        <Section pClass="pb--0" borderBottom="pb--50">
          <SectionTitle
            title="מוצרים נבחרים"
            subtitle="החודש"
            subtitleIcon="far fa-shopping-basket"
            subColor="highlighter-secondary"
          />
          <div className="row">
            {best_products.map((data) => (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={data.id}>
                <ProductSeven product={data} />
              </div>
            ))}
          </div>
        </Section>
        {/* סקשיין תמונה וטקסט */}
        <section className="storyboard-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Image
                  src="/images/product/furniture/product-1.png" // Replace with your image path
                  alt="Your Product"
                  width={600}
                  height={400}
                  className="storyboard-image"
                />
              </div>
              <div className="col-lg-6">
                <div className="storyboard-content">
                  <h3 className="storyboard-title">
                    Innovative Ergonomic Desk
                  </h3>
                  <p className="storyboard-text">
                    Our ergonomic desks are designed to enhance your
                    productivity and comfort. With adjustable height settings,
                    premium materials, and a sleek design, this desk is the
                    perfect addition to any workspace. Upgrade your work
                    environment and experience the benefits of ergonomic design.
                  </p>
                  <Link
                    href="/products/ergonomic-desk"
                    className="axil-btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* סקשיין גלריית תמונות */}
        <Section pClass="photo-gallery-section">
          <div className="container">
            <SectionTitle
              title="Photo Gallery"
              subtitle="Showcasing Our Products"
              subColor="highlighter-primary"
            />
            <div className="row">
              {images_gallery?.map((image, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                  <Image
                    src={image}
                    width={300}
                    height={200}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* טקסט סקשיין */}
        <Section pClass="caption-section">
          <div className="container text-center">
            <h3 className="caption-title">Elevate Your Workspace</h3>
            <p className="caption-text">
              Discover the comfort and efficiency of our ergonomic desks,
              designed to enhance your work experience.
            </p>
          </div>
        </Section>

        {/* וידאו סקשיין  */}
        <Section pClass="video-section">
          <div className="container text-center">
            <h3 className="video-title">Watch Our Product in Action</h3>
            <video controls className="w-100">
              <source src={video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>

        {/* למה לבחור בנו */}
        <WhyChoose />

        {/* סקשיין תמונה וטקסט */}
        <section className="storyboard-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Image
                  src="/images/product/furniture/product-1.png" // Replace with your image path
                  alt="Your Product"
                  width={600}
                  height={400}
                  className="storyboard-image"
                />
              </div>
              <div className="col-lg-6">
                <div className="storyboard-content">
                  <h3 className="storyboard-title">
                    Innovative Ergonomic Desk
                  </h3>
                  <p className="storyboard-text">
                    Our ergonomic desks are designed to enhance your
                    productivity and comfort. With adjustable height settings,
                    premium materials, and a sleek design, this desk is the
                    perfect addition to any workspace. Upgrade your work
                    environment and experience the benefits of ergonomic design.
                  </p>
                  <Link
                    href="/products/ergonomic-desk"
                    className="axil-btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* סקשיין פורם השאר פרטים */}
        <ContactForm />

        {/* סקשיין טקסט */}
        <Section pClass="text-section">
          <div className="container text-center">
            <h3 className="text-title">Why Choose Our Products?</h3>
            <p className="text-content">
              Our ergonomic desks are not just furniture; they are a solution
              for a healthier and more efficient workspace. With a focus on
              quality, innovation, and customer satisfaction, we strive to
              provide products that meet the highest standards.
            </p>
          </div>
        </Section>

        {/* Photo Gallery Slider Section */}
        {/* <section className="photo-gallery-slider-section">
          <div className="container">
            <SectionTitle
              title="Our Product Gallery"
              subtitle="Scroll Through Our Collection"
              subtitleIcon="fas fa-camera"
              subColor="highlighter-primary"
            />
            <SlickSlider
              class="photo-gallery-slider"
              slidesToShow={1}
              arrows={true}
              infinite={true}
            >
              {[
                "images/product/furniture/flexo_teble/IMG_1831.JPG",
                "/images/product/furniture/product-1.png", // Replace with your image paths
                "images/product/furniture/flexo_teble/IMG_1831.JPG",
              ].map((image, index) => (
                <div key={index} className="gallery-image">
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    width={800}
                    height={500}
                  />
                </div>
              ))}
            </SlickSlider>
          </div>
        </section> */}

        {/* סקשיין לקוחות ממליצים */}
        <TestimonialOne />

        {/* סקשיין טקסט */}
        <Section pClass="caption-section">
          <div className="container text-center">
            <h3 className="caption-title">Crafted for Excellence</h3>
            <p className="caption-text">
              Our products are designed with the user in mind, ensuring both
              comfort and productivity.
            </p>
          </div>
        </Section>

        {/*סקשיין שאלות ותשובות  */}
        <FAQSection />

        {/*סקשיין שליחת פירסומים  */}
        <NewsLetter />

        <ServiceTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default ErgonomicDesks;
