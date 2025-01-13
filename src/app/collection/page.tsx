import { ArtObjectsList } from "@/components";
import { LinkBack } from "@/components/ui";

export default function CollectionPage() {
  return (
    <div className="container">
      <LinkBack href="/" />
      <ArtObjectsList />
    </div>
  );
}
