export default function Index() {
  return <div>Redirecting</div>;
}

export async function getServerSideProps(ctx) {
  ctx.res.writeHead(302, { Location: "/main/search" });
  ctx.res.end();
}
