import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 350, height: 350,marginLeft:1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://africaotr.com/wp-content/uploads/2021/01/pharaoh.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/544450/2105723/main-image",
    title: "Burger",
  },
  {
    img: "https://www.worldhistory.org/uploads/images/3480.jpg",
    title: "Camera",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2402630/capsule_616x353.jpg?t=1714398995",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://www.bookmundi.com/_ipx/f_jpeg&q_55&s_3072x1722/https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/summer-in-egypt-1682660289-785X440.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQeo9QFyV3FI_ISUFxF8QAKGG0fUe-LQgwIsVagf8hg&s",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.tripsinegypt.com/wp-content/uploads/2019/12/Egypt-Trips-in-Egypt.jpg",
    title: "Basketball",
  },
  {
    img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/d21b085ef2ce77c4331c462d385aed66315ae019/big-c0028d755da3df7d7160a6015869431d.jpg",
    title: "Fern",
  },
  {
    img: "https://lp-cms-production.imgix.net/2023-07/shutterstockRF76027159.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l-a2dl2lehxriuGhISANG1B4ufbBM5g7dxuevqMBNg&s",
    title: "Tomato basil",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FWiEUuZBR93DX7vFNJv2NigWevqlkiupTBuW9WmgJg&s",
    title: "Sea star",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/543503610.jpg?k=215334905e419eaeb4286f6221b021f5dbd5a6d17583a84705a8ede1b7b75df7&o=&hp=1",
    title: "Bike",
    cols: 2,
  },
];
