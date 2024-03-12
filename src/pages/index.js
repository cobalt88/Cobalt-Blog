import { DummyPost } from "@/components/BlogPosts/DummyPost";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import { useSession } from "next-auth/react";
import { FromTheBlog } from "@/components/PageComponents/FromTheBlog";
import { Hero } from "@/components/PageComponents/Landing/Hero";
import { LoadingCircle } from "@/components/PageComponents/LoadingScreens/BasicCircle";

export default function Home() {
	const { data, status } = useSession();
	if (status === "loading") return <LoadingCircle />;
	console.log(data);
	return (
		<>
			<div className="main-page">
				<BaseLayout>
					<div className="p-10">
						<FromTheBlog />
					</div>
				</BaseLayout>
			</div>
		</>
	);
}
