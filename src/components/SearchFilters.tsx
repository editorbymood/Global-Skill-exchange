import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  id: string;
  name: string;
  options: FilterOption[];
}

const filterSections: FilterSection[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { id: 'technology', label: 'Technology' },
      { id: 'languages', label: 'Languages' },
      { id: 'arts', label: 'Arts & Design' },
      { id: 'business', label: 'Business' },
      { id: 'lifestyle', label: 'Lifestyle' },
    ],
  },
  {
    id: 'level',
    name: 'Skill Level',
    options: [
      { id: 'beginner', label: 'Beginner' },
      { id: 'intermediate', label: 'Intermediate' },
      { id: 'advanced', label: 'Advanced' },
    ],
  },
  {
    id: 'duration',
    name: 'Duration',
    options: [
      { id: '0-1', label: '0-1 Hour' },
      { id: '1-3', label: '1-3 Hours' },
      { id: '3-6', label: '3-6 Hours' },
      { id: '6+', label: '6+ Hours' },
    ],
  },
  {
    id: 'points',
    name: 'Points Required',
    options: [
      { id: '0-50', label: '0-50 Points' },
      { id: '51-100', label: '51-100 Points' },
      { id: '101-200', label: '101-200 Points' },
      { id: '200+', label: '200+ Points' },
    ],
  },
];

export function SearchFilters() {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setSelectedFilters(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters(new Set());
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="filter-panel"
      >
        <Filter className="w-5 h-5" />
        <span>Filters</span>
        {selectedFilters.size > 0 && (
          <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-1">
            {selectedFilters.size}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          id="filter-panel"
          className="absolute z-40 mt-2 bg-white rounded-xl shadow-lg p-6 w-80 sm:w-96"
          role="dialog"
          aria-label="Filter options"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            {selectedFilters.size > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-indigo-600 flex items-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span>Clear all</span>
              </button>
            )}
          </div>

          <div className="space-y-6">
            {filterSections.map((section) => (
              <div key={section.id}>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  {section.name}
                </h4>
                <div className="space-y-2">
                  {section.options.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.has(option.id)}
                        onChange={() => toggleFilter(option.id)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}