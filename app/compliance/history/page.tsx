"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Edit, Eye, Filter, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { format } from "date-fns"

// Custom styles for warning badge
const warningBadgeClass = "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-yellow-200"

// Sample data for past submissions
const pastSubmissions = [
  {
    id: "SUB-001",
    name: "Customer Service AI Assistant",
    submissionDate: new Date("2025-05-01"),
    status: "Partially Compliant",
    score: 78,
    aiType: "Natural Language Processing",
    region: "European Union",
    riskScore: 42,
  },
  {
    id: "SUB-002",
    name: "Fraud Detection System",
    submissionDate: new Date("2025-04-15"),
    status: "Compliant",
    score: 92,
    aiType: "Machine Learning",
    region: "United States",
    riskScore: 34,
  },
  {
    id: "SUB-003",
    name: "Product Recommendation Engine",
    submissionDate: new Date("2025-04-10"),
    status: "Partially Compliant",
    score: 75,
    aiType: "Recommendation System",
    region: "Global",
    riskScore: 51,
  },
  {
    id: "SUB-004",
    name: "Autonomous Delivery Robot",
    submissionDate: new Date("2025-03-28"),
    status: "Non-Compliant",
    score: 45,
    aiType: "Autonomous System",
    region: "European Union",
    riskScore: 78,
  },
  {
    id: "SUB-005",
    name: "Medical Diagnosis Assistant",
    submissionDate: new Date("2025-03-15"),
    status: "Compliant",
    score: 95,
    aiType: "Machine Learning",
    region: "United Kingdom",
    riskScore: 22,
  },
]

export default function ComplianceHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [regionFilter, setRegionFilter] = useState("all")

  // Filter submissions based on search term and filters
  const filteredSubmissions = pastSubmissions.filter((submission) => {
    // Search term filter
    if (
      searchTerm &&
      !submission.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !submission.id.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && submission.status !== statusFilter) {
      return false
    }

    // Region filter
    if (regionFilter !== "all" && submission.region !== regionFilter) {
      return false
    }

    return true
  })

  // Get unique regions for filter
  const regions = Array.from(new Set(pastSubmissions.map((s) => s.region)))

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Compliant":
        return "default" // Blue (primary color)
      case "Partially Compliant":
        return "warning" // Yellow
      case "Non-Compliant":
        return "destructive" // Red
      default:
        return "secondary"
    }
  }

  // Get risk score badge variant
  const getRiskBadgeVariant = (score: number) => {
    if (score < 25) return "default" // Blue (low risk)
    if (score < 50) return "secondary" // Gray (medium-low risk)
    if (score < 75) return "warning" // Yellow (medium-high risk)
    return "destructive" // Red (high risk)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Past Assessments</h1>
          <p className="text-muted-foreground">View and manage your previous AI risk assessments.</p>
        </div>
        <Button asChild>
          <Link href="/compliance">
            New Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter your compliance submissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or ID..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-[200px]">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Compliant">Compliant</SelectItem>
                  <SelectItem value="Partially Compliant">Partially Compliant</SelectItem>
                  <SelectItem value="Non-Compliant">Non-Compliant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-[200px]">
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Region" />
                  </div>
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
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assessment History</CardTitle>
          <CardDescription>
            {filteredSubmissions.length} assessment{filteredSubmissions.length !== 1 ? "s" : ""} found.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredSubmissions.length === 0 ? (
            <div className="flex h-[200px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Calendar className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No assessments found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We couldn't find any assessments matching your criteria. Try adjusting your filters or create a new
                  assessment.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/compliance">New Assessment</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Risk Score</TableHead>
                    <TableHead>AI Type</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.id}</TableCell>
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{format(submission.submissionDate, "MMM d, yyyy")}</TableCell>
                      <TableCell>
                        <Badge
                          variant={getStatusBadgeVariant(submission.status)}
                          className={getStatusBadgeVariant(submission.status) === "warning" ? warningBadgeClass : ""}
                        >
                          {submission.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{submission.score}%</TableCell>
                      <TableCell>
                        <Badge
                          variant={getRiskBadgeVariant(submission.riskScore)}
                          className={getRiskBadgeVariant(submission.riskScore) === "warning" ? warningBadgeClass : ""}
                        >
                          {submission.riskScore}
                        </Badge>
                      </TableCell>
                      <TableCell>{submission.aiType}</TableCell>
                      <TableCell>{submission.region}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <span className="sr-only">Open menu</span>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                              >
                                <path
                                  d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                              <Link href={`/compliance/results?id=${submission.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Results
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/compliance?id=${submission.id}`}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Assessment
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
