"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useFetch } from "@/hooks";
import { Picture, Loading, ErrorMsg } from "@/components/ui";
import { IArtCollection } from "@/types/interfaces";
import { BASE_URL, PARAM_KEY } from "@/utils/constants";
import styles from "./ArtObjectDetails.module.css";

export default function ArtObjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useFetch<IArtCollection>(
    `${BASE_URL}/${slug}?${PARAM_KEY}&format=json`
  );

  return (
    <>
      {data && (
        <article>
          <div className={styles.imgWrap}>
            {data.artObject.webImage?.url && (
              <Picture
                src={data.artObject.webImage.url}
                alt={data.artObject.longTitle}
                width={400}
                height={400}
              />
            )}
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
      )}
      <Loading isLoading={isLoading} />
      <ErrorMsg error={error} />
    </>
  );
}
