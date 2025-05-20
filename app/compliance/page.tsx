"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Info, ShieldAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function CompliancePage() {
  const { toast } = useToast()
  const [riskScore, setRiskScore] = useState(50)
  const [impactLevel, setImpactLevel] = useState(50)
  const [likelihoodLevel, setLikelihoodLevel] = useState(50)

  const handleImpactChange = (value: number[]) => {
    setImpactLevel(value[0])
    calculateRiskScore(value[0], likelihoodLevel)
  }

  const handleLikelihoodChange = (value: number[]) => {
    setLikelihoodLevel(value[0])
    calculateRiskScore(impactLevel, value[0])
  }

  const calculateRiskScore = (impact: number, likelihood: number) => {
    // Simple risk calculation: impact * likelihood / 100
    const score = Math.round((impact * likelihood) / 100)
    setRiskScore(score)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/compliance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          impactLevel,
          likelihoodLevel,
          riskScore,
          // Add other form data here
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Assessment submitted",
          description: "Your AI risk assessment has been submitted successfully.",
        })

        // Redirect to results page
        window.location.href = data.redirectUrl || "/compliance/results"
      } else {
        toast({
          title: "Submission failed",
          description: data.error || "An error occurred while submitting your assessment.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "An error occurred while submitting your assessment.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Risk Assessment</h1>
        <p className="text-muted-foreground">Assess your AI system's compliance with relevant regulations.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>AI System Details</CardTitle>
            <CardDescription>Provide information about your AI system to assess compliance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">AI System Name</Label>
                  <Input id="name" name="name" placeholder="Enter the name of your AI system" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input id="version" name="version" placeholder="e.g., 1.0.0" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the purpose and functionality of your AI system"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="region">Primary Region of Operation</Label>
                  <Select name="region" required>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eu">European Union</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aiType">AI Type</Label>
                  <Select name="aiType" required>
                    <SelectTrigger id="aiType">
                      <SelectValue placeholder="Select AI type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="machine-learning">Machine Learning</SelectItem>
                      <SelectItem value="neural-network">Neural Network</SelectItem>
                      <SelectItem value="generative-ai">Generative AI</SelectItem>
                      <SelectItem value="computer-vision">Computer Vision</SelectItem>
                      <SelectItem value="nlp">Natural Language Processing</SelectItem>
                      <SelectItem value="recommendation-system">Recommendation System</SelectItem>
                      <SelectItem value="autonomous-system">Autonomous System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Data Usage */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Data Usage</h3>

              <div className="space-y-2">
                <Label htmlFor="dataTypes">Types of Data Processed</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="personal" name="dataTypes" value="personal" />
                    <Label htmlFor="personal" className="font-normal">
                      Personal Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sensitive" name="dataTypes" value="sensitive" />
                    <Label htmlFor="sensitive" className="font-normal">
                      Sensitive Personal Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="biometric" name="dataTypes" value="biometric" />
                    <Label htmlFor="biometric" className="font-normal">
                      Biometric Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location" name="dataTypes" value="location" />
                    <Label htmlFor="location" className="font-normal">
                      Location Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="financial" name="dataTypes" value="financial" />
                    <Label htmlFor="financial" className="font-normal">
                      Financial Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="health" name="dataTypes" value="health" />
                    <Label htmlFor="health" className="font-normal">
                      Health Data
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataSubjects">Data Subjects</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adults" name="dataSubjects" value="adults" />
                    <Label htmlFor="adults" className="font-normal">
                      Adults
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="children" name="dataSubjects" value="children" />
                    <Label htmlFor="children" className="font-normal">
                      Children
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vulnerable" name="dataSubjects" value="vulnerable" />
                    <Label htmlFor="vulnerable" className="font-normal">
                      Vulnerable Groups
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="employees" name="dataSubjects" value="employees" />
                    <Label htmlFor="employees" className="font-normal">
                      Employees
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Risk Assessment */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Risk Assessment</h3>

              <div className="space-y-2">
                <Label htmlFor="useCases">Use Cases</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="critical-infrastructure" name="useCases" value="critical-infrastructure" />
                    <Label htmlFor="critical-infrastructure" className="font-normal">
                      Critical Infrastructure
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="education" name="useCases" value="education" />
                    <Label htmlFor="education" className="font-normal">
                      Education
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="employment" name="useCases" value="employment" />
                    <Label htmlFor="employment" className="font-normal">
                      Employment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="law-enforcement" name="useCases" value="law-enforcement" />
                    <Label htmlFor="law-enforcement" className="font-normal">
                      Law Enforcement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="healthcare" name="useCases" value="healthcare" />
                    <Label htmlFor="healthcare" className="font-normal">
                      Healthcare
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="financial-services" name="useCases" value="financial-services" />
                    <Label htmlFor="financial-services" className="font-normal">
                      Financial Services
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="autonomyLevel">Level of Autonomy</Label>
                <Select name="autonomyLevel" required>
                  <SelectTrigger id="autonomyLevel">
                    <SelectValue placeholder="Select autonomy level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="human-in-loop">Human-in-the-Loop</SelectItem>
                    <SelectItem value="human-on-loop">Human-on-the-Loop</SelectItem>
                    <SelectItem value="human-out-of-loop">Human-out-of-the-Loop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="impactLevel">Potential Impact Level</Label>
                  <span className="text-sm text-muted-foreground">{impactLevel}%</span>
                </div>
                <Slider
                  id="impactLevel"
                  name="impactLevel"
                  min={0}
                  max={100}
                  step={1}
                  value={[impactLevel]}
                  onValueChange={handleImpactChange}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Low Impact</span>
                  <span>High Impact</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="likelihoodLevel">Likelihood of Risk</Label>
                  <span className="text-sm text-muted-foreground">{likelihoodLevel}%</span>
                </div>
                <Slider
                  id="likelihoodLevel"
                  name="likelihoodLevel"
                  min={0}
                  max={100}
                  step={1}
                  value={[likelihoodLevel]}
                  onValueChange={handleLikelihoodChange}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Unlikely</span>
                  <span>Very Likely</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert
                    className={`h-5 w-5 ${
                      riskScore < 25
                        ? "text-green-500"
                        : riskScore < 50
                          ? "text-yellow-500"
                          : riskScore < 75
                            ? "text-orange-500"
                            : "text-red-500"
                    }`}
                  />
                  <h3 className="font-medium">Preliminary Risk Score: {riskScore}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  This is a preliminary risk score based on your inputs. A more detailed assessment will be provided
                  after submission.
                </p>
              </div>
            </div>

            <Separator />

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Additional Information</h3>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Provide any additional information that may be relevant for compliance assessment"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="reset">
              Reset Form
            </Button>
            <Button type="submit">
              Submit for Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Resources to help you complete your assessment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Assessment Guidance</AlertTitle>
            <AlertDescription>
              Not sure how to complete this assessment? Check out our{" "}
              <Link href="/resources" className="font-medium underline underline-offset-4">
                guidance resources
              </Link>{" "}
              or{" "}
              <Link href="#" className="font-medium underline underline-offset-4">
                schedule a consultation
              </Link>{" "}
              with one of our experts.
            </AlertDescription>
          </Alert>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <h3 className="font-medium">View Past Assessments</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              You can view and manage your past assessments to track your compliance progress over time.
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/compliance/history">
                View Past Assessments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
