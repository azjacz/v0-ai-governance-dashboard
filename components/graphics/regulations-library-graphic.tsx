export function RegulationsLibraryGraphic() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 360 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
    >
      {/* Abstract background shapes */}
      <rect x="20" y="10" width="320" height="60" rx="4" fill="#F8F9FA" />

      {/* Abstract document representations */}
      <rect x="40" y="20" width="80" height="40" rx="3" fill="#00578E" />
      <rect x="130" y="20" width="80" height="40" rx="3" fill="#5255A5" />
      <rect x="220" y="20" width="80" height="40" rx="3" fill="#00A3D6" />

      {/* Abstract connecting elements */}
      <path d="M40 40 H320" stroke="#A8B400" strokeWidth="2" strokeDasharray="5 3" />

      {/* Abstract search/filter elements */}
      <circle cx="60" cy="40" r="10" fill="#4F8636" />
      <circle cx="170" cy="40" r="10" fill="#A8B400" />
      <circle cx="280" cy="40" r="10" fill="#4F8636" />

      {/* Abstract data lines */}
      <rect x="50" y="30" width="60" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="50" y="35" width="40" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="50" y="40" width="50" height="2" rx="1" fill="white" opacity="0.7" />

      <rect x="140" y="30" width="60" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="140" y="35" width="40" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="140" y="40" width="50" height="2" rx="1" fill="white" opacity="0.7" />

      <rect x="230" y="30" width="60" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="230" y="35" width="40" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="230" y="40" width="50" height="2" rx="1" fill="white" opacity="0.7" />
    </svg>
  )
}
