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
    <div className="modern-university-card">
      <div className="modern-card-image-wrapper">
        {image_url ? (
          <img
            src={image_url}
            className="modern-card-image"
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="modern-card-image modern-card-image-placeholder">
            <BuildingLibraryIcon className="modern-placeholder-icon" />
          </div>
        )}
        <div className="modern-image-overlay"></div>
        {accredited && (
          <div className="modern-accredited-badge">
            <CheckBadgeIcon className="modern-badge-icon" />
            <span>UGC Approved</span>
          </div>
        )}
      </div>

      <div className="modern-card-content">
        <div className="modern-card-header-section">
          <h3 className="modern-university-name">{name}</h3>
          {rating && (
            <div className="modern-rating-badge">
              <StarIcon className="modern-star-icon" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        <div className="modern-location-section">
          <MapPinIcon className="modern-location-icon" />
          <span>{location}</span>
        </div>

        <p className="modern-description">{description}</p>

        <div className="modern-programs-section">
          {programs && programs.slice(0, 4).map((program, index) => (
            <span key={index} className="modern-program-badge">
              {program}
            </span>
          ))}
          {programs && programs.length > 4 && (
            <span className="modern-program-badge modern-more-badge">
              +{programs.length - 4} more
            </span>
          )}
        </div>

        <div className="modern-card-actions">
          {landing && (
            <a
              href={landing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
            >
              <AcademicCapIcon className="modern-btn-icon me-2" />
              Apply Now
            </a>
          )}
          <Link
            href={`/universities/${slug}`}
            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
          >
            View Details
            <ArrowRightIcon className="modern-btn-icon me-2" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .modern-university-card {
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

        .modern-university-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .modern-card-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .modern-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modern-card-image-placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modern-placeholder-icon {
          width: 80px;
          height: 80px;
          color: rgba(255, 255, 255, 0.7);
        }

        .modern-university-card:hover .modern-card-image {
          transform: scale(1.1);
        }

        .modern-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .modern-university-card:hover .modern-image-overlay {
          opacity: 1;
        }

        .modern-accredited-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(16, 185, 129, 0.9);
          color: white;
          padding: 6px 12px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .modern-badge-icon {
          width: 16px;
          height: 16px;
        }

        .modern-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .modern-card-header-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }

        .modern-university-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .modern-rating-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #fffbeb;
          color: #d97706;
          padding: 4px 10px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          border: 1px solid #fcd34d;
          flex-shrink: 0;
        }

        .modern-star-icon {
          width: 14px;
          height: 14px;
        }

        .modern-location-section {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .modern-location-icon {
          width: 16px;
          height: 16px;
          color: #3b82f6;
        }

        .modern-description {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .modern-programs-section {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .modern-program-badge {
          background: #f1f5f9;
          color: #475569;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .modern-program-badge:hover {
          background: #e2e8f0;
          color: #1e293b;
        }

        .modern-more-badge {
          background: white;
          border: 1px dashed #cbd5e1;
          color: #94a3b8;
        }

        .modern-card-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .modern-btn-icon {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 768px) {
          .modern-card-image-wrapper {
            height: 200px;
          }

          .modern-card-content {
            padding: 20px;
          }

          .modern-university-name {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  )
}