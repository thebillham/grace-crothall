import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Gallery from "react-grid-gallery";
import getScreenWidth from "../../lib/mediaQuery";

export default function SnakesOfNewZealand() {
  const screenWidth = getScreenWidth();
  let fullWidth = "1920px";
  if (screenWidth === "xs") fullWidth = "640px";
  else if (screenWidth === "sm") fullWidth = "768px";
  else if (screenWidth === "md") fullWidth = "1024px";
  else if (screenWidth === "lg") fullWidth = "1280px";
  const images = [...Array(35).keys()].map((num) => ({
    src: `https://storage.googleapis.com/grace-crothall/images/alcala-snakes-of-new-zealand/${fullWidth}/${
      num + 1
    }.jpg`,
    thumbnail: `https://storage.googleapis.com/grace-crothall/images/alcala-snakes-of-new-zealand/240px/${
      num + 1
    }.jpg`,
    thumbnailHeight: [20, 34].includes(num) ? 190 : 298,
    thumbnailWidth: 240,
  }));

  return (
    <Layout>
      <div className="px-1 flex-grow">
        <Gallery
          images={images}
          backdropClosesModal={true}
          lightboxWidth={1920}
          margin={8}
          rowHeight="120px"
        />
      </div>
    </Layout>
  );
}
