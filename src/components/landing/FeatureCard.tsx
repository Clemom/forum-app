import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-left">
      <CardHeader>
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
