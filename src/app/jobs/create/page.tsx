'use client';
import { useRouter } from 'next/navigation';
import JobForm from '../../../components/JobForm';
import { useJobs } from '../../../lib/hooks';
export interface JobInput {
  title: string;
  description: string;
  location: string;
}
export default function CreatePage() {
  const router = useRouter();
  const { create } = useJobs();

  async function onSubmit(data: JobInput) {
    await create(data);
    router.push('/');
  }

  return <JobForm onSubmit={onSubmit} initial={{ title: '', description: '', location: '' }}/>;
}
