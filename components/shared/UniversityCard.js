'use client'

import Link from 'next/link'
import {
  MapPinIcon,
  CheckBadgeIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'

export default function UniversityCard({ university }) {
  const { name, slug, location, description, programs, accredited, rating, image_url } = university

  return (
    <div className="card university-card h-100">
      <div className="position-relative overflow-hidden">
        {image_url ? (
          <img
            src={image_url}
            className="card-img-top"
            alt={name}
            loading="lazy"
          />
        ) : (
          <div
            className="card-img-top d-flex align-items-center justify-content-center"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              minHeight: '200px'
            }}
          >
            <BuildingLibraryIcon className="text-white" style={{ width: '80px', height: '80px', opacity: 0.7 }} />
          </div>
        )}
        {accredited && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-success d-flex align-items-center px-3 py-2">
              <CheckBadgeIcon className="me-1" style={{ width: '18px', height: '18px' }} />
              UGC Approved
            </span>
          </div>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0 fw-bold">{name}</h5>
          {rating && (
            <div className="d-flex align-items-center ms-2">
              <StarIcon className="text-warning me-1" style={{ width: '18px', height: '18px' }} />
              <span className="fw-semibold">{rating}</span>
            </div>
          )}
        </div>

        <div className="d-flex align-items-center text-muted mb-3">
          <MapPinIcon className="me-1" style={{ width: '16px', height: '16px' }} />
          <small>{location}</small>
        </div>

        <p className="card-text text-muted mb-3 flex-grow-1">{description}</p>

        <div className="mb-3">
          <div className="d-flex flex-wrap gap-2">
            {programs && programs.slice(0, 3).map((program, index) => (
              <span key={index} className="badge bg-light text-primary border border-primary">
                {program}
              </span>
            ))}
            {programs && programs.length > 3 && (
              <span className="badge bg-light text-muted">
                +{programs.length - 3} more
              </span>
            )}
          </div>
        </div>

        <Link
          href={`/universities/${slug}`}
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
        >
          View Details
          <ArrowRightIcon className="ms-2" style={{ width: '18px', height: '18px' }} />
        </Link>
      </div>

      <style jsx>{`
        .university-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .university-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .card-img-top {
          transition: transform 0.5s ease;
        }

        .university-card:hover .card-img-top {
          transform: scale(1.1);
        }

        .badge {
          font-size: 0.75rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}