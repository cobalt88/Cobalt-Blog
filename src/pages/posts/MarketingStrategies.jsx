import { DummyPost } from '@/components/BlogPosts/DummyPost'
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import { useEffect, useState } from 'react';

export default function MarketingStrategies() {
  const [post, setPost] = useState(null);

  useEffect(() => { }, [])

  return (
    <>
      <BaseLayout>
        <DummyPost />
      </BaseLayout>

    </>

  );
}