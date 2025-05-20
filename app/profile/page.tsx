import { Mail, Calendar, Shield, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
        {/* Profile Summary */}
        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">Jane Doe</CardTitle>
            <CardDescription>AI Compliance Officer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>jane.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Joined May 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span>Enterprise Plan</span>
            </div>
            <Separator />
            <Button variant="outline" className="w-full" asChild>
              <a href="#">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>View and manage your profile information and preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="activity">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              <TabsContent value="activity" className="space-y-4 pt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Compliance Assessment Completed</h3>
                  <p className="text-sm text-muted-foreground">
                    You completed a compliance assessment for "Customer Service AI Assistant".
                  </p>
                  <div className="mt-2 text-sm text-muted-foreground">May 10, 2025</div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Regulation Alert</h3>
                  <p className="text-sm text-muted-foreground">
                    New regulation alert: "EU AI Act Enforcement Timeline Published".
                  </p>
                  <div className="mt-2 text-sm text-muted-foreground">May 5, 2025</div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Risk Assessment Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    You updated the risk assessment for "Fraud Detection System".
                  </p>
                  <div className="mt-2 text-sm text-muted-foreground">April 28, 2025</div>
                </div>
              </TabsContent>
              <TabsContent value="submissions" className="pt-4">
                <div className="rounded-md border">
                  <div className="p-4 border-b">
                    <div className="font-medium">Customer Service AI Assistant</div>
                    <div className="text-sm text-muted-foreground">Submitted: May 1, 2025</div>
                    <div className="mt-1 text-sm">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        Partially Compliant
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-b">
                    <div className="font-medium">Fraud Detection System</div>
                    <div className="text-sm text-muted-foreground">Submitted: April 15, 2025</div>
                    <div className="mt-1 text-sm">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Compliant
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium">Product Recommendation Engine</div>
                    <div className="text-sm text-muted-foreground">Submitted: April 10, 2025</div>
                    <div className="mt-1 text-sm">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        Partially Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preferences" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Notification Preferences</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Regulation Updates</div>
                        <div className="text-xs text-muted-foreground">
                          Receive notifications about new and updated regulations
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Enabled
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Compliance Reminders</div>
                        <div className="text-xs text-muted-foreground">
                          Receive reminders about upcoming compliance deadlines
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Enabled
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Risk Alerts</div>
                        <div className="text-xs text-muted-foreground">Receive alerts about high-risk AI systems</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Enabled
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
