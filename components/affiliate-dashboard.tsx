"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AffiliateLink } from "@/lib/affiliate"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { TrendingUp, DollarSign, MousePointer, Target, ExternalLink } from "lucide-react"

// Mock data - in real app this would come from database
const mockAffiliateLinks: AffiliateLink[] = [
  {
    id: "1",
    productId: "expressvpn",
    provider: "ExpressVPN",
    url: "https://expressvpn.com/?ref=globalcompare",
    commission: 35,
    trackingCode: "expressvpn_1_tracking",
    isActive: true,
    clickCount: 1250,
    conversionCount: 89,
    revenue: 2847.5,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-15"),
  },
  {
    id: "2",
    productId: "nordvpn",
    provider: "NordVPN",
    url: "https://nordvpn.com/?ref=globalcompare",
    commission: 30,
    trackingCode: "nordvpn_2_tracking",
    isActive: true,
    clickCount: 980,
    conversionCount: 67,
    revenue: 2010.0,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-15"),
  },
  {
    id: "3",
    productId: "chase-sapphire",
    provider: "Chase",
    url: "https://chase.com/sapphire?ref=globalcompare",
    commission: 150,
    trackingCode: "chase_3_tracking",
    isActive: true,
    clickCount: 456,
    conversionCount: 23,
    revenue: 3450.0,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-15"),
  },
]

export function AffiliateDashboard() {
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>(mockAffiliateLinks)
  const [selectedPeriod, setSelectedPeriod] = useState<"7d" | "30d" | "90d">("30d")

  const totalRevenue = affiliateLinks.reduce((sum, link) => sum + link.revenue, 0)
  const totalClicks = affiliateLinks.reduce((sum, link) => sum + link.clickCount, 0)
  const totalConversions = affiliateLinks.reduce((sum, link) => sum + link.conversionCount, 0)
  const averageConversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0

  const chartData = affiliateLinks.map((link) => ({
    name: link.provider,
    clicks: link.clickCount,
    conversions: link.conversionCount,
    revenue: link.revenue,
    conversionRate: link.clickCount > 0 ? (link.conversionCount / link.clickCount) * 100 : 0,
  }))

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalConversions}</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageConversionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="links">Affiliate Links</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Provider</CardTitle>
                <CardDescription>Monthly revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rates</CardTitle>
                <CardDescription>Conversion rate by provider</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="conversionRate" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Links Management</CardTitle>
              <CardDescription>Manage your affiliate links and track performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {affiliateLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{link.provider}</h3>
                        <Badge variant={link.isActive ? "default" : "secondary"}>
                          {link.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Commission: {link.commission}% | Clicks: {link.clickCount} | Conversions: {link.conversionCount}
                      </p>
                      <p className="text-sm font-medium text-green-600">Revenue: ${link.revenue.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Detailed performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Top Performing Links</h4>
                  <div className="space-y-2">
                    {affiliateLinks
                      .sort((a, b) => b.revenue - a.revenue)
                      .slice(0, 3)
                      .map((link, index) => (
                        <div key={link.id} className="flex items-center justify-between text-sm">
                          <span>
                            #{index + 1} {link.provider}
                          </span>
                          <span className="font-medium">${link.revenue.toLocaleString()}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Best Conversion Rates</h4>
                  <div className="space-y-2">
                    {affiliateLinks
                      .sort((a, b) => b.conversionCount / b.clickCount - a.conversionCount / a.clickCount)
                      .slice(0, 3)
                      .map((link, index) => (
                        <div key={link.id} className="flex items-center justify-between text-sm">
                          <span>
                            #{index + 1} {link.provider}
                          </span>
                          <span className="font-medium">
                            {((link.conversionCount / link.clickCount) * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Recent Activity</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• 15 new clicks in the last hour</p>
                    <p>• 3 conversions today</p>
                    <p>• $450 revenue this week</p>
                    <p>• 2 new affiliate links added</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
