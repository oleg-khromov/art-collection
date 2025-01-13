import { ArtObjectDetails, LinkBack } from "@/components";

export default function ArtObjectPage() {
  return (
    <div className="container">
      <LinkBack href="/collection" />
      <ArtObjectDetails />
    </div>
  );
}
