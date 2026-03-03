import React from "react";

interface ActionLinkProps {
  href: string;
  label: string;
  variant?: "purple" | "border-purple";
  external?: boolean;
  className?: string;
}

const ActionLink: React.FC<ActionLinkProps> = ({ 
  href, 
  label, 
  variant = "purple", 
  external = false,
  className = "" 
}) => {
  const baseClasses = `align-items-center btn btn-${variant} d-inline-flex fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white`;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={combinedClasses}
    >
      {label}
      <i className="bi bi-arrow-right ms-3 text-white"></i>
    </a>
  );
};

export default ActionLink;