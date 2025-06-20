'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api, useJobs } from '../lib/hooks';
import JobCard from '../components/JobCard';
import { Job } from '@/types/job';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { list } = useJobs();

  useEffect(() => {
    list().then(setJobs);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/jobs/create" className="inline-block mb-6 px-5 py-3 bg-blue-600 text-white rounded">
        + New Job
      </Link>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}
