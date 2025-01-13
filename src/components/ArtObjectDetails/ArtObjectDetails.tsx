"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useFetch } from "@/hooks";
import { Picture } from "@/components/ui";
import { IArtCollection } from "@/types/interfaces";
// import { API_BASE_URL, API_STR_KEY } from "@/utils/constants";
import styles from "./ArtObjectDetails.module.css";

export default function ArtObjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useFetch<IArtCollection>(
    `https://www.rijksmuseum.nl/api/nl/collection/${slug}?key=1rbD8jnK`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    data && (
      <article>
        <div className={styles.imgWrap}>
          <Picture
            src={data.artObject.webImage.url}
            alt={data.artObject.longTitle}
            width={400}
            height={400}
          />
        </div>
        <h1>{data.artObject.title}</h1>
        <p>{data.artObject.plaqueDescriptionDutch}</p>
        <p>
          <strong>Maker:</strong> {data.artObject.principalOrFirstMaker}
        </p>
        <p>
          <strong>Materials:</strong> {data.artObject.materials.join(", ")}
        </p>
      </article>
    )
  );
}
