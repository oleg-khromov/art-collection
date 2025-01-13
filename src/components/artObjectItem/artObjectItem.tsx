"use client";
import React from "react";
import Image from "next/image";
import { IArtObject } from "@/types/interfaces";
import styles from "./artObjectItem.module.css";

export default function ArtObjectItem({ obj }: { obj: IArtObject }) {
  return (
    <article className={styles.artItem}>
      <a href={`/collection/${obj.objectNumber}`}>
        <Image
          src={obj.webImage.url}
          alt={obj.longTitle}
          width={180}
          height={180}
          style={{
            width: "auto",
            height: "180px",
          }}
          priority
        />
        <h4>{obj.title}</h4>
        <p>{obj.objectNumber}</p>
      </a>
    </article>
  );
}
