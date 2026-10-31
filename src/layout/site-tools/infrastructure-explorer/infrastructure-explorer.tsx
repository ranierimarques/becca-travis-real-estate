import Link from 'next/link'
import { useState } from 'react'

type Project = {
  id: string
  name: string
  area: string
  stage: 'Study' | 'Design' | 'Construction'
  status: string
  updated: string
  scope: string
  buyerCheck: string
  sourceLabel: string
  sourceUrl: string
}

const projects: Project[] = [
  {
    id: 'martin-road',
    name: 'Martin Road Phase II',
    area: 'Southwest Huntsville',
    stage: 'Construction',
    status: 'The east side reopened in May 2026; west-side work remained underway.',
    updated: 'August 11, 2026',
    scope:
      'A 1.6-mile, five-lane improvement from Old Jim Williams Road to Laracy Drive, including a replacement bridge at Bradford Creek, bicycle lanes, and sidewalks.',
    buyerCheck:
      'Check the City’s current lane and detour notices, then drive the exact route at the time you expect to commute.',
    sourceLabel: 'City of Huntsville project page',
    sourceUrl:
      'https://www.huntsvilleal.gov/roadworkprojects/martin-road-improvements-phase-ii/',
  },
  {
    id: 'northern-bypass',
    name: 'Northern Bypass Phase I',
    area: 'North Huntsville',
    stage: 'Construction',
    status:
      'The City reported the project about 70% complete with roughly 100 working days remaining, subject to weather and site conditions.',
    updated: 'August 10, 2026',
    scope:
      'About 3.4 miles of new four-lane divided roadway from Pulaski Pike to North Memorial Parkway, plus about one mile of related Parkway improvements.',
    buyerCheck:
      'Treat the schedule as an estimate, confirm which segments are actually open, and compare today’s route with the future route.',
    sourceLabel: 'City of Huntsville project page',
    sourceUrl:
      'https://www.huntsvilleal.gov/roadworkprojects/northern-bypass-pulaski-pike-us-hwy-231431/',
  },
  {
    id: 'winchester-road',
    name: 'Winchester Road widening',
    area: 'Northeast Huntsville',
    stage: 'Design',
    status:
      'Right-of-way acquisition and utility coordination were continuing in 2026 before construction.',
    updated: 'June 29, 2026',
    scope:
      'The next 2.25-mile segment from Dominion Circle to Naugher Road is planned as a five-lane roadway; the longer vision connects a roughly nine-mile five-lane corridor.',
    buyerCheck:
      'Verify the current phase, access plans, and possible construction effects for the exact property rather than assuming the full corridor is funded or open.',
    sourceLabel: 'City of Huntsville project update',
    sourceUrl:
      'https://cityblog.huntsvilleal.gov/how-the-city-of-huntsville-is-working-toward-widening-winchester-road/',
  },
  {
    id: 'resolute-way',
    name: 'Resolute Way',
    area: 'Redstone Gateway / I-565',
    stage: 'Design',
    status:
      'Phase 1 engineering design is underway; the City said design was anticipated for completion in mid-2027.',
    updated: 'September 22, 2026',
    scope:
      'A proposed 2.1-mile roadway linking I-565 with Redstone Gateway near Gate 9. The City also announced a $10.8 million federal grant in September 2026.',
    buyerCheck:
      'Treat this as a funded design and future-roadway project, not as an open route or a guaranteed commute-time reduction.',
    sourceLabel: 'City of Huntsville grant update',
    sourceUrl:
      'https://www.huntsvilleal.gov/city-of-huntsville-receives-federal-grant-for-resolute-way-at-redstone-arsenal/',
  },
  {
    id: 'arsenal-east',
    name: 'Arsenal East Connector',
    area: 'I-565 / Patton Road',
    stage: 'Study',
    status:
      'A corridor study was underway; no final alignment or construction date was listed.',
    updated: 'August 10, 2026',
    scope:
      'A study for an approximately two-mile, four-lane divided connection from I-565 at Bob Wallace Avenue to Patton Road.',
    buyerCheck:
      'Do not price a home or choose a commute around a conceptual alignment. Verify later design, funding, approvals, and property-level effects.',
    sourceLabel: 'City of Huntsville project page',
    sourceUrl: 'https://www.huntsvilleal.gov/roadworkprojects/arsenal-east-connector/',
  },
]

