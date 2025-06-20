'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useJobs } from '../../../lib/hooks';
import { Job } from '@/types/job';

export default function ViewPage() {
  const { get, remove } = useJobs();
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id; 
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    get(id).then(setJob);
  }, [id]);

  if (!job) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.location}</p>
      <p>{job.description}</p>
      <div className="space-x-3">
        <Link href={`/jobs/${id}/edit`}>
          <button className="px-4 py-2 bg-yellow-500">Edit</button>
        </Link>
        <button
          className="px-4 py-2 bg-red-600 text-white"
          onClick={async () => {
            await remove(id);
            router.push('/');
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
