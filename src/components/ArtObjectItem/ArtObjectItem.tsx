"use client";
import React from "react";
import { Picture } from "@/components/ui";
import { IArtObject } from "@/types/interfaces";
import styles from "./ArtObjectItem.module.css";

export default function ArtObjectItem({ obj }: { obj: IArtObject }) {
  return (
    <article className={styles.artItem}>
      <a href={`/collection/${obj.objectNumber}`}>
        <Picture
          src={obj.webImage.url}
          alt={obj.longTitle}
          width={180}
          height={180}
          style={{
            width: "auto",
            height: "180px",
          }}
        />
        <h4>{obj.title}</h4>
        <p>{obj.objectNumber}</p>
      </a>
    </article>
  );
}
