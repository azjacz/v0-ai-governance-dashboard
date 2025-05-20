import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegulationsLibraryGraphic } from "@/components/graphics/regulations-library-graphic"
import { CompliancePortalGraphic } from "@/components/graphics/compliance-portal-graphic"

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">AI Governance Dashboard</h1>
        <p className="text-muted-foreground">
          Navigate AI governance and compliance requirements with ease. Stay up-to-date with the latest regulations and
          assess your AI systems for compliance.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Regulations Library</CardTitle>
            <CardDescription>Browse and filter AI governance regulations by region, date, and themes.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            <div className="w-full h-[80px] flex items-center justify-center">
              <RegulationsLibraryGraphic />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/regulations">
                Browse Regulations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Compliance Portal</CardTitle>
            <CardDescription>Upload your AI use case details and get a compliance assessment.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            <div className="w-full h-[80px] flex items-center justify-center">
              <CompliancePortalGraphic />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/compliance">
                Assess Compliance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Recent Updates</h2>
        <Tabs defaultValue="regulations">
          <TabsList>
            <TabsTrigger value="regulations">New Regulations</TabsTrigger>
            <TabsTrigger value="guidance">Guidance Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="regulations" className="space-y-4 pt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">EU AI Act Enforcement Timeline Published</h3>
              <p className="text-sm text-muted-foreground">
                The European Commission has published the official enforcement timeline for the AI Act, with key
                provisions taking effect in stages.
              </p>
              <div className="mt-2 text-sm text-muted-foreground">May 10, 2025</div>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">US AI Executive Order Implementation Guidelines</h3>
              <p className="text-sm text-muted-foreground">
                Federal agencies have released implementation guidelines for the Executive Order on Safe, Secure, and
                Trustworthy AI.
              </p>
              <div className="mt-2 text-sm text-muted-foreground">May 5, 2025</div>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">UK AI Safety Institute Regulatory Framework</h3>
              <p className="text-sm text-muted-foreground">
                The UK AI Safety Institute has published its regulatory framework for high-risk AI systems.
              </p>
              <div className="mt-2 text-sm text-muted-foreground">April 28, 2025</div>
            </div>
          </TabsContent>
          <TabsContent value="guidance" className="space-y-4 pt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Updated Guidance on AI Risk Assessment</h3>
              <p className="text-sm text-muted-foreground">
                New guidance on conducting comprehensive risk assessments for AI systems has been released.
              </p>
              <div className="mt-2 text-sm text-muted-foreground">May 12, 2025</div>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Transparency Requirements Clarification</h3>
              <p className="text-sm text-muted-foreground">
                Regulatory bodies have issued clarifications on transparency requirements for AI systems.
              </p>
              <div className="mt-2 text-sm text-muted-foreground">May 8, 2025</div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
