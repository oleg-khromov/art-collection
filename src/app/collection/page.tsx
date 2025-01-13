import { ArtObjectsList, LinkBack } from "@/components";

export default function CollectionPage() {
  return (
    <div className="container">
      <LinkBack href="/" />
      <ArtObjectsList />
    </div>
  );
}
