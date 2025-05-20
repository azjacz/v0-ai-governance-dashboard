"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertCircle, ArrowLeft, CheckCircle2, Download, FileText, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample data for past submissions - in a real app, this would come from a database
const pastSubmissions = [
  {
    id: "SUB-001",
    name: "Customer Service AI Assistant",
    description: "AI assistant that handles customer service inquiries and requests",
    submissionDate: new Date("2025-05-01"),
    status: "Partially Compliant",
    score: 78,
    aiType: "nlp",
    region: "European Union",
    usesPersonalData: "yes",
    dataTypes: "basic",
    riskLevel: "high",
    autonomyLevel: "human-in-loop",
    sector: "consumer",
    impactLevel: 70,
    likelihoodLevel: 60,
    riskScore: 42,
  },
  {
    id: "SUB-002",
    name: "Fraud Detection System",
    description: "Machine learning system that detects fraudulent transactions",
    submissionDate: new Date("2025-04-15"),
    status: "Compliant",
    score: 92,
    aiType: "machine-learning",
    region: "United States",
    usesPersonalData: "yes",
    dataTypes: "financial",
    riskLevel: "high",
    autonomyLevel: "human-on-loop",
    sector: "finance",
    impactLevel: 85,
    likelihoodLevel: 40,
    riskScore: 34,
  },
]

// Sample data for compliance results
const complianceResults = {
  overallScore: 78,
  status: "Partially Compliant",
  summary:
    "Your AI system is partially compliant with relevant regulations. There are several areas that require attention to achieve full compliance.",
  applicableLaws: [
    {
      id: 1,
      name: "EU AI Act",
      compliance: "partial",
      score: 75,
      details:
        "Your system is classified as high-risk under the EU AI Act. While you have implemented many required measures, there are gaps in documentation and transparency requirements.",
      requirements: [
        { name: "Risk Management", status: "compliant" },
        { name: "Data Quality", status: "non-compliant" },
        { name: "Technical Documentation", status: "partial" },
        { name: "Human Oversight", status: "compliant" },
        { name: "Accuracy and Robustness", status: "partial" },
      ],
    },
    {
      id: 2,
      name: "GDPR",
      compliance: "partial",
      score: 80,
      details:
        "Your AI system processes personal data and is subject to GDPR. While you have implemented data protection measures, there are gaps in data minimization and purpose limitation.",
      requirements: [
        { name: "Lawful Basis", status: "compliant" },
        { name: "Data Minimization", status: "non-compliant" },
        { name: "Purpose Limitation", status: "partial" },
        { name: "Data Subject Rights", status: "compliant" },
        { name: "Data Protection Impact Assessment", status: "compliant" },
      ],
    },
    {
      id: 3,
      name: "US Executive Order on AI",
      compliance: "compliant",
      score: 90,
      details:
        "Your AI system is largely compliant with the US Executive Order on AI. You have implemented appropriate safety and security measures.",
      requirements: [
        { name: "Safety Standards", status: "compliant" },
        { name: "Security Measures", status: "compliant" },
        { name: "Privacy Protections", status: "compliant" },
        { name: "Risk Management", status: "compliant" },
        { name: "Transparency", status: "partial" },
      ],
    },
  ],
  recommendations: [
    "Improve data quality management by implementing a comprehensive data governance framework.",
    "Enhance technical documentation to include detailed information about system design, development, and testing.",
    "Implement stronger data minimization practices to ensure compliance with GDPR.",
    "Improve transparency measures to provide clear information about system capabilities and limitations.",
    "Conduct regular audits of your AI system to ensure ongoing compliance.",
  ],
}

