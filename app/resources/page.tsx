import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Globe, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Legal Resources</h1>
        <p className="text-muted-foreground">Access legal resources and guidance on AI governance and compliance.</p>
      </div>

      <Tabs defaultValue="regulations">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="regulations">Regulations</TabsTrigger>
          <TabsTrigger value="guidance">Guidance</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="experts">Expert Network</TabsTrigger>
        </TabsList>

        <TabsContent value="regulations" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>EU AI Act</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Comprehensive regulation for artificial intelligence systems in the European Union.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>July 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>European Union</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>US Executive Order on AI</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Executive order establishing guidelines for the development and use of AI in the United States.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>United States</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>UK AI Safety Framework</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Framework for ensuring the safety of AI systems in the United Kingdom.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>May 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>United Kingdom</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>China AI Governance Regulations</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Regulations governing the development and deployment of AI systems in China.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>January 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>China</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Canada Artificial Intelligence and Data Act</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Legislation governing AI systems and data use in Canada.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>September 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>Canada</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Singapore AI Governance Framework</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Framework for the responsible use of AI in Singapore.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>Enacted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span>April 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span>Singapore</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    View Full Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="guidance" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Risk Assessment Guide</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Comprehensive guide for conducting AI risk assessments.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This guide provides a step-by-step approach to identifying, assessing, and mitigating risks associated
                  with AI systems.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Transparency Best Practices</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Best practices for ensuring transparency in AI systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This guide provides best practices for ensuring transparency in AI systems, including documentation,
                  explainability, and communication.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Governance Framework</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Framework for establishing AI governance within organizations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This framework provides guidance for establishing AI governance within organizations, including roles,
                  responsibilities, and processes.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Framework
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Ethics Guidelines</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Guidelines for ethical development and use of AI systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These guidelines provide principles and practices for the ethical development and use of AI systems,
                  addressing issues such as fairness, accountability, and transparency.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Guidelines
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Documentation Standards</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Standards for documenting AI systems for compliance purposes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These standards provide guidance for documenting AI systems for compliance purposes, including system
                  design, development, testing, and deployment.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Standards
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Compliance Checklist</CardTitle>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Checklist for ensuring compliance with AI regulations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This checklist provides a comprehensive list of requirements for ensuring compliance with AI
                  regulations, including documentation, testing, and monitoring.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Impact Assessment Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for conducting AI impact assessments.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to assessing the impact of AI systems on individuals,
                  organizations, and society.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Risk Management Plan Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for developing AI risk management plans.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to developing risk management plans for AI systems,
                  including risk identification, assessment, and mitigation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Documentation Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for documenting AI systems for compliance purposes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to documenting AI systems for compliance purposes,
                  including system design, development, testing, and deployment.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Governance Policy Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for developing AI governance policies.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to developing AI governance policies, including roles,
                  responsibilities, and processes.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Ethics Framework Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for developing AI ethics frameworks.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to developing AI ethics frameworks, including principles,
                  practices, and governance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>AI Compliance Report Template</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Template for preparing AI compliance reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This template provides a structured approach to preparing AI compliance reports, including assessment
                  methodology, findings, and recommendations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Download Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="experts" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Legal Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with legal experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of legal experts can provide guidance on AI governance and compliance, including
                  regulatory requirements, risk assessment, and documentation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Legal Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Technical Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with technical experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of technical experts can provide guidance on AI governance and compliance, including
                  system design, development, testing, and deployment.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Technical Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Ethics Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with ethics experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of ethics experts can provide guidance on AI governance and compliance, including ethical
                  principles, practices, and governance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Ethics Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Policy Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with policy experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of policy experts can provide guidance on AI governance and compliance, including
                  regulatory requirements, policy development, and implementation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Policy Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Risk Management Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with risk management experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of risk management experts can provide guidance on AI governance and compliance, including
                  risk identification, assessment, and mitigation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Risk Management Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Compliance Experts</CardTitle>
                  <Scale className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Connect with compliance experts specializing in AI governance and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our network of compliance experts can provide guidance on AI governance and compliance, including
                  regulatory requirements, documentation, and reporting.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    Find Compliance Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
