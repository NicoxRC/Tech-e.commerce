import Layout from "components/layout";
import Footer from "components/footer";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function result() {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    (url) => fetch(url).then(res => res.json())
  )  

  return (
    <Layout>
      <div>
        <h1>Payment Result</h1>
        <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
      </div>
      <Footer />
    </Layout>
  )
}
