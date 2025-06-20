'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Job } from '@/types/job';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.li whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded shadow flex justify-between">
      <div>
        <h2 className="font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
      <Link href={`/jobs/${job.id}`}>
        <button className="text-blue-600">View</button>
      </Link>
    </motion.li>
  );
}
