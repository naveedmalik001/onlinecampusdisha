'use client'

import Link from 'next/link'
import {
  MapPinIcon,
  CheckBadgeIcon,
  StarIcon,
  ArrowRightIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'

export default function UniversityCard({ university }) {
  const { name, slug, location, description, programs, accredited, rating, image_url, landing } = university

  return (
    <div className="university-card">
      <div className="card-image-wrapper">
        {image_url ? (
          <img
            src={image_url}
            className="card-image"
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="card-image card-image-placeholder">
            <BuildingLibraryIcon className="placeholder-icon" />
          </div>
        )}
        <div className="image-overlay"></div>
        {accredited && (
          <div className="accredited-badge">
            <CheckBadgeIcon className="badge-icon" />
            <span>UGC Approved</span>
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="card-header-section">
          <h3 className="university-name">{name}</h3>
          {rating && (
            <div className="rating-badge">
              <StarIcon className="star-icon" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        <div className="location-section">
          <MapPinIcon className="location-icon" />
          <span>{location}</span>
        </div>

        <p className="description">{description}</p>

        <div className="programs-section">
          {programs && programs.slice(0, 4).map((program, index) => (
            <span key={index} className="program-badge">
              {program}
            </span>
          ))}
          {programs && programs.length > 4 && (
            <span className="program-badge more-badge">
              +{programs.length - 4} more
            </span>
          )}
        </div>

        <div className="card-actions">
          {landing && (
            <a
              href={landing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-apply"
            >
              <AcademicCapIcon className="btn-icon" />
              Apply Now
            </a>
          )}
          <Link
            href={`/universities/${slug}`}
            className="btn btn-details"
          >
            View Details
            <ArrowRightIcon className="btn-icon" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .university-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .university-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-image-placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-icon {
          width: 80px;
          height: 80px;
          color: rgba(255, 255, 255, 0.7);
        }

        .university-card:hover .card-image {
          transform: scale(1.15);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .university-card:hover .image-overlay {
          opacity: 1;
        }

        .accredited-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          width: 18px;
          height: 18px;
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-header-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .university-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
          flex-shrink: 0;
        }

        .star-icon {
          width: 16px;
          height: 16px;
        }

        .location-section {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .location-icon {
          width: 18px;
          height: 18px;
          color: #3b82f6;
        }

        .description {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .programs-section {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          min-height: 32px;
        }

        .program-badge {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          color: #2563eb;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1.5px solid #3b82f6;
          transition: all 0.3s ease;
        }

        .program-badge:hover {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          transform: translateY(-2px);
        }

        .more-badge {
          background: #f1f5f9;
          color: #64748b;
          border-color: #cbd5e1;
        }

        .more-badge:hover {
          background: #e2e8f0;
          color: #475569;
        }

        .card-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        .btn-apply {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
        }

        .btn-apply:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
          color: white;
        }

        .btn-details {
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
        }

        .btn-details:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .card-image-wrapper {
            height: 200px;
          }

          .card-content {
            padding: 20px;
          }

          .university-name {
            font-size: 1.2rem;
          }

          .card-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}