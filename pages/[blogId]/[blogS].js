import { useRouter } from "next/router";
const BlogsDetails = () => {
  const router = useRouter();
  const { blogId, blogS } = router.query;
  return (
    <>
      <h3>
        This is {blogId} page with {blogS} id
      </h3>
    </>
  );
};
export default BlogsDetails;
