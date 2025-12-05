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
      <div className="card-image-section">
        {image_url ? (
          <img
            src={image_url}
            className="card-image"
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="card-image-placeholder">
            <BuildingLibraryIcon className="placeholder-icon" />
          </div>
        )}
        <div className="card-overlay"></div>
        {accredited && (
          <div className="accredited-badge">
            <CheckBadgeIcon className="badge-icon" />
            <span>UGC Approved</span>
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="university-name">{name}</h3>
          {rating && (
            <div className="rating-badge">
              <StarIcon className="star-icon" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        <div className="location-info">
          <MapPinIcon className="location-icon" />
          <span>{location}</span>
        </div>

        <p className="university-description">{description}</p>

        <div className="programs-section">
          {programs && programs.slice(0, 3).map((program, index) => (
            <span key={index} className="program-tag">
              {program}
            </span>
          ))}
          {programs && programs.length > 3 && (
            <span className="program-tag more-tag">
              +{programs.length - 3}
            </span>
          )}
        </div>

        <div className="card-actions">
          {landing && (
            <a
              href={landing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <AcademicCapIcon className="btn-icon" />
              Apply Now
            </a>
          )}
          <Link
            href={`/universities/${slug}`}
            className="btn btn-outline"
          >
            View Details
            <ArrowRightIcon className="btn-icon" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .university-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .university-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.2);
        }

        .card-image-section {
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

        .university-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-image-placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .placeholder-icon {
          width: 80px;
          height: 80px;
          color: rgba(255, 255, 255, 0.7);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .university-card:hover .card-overlay {
          opacity: 1;
        }

        .accredited-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(16, 185, 129, 0.95);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .badge-icon {
          width: 16px;
          height: 16px;
        }

        .card-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .university-name {
          font-size: 1.4rem;
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
          font-size: 0.85rem;
          box-shadow: 0 4px 8px rgba(251, 191, 36, 0.3);
          flex-shrink: 0;
        }

        .star-icon {
          width: 14px;
          height: 14px;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .location-icon {
          width: 16px;
          height: 16px;
          color: #667eea;
        }

        .university-description {
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

        .programs-section {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .program-tag {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #475569;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(102, 126, 234, 0.1);
          transition: all 0.2s ease;
        }

        .program-tag:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
        }

        .more-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border: 1px solid rgba(102, 126, 234, 0.2);
          font-style: italic;
        }

        .more-tag:hover {
          background: rgba(102, 126, 234, 0.2);
        }

        .card-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 16px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          cursor: pointer;
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: #667eea;
          border-color: #667eea;
        }

        .btn-outline:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .card-image-section {
            height: 200px;
          }

          .card-content {
            padding: 20px;
          }

          .university-name {
            font-size: 1.2rem;
          }

          .university-description {
            font-size: 0.9rem;
            -webkit-line-clamp: 2;
          }

          .card-actions {
            gap: 10px;
          }

          .btn {
            padding: 12px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .accredited-badge {
            top: 16px;
            right: 16px;
            padding: 6px 12px;
            font-size: 0.75rem;
          }

          .badge-icon {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </div>
  )
}