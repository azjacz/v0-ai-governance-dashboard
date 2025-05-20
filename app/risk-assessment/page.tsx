"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, CheckCircle2, Info, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export default function RiskAssessmentPage() {
  const [riskScore, setRiskScore] = useState(0)
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    aiType: "",
    usesPersonalData: "",
    autonomyLevel: "",
    impactLevel: 50,
    likelihoodLevel: 50,
  })

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }))

    // Calculate risk score when relevant fields change
    if (field === "impactLevel" || field === "likelihoodLevel") {
      calculateRiskScore({
        ...formState,
        [field]: value,
      })
    }
  }

  const calculateRiskScore = (state: typeof formState) => {
    // Simple risk calculation: impact * likelihood / 100
    const score = Math.round((state.impactLevel * state.likelihoodLevel) / 100)
    setRiskScore(score)
  }

  const getRiskLevel = (score: number) => {
    if (score < 25) return { level: "Low", color: "text-green-500" }
    if (score < 50) return { level: "Medium", color: "text-yellow-500" }
    if (score < 75) return { level: "High", color: "text-orange-500" }
    return { level: "Critical", color: "text-red-500" }
  }

  const riskInfo = getRiskLevel(riskScore)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Risk Assessment</h1>
        <p className="text-muted-foreground">Evaluate potential risks associated with your AI systems.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI System Details</CardTitle>
              <CardDescription>Provide information about your AI system to assess potential risks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">AI System Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter the name of your AI system"
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the purpose and functionality of your AI system"
                    value={formState.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aiType">AI Type</Label>
                  <Select value={formState.aiType} onValueChange={(value) => handleChange("aiType", value)}>
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

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="usesPersonalData">Does the system process personal data?</Label>
                  <RadioGroup
                    id="usesPersonalData"
                    value={formState.usesPersonalData}
                    onValueChange={(value) => handleChange("usesPersonalData", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="personal-data-yes" />
                      <Label htmlFor="personal-data-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="personal-data-no" />
                      <Label htmlFor="personal-data-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="autonomyLevel">Level of Autonomy</Label>
                  <Select
                    value={formState.autonomyLevel}
                    onValueChange={(value) => handleChange("autonomyLevel", value)}
                  >
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
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="impactLevel">Potential Impact Level</Label>
                    <span className="text-sm text-muted-foreground">{formState.impactLevel}%</span>
                  </div>
                  <Slider
                    id="impactLevel"
                    min={0}
                    max={100}
                    step={1}
                    value={[formState.impactLevel]}
                    onValueChange={(value) => handleChange("impactLevel", value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low Impact</span>
                    <span>High Impact</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="likelihoodLevel">Likelihood of Risk</Label>
                    <span className="text-sm text-muted-foreground">{formState.likelihoodLevel}%</span>
                  </div>
                  <Slider
                    id="likelihoodLevel"
                    min={0}
                    max={100}
                    step={1}
                    value={[formState.likelihoodLevel]}
                    onValueChange={(value) => handleChange("likelihoodLevel", value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Unlikely</span>
                    <span>Very Likely</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button">
                Save Assessment
              </Button>
              <Button type="button">
                Generate Full Risk Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Risk Score</CardTitle>
              <CardDescription>Preliminary risk assessment based on your inputs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-muted">
                  <div
                    className="absolute inset-0 rounded-full border-8"
                    style={{
                      borderColor:
                        riskScore < 25 ? "green" : riskScore < 50 ? "yellow" : riskScore < 75 ? "orange" : "red",
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - riskScore}%)`,
                    }}
                  />
                  <span className={`text-3xl font-bold ${riskInfo.color}`}>{riskScore}</span>
                </div>
                <div className="text-center">
                  <span className={`text-lg font-medium ${riskInfo.color}`}>{riskInfo.level} Risk</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                {riskScore >= 75 && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Critical Risk Level</AlertTitle>
                    <AlertDescription>
                      Your AI system has a critical risk level. Immediate mitigation measures are required.
                    </AlertDescription>
                  </Alert>
                )}

                {riskScore >= 50 && riskScore < 75 && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>High Risk Level</AlertTitle>
                    <AlertDescription>
                      Your AI system has a high risk level. Significant mitigation measures are required.
                    </AlertDescription>
                  </Alert>
                )}

                {riskScore >= 25 && riskScore < 50 && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Medium Risk Level</AlertTitle>
                    <AlertDescription>
                      Your AI system has a medium risk level. Some mitigation measures are recommended.
                    </AlertDescription>
                  </Alert>
                )}

                {riskScore < 25 && (
                  <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertTitle>Low Risk Level</AlertTitle>
                    <AlertDescription>
                      Your AI system has a low risk level. Basic mitigation measures are sufficient.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Factors</CardTitle>
              <CardDescription>Key risk factors to consider for your AI system.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Data Privacy</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Risks related to the processing of personal data, including data breaches and unauthorized access.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Bias and Fairness</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Risks related to algorithmic bias and unfair treatment of individuals or groups.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Transparency</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Risks related to the lack of transparency in AI decision-making processes.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Security</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Risks related to the security of AI systems, including vulnerabilities and attacks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
