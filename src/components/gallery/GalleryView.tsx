"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryView() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {gallery.images.map((image, idx) => (
          <Media
            enlarge
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(idx)}
            priority={idx < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={idx}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MasonryGrid>
      <Lightbox
        index={index}
        slides={gallery.images.map((img) => ({ src: img.src, alt: img.alt }))}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
