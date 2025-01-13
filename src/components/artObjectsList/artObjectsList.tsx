"use client";
import React from "react";
import { ArtObjectItem } from "@/components";
import { useFetch } from "@/hooks";
import { IArtCollection, IArtObject } from "@/types/interfaces";
import { API_BASE_URL, API_STR_KEY } from "@/utils/constants";
import styles from "./artObjectsList.module.css";

export default function ArtObjectList() {
  const { data, isLoading, error } = useFetch<IArtCollection>(
    `https://www.rijksmuseum.nl/api/nl/collection?key=1rbD8jnK`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className={styles.artList}>
      {data &&
        data.artObjects.map((obj: IArtObject) => (
          <ArtObjectItem obj={obj} key={obj.objectNumber} />
        ))}
    </section>
  );
}
