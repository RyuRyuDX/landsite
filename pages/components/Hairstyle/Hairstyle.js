import Link from 'next/link'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import Navbar from '../Navbar/Navbar';

export default function Hairstyle() {
  return (
    <>
      {/* <Header />
      <Navbar /> */}
      <div className="m-7">
        <div className="pb-10 border shadow-lg">
          <div className="pt-10">
            <div className="container mx-auto flex flex-col items-center" >
              <div className="text-4xl font-thin border border-black px-10 py-1 mb-20">
                Styles
              </div>
            </div>
            <Box sx={{ width: 'auto', minHeight: 829, textAlign: 'center', margin: '0px 7px' }}>
              <Masonry columns={3} spacing={2}>
                {itemData.map((item) => (
                  <MasonryItem key={item.img}>
                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </MasonryItem>
                ))}
              </Masonry>
            </Box>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

const itemData = [
  {
    img: '/hair/hair1.jpg',
  },
  {
    img: '/hair/hair2.jpg',
  },
  {
    img: '/hair/hair3.jpg',
  },
  {
    img: '/hair/hair4.jpg',
  },
  {
    img: '/hair/hair5.jpg',
  },
  {
    img: '/hair/hair6.jpg',
  },
  {
    img: '/hair/hair7.jpg',
  },
  {
    img: '/hair/hair8.jpg',
  },
  {
    img: '/hair/hair9.jpg',
  },
  {
    img: '/hair/hair10.jpg',
  },

];