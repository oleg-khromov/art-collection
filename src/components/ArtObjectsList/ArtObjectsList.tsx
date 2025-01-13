"use client";
import React, { useState, useEffect } from "react";
import { ArtObjectItem } from "@/components";
import { Loading, ErrorMsg } from "@/components/ui";
import { useFetch, useInfiniteScroll } from "@/hooks";
import { IArtCollection, IArtObject } from "@/types/interfaces";
import { BASE_URL, PARAM_KEY } from "@/utils/constants";
import styles from "./ArtObjectsList.module.css";

export default function ArtObjectList() {
  const [artObjects, setArtObjects] = useState<IArtObject[]>([]);
  const { page } = useInfiniteScroll();
  const { data, isLoading, error } = useFetch<IArtCollection>(
    `${BASE_URL}?${PARAM_KEY}&p=${page}&ps=10&format=json`
  );

  useEffect(() => {
    if (data) setArtObjects((prevData) => [...prevData, ...data.artObjects]);
  }, [data]);

  return (
    <>
      <section className={styles.artList}>
        {artObjects &&
          artObjects.map((obj: IArtObject) => (
            <ArtObjectItem key={obj.id} obj={obj} />
          ))}
      </section>
      <Loading isLoading={isLoading} />
      <ErrorMsg error={error} />
    </>
  );
}
