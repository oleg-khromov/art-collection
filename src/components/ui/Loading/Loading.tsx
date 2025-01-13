interface ILoading {
  isLoading: boolean;
}

export default function Loading({ isLoading = false }: ILoading) {
  return isLoading ? (
    <center>
      <strong>Loading...</strong>
    </center>
  ) : (
    ""
  );
}
