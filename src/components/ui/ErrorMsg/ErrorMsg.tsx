export default function ErrorMsg({ error }: { error: Error | null }) {
  return error ? (
    <center>
      <strong className="text-red-600">Error: {error.message}</strong>
    </center>
  ) : (
    ""
  );
}
