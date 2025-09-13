// ... existing code ...

const hostingFAQs = [
  {
    category: "High-Traffic & Performance",
    questions: [
      {
        question: "What is the best hosting for high-traffic sites?",
        answer: "For sites with 100,000+ monthly visitors, choose: Cloudways (scalable cloud hosting from $10/month), Kinsta (managed WordPress starting at $30/month), SiteGround (Enterprise plan for 500K+ visitors). These providers offer dedicated resources, enterprise-grade security, and 24/7 expert support."
      }
    ]
  },
  {
    category: "Cost & Value",
    questions: [
      {
        question: "Are cheap hosting providers reliable?",
        answer: "Some budget hosts like Hostinger ($1.99/month) offer decent reliability for small sites, but avoid providers under $2/month. They often oversell servers, causing slow speeds and frequent downtime. For critical sites, invest in $5-$10/month plans from trusted providers."
      },
      {
        question: "Do hosting providers offer money-
              <p className="text-xl text-gray-600 mb-8">
                Find answers to all your questions about VPNs, credit cards, hosting, SEO tools, insurance, and money transfers. Our comprehensive FAQ covers 300+ questions across all categories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  300+ Questions
                </Badge>
              </div>
              </div>
              </div>

// Insurance FAQ'ya ek kategoriler ekleniyor
const finalInsuranceFAQs = [
  {
    category: "Cost & Deductibles",
    questions: [
      {
        question: "How much does travel insurance cost?",
        answer: "Travel insurance typically costs 4-8% of your total trip cost. For a $2,000 trip, expect to pay $80-$160. SafetyWing offers monthly plans starting at $36 for digital nomads, while World Nomads charges $50-$100 for a 2-week trip."
      },
      {
        question: "Do travel insurance policies have deductibles?",
        answer: "Yes, most policies have deductibles (out-of-pocket costs before coverage kicks in). Typical deductibles range from $50-$500. For example, Allianz Travel Insurance offers plans with $100-$500 deductibles. Higher deductibles usually mean lower premiums."
      },
      {
        question: "Are there travel insurance policies with no deductibles?",
        answer: "Yes, some premium policies like World Nomads and AXA offer plans with $0 deductibles for medical coverage. These typically cost 10-20% more than standard policies but provide full coverage from the first dollar."
      },
      {
        question: "How do I choose the right deductible for travel insurance?",
        answer: "Choose deductibles based on: Your risk tolerance (higher deductible = lower premium), Your trip cost (deductible should be 5-10% of trip cost), Your medical needs (higher deductible for non-essential coverage), Your credit card benefits (if covered by card, choose higher deductible), Your travel history (frequent travelers may choose higher deductibles). For most travelers, a $100-$250 deductible provides good balance between cost and coverage."
      }
    ]
  },
  {
    category: "Home & Auto Insurance",
    questions: [
      {
        question: "What is home insurance and why do I need it?",
        answer: "Home insurance protects your house and belongings from damage or theft. You need it because: Mortgage lenders require it, It covers fire, theft, vandalism, and natural disasters, It provides liability protection if someone gets injured on your property, It covers temporary housing if your home is uninhabitable, It protects valuable items like jewelry and electronics. Top providers include State Farm, Allstate, and Geico."
      },
      {
        question: "What is auto insurance and why do I need it?",
        answer: "Auto insurance protects you from financial loss in case of accidents, theft, or damage to your vehicle. You need it because: It's legally required in all 50 states, It covers medical expenses for you and others involved in accidents, It covers damage to your vehicle or others' property, It provides liability protection if you're at fault, It covers rental cars and towing services. Top providers include Progressive, Geico, and State Farm."
      }
    ]
  },
  {
    category: "International & Expat Insurance",
    questions: [
      {
        question: "What is the best health insurance for expats?",
        answer: "Cigna Global is best for expats with: Coverage in 200+ countries, Direct billing to hospitals worldwide, Medical evacuation coverage, Mental health coverage, Customizable plans for families, 24/7 multilingual support. Perfect for Americans living abroad or expats moving to new countries."
      },
      {
        question: "What is the best travel insurance for seniors?",
        answer: "Allianz Travel Insurance offers senior-specific plans with: Coverage for pre-existing conditions (after waiting period), Higher medical coverage limits, Emergency medical evacuation, Trip cancellation coverage, 24/7 emergency assistance, Specialized support for senior travel needs. Ideal for travelers over 65 with comprehensive protection."
      }
    ]
  },
  {
    category: "Specialized Travel Insurance",
    questions: [
      {
        question: "How do I get the best travel insurance rates?",
        answer: "Get the best rates by: Booking insurance early (within 14 days of trip deposit), Comparing multiple providers, Choosing higher deductibles, Skipping unnecessary coverage (e.g., rental car insurance if covered by credit card), Bundling home/auto insurance, Using group discounts (if traveling with family), Paying annually instead of monthly for long-term plans."
      },
      {
        question: "What is the best travel insurance for cruise trips?",
        answer: "Allianz Travel Insurance is best for cruises with: Coverage for missed connections to ship, Trip interruption coverage if ship is delayed, Medical coverage for onboard emergencies, Baggage delay coverage, Coverage for cruise-specific issues (port cancellations), 24/7 cruise-specific assistance. Allianz understands the unique risks of cruise travel."
      },
      {
        question: "How do I know if my credit card offers travel insurance?",
        answer: "Check your card's benefits guide for: Trip cancellation/interruption insurance, Baggage delay/loss coverage, Rental car insurance, Emergency medical evacuation, Travel accident insurance. Premium cards like Chase Sapphire Reserve and Amex Platinum offer comprehensive travel insurance benefits."
      },
      {
        question: "What is the best travel insurance for backpackers?",
        answer: "World Nomads is best for backpackers with: Coverage for adventure activities (hiking, diving, trekking), Medical coverage up to $1 million, Emergency evacuation to major hospitals, No upper limit on medical expenses, 24/7 emergency assistance, Coverage for equipment loss/damage. Perfect for budget travelers engaging in outdoor adventures."
      }
    ]
  },
  {
    category: "Special Conditions & Situations",
    questions: [
      {
        question: "How do I get travel insurance for pre-existing conditions?",
        answer: "Get coverage for pre-existing conditions by: Choosing a policy that includes pre-existing condition coverage (e.g., SafetyWing), Meeting the waiting period requirement (typically 6-12 months), Disclosing all pre-existing conditions when applying, Getting a doctor's note confirming stability, Paying for the 'pre-existing condition waiver' if required, Purchasing insurance within 14 days of trip deposit. Always read the fine print carefully."
      },
      {
        question: "What is the best travel insurance for students?",
        answer: "World Nomads is best for students with: Affordable plans for long-term travel, Coverage for study abroad programs, Medical coverage up to $1 million, Emergency evacuation coverage, 24/7 emergency assistance, Coverage for adventure activities, No age restrictions. Perfect for students traveling abroad for semester programs or gap years."
      },
      {
        question: "How do I know if my travel insurance covers me for natural disasters?",
        answer: "Check your policy for: Trip cancellation due to natural disasters, Trip interruption coverage for natural disasters, Medical coverage during natural disasters, Emergency evacuation coverage during disasters, Coverage for damaged baggage during disasters. Most comprehensive policies like Allianz and World Nomads include natural disaster coverage as standard."
      },
      {
        question: "What is the best travel insurance for business trips?",
        answer: "AXA Travel Insurance is best for business trips with: Coverage for business equipment and laptops, Trip cancellation for business-related reasons, Medical coverage for business travel emergencies, 24/7 business travel assistance, Coverage for missed connections due to business meetings, Rental car insurance for business travel. Perfect for professionals traveling for work with comprehensive protection."
      },
      {
        question: "How do I get travel insurance for high-risk countries?",
        answer: "Get coverage for high-risk countries by: Choosing a provider that covers high-risk destinations (e.g., World Nomads), Purchasing specialized high-risk travel insurance, Ensuring your policy includes emergency evacuation from conflict zones, Getting coverage for political unrest and terrorism, Choosing a provider with 24/7 crisis support, Confirming your policy covers specific high-risk activities. Always verify coverage details before traveling."
      },
      {
        question: "What is the best travel insurance for families with children?",
        answer: "Allianz Travel Insurance offers family plans with: Coverage for up to 4 children under 18, Medical coverage up to $1 million per person, Trip cancellation coverage up to $10,000, 24/7 emergency assistance, Coverage for lost or stolen children's items, Specialized support for family travel needs. Perfect for families traveling together with comprehensive protection."
      },
      {
        question: "How do I get travel insurance for pregnancy?",
        answer: "Get pregnancy coverage by: Choosing a policy that covers pregnancy-related issues (e.g., Allianz), Purchasing insurance before 28 weeks of pregnancy, Getting a doctor's note confirming fitness to travel, Ensuring coverage for emergency delivery and newborn care, Checking coverage limits for pregnancy complications, Verifying coverage for trip cancellation due to pregnancy complications. Most standard policies exclude pregnancy after 24-28 weeks."
      },
      {
        question: "What is the best travel insurance for seniors over 70?",
        answer: "Allianz Travel Insurance offers senior-specific plans with: Coverage for pre-existing conditions (after waiting period), Higher medical coverage limits, Emergency medical evacuation, Trip cancellation coverage, 24/7 emergency assistance, Specialized support for senior travel needs. Ideal for travelers over 65 with comprehensive protection."
      },
      {
        question: "How do I get travel insurance for chronic conditions?",
        answer: "Get coverage for chronic conditions by: Choosing a policy that covers chronic conditions (e.g., SafetyWing), Meeting the waiting period requirement (typically 6-12 months), Disclosing all chronic conditions when applying, Getting a doctor's note confirming stability, Paying for the 'chronic condition waiver' if required, Purchasing insurance within 14 days of trip deposit. Always read the fine print carefully."
      },
      {
        question: "What is the best travel insurance for adventure sports?",
        answer: "World Nomads is best for adventure sports with: Coverage for hiking, scuba diving, skiing, and other high-risk activities, Medical coverage up to $1 million, Emergency evacuation to specialized facilities, No upper limit on medical expenses, 24/7 emergency assistance, Coverage for equipment loss/damage. Perfect for travelers engaging in extreme sports and outdoor adventures."
      },
      {
        question: "How do I get travel insurance for remote work?",
        answer: "Get coverage for remote work by: Choosing a digital nomad plan like SafetyWing, Ensuring coverage for business equipment and laptops, Getting medical coverage for work-related injuries, Verifying coverage for remote work visas, Checking coverage for work-related trip cancellations, Confirming coverage for data breaches and cyber attacks. Most standard travel insurance doesn't cover work-related issues."
      },
      {
        question: "What is the best travel insurance for international students?",
        answer: "World Nomads is best for international students with: Coverage for study abroad programs, Medical coverage up to $1 million, Emergency evacuation coverage, 24/7 emergency assistance, Coverage for adventure activities, No age restrictions. Perfect for students traveling abroad for semester programs or gap years."
      },
      {
        question: "How do I get travel insurance for group trips?",
        answer: "Get group travel insurance by: Purchasing a group policy from providers like Allianz, Ensuring coverage for all group members, Verifying coverage for group-specific issues (e.g., missed connections), Checking coverage limits for group travel, Getting group discounts for larger parties, Confirming coverage for group activities and excursions. Most providers offer special rates for groups of 10+ travelers."
      }
    ]
  }
]

// Insurance TabsContent'i güncelleyin (tüm kategorileri birleştirin)
const allInsuranceFAQs = [...completeInsuranceFAQs, ...finalInsuranceFAQs]

              <TabsContent value="insurance">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      🛡️ Insurance – Complete FAQ Guide (2025 Edition)
                    </h2>
                    <p className="text-lg text-gray-600">
                      Everything you need to know about insurance - 50+ expert answers
                    </p>
                  </div>
                  
                  {allInsuranceFAQs.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-xl text-orange-900">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem key={faqIndex} value={`insurance-item-${categoryIndex}-${faqIndex}`}>
                              <AccordionTrigger className="text-left">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  300+ Questions
                </Badge>
              </div>
              </div>
              </div>