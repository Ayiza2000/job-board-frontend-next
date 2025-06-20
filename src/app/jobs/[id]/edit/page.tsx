'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import JobForm from '../../../../components/JobForm';
import { useJobs } from '../../../../lib/hooks';
import { Job } from '@/types/job';
import { JobInput } from '@/types/job';

export default function EditPage() {
  const router = useRouter();
    const params = useParams<{ id: string }>();
  const id = params?.id; 
  const { get, update } = useJobs();
  const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
    get(id).then(setJob);
  }, [id]);


  if (!job) return <p className="p-6">Loading...</p>;

  async function onSubmit(data: JobInput) {
    await update(id, data);
    router.push(`/jobs/${id}`);
  }

  return <JobForm onSubmit={onSubmit} initial={job} />;
}
