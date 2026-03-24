import React from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    tagline: string;
    description: string;
    teamName: string;
    college: string;
    problemStatement: string;
    github: string;
    video: string;
    screenshots: string[];
    track: string;
  };
  award?: string;
}

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, award }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const thumbnail = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots[0] 
    : "https://via.placeholder.com/600x400/5c0023/e8dbcc?text=No+Screenshot";

  const renderDescription = (text: string, limit: number = 200) => {
    if (!text) return null;
    if (text.length <= limit || isExpanded) return text;
    return text.substring(0, limit) + "...";
  };

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''} ${award ? 'is-winner' : ''}`}>
      <div className="project-card-image">
        <img src={thumbnail} alt={project.title} loading="lazy" />
        {project.track && <span className="project-track-badge">{project.track}</span>}
        {award && <div className="project-award-badge"> {award}</div>}
      </div>
      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-team">
          <span className="team-label">Team:</span> {project.teamName}
        </p>
        <p className="project-college">{project.college}</p>
        
        <div className="project-description-container">
            <p className="project-tagline">{renderDescription(project.tagline || project.description, 150)}</p>
        </div>

        {project.problemStatement && (
          <div className="project-problem">
            <strong>Problem:</strong> {renderDescription(project.problemStatement, 150)}
            {(project.problemStatement.length > 150 || (project.tagline && project.tagline.length > 150)) && (
              <button 
                className="read-more-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        )}

        {!project.problemStatement && (project.tagline || project.description) && (project.tagline || project.description).length > 150 && (
          <button 
            className="read-more-btn" 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github" title="View Source Code">
              <GithubIcon />
              <span>Source</span>
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link video" title="Watch Demo Video">
              <VideoIcon />
              <span>Demo</span>
            </a>
          )}
          {/* <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="project-link details" title="View Details">
            <ExternalLinkIcon />
            <span>More</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
