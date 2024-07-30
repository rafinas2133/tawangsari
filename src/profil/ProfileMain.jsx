import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 1" },
  { src: "https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 2" },
  { src: "https://images.unsplash.com/photo-1722072776193-74e134ae6e78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 3" },
  { src: "https://images.unsplash.com/photo-1722248241751-04ff8a648880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 4" },
  { src: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 5" },
  { src: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Image 6" },
  // Add more images as needed
];

export const ProfileMain = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-white'>
      <div className="bg-card w-full text-white text-center py-4 mb-6">
        <h1 className="font-bold text-3xl mt-28 mb-4 md:text-5xl">PROFIL</h1>
      </div>
      <div className="w-full h-max pb-10 px-4 py-20 md:px-52 bg-white">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Kelurahan Tawangsari" 
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
          <p>
            Tawangsari adalah sebuah kelurahan yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan Tawangsari berfungsi sebagai ibu kota kecamatan Garum dan merupakan lokasi dari kantor muspika, yang mencakup kantor kecamatan, kantor polsek, dan koramil.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sejarah</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet tincidunt odio. Suspendisse vulputate sapien porta arcu interdum accumsan. Suspendisse varius sed sem sed interdum. Sed at consectetur metus, non finibus turpis. Pellentesque maximus, ligula non fermentum facilisis, arcu arcu consequat mi, et mollis quam eros eget ligula. Integer malesuada eget nisl at porta. Nunc id magna neque. Aliquam risus arcu, suscipit ut pretium a, semper at dolor. Ut ultricies fringilla justo, ut mollis risus laoreet nec. us elit non arcu porttitor, eget luctus massa eleifend.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Destinasi Pilihan di Tawangsari</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet tincidunt odio. Suspendisse vulputate sapien porta arcu interdum accumsan. Suspendisse varius sed sem sed interdum. Sed at consectetur metus, non finibus turpis. Pellentesque maximus, ligula non fermentum facilisis, arcu arcu consequat mi, et mollis quam eros eget ligula. Integer malesuada eget nisl at porta. Nunc id magna neque. Aliquam risus arcu, suscipit ut pretium a, semper at dolor. Ut ultricies fringilla justo, ut mollis risus laoreet nec. us elit non arcu porttitor, eget luctus massa eleifend.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Galeri</h2>
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={index} className="p-2">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-52 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
