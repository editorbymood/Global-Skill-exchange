import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

interface SkillCardProps {
  title: string;
  category: string;
  rating: number;
  studentsCount: number;
  duration: string;
  image: string;
  teacher: {
    name: string;
    avatar: string;
    title: string;
  };
  pointsCost: number;
}

export function SkillCard({
  title,
  category,
  rating,
  studentsCount,
  duration,
  image,
  teacher,
  pointsCost,
}: SkillCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      role="article"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {pointsCost} Points
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <a
            href="#"
            className="hover:text-indigo-600 transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            {title}
          </a>
        </h3>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
            <span className="ml-1 text-sm text-gray-600">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-1 text-sm text-gray-600">
              {studentsCount} students
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-1 text-sm text-gray-600">{duration}</span>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{teacher.name}</p>
              <p className="text-sm text-gray-500">{teacher.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}