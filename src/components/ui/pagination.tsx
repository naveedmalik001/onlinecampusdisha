"use client";

import { useState, useCallback } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface PaginationProps {
  total: number;
  current: number;
  pageSize?: number;
  onChange: (page: number) => void;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  pageSizeOptions?: number[];
  className?: string;
  disabled?: boolean;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  siblingCount?: number;
}

export function Pagination({
  total,
  current,
  pageSize = 10,
  onChange,
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = true,
  pageSizeOptions = [10, 20, 50, 100],
  className,
  disabled = false,
  showPrevNext = true,
  showFirstLast = true,
  siblingCount = 1,
}: PaginationProps) {
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  const [jumpPage, setJumpPage] = useState('');

  const totalPages = Math.ceil(total / currentPageSize);

  const handlePageChange = useCallback((page: number) => {
    if (disabled || page < 1 || page > totalPages) return;
    onChange(page);
  }, [disabled, onChange, totalPages]);

  const handlePageSizeChange = useCallback((newSize: number) => {
    setCurrentPageSize(newSize);
    onChange(1); // Reset to first page when page size changes
  }, [onChange]);

  const handleJumpToPage = useCallback(() => {
    const page = parseInt(jumpPage);
    if (!isNaN(page)) {
      handlePageChange(page);
      setJumpPage('');
    }
  }, [jumpPage, handlePageChange]);

  const getPaginationRange = useCallback(() => {
    const range: number[] = [];
    const delta = siblingCount + 2;

    for (let i = Math.max(2, current - delta);
         i <= Math.min(totalPages - 1, current + delta);
         i++) {
      range.push(i);
    }

    if (current - delta > 2) {
      range.unshift(-1); // Ellipsis
    }
    if (current + delta < totalPages - 1) {
      range.push(-1); // Ellipsis
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  }, [current, totalPages, siblingCount]);

  const range = getPaginationRange();

  const startItem = (current - 1) * currentPageSize + 1;
  const endItem = Math.min(current * currentPageSize, total);

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4", className)}>
      {/* Total count */}
      {showTotal && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {startItem} to {endItem} of {total} items
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Page size changer */}
        {showSizeChanger && (
          <div className="flex items-center gap-2 mr-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Items per page:</span>
            <select
              value={currentPageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              disabled={disabled}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pageSizeOptions.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Pagination buttons */}
        <div className="flex items-center gap-1">
          {/* First page */}
          {showFirstLast && (
            <button
              onClick={() => handlePageChange(1)}
              disabled={disabled || current === 1}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                current === 1 ? "text-gray-400 dark:text-gray-600" : "text-gray-700 dark:text-gray-300"
              )}
              aria-label="First page"
            >
              <ChevronDoubleLeftIcon className="w-4 h-4" />
            </button>
          )}

          {/* Previous page */}
          {showPrevNext && (
            <button
              onClick={() => handlePageChange(current - 1)}
              disabled={disabled || current === 1}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                current === 1 ? "text-gray-400 dark:text-gray-600" : "text-gray-700 dark:text-gray-300"
              )}
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          )}

          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {range.map((page, index) => (
              page === -1 ? (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={disabled}
                  className={cn(
                    "min-w-[2.5rem] h-10 px-3 rounded-lg transition-all duration-200",
                    "font-medium text-sm",
                    "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    current === page
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          {/* Next page */}
          {showPrevNext && (
            <button
              onClick={() => handlePageChange(current + 1)}
              disabled={disabled || current === totalPages}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                current === totalPages ? "text-gray-400 dark:text-gray-600" : "text-gray-700 dark:text-gray-300"
              )}
              aria-label="Next page"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          )}

          {/* Last page */}
          {showFirstLast && (
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={disabled || current === totalPages}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                current === totalPages ? "text-gray-400 dark:text-gray-600" : "text-gray-700 dark:text-gray-300"
              )}
              aria-label="Last page"
            >
              <ChevronDoubleRightIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick jumper */}
        {showQuickJumper && (
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Go to:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJumpToPage()}
              disabled={disabled}
              placeholder="page"
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <button
              onClick={handleJumpToPage}
              disabled={disabled || !jumpPage}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-200"
            >
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;