export function InfrastructureExplorer() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const activeProject = projects.find(project => project.id === activeId) || projects[0]

  return (
    <section id="infrastructure-explorer" className="infrastructure-section">
      <div className="section-intro">
        <p className="eyebrow">Official project tracker</p>
        <h2>See what is planned, designed, and actually under construction.</h2>
        <p>
          Explore five Huntsville transportation projects using dated City sources, then
          turn the public update into address-level questions for a real home search.
        </p>
      </div>

      <div className="explorer">
        <aside className="project-rail" aria-label="Choose an infrastructure project">
          <div className="rail-heading">
            <span>Projects</span>
            <small>5 official sources</small>
          </div>
          <div className="desktop-projects">
            {projects.map(project => (
              <button
                key={project.id}
                type="button"
                className={project.id === activeProject.id ? 'active' : ''}
                aria-pressed={project.id === activeProject.id}
                onClick={() => setActiveId(project.id)}
              >
                <span>{project.name}</span>
                <small>{project.area}</small>
              </button>
            ))}
          </div>
          <label className="mobile-projects">
            <span>Choose a project</span>
            <select value={activeId} onChange={event => setActiveId(event.target.value)}>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </label>
          <p className="rail-note">Status reviewed October 30, 2026.</p>
        </aside>

        <div className="project-canvas" aria-live="polite">
          <div className="project-heading">
            <div>
              <div className="project-meta">
                <span className={`stage stage-${activeProject.stage.toLowerCase()}`}>
                  {activeProject.stage}
                </span>
                <span>Updated {activeProject.updated}</span>
              </div>
              <h3>{activeProject.name}</h3>
              <p>{activeProject.area}</p>
            </div>
            <svg viewBox="0 0 96 72" aria-hidden="true">
              <path d="M8 58C24 52 31 17 47 18c14 1 18 31 40 18" />
              <circle cx="8" cy="58" r="5" />
              <circle cx="87" cy="36" r="5" />
              <path className="dash" d="M13 58C29 52 33 27 47 27c13 0 18 22 35 13" />
            </svg>
          </div>

          <div className="status-card">
            <span>Latest official status</span>
            <strong>{activeProject.status}</strong>
          </div>

          <div className="detail-grid">
            <article>
              <span className="detail-number">01</span>
              <div>
                <h4>What the project covers</h4>
                <p>{activeProject.scope}</p>
              </div>
            </article>
            <article>
              <span className="detail-number">02</span>
              <div>
                <h4>What a buyer should verify</h4>
                <p>{activeProject.buyerCheck}</p>
              </div>
            </article>
          </div>

          <div className="actions">
            <a href={activeProject.sourceUrl} target="_blank" rel="noreferrer">
              Read the {activeProject.sourceLabel} ↗
            </a>
            <Link className="search-link" href="/homes#buyer-brief">
              Build an address-specific search brief
            </Link>
          </div>

          <p className="project-disclosure">
            Public project scopes and schedules can change. A transportation project does
            not establish future home value, commute time, school assignment, traffic,
            noise, access, or construction effects for a particular property.
          </p>
        </div>
      </div>

      <style jsx>{`
        .infrastructure-section {
          scroll-margin-top: 76px;
          padding: 82px max(24px, calc((100vw - 1160px) / 2));
          color: #332b30;
          background: #fffaf7;
        }
        .section-intro {
          max-width: 790px;
          margin: 0 auto 34px;
          text-align: center;
        }
        .eyebrow {
          margin: 0 0 10px;
          color: #9d446e;
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          color: #58243c;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }
        .section-intro > p:last-child {
          max-width: 700px;
          margin: 16px auto 0;
          color: #665c62;
          font-size: 16px;
          line-height: 1.7;
        }
        .explorer {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          overflow: hidden;
          background: #fff;
          border: 1px solid #e3d7dc;
          border-radius: 18px;
          box-shadow: 0 18px 52px rgba(55, 29, 41, 0.08);
        }
        .project-rail {
          padding: 26px 18px 20px;
          background: #58243c;
        }
        .rail-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
          padding: 0 8px 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }
        .rail-heading span {
          color: #fff;
          font-size: 14px;
          font-weight: 750;
        }
        .rail-heading small {
          color: #d9beca;
          font-size: 10px;
        }
        .desktop-projects {
          display: grid;
          gap: 6px;
          margin-top: 14px;
        }
        .desktop-projects button {
          display: grid;
          gap: 4px;
          width: 100%;
          padding: 13px 12px;
          color: #fff;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 9px;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: background 150ms ease, border-color 150ms ease;
        }
        .desktop-projects button:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .desktop-projects button:focus-visible {
          outline: 3px solid rgba(245, 214, 201, 0.55);
          outline-offset: 2px;
        }
        .desktop-projects button.active {
          color: #58243c;
          background: #f5d6c9;
          border-color: #f5d6c9;
        }
        .desktop-projects button span {
          font-size: 12px;
          font-weight: 750;
          line-height: 1.35;
        }
        .desktop-projects button small {
          color: #d9beca;
          font-size: 10px;
          line-height: 1.4;
        }
        .desktop-projects button.active small {
          color: #7d5265;
        }
        .mobile-projects {
          display: none;
        }
        .rail-note {
          margin: 18px 8px 0;
          color: #cdb1bd;
          font-size: 9px;
          line-height: 1.5;
        }
        .project-canvas {
          min-width: 0;
          padding: 34px;
        }
        .project-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding-bottom: 25px;
          border-bottom: 1px solid #eae1e5;
        }
        .project-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 12px;
          color: #796d73;
          font-size: 10px;
        }
        .stage {
          padding: 5px 8px;
          color: #fff;
          background: #9d446e;
          border-radius: 999px;
          font-weight: 750;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .stage-study {
          color: #6a3425;
          background: #f5d6c9;
        }
        .stage-design {
          color: #5f2a46;
          background: #f1dfe7;
        }
        .project-heading h3 {
          margin: 0;
          color: #422f39;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.12;
        }
        .project-heading p {
          margin: 7px 0 0;
          color: #756a70;
          font-size: 13px;
        }
        .project-heading svg {
          flex: 0 0 96px;
          width: 96px;
          height: 72px;
          overflow: visible;
        }
        .project-heading path {
          fill: none;
          stroke: #d5a48f;
          stroke-linecap: round;
          stroke-width: 4;
        }
        .project-heading path.dash {
          stroke: #9d446e;
          stroke-dasharray: 4 7;
          stroke-width: 2;
        }
        .project-heading circle {
          fill: #9d446e;
        }
        .status-card {
          margin-top: 23px;
          padding: 20px 22px;
          background: #f8eff3;
          border-left: 3px solid #9d446e;
        }
        .status-card span {
          display: block;
          margin-bottom: 7px;
          color: #85546b;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .status-card strong {
          color: #4c3842;
          font-size: 15px;
          font-weight: 650;
          line-height: 1.55;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 17px;
        }
        .detail-grid article {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 13px;
          padding: 19px;
          background: #fbf8f9;
          border: 1px solid #ece3e7;
          border-radius: 11px;
        }
        .detail-number {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 750;
        }
        h4 {
          margin: 3px 0 0;
          color: #4b3440;
          font-size: 14px;
          font-weight: 750;
        }
        .detail-grid p {
          margin: 8px 0 0;
          color: #6f6469;
          font-size: 12px;
          line-height: 1.6;
        }
        .actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 21px;
        }
        .actions a {
          color: #6d294c;
          font-size: 12px;
          font-weight: 750;
          text-underline-offset: 4px;
        }
        .actions :global(.search-link) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 43px;
          padding: 0 16px;
          color: #fff;
          background: #9d446e;
          border-radius: 999px;
          text-decoration: none;
        }
        .actions :global(.search-link:hover) {
          background: #58243c;
        }
        .actions a:focus-visible {
          outline: 3px solid rgba(216, 153, 126, 0.5);
          outline-offset: 3px;
        }
        .project-disclosure {
          margin: 19px 0 0;
          padding-top: 17px;
          color: #7a6f74;
          border-top: 1px solid #eae1e5;
          font-size: 10px;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .explorer {
            grid-template-columns: 1fr;
          }
          .project-rail {
            padding: 20px;
          }
          .desktop-projects {
            display: none;
          }
          .mobile-projects {
            display: grid;
            gap: 8px;
            margin-top: 15px;
            color: #f8edf1;
            font-size: 11px;
            font-weight: 700;
          }
          .mobile-projects select {
            width: 100%;
            min-height: 44px;
            padding: 8px 11px;
            color: #342a2f;
            background: #fff;
            border: 0;
            border-radius: 8px;
            font: inherit;
            font-size: 13px;
          }
          .rail-note {
            margin-left: 0;
          }
        }
        @media (max-width: 640px) {
          .infrastructure-section {
            padding: 60px 18px;
          }
          .explorer {
            border-radius: 13px;
          }
          .project-canvas {
            padding: 22px 18px;
          }
          .project-heading svg {
            display: none;
          }
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .actions {
            align-items: flex-start;
            flex-direction: column;
          }
          .actions :global(.search-link) {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
