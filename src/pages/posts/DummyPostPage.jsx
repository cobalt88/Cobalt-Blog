import { DummyPost } from '@/components/BlogPosts/DummyPost'
import { BaseLayout } from "@/components/Layouts/BaseLayout";

export default function DummyPostPage() {

  return (
    <>
      <BaseLayout>
        <DummyPost />
      </BaseLayout>

    </>

  );
}