export default function ComplianceResultsPage() {
  const searchParams = useSearchParams()
  const submissionId = searchParams.get("id")
  const [loading, setLoading] = useState(true)
  const [submission, setSubmission] = useState<any>(null)

  useEffect(() => {
    // In a real app, this would be an API call to fetch the submission data
    const fetchSubmission = async () => {
      setLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        if (submissionId) {
          const foundSubmission = pastSubmissions.find((sub) => sub.id === submissionId)
          if (foundSubmission) {
            setSubmission(foundSubmission)
          }
        }
      } catch (error) {
        console.error("Error fetching submission:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSubmission()
  }, [submissionId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!submission && submissionId) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Submission Not Found</h1>
        <p className="text-muted-foreground mb-6">The submission you're looking for could not be found.</p>
        <Button asChild>
          <Link href="/compliance/history">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Submissions
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compliance Assessment Results</h1>
          <p className="text-muted-foreground">Analysis of your AI system's compliance with relevant regulations.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/compliance?id=${submissionId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Edit Assessment
            </Link>
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Summary</CardTitle>
              <CardDescription>
                Overall assessment of your AI system's compliance with relevant regulations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-muted">
                  <div
                    className="absolute inset-0 rounded-full border-8 border-primary"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - complianceResults.overallScore}%)`,
                    }}
                  />
                  <span className="text-3xl font-bold">{complianceResults.overallScore}%</span>
                </div>
                <div className="text-center">
                  <Badge
                    variant={
                      complianceResults.status === "Compliant"
                        ? "default"
                        : complianceResults.status === "Partially Compliant"
                          ? "warning"
                          : "destructive"
                    }
                    className={
                      complianceResults.status === "Partially Compliant"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-yellow-200"
                        : ""
                    }
                  >
                    {complianceResults.status}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-center text-muted-foreground">{complianceResults.summary}</p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Key Findings</h3>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Multiple Regulations Apply</AlertTitle>
                  <AlertDescription>
                    Your AI system is subject to multiple regulations based on its functionality and the data it
                    processes.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Data Quality Issues</AlertTitle>
                  <AlertDescription>
                    Your AI system has data quality issues that need to be addressed to achieve compliance.
                  </AlertDescription>
                </Alert>
                <Alert variant="default">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Strong Risk Management</AlertTitle>
                  <AlertDescription>Your AI system has a strong risk management framework in place.</AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applicable Regulations</CardTitle>
              <CardDescription>
                Detailed assessment of your AI system's compliance with specific regulations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={complianceResults.applicableLaws[0].id.toString()}>
                <TabsList className="grid w-full grid-cols-3">
                  {complianceResults.applicableLaws.map((law) => (
                    <TabsTrigger key={law.id} value={law.id.toString()}>
                      {law.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {complianceResults.applicableLaws.map((law) => (
                  <TabsContent key={law.id} value={law.id.toString()} className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{law.name}</h3>
                        <p className="text-sm text-muted-foreground">Compliance Score: {law.score}%</p>
                      </div>
                      <Badge
                        variant={
                          law.compliance === "compliant"
                            ? "default"
                            : law.compliance === "partial"
                              ? "warning"
                              : "destructive"
                        }
                        className={
                          law.compliance === "partial"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-yellow-200"
                            : ""
                        }
                      >
                        {law.compliance === "compliant"
                          ? "Compliant"
                          : law.compliance === "partial"
                            ? "Partially Compliant"
                            : "Non-Compliant"}
                      </Badge>
                    </div>
                    <Progress value={law.score} className="h-2" />
                    <p className="text-sm text-muted-foreground">{law.details}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Requirements</h4>
                      <div className="space-y-2">
                        {law.requirements.map((req, index) => (
                          <div key={index} className="flex items-center justify-between rounded-md border p-2">
                            <span className="text-sm">{req.name}</span>
                            <Badge
                              variant={
                                req.status === "compliant"
                                  ? "default"
                                  : req.status === "partial"
                                    ? "warning"
                                    : "destructive"
                              }
                              className={
                                req.status === "partial"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-yellow-200"
                                  : ""
                              }
                            >
                              {req.status === "compliant"
                                ? "Compliant"
                                : req.status === "partial"
                                  ? "Partially Compliant"
                                  : "Non-Compliant"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Recommended actions to improve your AI system's compliance.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {complianceResults.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary p-1">
                      <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Compliance Improvement Plan</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI System Profile</CardTitle>
              <CardDescription>Summary of your AI system's characteristics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">System Name</h3>
                <p className="text-sm text-muted-foreground">{submission?.name || "Customer Service AI Assistant"}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">AI Type</h3>
                <p className="text-sm text-muted-foreground">
                  {submission?.aiType === "nlp"
                    ? "Natural Language Processing"
                    : submission?.aiType === "machine-learning"
                      ? "Machine Learning"
                      : submission?.aiType || "Natural Language Processing"}
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Region</h3>
                <p className="text-sm text-muted-foreground">{submission?.region || "European Union"}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Risk Level</h3>
                <p className="text-sm text-muted-foreground">
                  {submission?.riskLevel === "high"
                    ? "High Risk"
                    : submission?.riskLevel === "limited"
                      ? "Limited Risk"
                      : submission?.riskLevel === "minimal"
                        ? "Minimal Risk"
                        : submission?.riskLevel === "unacceptable"
                          ? "Unacceptable Risk"
                          : "High Risk"}
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Data Types</h3>
                <p className="text-sm text-muted-foreground">
                  {submission?.usesPersonalData === "yes"
                    ? submission?.dataTypes === "basic"
                      ? "Basic Personal Data"
                      : submission?.dataTypes === "financial"
                        ? "Financial Data"
                        : submission?.dataTypes || "Personal Data"
                    : "No Personal Data"}
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Sector</h3>
                <p className="text-sm text-muted-foreground">
                  {submission?.sector === "consumer"
                    ? "Consumer"
                    : submission?.sector === "finance"
                      ? "Finance"
                      : submission?.sector || "Customer Service"}
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Risk Score</h3>
                <p className="text-sm text-muted-foreground">{submission?.riskScore || 42}/100</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>Recommended actions to improve compliance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Documentation Review</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Review and update your technical documentation to address gaps identified in the assessment.
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  Schedule Review
                </Button>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Data Quality Audit</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Conduct a comprehensive audit of your data quality management practices.
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  Schedule Audit
                </Button>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Compliance Consultation</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule a consultation with our compliance experts to discuss your assessment results.
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
