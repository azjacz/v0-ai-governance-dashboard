export function CompliancePortalGraphic() {
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
      {/* Abstract background */}
      <rect x="20" y="10" width="320" height="60" rx="4" fill="#F8F9FA" />

      {/* Abstract progress/compliance visualization */}
      <rect x="40" y="25" width="260" height="10" rx="5" fill="#E2E8F0" />
      <rect x="40" y="25" width="180" height="10" rx="5" fill="#00578E" />

      {/* Abstract compliance elements */}
      <rect x="40" y="45" width="60" height="20" rx="3" fill="#5255A5" />
      <rect x="110" y="45" width="60" height="20" rx="3" fill="#A8B400" />
      <rect x="180" y="45" width="60" height="20" rx="3" fill="#00A3D6" />
      <rect x="250" y="45" width="60" height="20" rx="3" fill="#4F8636" />

      {/* Abstract connecting elements */}
      <circle cx="70" cy="25" r="5" fill="#5255A5" />
      <circle cx="140" cy="25" r="5" fill="#A8B400" />
      <circle cx="210" cy="25" r="5" fill="#00A3D6" />
      <circle cx="280" cy="25" r="5" fill="#4F8636" />

      {/* Abstract data indicators */}
      <rect x="55" y="50" width="30" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="55" y="55" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="55" y="60" width="25" height="2" rx="1" fill="white" opacity="0.7" />

      <rect x="125" y="50" width="30" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="125" y="55" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="125" y="60" width="25" height="2" rx="1" fill="white" opacity="0.7" />

      <rect x="195" y="50" width="30" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="195" y="55" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="195" y="60" width="25" height="2" rx="1" fill="white" opacity="0.7" />

      <rect x="265" y="50" width="30" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="265" y="55" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="265" y="60" width="25" height="2" rx="1" fill="white" opacity="0.7" />
    </svg>
  )
}
