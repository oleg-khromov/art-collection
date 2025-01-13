import { ArtObjectDetails } from "@/components";
import { LinkBack } from "@/components/ui";

export default function ArtObjectPage() {
  return (
    <div className="container">
      <LinkBack href="/collection" />
      <ArtObjectDetails />
    </div>
  );
}
