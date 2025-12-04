'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function UniversityCard({ university }) {
  const handleApplyClick = () => {
    // Optional: Track analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'apply_click', {
        'university': university.slug,
        'university_name': university.name
      });
    }
  }

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card university-card h-100 shadow-sm border-0">
        <Link href={`/universities/${university.slug}`} className="stretched-link" aria-label={`View details for ${university.name}`} />
        <div className="position-relative">
          <div style={{height: '180px'}} className="bg-light d-flex align-items-center justify-content-center">
            <Image
              src={`/university-logos/${university.slug}.jpg`}
              alt={`${university.name} Logo`}
              width={300}
              height={150}
              style={{objectFit: 'contain', maxWidth: '280px', maxHeight: '140px'}}
              className="p-3"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwSDE1MFYxNTBIMTAwVjEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE1MCAxMDBIMjAwdjUwSDE1MFYxMDBaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDI1MFY1MEgyMDBWMTAwWiIgZmlsbD0iI0QxRDVEQiIvPgo8cGF0aCBkPSJNMjUwIDEwMEgzMDBWNTBIMjUwVjEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTMwMCAxMDBIMzUwVjE1MEgzMDBWMTAwWiIgZmlsbD0iI0QxRDVEQiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZCNzI4MCIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj57dW5pdmVyc2l0eS5uYW1lfTwvdGV4dD4KPC9zdmc+'
              }}
            />
          </div>
          {university.accredited && (
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-success">
                <i className="bi bi-check-circle me-1"></i>
                UGC Approved
              </span>
            </div>
          )}
        </div>

        <div className="card-body d-flex flex-column position-relative">
          <h5 className="card-title fw-bold text-primary mb-2">
            {university.name}
          </h5>

          <div className="d-flex align-items-center text-muted mb-3">
            <i className="bi bi-geo-alt me-2"></i>
            <small>{university.location}</small>
          </div>

          <div className="mb-3">
            <small className="text-muted d-block mb-2">Popular Programs:</small>
            <div className="d-flex flex-wrap gap-1">
              {university.programs.slice(0, 3).map((program) => (
                <span key={program} className="badge bg-light text-dark rounded-pill">
                  {program}
                </span>
              ))}
              {university.programs.length > 3 && (
                <span className="badge bg-secondary rounded-pill">
                  +{university.programs.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="d-grid gap-2 mt-auto position-relative">
            <a
              href={university.landing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-pill position-relative"
              style={{zIndex: 10}}
              onClick={handleApplyClick}
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              Apply — 3–5 min
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}