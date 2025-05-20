"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDown, ChevronUp, Globe, Tag, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

// Sample data for regulations
const regulations = [
  {
    id: 1,
    name: "EU AI Act",
    description: "Comprehensive regulation for artificial intelligence systems in the European Union.",
    region: "European Union",
    effectiveDate: new Date("2025-07-01"),
    themes: ["High-Risk Systems", "Transparency", "Data Quality"],
    riskFactors: ["Fundamental Rights", "Safety"],
    algorithmTypes: ["Machine Learning", "Neural Networks"],
    dataTypes: ["Personal Data", "Biometric Data"],
    summary:
      "The EU AI Act establishes a comprehensive regulatory framework for AI systems based on their risk level. It imposes strict requirements for high-risk AI systems, including robust risk management, high-quality datasets, and human oversight.",
  },
  {
    id: 2,
    name: "US Executive Order on AI",
    description: "Executive order establishing guidelines for the development and use of AI in the United States.",
    region: "United States",
    effectiveDate: new Date("2025-03-15"),
    themes: ["Safety", "Security", "Privacy"],
    riskFactors: ["National Security", "Privacy"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Government Data", "Personal Data"],
    summary:
      "The Executive Order on Safe, Secure, and Trustworthy AI directs federal agencies to develop standards and guidelines for AI systems, with a focus on safety, security, and privacy. It establishes requirements for AI risk management and transparency.",
  },
  {
    id: 3,
    name: "UK AI Safety Framework",
    description: "Framework for ensuring the safety of AI systems in the United Kingdom.",
    region: "United Kingdom",
    effectiveDate: new Date("2025-05-01"),
    themes: ["Safety", "Accountability", "Transparency"],
    riskFactors: ["Public Safety", "Discrimination"],
    algorithmTypes: ["Foundation Models", "Autonomous Systems"],
    dataTypes: ["Personal Data", "Public Data"],
    summary:
      "The UK AI Safety Framework establishes principles and requirements for ensuring the safety of AI systems. It focuses on accountability, transparency, and risk management, with specific provisions for foundation models and autonomous systems.",
  },
  {
    id: 4,
    name: "China AI Governance Regulations",
    description: "Regulations governing the development and deployment of AI systems in China.",
    region: "China",
    effectiveDate: new Date("2025-01-01"),
    themes: ["National Security", "Ethics", "Data Governance"],
    riskFactors: ["Social Stability", "Economic Impact"],
    algorithmTypes: ["Recommendation Systems", "Generative AI"],
    dataTypes: ["Personal Data", "Critical Infrastructure Data"],
    summary:
      "China's AI Governance Regulations establish a comprehensive framework for AI systems, with a focus on national security, ethics, and data governance. They impose strict requirements for AI systems used in critical infrastructure and public services.",
  },
  {
    id: 5,
    name: "Canada Artificial Intelligence and Data Act",
    description: "Legislation governing AI systems and data use in Canada.",
    region: "Canada",
    effectiveDate: new Date("2025-09-01"),
    themes: ["Transparency", "Fairness", "Privacy"],
    riskFactors: ["Discrimination", "Privacy"],
    algorithmTypes: ["Automated Decision Systems", "Machine Learning"],
    dataTypes: ["Personal Data", "Sensitive Data"],
    summary:
      "The Canadian Artificial Intelligence and Data Act establishes requirements for the responsible development and deployment of AI systems. It focuses on transparency, fairness, and privacy, with specific provisions for automated decision systems.",
  },
  {
    id: 6,
    name: "Singapore AI Governance Framework",
    description: "Framework for the responsible use of AI in Singapore.",
    region: "Singapore",
    effectiveDate: new Date("2025-04-15"),
    themes: ["Ethics", "Governance", "Human-Centricity"],
    riskFactors: ["Fairness", "Accountability"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["All Data Types"],
    summary:
      "Singapore's AI Governance Framework provides guidance for the responsible development and deployment of AI systems. It emphasizes ethics, governance, and human-centricity, with a focus on fairness and accountability.",
  },
  {
    id: 7,
    name: "California Automated Decision Systems Accountability Act",
    description: "State law regulating the use of automated decision systems in California.",
    region: "California, USA",
    effectiveDate: new Date("2026-01-01"),
    themes: ["Algorithmic Accountability", "Transparency", "Non-discrimination"],
    riskFactors: ["Discrimination", "Privacy", "Consumer Protection"],
    algorithmTypes: ["Automated Decision Systems", "Machine Learning"],
    dataTypes: ["Personal Data", "Protected Characteristics"],
    summary:
      "The California Automated Decision Systems Accountability Act requires businesses using automated decision systems to conduct impact assessments, ensure transparency, and implement safeguards against discrimination. It applies to high-risk domains including employment, housing, education, and financial services.",
  },
  {
    id: 8,
    name: "New York City Algorithmic Bias Law",
    description: "Local law addressing bias in automated employment decision tools in NYC.",
    region: "New York City, USA",
    effectiveDate: new Date("2025-04-15"),
    themes: ["Employment", "Bias Auditing", "Transparency"],
    riskFactors: ["Discrimination", "Employment Fairness"],
    algorithmTypes: ["Automated Employment Decision Tools"],
    dataTypes: ["Employment Data", "Protected Characteristics"],
    summary:
      "The NYC Algorithmic Bias Law requires employers to conduct annual bias audits of automated employment decision tools and to disclose to candidates when such tools are used in the hiring process. It aims to prevent discrimination and promote fairness in employment decisions.",
  },
  {
    id: 9,
    name: "Japan AI Governance Guidelines",
    description: "Guidelines for the ethical development and use of AI systems in Japan.",
    region: "Japan",
    effectiveDate: new Date("2025-06-30"),
    themes: ["Ethics", "Human-Centricity", "Innovation"],
    riskFactors: ["Privacy", "Safety", "Fairness"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Industrial Data"],
    summary:
      "Japan's AI Governance Guidelines establish principles for the ethical development and use of AI systems. They emphasize human-centricity, transparency, and fairness while promoting innovation and international harmonization of AI governance approaches.",
  },
  {
    id: 10,
    name: "Australia AI Ethics Framework",
    description: "Voluntary framework for the ethical design and use of AI in Australia.",
    region: "Australia",
    effectiveDate: new Date("2024-12-01"),
    themes: ["Ethics", "Human-Centered Values", "Fairness"],
    riskFactors: ["Privacy", "Autonomy", "Fairness"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["All Data Types"],
    summary:
      "Australia's AI Ethics Framework provides principles and guidance for organizations developing and implementing AI systems. It emphasizes human, social, and environmental wellbeing, human-centered values, fairness, privacy protection, reliability, and transparency.",
  },
  {
    id: 11,
    name: "Illinois Artificial Intelligence Video Interview Act",
    description: "State law regulating the use of AI in employment video interviews.",
    region: "Illinois, USA",
    effectiveDate: new Date("2024-01-01"),
    themes: ["Employment", "Transparency", "Consent"],
    riskFactors: ["Privacy", "Discrimination"],
    algorithmTypes: ["Video Analysis", "Natural Language Processing"],
    dataTypes: ["Biometric Data", "Employment Data"],
    summary:
      "The Illinois Artificial Intelligence Video Interview Act requires employers to notify candidates when AI is used to analyze video interviews, explain how the AI works, obtain consent, and limit sharing of the video. It aims to protect job applicants' privacy and rights in the hiring process.",
  },
  {
    id: 12,
    name: "Brazil AI Bill (PL 2338/2023)",
    description: "Proposed legislation establishing a legal framework for AI in Brazil.",
    region: "Brazil",
    effectiveDate: new Date("2026-03-01"),
    themes: ["Rights Protection", "Innovation", "Transparency"],
    riskFactors: ["Discrimination", "Privacy", "Autonomy"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Public Data"],
    summary:
      "Brazil's AI Bill aims to establish a comprehensive legal framework for artificial intelligence systems. It focuses on protecting fundamental rights, promoting innovation, ensuring transparency, and establishing governance mechanisms for high-risk AI applications.",
  },
  {
    id: 13,
    name: "South Korea AI Ethics Standards",
    description: "Standards for ethical AI development and deployment in South Korea.",
    region: "South Korea",
    effectiveDate: new Date("2025-05-15"),
    themes: ["Ethics", "Human Rights", "Safety"],
    riskFactors: ["Privacy", "Discrimination", "Safety"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Industrial Data"],
    summary:
      "South Korea's AI Ethics Standards establish principles and requirements for the ethical development and deployment of AI systems. They emphasize respect for human autonomy, prevention of harm, fairness, explainability, and data governance.",
  },
  {
    id: 14,
    name: "Washington State Facial Recognition Law",
    description: "State law regulating government use of facial recognition technology.",
    region: "Washington, USA",
    effectiveDate: new Date("2024-07-01"),
    themes: ["Facial Recognition", "Government Use", "Civil Liberties"],
    riskFactors: ["Privacy", "Surveillance", "Discrimination"],
    algorithmTypes: ["Facial Recognition"],
    dataTypes: ["Biometric Data", "Government Data"],
    summary:
      "Washington's Facial Recognition Law restricts government agencies' use of facial recognition technology, requiring a warrant for ongoing surveillance, testing for accuracy and bias, public disclosure, and meaningful human review of decisions. It aims to protect civil liberties while allowing limited beneficial uses.",
  },
  {
    id: 15,
    name: "India AI Safety and Ethics Policy",
    description: "Proposed national policy for AI safety and ethics in India.",
    region: "India",
    effectiveDate: new Date("2026-01-15"),
    themes: ["Safety", "Ethics", "Inclusive Growth"],
    riskFactors: ["Digital Divide", "Privacy", "Misuse"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Government Data", "Industrial Data"],
    summary:
      "India's AI Safety and Ethics Policy aims to establish guidelines for responsible AI development and use. It focuses on promoting inclusive growth, ensuring safety and reliability, protecting privacy and security, and establishing governance mechanisms for high-risk AI applications.",
  },
  {
    id: 16,
    name: "Massachusetts Algorithmic Decision Tools Regulation",
    description: "Proposed state regulation of algorithmic decision-making systems.",
    region: "Massachusetts, USA",
    effectiveDate: new Date("2026-06-30"),
    themes: ["Algorithmic Accountability", "Consumer Protection", "Transparency"],
    riskFactors: ["Discrimination", "Privacy", "Consumer Harm"],
    algorithmTypes: ["Automated Decision Systems", "Scoring Systems"],
    dataTypes: ["Consumer Data", "Financial Data", "Protected Characteristics"],
    summary:
      "The Massachusetts Algorithmic Decision Tools Regulation would require businesses using algorithmic decision systems in consumer contexts to conduct impact assessments, ensure transparency, and implement safeguards against discrimination and consumer harm.",
  },
  {
    id: 17,
    name: "UAE National AI Strategy 2031 Regulatory Framework",
    description: "Regulatory framework supporting UAE's national AI strategy.",
    region: "United Arab Emirates",
    effectiveDate: new Date("2025-12-01"),
    themes: ["Innovation", "Governance", "Ethics"],
    riskFactors: ["Privacy", "Security", "Economic Impact"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Government Data", "Commercial Data"],
    summary:
      "The UAE's AI Regulatory Framework establishes guidelines and requirements for AI systems as part of the National AI Strategy 2031. It aims to position the UAE as a global leader in AI while ensuring ethical use, data protection, and responsible innovation.",
  },
  {
    id: 18,
    name: "Colorado AI Transparency in Public Services Act",
    description: "State law requiring transparency in government use of AI systems.",
    region: "Colorado, USA",
    effectiveDate: new Date("2025-09-01"),
    themes: ["Government Use", "Transparency", "Accountability"],
    riskFactors: ["Discrimination", "Due Process", "Privacy"],
    algorithmTypes: ["Automated Decision Systems", "Predictive Analytics"],
    dataTypes: ["Government Data", "Personal Data"],
    summary:
      "The Colorado AI Transparency in Public Services Act requires state agencies to inventory AI systems, conduct impact assessments, provide explanations for automated decisions, and establish appeal processes. It aims to ensure transparent and accountable use of AI in public services.",
  },
  {
    id: 19,
    name: "Nordic AI Governance Initiative",
    description: "Joint framework for AI governance across Nordic countries.",
    region: "Nordic Countries",
    effectiveDate: new Date("2025-08-15"),
    themes: ["Regional Cooperation", "Human-Centered AI", "Trust"],
    riskFactors: ["Privacy", "Discrimination", "Autonomy"],
    algorithmTypes: ["All AI Systems"],
    dataTypes: ["Personal Data", "Public Sector Data"],
    summary:
      "The Nordic AI Governance Initiative establishes a joint framework for AI governance across Denmark, Finland, Iceland, Norway, and Sweden. It emphasizes human-centered values, transparency, accountability, and regional cooperation to ensure trustworthy AI development and use.",
  },
  {
    id: 20,
    name: "Virginia Consumer Data Protection Act AI Provisions",
    description: "State law provisions addressing automated profiling and decision systems.",
    region: "Virginia, USA",
    effectiveDate: new Date("2025-01-01"),
    themes: ["Consumer Protection", "Profiling", "Opt-Out Rights"],
    riskFactors: ["Privacy", "Discrimination", "Consumer Harm"],
    algorithmTypes: ["Profiling Systems", "Automated Decision Systems"],
    dataTypes: ["Consumer Data", "Personal Data"],
    summary:
      "The Virginia Consumer Data Protection Act includes provisions giving consumers the right to opt out of profiling in furtherance of decisions that produce legal or similarly significant effects. It requires data controllers to conduct and document data protection assessments for profiling activities.",
  },
  {
    id: 21,
    name: "New Zealand Algorithm Charter",
    description: "Government commitment to transparent and accountable use of algorithms.",
    region: "New Zealand",
    effectiveDate: new Date("2024-02-01"),
    themes: ["Government Use", "Transparency", "Human Oversight"],
    riskFactors: ["Privacy", "Bias", "Fairness"],
    algorithmTypes: ["Government Algorithms", "Automated Decision Systems"],
    dataTypes: ["Government Data", "Personal Data"],
    summary:
      "New Zealand's Algorithm Charter commits government agencies to transparency and accountability in their use of algorithms. It requires agencies to maintain human oversight, identify and address bias, publish information about how decisions are made, and embed a Te Ao Māori perspective in algorithm development and use.",
  },
]

// Mock data for theme relevance based on past compliance submissions
const themeRelevanceData = {
  Transparency: 85,
  "Data Quality": 78,
  Privacy: 72,
  Safety: 65,
  Ethics: 60,
  "Algorithmic Accountability": 58,
  "Bias Auditing": 55,
  "Non-discrimination": 52,
  "Human-Centricity": 48,
  Governance: 45,
  Fairness: 42,
  "High-Risk Systems": 40,
  Security: 38,
  Accountability: 35,
  "Human Oversight": 32,
  "Consumer Protection": 30,
  Employment: 28,
  "Government Use": 25,
  Profiling: 22,
  "Opt-Out Rights": 20,
  "National Security": 18,
  "Human Rights": 15,
  "Civil Liberties": 12,
  "Regional Cooperation": 10,
  "Human-Centered Values": 8,
  "Inclusive Growth": 5,
  Innovation: 5,
  "Rights Protection": 5,
  "Facial Recognition": 5,
  Consent: 5,
  Trust: 5,
}

// Helper function to count occurrences of items in regulations
const countItemOccurrences = (items: string[][]) => {
  const counts: Record<string, number> = {}
  items.flat().forEach((item) => {
    counts[item] = (counts[item] || 0) + 1
  })
  return counts
}

// Helper function to sort items by frequency
const sortByFrequency = (items: string[], counts: Record<string, number>) => {
  return [...items].sort((a, b) => counts[b] - counts[a])
}

export default function RegulationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedThemes, setSelectedThemes] = useState<string[]>([])
  const [selectedRiskFactors, setSelectedRiskFactors] = useState<string[]>([])
  const [selectedAlgorithmTypes, setSelectedAlgorithmTypes] = useState<string[]>([])
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")

  // Extract unique values for filters
  const regions = Array.from(new Set(regulations.map((r) => r.region)))

  // Extract themes and sort by relevance to past submissions
  const themes = Array.from(new Set(regulations.flatMap((r) => r.themes))).sort((a, b) => {
    const relevanceA = themeRelevanceData[a] || 0
    const relevanceB = themeRelevanceData[b] || 0
    return relevanceB - relevanceA // Sort in descending order of relevance
  })

  // Extract and sort risk factors by frequency
  const riskFactorsAll = regulations.map((r) => r.riskFactors)
  const riskFactorCounts = countItemOccurrences(riskFactorsAll)
  const riskFactors = sortByFrequency(Array.from(new Set(riskFactorsAll.flat())), riskFactorCounts)

  // Extract and sort algorithm types by frequency
  const algorithmTypesAll = regulations.map((r) => r.algorithmTypes)
  const algorithmTypeCounts = countItemOccurrences(algorithmTypesAll)
  const algorithmTypes = sortByFrequency(Array.from(new Set(algorithmTypesAll.flat())), algorithmTypeCounts)

  // Extract and sort data types by frequency
  const dataTypesAll = regulations.map((r) => r.dataTypes)
  const dataTypeCounts = countItemOccurrences(dataTypesAll)
  const dataTypes = sortByFrequency(Array.from(new Set(dataTypesAll.flat())), dataTypeCounts)

  // Filter regulations based on selected filters
  const filteredRegulations = regulations.filter((regulation) => {
    // Search term filter
    if (
      searchTerm &&
      !regulation.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !regulation.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Region filter
    if (selectedRegion) {
      // Special case for United States to include state-level regulations
      if (selectedRegion === "United States") {
        if (regulation.region !== "United States" && !regulation.region.includes("USA")) {
          return false
        }
      } else if (regulation.region !== selectedRegion) {
        return false
      }
    }

    // Date filter
    if (selectedDate && regulation.effectiveDate.getTime() !== selectedDate.getTime()) {
      return false
    }

    // Themes filter
    if (selectedThemes.length > 0 && !selectedThemes.some((theme) => regulation.themes.includes(theme))) {
      return false
    }

    // Risk factors filter
    if (
      selectedRiskFactors.length > 0 &&
      !selectedRiskFactors.some((factor) => regulation.riskFactors.includes(factor))
    ) {
      return false
    }

    // Algorithm types filter
    if (
      selectedAlgorithmTypes.length > 0 &&
      !selectedAlgorithmTypes.some((type) => regulation.algorithmTypes.includes(type))
    ) {
      return false
    }

    // Data types filter
    if (selectedDataTypes.length > 0 && !selectedDataTypes.some((type) => regulation.dataTypes.includes(type))) {
      return false
    }

    return true
  })

  // Sort regulations
  const sortedRegulations = [...filteredRegulations].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "region":
        return a.region.localeCompare(b.region)
      case "date":
        return a.effectiveDate.getTime() - b.effectiveDate.getTime()
      default:
        return 0
    }
  })

  // Toggle theme selection
  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) => (prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]))
  }

  // Toggle risk factor selection
  const toggleRiskFactor = (factor: string) => {
    setSelectedRiskFactors((prev) => (prev.includes(factor) ? prev.filter((f) => f !== factor) : [...prev, factor]))
  }

  // Toggle algorithm type selection
  const toggleAlgorithmType = (type: string) => {
    setSelectedAlgorithmTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Toggle data type selection
  const toggleDataType = (type: string) => {
    setSelectedDataTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedRegion(null)
    setSelectedDate(null)
    setSelectedThemes([])
    setSelectedRiskFactors([])
    setSelectedAlgorithmTypes([])
    setSelectedDataTypes([])
    setSortBy("name")
  }

  // Expanded regulation component
  const ExpandedRegulation = ({ regulation }: { regulation: (typeof regulations)[0] }) => {
    return (
      <div className="space-y-5">
        <div>
          <div className="text-sm font-medium mb-1">Summary</div>
          <div className="text-sm text-muted-foreground">{regulation.summary}</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium mb-1">Themes</div>
          <div className="flex flex-wrap gap-2">
            {regulation.themes.map((theme) => (
              <Badge key={theme} variant="secondary">
                {theme}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-medium mb-1">Risk Factors</div>
            <div className="flex flex-wrap gap-1">
              {regulation.riskFactors.map((factor) => (
                <Badge key={factor} variant="outline" className="text-xs">
                  {factor}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium mb-1">Algorithm Types</div>
            <div className="flex flex-wrap gap-1">
              {regulation.algorithmTypes.map((type) => (
                <Badge key={type} variant="outline" className="text-xs">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium mb-1">Data Types</div>
            <div className="flex flex-wrap gap-1">
              {regulation.dataTypes.map((type) => (
                <Badge key={type} variant="outline" className="text-xs">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Expand button component
  const ExpandButton = ({ regulation }: { regulation: (typeof regulations)[0] }) => {
    const [expanded, setExpanded] = useState(false)

    return (
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`regulation-details-${regulation.id}`}
          className="ml-auto"
        >
          {expanded ? (
            <>
              <span className="sr-only">Collapse</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Details</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        {expanded && (
          <div id={`regulation-details-${regulation.id}`} className="mt-4 border-t pt-4 w-full">
            <ExpandedRegulation regulation={regulation} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Governance Regulations</h1>
          <p className="text-muted-foreground">
            Browse and filter AI governance regulations by region, date, and themes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="region">Sort by Region</SelectItem>
              <SelectItem value="date">Sort by Date</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        {/* Filters */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Filters</h2>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Clear
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input
                id="search"
                placeholder="Search regulations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <Label>Region</Label>
              </div>
              <Select value={selectedRegion || ""} onValueChange={(value) => setSelectedRegion(value || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <Label>Effective Date</Label>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                </PopoverContent>
              </Popover>
              {selectedDate && (
                <Button variant="ghost" size="sm" className="w-full" onClick={() => setSelectedDate(null)}>
                  Clear Date
                </Button>
              )}
            </div>
            <Separator />
            <div className="space-y-2">
              <Tabs defaultValue="risk">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="risk">Risk</TabsTrigger>
                  <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
                  <TabsTrigger value="data">Data</TabsTrigger>
                </TabsList>
                <TabsContent value="risk" className="space-y-2 pt-2">
                  {riskFactors.map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <Checkbox
                        id={`risk-${factor}`}
                        checked={selectedRiskFactors.includes(factor)}
                        onCheckedChange={() => toggleRiskFactor(factor)}
                      />
                      <label
                        htmlFor={`risk-${factor}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {factor}
                      </label>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="algorithm" className="space-y-2 pt-2">
                  {algorithmTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={`algorithm-${type}`}
                        checked={selectedAlgorithmTypes.includes(type)}
                        onCheckedChange={() => toggleAlgorithmType(type)}
                      />
                      <label
                        htmlFor={`algorithm-${type}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="data" className="space-y-2 pt-2">
                  {dataTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={`data-${type}`}
                        checked={selectedDataTypes.includes(type)}
                        onCheckedChange={() => toggleDataType(type)}
                      />
                      <label
                        htmlFor={`data-${type}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <Label>Themes</Label>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Learn more about themes</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">About Sorting</h4>
                      <p className="text-sm text-muted-foreground">
                        Themes are listed in order of relevance based on your past compliance submissions. Our AI
                        analyzes your submissions to identify common themes and regulatory concerns.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Risk factors, algorithm types, and data types are sorted by frequency of appearance across all
                        regulations, with the most common options listed first. This helps you focus on the most
                        prevalent regulatory requirements.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <div key={theme} className="flex items-center space-x-2">
                    <Checkbox
                      id={`theme-${theme}`}
                      checked={selectedThemes.includes(theme)}
                      onCheckedChange={() => toggleTheme(theme)}
                    />
                    <label
                      htmlFor={`theme-${theme}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {theme}
                      {themeRelevanceData[theme] > 50 && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                          Relevant
                        </span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulations List */}
        <div className="space-y-4">
          {sortedRegulations.length === 0 ? (
            <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <h3 className="text-lg font-medium">No regulations found</h3>
                <p className="text-sm text-muted-foreground">Try adjusting your filters or search term.</p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </div>
          ) : (
            sortedRegulations.map((regulation) => (
              <Card key={regulation.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{regulation.name}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div>{regulation.description}</div>
                        <div className="font-medium text-xs">Effective: {format(regulation.effectiveDate, "PPP")}</div>
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{regulation.region}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <ExpandButton regulation={regulation} />
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
