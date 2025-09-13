import { AffiliateDashboard } from "@/components/affiliate-dashboard"

export default function AffiliateAdminPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Affiliate Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your affiliate marketing performance</p>
        </div>

        <AffiliateDashboard />
      </div>
    </div>
  )
}
