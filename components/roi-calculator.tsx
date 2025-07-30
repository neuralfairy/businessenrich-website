"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp } from "lucide-react"

export function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2)
  const [averageDealValue, setAverageDealValue] = useState(5000)
  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const currentRevenue = ((monthlyLeads * conversionRate) / 100) * averageDealValue * 12
    const improvedConversionRate = conversionRate * 1.85 // 85% improvement
    const improvedRevenue = ((monthlyLeads * improvedConversionRate) / 100) * averageDealValue * 12
    const additionalRevenue = improvedRevenue - currentRevenue
    const investmentCost = 50000 // Annual cost estimate
    const roi = ((additionalRevenue - investmentCost) / investmentCost) * 100

    return {
      currentRevenue,
      improvedRevenue,
      additionalRevenue,
      roi,
    }
  }

  const results = calculateROI()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Calculate Your Messaging Strategy ROI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate with optimized messaging strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <Calculator className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <CardTitle className="text-2xl text-navy-900">ROI Calculator</CardTitle>
              <CardDescription>Enter your current metrics to see potential improvements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="leads">Monthly Leads</Label>
                  <Input
                    id="leads"
                    type="number"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="conversion">Conversion Rate (%)</Label>
                  <Input
                    id="conversion"
                    type="number"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deal-value">Average Deal Value ($)</Label>
                  <Input
                    id="deal-value"
                    type="number"
                    value={averageDealValue}
                    onChange={(e) => setAverageDealValue(Number(e.target.value))}
                    className="text-center"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setShowResults(true)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-8 py-3"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Calculate ROI
                </Button>
              </div>

              {showResults && (
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Your Potential Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-600 mb-1">
                        ${results.currentRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Current Annual Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        ${results.improvedRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Improved Annual Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        ${results.additionalRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Additional Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{results.roi.toFixed(0)}%</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                      Start Your Transformation
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
