"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mapInSlices, slugify } from "@/utils";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import ProductsData from "@/data/Products";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import ProductTwo from "@/components/product/ProductTwo";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import WhyChoose from "@/components/why-choose/WhyChoose";
import PosterOne from "@/components/poster/PosterOne";
import BannerFive from "@/components/hero-banner/BannerFive";
import CategoryFurniture from "@/components/category/CategoryFurniture";
import CountDown from "@/components/elements/CountDown";
import ProductFour from "@/components/product/ProductFour";
import ProductSeven from "@/components/product/ProductSeven";
import WhoWeAre from "@/components/about/WhoWeAre";
import ProductThree from "@/components/product/ProductThree";
import ProductOne from "@/components/product/ProductOne";

const HomeFurniture = () => {
  const pathname = usePathname();
  const split = pathname.split("/");
  //   const pageCategory = split[split.length - 1];
  const pageCategory = "Furniture";
  const furnitureProduct = ProductsData.filter(
    (data) => data.pCate === "Furniture"
  );

  const transparentProduct = ProductsData.filter(
    (data) => data.pCate === pageCategory && data.thumbnailTransparent === true
  );

  const test_transparentProduct = transparentProduct.slice(0, 4);
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

  const exploreProduct = mapInSlices(furnitureProduct, 8);

  return (
    <>
      <HeaderFive headerSlider />
      <main className="main-wrapper">
        <CategoryFurniture />
        <BannerFive />
        {/* <Section
          pClass="axil-new-arrivals-product-area fullwidth-container flash-sale-area pb--0"
          containerClass="ml--xxl-0"
          borderBottom="pb--50"
          style={{ direction: "rtl" }}
        > */}
        {/* <div
            style={{ direction: "rtl" }}
            className="d-md-flex align-items-end flash-sale-section"
          >
            <SectionTitle
              title=" הטבה לזמן מוגבל "
              subtitle="מלאי מוגבל"
              subtitleIcon="far fa-shopping-basket"
              style={{ direction: "rtl" }}
            />

            <div className="sale-countdown countdown">
              <CountDown date="2024-10-01T23:59:59" />
            </div>
          </div> */}

        {/* <SlickSlider
            style={{ direction: "rtl" }}
            class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
            slidesToShow={4}
            infinite={false}
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {furnitureProduct.map((data) => (
              <ProductFour product={data} key={data.id} />
            ))}
          </SlickSlider> */}
        {/* </Section> */}
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
        <WhoWeAre />
        {/* <Section pClass="pb--50 pb_sm--30">
          <SectionTitle
            title="Best Sellers"
            subtitle="This Month"
            subtitleIcon="far fa-shopping-basket"
            subColor="highlighter-secondary"
          />
          <SlickSlider
            class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile"
            slidesToShow={4}
            infinite={false}
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {furnitureProduct.map((data) => (
              <ProductThree product={data} key={data.id} />
            ))}
          </SlickSlider>
        </Section> */}
        <PosterOne
          subtitleIcon="far fa-couch"
          title="מהפיכת הארגונומיה במשרד"
          thumbnail="/images/product/furniture/flexo_teble/IMG_1831.JPG"
          thumbWidth={661}
          thumbHeight={502}
        />
        {/* <Section pClass="pb--0" borderBottom="pb--80">
          <SectionTitle
            title="Explore our Products"
            subtitle="Our Products"
            subtitleIcon="far fa-shopping-basket"
            subColor="highlighter-secondary"
          />
          <SlickSlider
            class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
            slidesToShow={1}
          >
            {exploreProduct.slice(0, 2).map((product, index) => (
              <div key={index}>
                <div className="row row--15">
                  {product.map((data) => (
                    <div
                      className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30"
                      key={data.id}
                    >
                      <ProductOne product={data} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </SlickSlider>
          <div className="row">
            <div className="col-lg-12 text-center mt--20 mt_sm--0">
              <Link
                href="/shop"
                className="axil-btn btn-bg-lighter btn-load-more"
              >
                View All Products
              </Link>
            </div>
          </div>
        </Section> */}
        <WhyChoose />
        <TestimonialOne />
        {/* <Section pClass="pb--50">
          <SectionTitle
            title="New Arrivals"
            subtitle="This Week’s"
            subtitleIcon="far fa-shopping-basket"
          />
          <SlickSlider
            class="slick-layout-wrapper--30 axil-slick-arrow arrow-top-slide"
            slidesToShow={4}
            infinite={false}
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {furnitureProduct.slice(0, 8).map((data) => (
              <ProductTwo product={data} key={data.id} />
            ))}
          </SlickSlider>
        </Section> */}
        <NewsLetter bgImage="bg_image--6" />
        {/* <ServiceTwo /> */}
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeFurniture;
