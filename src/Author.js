export default function Author({ data }) {
  return data ? (
    <div>
      <h1>There are</h1>
      <h1>{data.numFound} of them</h1>
      <footer id="footer">Created by Sureena Hukkoo & Kevin carpio</footer>
    </div>
  ) : (
    "No data yet"
  );
}
