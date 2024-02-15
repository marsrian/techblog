import Featured from "@/components/Featured";
import RecentPost from "@/components/RecentPost";

const Home = ({ searchParams }) => {
  return (
    <div className="">
      <Featured />
      <RecentPost searchParams={searchParams} />
    </div>
  );
};
export default Home;
