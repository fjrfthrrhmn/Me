// components/EmptyState.jsx
import React from 'react';
import Image from 'next/image';
import Typography from './typography';

export default function EmptyState({
  text = 'Ops! Data not found',
  desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus neque temporibus praesentium, esse ut inventore.',
}) {
  return (
    <div className="max-w-lg h-[500px] flex items-center justify-center flex-col text-center mx-auto p-4">
      <Image src={'./No data.svg'} alt="Not Found Illustration" width={400} height={400} className="mb-4" />
      <div className="space-y-2">
        <Typography.Title variant="5/black">{text}</Typography.Title>
        <Typography.Text variant='sm/normal'>{desc}</Typography.Text>
      </div>
    </div>
  );
}
